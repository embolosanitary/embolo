import { motion } from "framer-motion";
import { Ruler, Wrench, Truck, HeadphonesIcon, Sparkles, Package } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
const theme = "#1A5F5F"; // Base brand color

const services = [
 {
  icon: Ruler,
  title: " Manufacturing",
  description: "Expertly crafted washbasin cabinets combining modern design, premium materials, and precision manufacturing for lasting quality.",
},

  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert installation services ensuring perfect fitting and optimal functionality.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Swift and secure delivery to your location with careful handling of all products.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you with any queries or concerns.",
  },
  {
    icon: Sparkles,
    title: "Maintenance Services",
    description: "Regular maintenance and care services to keep your bathroom looking pristine.",
  },
  {
    icon: Package,
    title: "Warranty Coverage",
    description: "Comprehensive warranty coverage on all products for complete peace of mind.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-12 pb-14 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "#1A5F5F20" }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "#1A5F5F20" }}
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 rounded-full border"
              style={{
                borderColor: "#1A5F5F40",
                background: "linear-gradient(to right, #1A5F5F20, #1A5F5F10)",
              }}
            >
              <span className="font-semibold" style={{ color: theme }}>
                Premium Services
              </span>
            </motion.div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #ffffff, #7FCFCF, #2F9D9D)",
                }}
              >
                Transform Your
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #1A5F5F, #2F9D9D)",
                }}
              >
                Experience
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive solutions crafted with precision and care
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(26,95,95,0.05), transparent 50%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              What We{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #1A5F5F, #2F9D9D)",
                }}
              >
                Deliver
              </span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              Six pillars of excellence for your complete satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative h-full p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden hover:border-[#1A5F5F50] transition-all duration-300">
                    <div
                      className="absolute inset-0 transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(to bottom right, rgba(26,95,95,0), rgba(26,95,95,0))",
                      }}
                    />

                    <div className="relative z-10">
                      <div
                        className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background:
                            "linear-gradient(to bottom right, rgba(26,95,95,0.2), rgba(47,157,157,0.2))",
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: theme }} />
                      </div>

                      <h3
                        className="text-2xl font-bold mb-4 text-white group-hover:transition-colors"
                        style={{ color: "white" }}
                      >
                        {service.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, black, rgba(26,95,95,0.05), black)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #1A5F5F, #2F9D9D)",
                }}
              >
                Journey Together
              </span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto">
              From vision to reality in four seamless steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            <div
              className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5"
              style={{
                background:
                  "linear-gradient(to right, rgba(26,95,95,0.3), rgba(47,157,157,0.5), rgba(26,95,95,0.3))",
              }}
            />

            {[
              { step: "01", title: "Consultation", desc: "Share your vision with our experts" },
              { step: "02", title: "Design", desc: "Custom solutions tailored for you" },
              { step: "03", title: "Production", desc: "Precision crafting and quality control" },
              { step: "04", title: "Installation", desc: "Flawless execution by professionals" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center relative"
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-full relative group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: "linear-gradient(to bottom right, #1A5F5F80, #2F9D9D80)",
                    }}
                  />
                  <div
                    className="relative w-full h-full rounded-full flex items-center justify-center shadow-2xl"
                    style={{
                      background: "linear-gradient(to bottom right, #1A5F5F, #2F9D9D)",
                    }}
                  >
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(26,95,95,0.1), rgba(47,157,157,0.1), rgba(26,95,95,0.1))",
            backgroundSize: "200% 200%",
          }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-xl md:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-base text-gray-400 mb-10">
              Let's bring your dream bathroom to life
            </p>
            <Link to="/Contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-full text-white font-semibold text-sm shadow-2xl transition-shadow"
              style={{
                background: "linear-gradient(to right, #1A5F5F, #2F9D9D)",
                boxShadow: "0 0 20px rgba(26,95,95,0.5)",
              }}
            >
              Schedule Consultation
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
