import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/embolo-logo-white.png";
const Footer = () => {
  return (
    <footer className="bg-[#0E2F2F] border-t border-white/10 py-12 relative overflow-hidden">
      {/* Gradient background using #1A5F5F tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A5F5F]/20 to-[#0E2F2F]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
           <div className="w-28 sm:w-36 md:w-30 flex-shrink-0 ">
                       <Link to="/">
                         <img src={logo} alt="Logo" className="object-contain" />
                       </Link>
                     </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Crafting premium bathroom solutions with precision and passion since our inception.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/17qPnhj2Fh/" className="text-gray-400 hover:text-[#1A5F5F] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              
              <a href="https://www.instagram.com/embolo_sanitary?igsh=MTM5M3cwbWpjdnBjZA==" className="text-gray-400 hover:text-[#1A5F5F] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#1A5F5F] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#1A5F5F] transition-colors">About</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-[#1A5F5F] transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#1A5F5F] transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-gray-400">
              
              <li className="hover:text-[#1A5F5F] transition-colors">Washbasins</li>
              <li className="hover:text-[#1A5F5F] transition-colors">Color Basins</li>
              <li className="hover:text-[#1A5F5F] transition-colors">Cabinets</li>
              <li className="hover:text-[#1A5F5F] transition-colors">Sanitaryware</li>
              <li className="hover:text-[#1A5F5F] transition-colors">LED Mirrors</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>MR Building,Narukumchal,</li>
              <li>Maloram,Kozhikode</li>
              <li className="pt-2">9400694311</li>
              <li>bestwaytradingco@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500">
<p>
  &copy; {new Date().getFullYear()} Designed and developed by{" "}
  <a
    href="https://share.google/kG9i46KNtSIhMD8xr"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#2FA5A5] hover:underline hover:text-[#1A5F5F] transition-colors"
  >
    Aione Spark TechHive LLP
  </a>{" "}

</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
