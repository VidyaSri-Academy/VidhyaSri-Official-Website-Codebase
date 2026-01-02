import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Play, Users, BookOpen, 
  Trophy, Sparkles, CheckCircle2, X,
  Zap, ChevronRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. IMPORT LOGO - Using your provided path to ensure no 404
import vidicon from "../components/layout/image.png"; 

const TypingHeading = () => {
  const words = ["Success", "Excellence", "Marvel", "Your Future"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      if (isDeleting) {
        setDisplayedText(prev => prev.slice(0, -1));
        setSpeed(50);
      } else {
        setDisplayedText(fullWord.slice(0, displayedText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayedText === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, speed]);

  return (
    <span className="text-[#E21E26] relative">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1 h-8 md:h-12 bg-[#073D5E] ml-1 align-middle"
      />
    </span>
  );
};

export default function Landing() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative pt-24 lg:pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Architectural Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#073D5E]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#E21E26]/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        
        {/* --- 2. THE EMERALD OFFER STRIP --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-full flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-900/20 mb-10 sm:mb-12 w-full sm:w-fit mx-auto"
        >
          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 animate-pulse flex-shrink-0" />
          <span className="text-center font-bold tracking-tight">OFFER ENDS ON 20TH DEC: Last chance to grab 15% Early Bird Off!</span>
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 hidden sm:block" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 3. Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* The Foundation Strip with Shimmer */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200/60 shadow-sm overflow-hidden"
            >
              <motion.div
                animate={{ x: ["-150%", "150%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-0 w-1/2 h-full skew-x-12 bg-gradient-to-r from-transparent via-[#073D5E]/5 to-transparent"
              />
              <img src={vidicon} className="w-5 h-5 grayscale opacity-70" alt="Logo" />
              <span className="text-[#073D5E] text-[11px] font-black uppercase tracking-[0.2em] relative">
                The Foundation for Excellence
              </span>
              <Sparkles className="w-3 h-3 text-[#E21E26] animate-pulse" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              Transforming <br /> Learning into <br />
              <TypingHeading />
            </h1>

            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
              VidhyaSri is the global standard for academic brilliance, providing the technology and mentorship to shape the leaders of tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              {/* --- JOINT NOW BUTTON WITH GLOW EFFECT --- */}
              <div className="relative group">
                {/* Glow Layer */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#073D5E] to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <Button className="relative bg-[#073D5E] hover:bg-[#052d45] text-white px-10 h-16 rounded-2xl text-lg font-black shadow-xl flex items-center gap-3 w-full sm:w-auto cursor-pointer">
                  Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <Button
                variant="outline"
                onClick={() => setIsVideoOpen(true)}
                className="h-16 px-10 rounded-2xl border-slate-200 text-slate-600 font-black hover:bg-slate-50 transition-all flex items-center gap-3 w-full sm:w-auto cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" /> Watch Video
              </Button>
            </div>

            {/* Social Trust row */}
            <div className="pt-8 flex flex-wrap gap-8 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-[#073D5E]"><Users size={18}/></div>
                <span className="text-[11px] font-black uppercase text-slate-400 tracking-widest">10k+ Students</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-[#E21E26]"><Trophy size={18}/></div>
                <span className="text-[11px] font-black uppercase text-slate-400 tracking-widest">Top State Ranks</span>
              </div>
            </div>
          </motion.div>

          {/* 4. Right Column: Cinematic Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#073D5E]/10 to-[#E21E26]/10 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />
              
              <div 
                className="relative aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] cursor-pointer ring-1 ring-slate-100"
                onClick={() => setIsVideoOpen(true)}
              >
                {/* Visual Placeholder */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-[2s]" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center group-hover:bg-[#E21E26] group-hover:text-white transition-all duration-300"
                  >
                    <Play className="w-10 h-10 fill-current ml-1" />
                  </motion.div>
                </div>

                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/30 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-white text-[10px] font-black uppercase tracking-widest">VidyaSri Success Film</span>
                </div>
              </div>

              {/* Floating Award Decoration */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [12, 15, 12] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center border border-slate-50 z-20"
              >
                <div className="relative">
                  <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-yellow-400 animate-pulse" />
                  <CheckCircle2 className="w-12 h-12 text-[#E21E26]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-5xl aspect-video relative rounded-3xl overflow-hidden">
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all"
              >
                <X className="w-7 h-7" />
              </button>
              <iframe 
                className="w-full h-full"
                src="" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}