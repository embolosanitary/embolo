import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
const faqs = [
  {
    question: "What materials are used in your products?",
    answer: "We use premium-grade ceramics, tempered glass, and stainless steel in our products. All materials are sourced from certified suppliers and undergo strict quality checks.",
  },
  {
    question: "Do you offer custom designs?",
    answer: "Yes! We specialize in creating custom bathroom solutions tailored to your specific requirements. Our design team works closely with you to bring your vision to life.",
  },
  {
    question: "What is the warranty period for your products?",
    answer: "All our products come with a comprehensive 5-year warranty covering manufacturing defects. LED mirrors include an additional 2-year warranty on electrical components.",
  },
  {
    question: "How long does delivery take?",
    answer: "Standard products are typically delivered within 7-10 business days. Custom orders may take 3-4 weeks depending on the complexity of the design.",
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes, we offer professional installation services across all major cities. Our certified installers ensure perfect fitting and functionality.",
  },
  {
    question: "Can I visit your showroom?",
    answer: "Absolutely! We welcome visitors to our showroom where you can see our products firsthand. Please contact us to schedule an appointment.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and digital payment platforms. We also offer flexible payment plans for larger orders.",
  },
  {
    question: "How do I maintain LED mirrors?",
    answer: "LED mirrors require minimal maintenance. Simply clean with a soft, damp cloth and avoid harsh chemicals. Detailed care instructions are provided with each product.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-12 pb-24 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 -left-40 w-96 h-96 bg-[#1A5F5F]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-96 h-96 bg-[#1A5F5F]/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-[#1A5F5F]/10 border border-[#1A5F5F]/30"
            >
              <span className="text-[#1A5F5F] font-semibold md:text-base">Got Questions?</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-[#6BCAC1] to-[#1A5F5F] bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#1A5F5F] via-[#378E8E] to-[#6BCAC1] bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Find answers to common questions about our products and services
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,95,95,0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-white/10 rounded-xl px-6 backdrop-blur-xl bg-white/5 shadow-2xl hover:border-[#1A5F5F]/50 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[#1A5F5F]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold mb-4 text-white">Still have questions?</h3>
              <p className="text-gray-400 mb-6 text-lg">
                Can't find the answer you're looking for? Our team is here to help!
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                 <Link to="/Contact">
                <button className="px-8 py-3 bg-[#1A5F5F] text-white font-semibold rounded-lg shadow-2xl hover:shadow-[#1A5F5F]/50 transition-all duration-300">
                  Contact Us
                </button>
                </Link>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
