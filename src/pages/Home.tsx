import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { 
  Sparkles, 
  Palette, 
  Bath,
  Award,
  Palette as PaletteIcon,
  Truck,
  Shield,
  ChevronRight,
  Star,
  Quote,
  LucideIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";

import "swiper/css";
import manufacturingImg from "@/assets/modern-luxury-bathroom-interior .jpg";
import whatsappIcon from "@/assets/whatsapp.icon.png";
import { Link } from "react-router-dom";

// ProductCard Component
interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ProductCard = ({ icon: Icon, title, description, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(26, 95, 95, 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 p-4 rounded-xl bg-gradient-to-br from-[#1A5F5F]/20 to-[#1A5F5F]/5 backdrop-blur-sm border border-[#1A5F5F]/20"
        >
          <Icon className="w-8 h-8 text-[#1A5F5F]" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#1A5F5F] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
};

// FeatureCard Component
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-xl p-6 backdrop-blur-lg bg-white/5 border border-white/10 hover:border-[#1A5F5F]/30 transition-all duration-300 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-[#1A5F5F]/20 via-[#2FA5A5]/20 to-[#1A5F5F]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
        style={{ zIndex: -1 }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#1A5F5F]/20 to-[#1A5F5F]/5 backdrop-blur-sm border border-[#1A5F5F]/20 mx-auto"
        >
          <Icon className="w-8 h-8 text-[#1A5F5F]" />
        </motion.div>

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#1A5F5F] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm">
          {description}
        </p>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1A5F5F]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#1A5F5F]/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

// TestimonialCard Component
interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full shadow-xl hover:shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(26, 95, 95, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(26, 95, 95, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(26, 95, 95, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-block mb-4 p-3 rounded-lg bg-[#1A5F5F]/10 backdrop-blur-sm border border-[#1A5F5F]/20"
        >
          <Quote className="w-6 h-6 text-[#1A5F5F]" />
        </motion.div>

        <p className="text-gray-300 mb-6 leading-relaxed italic">
          "{content}"
        </p>

        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring" }}
            >
              <Star className="w-5 h-5 fill-[#1A5F5F] text-[#1A5F5F]" />
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />

        <div>
          <h4 className="text-white font-bold text-lg group-hover:text-[#1A5F5F] transition-colors duration-300">
            {name}
          </h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1A5F5F]/5 to-transparent rounded-bl-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#1A5F5F]/5 to-transparent rounded-tr-full opacity-50" />
    </motion.div>
  );
};

// Data
const products = [
  {
  icon: Palette,
  title: "Washbasin Cabinet",
  description: "We specialize in manufacturing premium washbasin cabinets—crafted with precision, modern design, and superior durability.",
},
{
    icon: Bath,
    title: "Sanitaryware",
    description: "Comprehensive sanitaryware solutions for modern bathrooms, ensuring quality and durability.",
  },
    {
    icon: Sparkles,
    title: "LED Mirror",
    description: "Illuminate your space with our premium LED mirrors featuring advanced lighting technology and elegant designs.",
  },
];

const features = [
  { icon: Award, title: "Premium Quality", description: "Top-grade materials ensuring lasting excellence" },
  { icon: PaletteIcon, title: "Custom Design", description: "Tailored solutions for your unique vision" },
  { icon: Truck, title: "Fast Delivery", description: "Swift and secure delivery to your location" },
  { icon: Shield, title: "Durability", description: "Built to last with superior craftsmanship" },
];

const testimonials = [
  { name: "Sarah ", role: "", content: "The quality and design of these products exceeded our expectations. Perfect for luxury projects!", rating: 5 },
  { name: "Amal", role: "", content: "Transformed our bathroom into a spa-like retreat. The LED mirrors are absolutely stunning!", rating: 5 },
  { name: "Mujeeb", role: "", content: "Professional service and exceptional craftsmanship. Highly recommend for premium projects.", rating: 5 },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroCarousel />

      {/* Products Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Premium <span className="bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5] bg-clip-text text-transparent">Collection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our range of luxury bathroom solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.title} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
<section className="py-20 bg-black overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center pl-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Washbasin Cabinet
          <span className="bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5] bg-clip-text text-transparent">
            {" "}Manufacturing Excellence
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          We specialize in crafting premium washbasin cabinets that blend modern aesthetics 
          with durable functionality. Each piece is designed to elevate your bathroom experience 
          while offering unmatched practicality.
        </p>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          From selecting the finest materials to precision cutting and finishing, 
          our expert team ensures every cabinet reflects superior craftsmanship and 
          lasting quality.
        </p>
        {/* <Link to="/Services">
          <Button
            size="lg"
            className="bg-[#1A5F5F] text-white shadow-[0_0_30px_rgba(26,95,95,0.4)] hover:shadow-[0_0_40px_rgba(26,95,95,0.6)] transition-all duration-300"
          >
            Learn More
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(26,95,95,0.3)]">
          <img
            src={manufacturingImg}
            alt="Washbasin Cabinet Manufacturing"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A5F5F]/30 via-[#1A5F5F]/10 to-transparent opacity-30" />
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Choose <span className="bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5] bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Excellence in every aspect of our service
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              What Our <span className="bg-gradient-to-r from-[#1A5F5F] to-[#2FA5A5] bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by houseowners and professionals alike
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </section>

      <Footer />
      <a
  href="https://wa.me/919400694311?text=Hello%20I%20am%20interested%20in%20your%20product%20details"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
>
  <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14" />
</a>
    </div>
  );
};

export default Home;
