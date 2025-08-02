import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Book,
  BrainCircuit,
  Calendar,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

// const words = ['Elevate', 'Your', 'Institution to' ,'Global', 'Academic', 'Excellence']
// const typingSpeed = 150;
// const delayBetweenWords = 1000;

// Typing animation component
const TypingHeading = () => {
  // const fullText = 'Elevate Your Institution to Global Academic Excellence';
  const fullText = "Marvel";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50); // typing speed in ms
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <>
      {/* <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> */}
      {displayedText}
      {/* </span> */}
      <motion.span
        className="inline-block w-1 bg-indigo-600 ml-1"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </>
  );
};

export default function Landing() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-[#0E5270]/20">
              <span className="text-[#0E5270] text-sm font-medium">
                The Foundation for Excellence
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Transforming Your Institution into an academic{" "}
              <span className="text-[#0E5270]">
                <TypingHeading />
              </span>
            </h1>
            <p className="text-xl text-gray-700">
              Our innovative platform delivers personalized learning experiences
              that adapt to individual needs, helping students achieve better
              outcomes while giving educators powerful insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#0E5270] hover:bg-[#0E5270]/90 text-white px-6 py-6">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-[#0E5270] text-[#0E5270] hover:bg-[#0E5270]/10 px-6 py-6"
              >
                Watch Demo
              </Button>
            </div>
            <div className="pt-6 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-[#0E5270]/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-[#0E5270]" />
                </div>
                <span className="text-gray-600">100k+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#0E5270]/10 p-2 rounded-full">
                  <Book className="h-5 w-5 text-[#0E5270]" />
                </div>
                <span className="text-gray-600">50+ Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#0E5270]/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-[#0E5270]" />
                </div>
                <span className="text-gray-600">Flexible Learning</span>
              </div>
            </div>
          </motion.div>

          {/* Right column: Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-r from-[#0E5270]/5 to-[#0E5270]/10 rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video shadow-lg w-full max-w-full">
              <div className="absolute inset-0 bg-[radial-gradient(#0E5270_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 sm:h-64 sm:w-64 bg-[#E63946]/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 h-40 w-40 sm:h-64 sm:w-64 bg-[#0E5270]/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 h-full flex items-center justify-center p-4 sm:p-8">
                {/* Feature cards floating over */}
                <motion.div
                  className="absolute top-2 left-2 sm:top-10 sm:-left-2 bg-white p-2 sm:p-4 rounded-lg shadow-lg max-w-xs w-11/12 sm:w-auto"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-[#0E5270] rounded-full p-2 text-white">
                      <BrainCircuit className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                      Personalized Learning
                    </h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600">
                    AI-powered curriculum that adapts to each student's needs
                  </p>
                </motion.div>
                <motion.div
                  className="absolute bottom-2 right-2 sm:bottom-10 sm:-right-12 bg-white p-2 sm:p-4 rounded-lg shadow-lg max-w-xs w-11/12 sm:w-auto"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="bg-[#E63946] rounded-full p-2 text-white">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                      Real-time Analytics
                    </h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600">
                    Comprehensive insights into student performance and progress
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
