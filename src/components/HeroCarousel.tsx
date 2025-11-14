import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles, Award, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import heroLedMirror from "@/assets/modern-luxury-bathroom-interior-design-with-panelling-wall .jpg";
import heroWashbasin from "@/assets/modern-luxury-bathroom-interior .jpg";
import heroColorBasin from "@/assets/small-bathroom-with-modern-style-ai-generated .jpg";
import heroManufacturing from "@/assets/view-small-bathroom-interior-with-modern-style-furniture-decor .jpg";

import { Link } from "react-router-dom";
const slides = [
  {
    image: heroLedMirror,
    title: "Illuminate Your Space",
    subtitle: "Premium LED Mirrors",
    description: "Transform your bathroom with our elegant LED mirror collection",
    accent: "from-[#1A5F5F] to-[#2FA5A5]",
    icon: Sparkles,
  },
  {
    image: heroWashbasin,
    title: "Elegant Washbasins",
    subtitle: "Crafted with Precision",
    description: "Discover our premium collection of luxury washbasins",
    accent: "from-[#1A5F5F] to-[#3BC3C3]",
    icon: Award,
  },
  {
    image: heroColorBasin,
    title: "Color Your Vision",
    subtitle: "Vibrant Basin Collection",
    description: "Express your style with our colorful basin designs",
    accent: "from-[#1A5F5F] to-[#50BEBE]",
    icon: Zap,
  },
  {
    image: heroManufacturing,
    title: "Crafted with Passion",
    subtitle: "Quality Manufacturing",
    description: "Excellence in every detail, precision in every product",
    accent: "from-[#1A5F5F] to-[#2FA5A5]",
    icon: Award,
  },
];


const SLIDE_DURATION = 5000;

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    startTimeRef.current = Date.now();
    setProgress(0);

    const animationFrame = requestAnimationFrame(function animate() {
      const elapsed = Date.now() - startTimeRef.current;
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      
      setProgress(newProgress);

      if (elapsed < SLIDE_DURATION) {
        requestAnimationFrame(animate);
      } else {
        setCurrentSlide((current) => (current + 1) % slides.length);
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [currentSlide]);

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.13, 0.13] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Orb Effect */}
      <motion.div
        key={`orb-${currentSlide}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r ${slide.accent}`}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Icon Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 mb-6"
                >
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${slide.accent} shadow-2xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/60 text-sm font-medium tracking-wider uppercase">
                    {slide.subtitle}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-3xl md:text-4xl lg:text-7xl font-black text-white mb-6 leading-none"
                >
                  {slide.title.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="inline-block mr-4"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm md:text-xl text-white/80 mb-10 max-w-2xl font-light"
                >
                  {slide.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link to="/Contact">
                  <Button
                    size="lg"
                    className={`group relative overflow-hidden bg-gradient-to-r ${slide.accent} text-white border-0 text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300`}
                  >
                    <span className="relative z-10 flex items-center gap-2 font-semibold">
                      Explore Collection
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Modern Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
            }}
            className="group relative"
          >
            <div
              className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            >
              {index === currentSlide && (
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${slide.accent} transition-all duration-100 ease-linear`}
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 hidden md:flex items-center gap-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3">
        <span className="text-white text-lg font-bold">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <div className="w-12 h-0.5 bg-white/30">
          <div
            className={`h-full bg-gradient-to-r ${slide.accent} transition-all duration-100 ease-linear`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-white/60 text-sm">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default HeroCarousel;