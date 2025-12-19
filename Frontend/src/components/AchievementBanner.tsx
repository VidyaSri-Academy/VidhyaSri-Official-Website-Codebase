import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Banner slides data - Replace image URLs with your actual banner images
const BANNER_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
    alt: "VIDHYASRI Banner 1",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80",
    alt: "VIDHYASRI Banner 2",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80",
    alt: "VIDHYASRI Banner 3",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",
    alt: "VIDHYASRI Banner 4",
  },
];

export default function AchievementBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[300px] overflow-hidden bg-slate-900 font-sans">
      {/* Banner Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={BANNER_SLIDES[currentSlide].image}
            alt={BANNER_SLIDES[currentSlide].alt}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#1A5D7A] p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#1A5D7A] p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {BANNER_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "bg-white w-8 sm:w-10 md:w-12 h-2 sm:h-2.5"
                : "bg-white/50 hover:bg-white/70 w-2 sm:w-2.5 h-2 sm:h-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional: Slide counter */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
        {currentSlide + 1} / {BANNER_SLIDES.length}
      </div>
    </section>
  );
}
