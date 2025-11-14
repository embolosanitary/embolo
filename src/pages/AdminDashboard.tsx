// components/AdminDashboard.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, LogOut, Upload, X } from "lucide-react";
import { supabase } from "@/supabaseClient";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
   size: string;
  price: string;
  image: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    name: "",
    description: "",
    category: "LED Mirrors",
    size:"",
    price: "",
    image: ""
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    localStorage.removeItem("adminToken");
    
    if (onLogout) {
      onLogout();
    }
    
    navigate("/admin");
  };

  // Supabase-ൽ നിന്ന് products ഫെച്ച് ചെയ്യുക
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        const formattedProducts = data?.map(product => ({
          ...product,
          image: product.image_url || ""
        })) || [];
        setProducts(formattedProducts);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Supabase-ൽ ഇമേജ് അപ്‌ലോഡ് ചെയ്യുന്ന ഫംഗ്ഷൻ
  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const addProduct = async () => {
    if (!newProduct.name || !newProduct.description || !newProduct.price) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      let imageUrl = newProduct.image;

      if (imageFile) {
        const uploadedUrl = await uploadImage(imageFile);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      }

      const { data, error } = await supabase
        .from("products")
        .insert([
          {
            name: newProduct.name,
            description: newProduct.description,
            category: newProduct.category,
            size: newProduct.size, 
            price: newProduct.price,
            image_url: imageUrl
          }
        ])
        .select();

      if (error) {
        console.error("Error adding product:", error);
        alert("Error adding product: " + error.message);
        return;
      }

      if (data && data[0]) {
        const productWithImage = {
          ...data[0],
          image: data[0].image_url || ""
        };
        const updatedProducts = [...products, productWithImage];
        setProducts(updatedProducts);
        
        setNewProduct({
          name: "",
          description: "",
          category: "LED Mirrors",
          size: "", 
          price: "",
          image: ""
        });
        setImageFile(null);
        setIsAddingProduct(false);
        
        alert("Product added successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async () => {
    if (!editingProduct) return;

    setLoading(true);
    try {
      let imageUrl = editingProduct.image;

      if (imageFile) {
        const uploadedUrl = await uploadImage(imageFile);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      }

      const { error } = await supabase
        .from("products")
        .update({
          name: editingProduct.name,
          description: editingProduct.description,
          category: editingProduct.category,
          price: editingProduct.price,
          image_url: imageUrl
        })
        .eq("id", editingProduct.id);

      if (error) {
        console.error("Error updating product:", error);
        alert("Error updating product: " + error.message);
        return;
      }

      const updatedProducts = products.map(p => 
        p.id === editingProduct.id ? { ...editingProduct, image: imageUrl } : p
      );
      
      setProducts(updatedProducts);
      setEditingProduct(null);
      setImageFile(null);
      
      alert("Product updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating product");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product: " + error.message);
        return;
      }

      const updatedProducts = products.filter(p => p.id !== id);
      setProducts(updatedProducts);
      
      alert("Product deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error deleting product");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      if (editingProduct) {
        setEditingProduct(prev => prev ? { ...prev, image: imageUrl } : null);
      } else {
        setNewProduct(prev => ({ ...prev, image: imageUrl }));
      }
    }
  };

  return (
    <div className="min-h-screen bg-black p-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <div className="text-center w-full">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your products</p>
        </div>
        <Button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </motion.div>

      {/* Add Product Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <Button
          onClick={() => setIsAddingProduct(true)}
          className="bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5] text-white"
          disabled={loading}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Product
        </Button>
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-4">
          <p className="text-gray-400">Loading...</p>
        </div>
      )}

      {/* Add/Edit Product Modal */}
      {(isAddingProduct || editingProduct) && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-white/10"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>
              <Button
                variant="ghost"
                onClick={() => {
                  setIsAddingProduct(false);
                  setEditingProduct(null);
                  setImageFile(null);
                }}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-3 text-sm">
  {/* Product Name */}
  <div>
    <label className="block font-medium text-gray-300 mb-1">Product Name</label>
    <input
      type="text"
      value={editingProduct ? editingProduct.name : newProduct.name}
      onChange={(e) =>
        editingProduct
          ? setEditingProduct({ ...editingProduct, name: e.target.value })
          : setNewProduct({ ...newProduct, name: e.target.value })
      }
      className="w-full p-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#1A5F5F]"
      placeholder="Enter product name"
    />
  </div>

  {/* Category & Price Row */}
  <div className="grid grid-cols-2 gap-2">
    <div>
      <label className="block font-medium text-gray-300 mb-1">Category</label>
      <select
        value={editingProduct ? editingProduct.category : newProduct.category}
        onChange={(e) =>
          editingProduct
            ? setEditingProduct({ ...editingProduct, category: e.target.value })
            : setNewProduct({ ...newProduct, category: e.target.value })
        }
        className="w-full p-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#1A5F5F]"
      >
        <option value="LED Mirrors">LED Mirrors</option>
        <option value="Washbasins">Washbasins</option>
        <option value="Cabinets">Cabinets</option>
        <option value="Sanitaryware">Sanitaryware</option>
        <option value="Designer Table Top">Designer Table Top</option>
      </select>
    </div>

    <div>
      <label className="block font-medium text-gray-300 mb-1">Price</label>
      <input
        type="text"
        value={editingProduct ? editingProduct.price : newProduct.price}
        onChange={(e) =>
          editingProduct
            ? setEditingProduct({ ...editingProduct, price: e.target.value })
            : setNewProduct({ ...newProduct, price: e.target.value })
        }
        className="w-full p-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#1A5F5F]"
        placeholder="₹0000"
      />
    </div>
  </div>

  {/* Model No */}
  <div>
    <label className="block font-medium text-gray-300 mb-1">Model No</label>
    <textarea
      value={editingProduct ? editingProduct.description : newProduct.description}
      onChange={(e) =>
        editingProduct
          ? setEditingProduct({ ...editingProduct, description: e.target.value })
          : setNewProduct({ ...newProduct, description: e.target.value })
      }
      rows={2}
      className="w-full p-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#1A5F5F]"
      placeholder="Enter product model no"
    />
    
  </div>

  {/* Size */}
  <div>
    <label className="block font-medium text-gray-300 mb-1">Size</label>
    <textarea
      value={editingProduct ? editingProduct.size : newProduct.size}
      onChange={(e) =>
        editingProduct
          ? setEditingProduct({ ...editingProduct, size: e.target.value })
          : setNewProduct({ ...newProduct, size: e.target.value })
      }
      rows={2}
      className="w-full p-2 bg-black/50 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#1A5F5F]"
      placeholder="Enter product size"
    />
  </div>

  {/* Image Upload */}
  <div>
    <label className="block font-medium text-gray-300 mb-1">Product Image</label>
    <div className="border-2 border-dashed border-white/10 rounded-lg p-3 text-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        id="image-upload"
      />
      <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center text-xs text-gray-400">
        <Upload className="w-5 h-5 mb-1" />
        {imageFile || editingProduct?.image ? "Image selected" : "Click to upload"}
      </label>
    </div>
    {(newProduct.image || editingProduct?.image) && (
      <div className="mt-1 flex justify-center">
        <img
          src={editingProduct ? editingProduct.image : newProduct.image}
          alt="Preview"
          className="w-12 h-12 object-cover rounded-lg"
        />
      </div>
    )}
  </div>

  {/* Action Buttons */}
  <div className="flex gap-2 pt-1">
    <Button
      onClick={editingProduct ? updateProduct : addProduct}
      className="flex-1 bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5] text-white text-sm"
      disabled={loading}
    >
      {loading ? "Processing..." : editingProduct ? "Update" : "Add Product"}
    </Button>
    <Button
      onClick={() => {
        setIsAddingProduct(false);
        setEditingProduct(null);
        setImageFile(null);
      }}
      variant="outline"
      className="flex-1 border-white/10 text-white bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5] text-sm"
      disabled={loading}
    >
      Cancel
    </Button>
  </div>
</div>

          </motion.div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#1A5F5F]/40 transition-all duration-300">
              <div className="relative h-48">
                <img
                  src={product.image || "/fallback-product.jpg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button
                    onClick={() => setEditingProduct(product)}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={loading}
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button
                    onClick={() => deleteProduct(product.id)}
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white"
                    disabled={loading}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{product.category}</p>
                <p className="text-lg font-bold text-[#1A5F5F]">₹{product.price}</p>
                <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {products.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 text-lg">No products added yet</p>
          <p className="text-gray-500 text-sm mt-2">
            Click "Add New Product" to get started
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default AdminDashboard;