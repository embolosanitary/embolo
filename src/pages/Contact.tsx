import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "MR Building,Maloram,Kozhikode",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "9400694311",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "bestwaytradingco@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-12 pb-24 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 -left-40 w-96 h-96 bg-[#1A5F5F]/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-96 h-96 bg-[#1A5F5F]/20 rounded-full blur-3xl"
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
              className="inline-block mb-6 px-6 py-2 rounded-full bg-[#1A5F5F]/10 border border-[#1A5F5F]/30"
            >
              <span className="text-[#1A5F5F] font-semibold">Let's Connect</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-[#4BA9A9] to-[#1A5F5F] bg-clip-text text-transparent">
                Get In
              </span>{" "}
              <span className="bg-gradient-to-r from-[#1A5F5F] via-[#357777] to-[#4BA9A9] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              We'd love to hear from you. Let's create something amazing together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,95,95,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl shadow-2xl hover:border-[#1A5F5F]/40 transition-all duration-300"
              >
                <motion.div
                  className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1A5F5F] to-[#357777] flex items-center justify-center shadow-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="font-semibold text-lg mb-2 text-white">{info.title}</h3>
                <p className="text-gray-400 text-sm">{info.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-300"> Name</label>
                      <Input placeholder="your name" required className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                    </div>
                    
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-300">Email</label>
                    <Input type="email" placeholder="youremail@example.com" required className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-300">Phone</label>
                    <Input type="tel" placeholder="phone number" className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-300">Subject</label>
                    <Input placeholder="How can we help you?" required className="bg-white/5 border-white/10 text-white placeholder:text-gray-500" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-300">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your project..."
                      rows={5}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
  <Button
    onClick={() => {
      const phoneNumber = "9400694311"; // 👉 replace with your WhatsApp number (with country code, no '+' or spaces)
      const message = "Hi, I’d like to know more about your products."; // default message
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    }}
    className="w-full bg-gradient-to-r from-[#1A5F5F] to-[#357777] text-white shadow-2xl hover:shadow-[#1A5F5F]/50 text-lg py-6"
  >
    Send Message
  </Button>
</motion.div>

                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
             <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl h-full">
  <div className="relative h-full min-h-[500px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.365392518294!2d75.9579772!3d11.4488958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6693375048c0d%3A0x53834d75690b8789!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1730899009873!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="absolute inset-0"
    />
  </div>
</div>

            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
