import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/embolo-logo-white.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50  ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="w-28 sm:w-36 md:w-40 flex-shrink-0 pt-8">
            <Link to="/">
              <img src={logo} alt="Logo" className="object-contain" />
            </Link>
          </div>

          {/* Toggle Button */}
          <button
            className="p-2 rounded-lg bg-[#1A5F5F] text-white hover:bg-[#157272] transition-colors shadow-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/50 z-40"
              />

              {/* Navigation Panel */}
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-80 bg-[#0E2F2F] border-l border-[#1A5F5F]/30 shadow-xl z-50"
              >
                <div className="flex flex-col h-full p-6">
                  {/* Header with close button */}
                  <div className="flex items-center justify-between mb-8 text-white">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg hover:bg-[#1A5F5F]/20 transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Navigation Items */}
                  <div className="space-y-2 flex-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                          isActive(item.path)
                            ? "bg-[#1A5F5F] text-white shadow-md"
                            : "text-gray-300 hover:text-white hover:bg-[#1A5F5F]/20"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Footer small tagline */}
                  <div className="mt-auto pt-6 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Embolo Sanitaryware</p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
