import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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

// Sample school data - in a real app, this might come from an API
const schools: School[] = [
  { 
    id: 1, 
    name: "Baldwin Women's Methodist College", 
    location: "Bangalore, Karnataka", 
    logo: baldwin
  },

  { 
    id: 2, 
    name: "BGS School PU College and Degree College, KENGERI", 
    location: "Bangalore, Karnataka", 
    logo: bgspuc
  },

  { 
    id: 3, 
    name: "Baldwin Methodist College", 
    location: "Bangalore, Karnataka", 
    logo: bmc
  },

  { 
    id: 4, 
    name: "Delhi public School", 
    location: "", 
    logo: dps
  },

  { 
    id: 5, 
    name: "The oxford english School, ICSE", 
    location: "Bangalore, Karnataka", 
    logo: oxford
  },

  {
    id: 6, 
    name: "The Oxford Senior Secondary School (CBSE school)", 
    location: "Bangalore, Karnataka", 
    logo: theosfsrc
  },
  
  
  { 
    id: 7, 
    name: "The Oxford Educational Institutions", 
    location: "Bangalore, Karnataka", 
    logo: sarwas
  },

  { 
    id: 8, 
    name: "JSS Group of Institutions", 
    location: "Bangalore, Karnataka", 
    logo: jss
  },
  
  { 
    id: 9, 
    name: "BGS & SJB Group of Institutions", 
    location: "Bangalore, Karnataka", 
    logo: bgsandsjb
  },
];

export default function MovingSchoolAds() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [duplicatedSchools, setDuplicatedSchools] = useState<School[]>([]);

  // Duplicate the schools array to create a seamless loop
  useEffect(() => {
    setDuplicatedSchools([...schools, ...schools]);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E5270] mb-2">
            Trusted by Top Educational Institutions
          </h2>
          <p className="text-gray-600">
            The Foundation for Excellence in education across leading schools!
          </p>
        </div>
        
        <div className="relative w-full">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
          
          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex items-center space-x-12 py-8"
              animate={{ x: [0, -1500] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear"
                }
              }}
            >
              {duplicatedSchools.map((school) => (
                <div key={`${school.id}-${Math.random()}`} className="flex flex-col items-center min-w-[200px] bg-white p-6 rounded-lg shadow-md">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={school.logo} 
                      alt={`${school.name} logo`} 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        // Fallback for image loading errors
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/400x400?text=School+Logo";
                      }} 
                    />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-lg text-center">{school.name}</h3>
                  <p className="text-gray-500 text-sm text-center">{school.location}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}