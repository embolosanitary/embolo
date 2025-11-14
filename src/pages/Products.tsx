// src/pages/Products.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Sparkles, Filter } from "lucide-react";
import { supabase } from "@/supabaseClient";

const categories = ["All", "Washbasins", "Cabinets", "Sanitaryware", "Designer Table Top", "LED Mirrors"];

type ProductFromDB = {
  id: number;
  name: string;
  description: string;
  size: string;
  category: string | null;
  price: string | null;
  image_url: string | null;
};

// ✅ Fallback products (6 sample items)
const fallbackProducts = [
  { 
    id: 1, 
    name: "Washbasine", 
    description: "ELTT-428", 
    size: "540*360*140", 
    category: "Washbasins", 
    price: "8400/-", 
    image_url: "/products/products-01.jpeg" 
  },
  { 
    id: 2, 
    name: "washbasine cabinet", 
    description: "EL 2048 M", 
    size: "Cabinet (24”x 18” x 16”)", 
    category: "Cabinets", 
    price: "13000/- ", 
    image_url: "/products/0D6A8587.jpg" 
  },
  { 
    id: 3, 
    name: "Washbasine", 
    description:"ELTT-614", 
    size: "540*350*145", 
    category: "Washbasins", 
    price: "9300/-", 
    image_url: "/products/products-03.jpeg" 
  },
  { 
    id: 4, 
    name: "Washbasine", 
    description: "ELTT-6040", 
    size: "600*400*120", 
    category: "Washbasins", 
    price: "7900/-", 
    image_url: "/products/products-04.jpeg" 
  },
   { 
    id: 5, 
    name: "washbasine cabinet", 
    description: "EL 5023 M", 
    size: "Cabinet (32”x 18” x 32”) ", 
    category: "Cabinets", 
    price: "20500/- ", 
    image_url: "/products/0D6A8615.jpg" 
  },
  { 
    id: 6, 
    name: "washbasine cabinet", 
    description: "EL 5022 M", 
    size: "Cabinet (32”x 18” x 32”)  ", 
    category: "Cabinets", 
    price: " 20500/- ", 
    image_url: "/products/0D6A8627.jpg" 
  },
    { 
    id: 7, 
    name: "Designer Table Top", 
    description: "ELTT-428", 
    size: "540*360*140", 
    category: "Designer Table Top", 
    price: "8400/-", 
    image_url: "/products/products-04.jpeg" 
  },
  { 
    id: 8, 
    name: "Designer Table Top", 
    description: "ELTT-6004", 
    size: "480*370*130", 
    category: "Designer Table Top", 
    price: "6100/- ", 
    image_url: "/products/products-05.jpeg" 
  },
  { 
    id: 9, 
    name: "Designer Table Top", 
    description:"ELTT-614", 
    size: "540*350*145", 
    category: "Designer Table Top", 
    price: "9300/-", 
    image_url: "/products/products-06.jpeg" 
  },

    { 
    id: 10, 
    name: "LUNAR", 
    description: "LUNAR", 
    size: "670 X 370 X 739mm ", 
    category: "Sanitaryware", 
    price: "10800/-", 
    image_url: "/products/sanitary-01.jpg" 
  },
   { 
    id: 11, 
    name: "NEXO", 
    description: "NEXO", 
    size: "670 X 360 X 715 mm", 
    category: "Sanitaryware", 
    price: "10600/- ", 
    image_url: "/products/sanitary-02.jpg" 
  },
  { 
    id: 12, 
    name: "SCOP", 
    description: "SCOP", 
    size: " 670 X 360 X725  ", 
    category: "Sanitaryware", 
    price: " 10600/- ", 
    image_url: "/products/sanitary-03.jpg" 
  },
];


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState<ProductFromDB[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Updated fetchProducts with fallback logic
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from<ProductFromDB>("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error);
        setProducts(fallbackProducts);
      } else if (!data || data.length === 0) {
        setProducts(fallbackProducts);
      } else {
        setProducts(data);
      }
    } catch (err) {
      console.error(err);
      setProducts(fallbackProducts);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A5F5F]/20 via-black to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A5F5F]/20 border border-[#1A5F5F]/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#2FA5A5]" />
              <span className="text-sm text-[#2FA5A5] font-medium">Premium Collection</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5]">Products</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Discover our exquisite range of premium bathroom solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-black/50 backdrop-blur-sm sticky top-0 z-40 border-b border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <div className="flex items-center gap-2 text-[#2FA5A5] mr-4">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">Filter:</span>
            </div>

            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5] text-white shadow-lg shadow-[#1A5F5F]/50"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {loading ? (
            <p className="text-gray-400 text-center py-12">Loading...</p>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + "-" + products.length}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.06, type: "spring" }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden rounded-3xl border-0 backdrop-blur-xl bg-white/5  border-white/10 hover:border-[#1A5F5F]/40 transition-all duration-500 h-full shadow-2xl hover:shadow-[#1A5F5F]/30">
                     <div className="relative h-80 overflow-hidden bg-black flex items-center justify-center">
  <img
    src={product.image_url ?? "/fallback-product.jpg"}
    alt={product.name}
    className="w-full h-full object-contain"
  />
</div>


                      <div className="p-6 relative">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1A5F5F] transition-colors duration-300">
                          {product.name}
                        </h3>

                        <div className="h-1 bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5] rounded-full mb-4 shadow-lg shadow-[#1A5F5F]/40" />

                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-[#2FA5A5] font-medium bg-white/5 px-2 py-1 rounded-lg">
                            {product.category}
                          </span>
                          <span className="text-lg font-semibold text-[#1A5F5F]">₹{product.price}</span>
                        </div>

                        <p className="text-gray-400 text-sm mb-2">MODEL-NO : {product.description}</p>
                       <p className="text-gray-400 text-sm whitespace-pre-line">
  SIZE : {product.size}
</p>

                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
