import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Users,
  TrendingUp,
  Sparkles,
  Award,
  Zap,
  ArrowRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ourStoryImg from "../assets/product-02.jpg";
import { Link } from "react-router-dom";
const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every detail crafted to perfection",
    gradient: "from-[#1A5F5F] to-[#218B8B]",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Love for what we create drives us",
    gradient: "from-[#218B8B] to-[#1A5F5F]",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority",
    gradient: "from-[#1A5F5F] to-[#218B8B]",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Constantly evolving and improving",
    gradient: "from-[#218B8B] to-[#1A5F5F]",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-8 pb-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,95,95,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(26,95,95,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating Teal Orb */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-[#1A5F5F]/20 to-[#218B8B]/20"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#1A5F5F]/10 to-[#218B8B]/10 border border-[#1A5F5F]/30"
            >
              <Sparkles className="w-3 h-3 text-[#1A5F5F]" />
              <span className="text-[#1A5F5F] font-medium text-sm">Our Story</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none">
              About{" "}
              <span className="bg-gradient-to-r from-[#1A5F5F] to-[#218B8B] bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-sm md:text-xl text-white/60 max-w-3xl mx-auto font-light">
              Crafting Excellence in Sanitaryware Since Our Inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
<section className="py-32 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6"
        >
          
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight pl-6">
       
          <span className="bg-gradient-to-r from-[#1A5F5F] to-[#218B8B] bg-clip-text text-transparent">
            Washbasin Cabinet Manufacturing
          </span>
        </h2>

       <div className="space-y-6 pl-6 text-white/70">
  <p>
    Inspired by a passion to redefine bathroom spaces, we specialize in
    <span className="text-white font-semibold"> washbasin cabinet manufacturing</span>
    that blends design innovation with everyday functionality.
  </p>
  <p>
    Every piece is crafted with precision, using premium materials and modern techniques
    to ensure lasting strength and refined aesthetics.
  </p>
  <p>
    Our commitment to quality and craftsmanship transforms ordinary bathrooms
    into elegant, functional spaces that stand the test of time.
  </p>
</div>


        {/* <div className="flex justify-center">
          <Link to="/Services">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="mt-6 group flex items-center gap-2 pl-8 pr-6 py-3 rounded-full bg-gradient-to-r from-[#1A5F5F] to-[#218B8B] text-white text-sm font-semibold shadow-md hover:shadow-[#1A5F5F]/50 transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div> */}
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src={ourStoryImg}
            alt="Washbasin Cabinet Manufacturing"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A5F5F]/20 to-transparent" />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute bottom-6 left-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#1A5F5F] to-[#218B8B]">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-base md:text-2xl font-bold text-white">10+</p>
                <p className="text-sm md:text-base text-white/70">
                  Years of Excellence
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Values */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1A5F5F]/10 to-[#218B8B]/10 border border-[#1A5F5F]/20">
                <span className="text-[#1A5F5F] font-semibold md:text-sm">
                  What Drives Us
                </span>
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#1A5F5F] to-[#218B8B] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-base text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:border-[#1A5F5F]/40 transition-all duration-300">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {value.description}
                    </p>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl bg-gradient-to-r from-[#1A5F5F]/20 to-[#218B8B]/20"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Manufacturing{" "}
              <span className="bg-gradient-to-r from-[#1A5F5F] to-[#218B8B] bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-base text-white/60 max-w-4xl mx-auto leading-relaxed">
              Our cutting-edge manufacturing facility is equipped with the latest
              technology and operated by skilled craftsmen who bring decades of experience
              to every product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                number: "6K+",
                label: "Products Delivered",
                icon: Zap,
                gradient: "from-[#1A5F5F] to-[#218B8B]",
              },
              {
                number: "160+",
                label: "Happy Clients",
                icon: Heart,
                gradient: "from-[#218B8B] to-[#1A5F5F]",
              },
              {
                number: "10+",
                label: "Years Experience",
                icon: Award,
                gradient: "from-[#1A5F5F] to-[#218B8B]",
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:border-[#1A5F5F]/40 transition-all">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.gradient} mb-6 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <motion.h3
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                      }}
                      className={`text-2xl md:text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`}
                    >
                      {stat.number}
                    </motion.h3>

                    <p className="text-base text-white/70 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
