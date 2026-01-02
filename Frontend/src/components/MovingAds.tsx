import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";

// Assuming your imports stay the same
import baldwin from "../assets/baldwin.jpg";
import bgspuc from "../assets/bgspuc.png";
import dps from "../assets/dps.jpg";
import bmc from "../assets/bmc.jpg";
import oxford from "../assets/oxford.jpg";
import theosfsrc from "../assets/theoxfsrc.jpg";
import sarwas from "../assets/sarwas.jpg";
import jss from "../assets/jss.jpg";
import bgsandsjb from "../assets/bgsandsjb.jpg";

interface School {
  id: number;
  name: string;
  location: string;
  logo: string;
}

const schools: School[] = [
  { id: 1, name: "Baldwin Women's Methodist College", location: "Bangalore, KA", logo: baldwin },
  { id: 2, name: "BGS School PU College", location: "Kengeri, KA", logo: bgspuc },
  { id: 3, name: "Baldwin Methodist College", location: "Bangalore, KA", logo: bmc },
  { id: 4, name: "Delhi Public School", location: "India", logo: dps },
  { id: 5, name: "The Oxford English School", location: "Bangalore, KA", logo: oxford },
  { id: 6, name: "The Oxford Senior Secondary", location: "Bangalore, KA", logo: theosfsrc },
  { id: 7, name: "Oxford Educational Institutions", location: "Bangalore, KA", logo: sarwas },
  { id: 8, name: "JSS Group of Institutions", location: "Bangalore, KA", logo: jss },
  { id: 9, name: "BGS & SJB Group", location: "Bangalore, KA", logo: bgsandsjb },
];

export default function MovingSchoolAds() {
  const [isPaused, setIsPaused] = useState(false);
  const [duplicatedSchools, setDuplicatedSchools] = useState<School[]>([]);

  // Create a triple-buffer for ultra-smooth infinite looping
  useEffect(() => {
    setDuplicatedSchools([...schools, ...schools, ...schools]);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#073D5E]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#E21E26]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Novel Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[#073D5E] text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3 h-3 text-[#E21E26]" />
            Trusted Partners
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Educating with the <span className="text-[#073D5E]">Best</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Empowering students across India's most prestigious academic institutions.
          </p>
        </div>
        
        {/* The Marquee Container */}
        <div 
          className="relative w-full cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge Fades - More subtle and professional */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          
          <div className="flex overflow-hidden group">
            <motion.div
              className="flex items-center gap-8 py-4"
              animate={{ x: isPaused ? 0 : [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear"
                }
              }}
            >
              {duplicatedSchools.map((school, index) => (
                <motion.div 
                  key={`${school.id}-${index}`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex items-center gap-6 min-w-[280px] md:min-w-[340px] bg-white border border-slate-100 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(7,61,94,0.08)] hover:border-[#073D5E]/20 transition-all duration-300"
                >
                  {/* Logo Container with consistent sizing */}
                  <div className="w-16 h-16 shrink-0 bg-slate-50 rounded-xl p-2 flex items-center justify-center">
                    <img 
                      src={school.logo} 
                      alt={school.name} 
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col">
                    <h3 className="text-[#073D5E] font-black text-sm md:text-base leading-tight line-clamp-2">
                      {school.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1 text-slate-400">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        {school.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Success Counter Footer (Novel Element) */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-20 border-t border-slate-100 pt-12">
           <div className="text-center">
              <p className="text-3xl font-black text-[#073D5E]">50+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Institutions</p>
           </div>
           <div className="text-center">
              <p className="text-3xl font-black text-[#E21E26]">10k+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Students</p>
           </div>
           <div className="text-center">
              <p className="text-3xl font-black text-[#073D5E]">100%</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Excellence</p>
           </div>
        </div>
      </div>
    </section>
  );
}