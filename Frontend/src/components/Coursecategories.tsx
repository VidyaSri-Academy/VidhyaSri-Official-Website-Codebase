import React from "react";
// Import motion from Framer Motion
import { motion } from "framer-motion";
// Import the icons we'll use from lucide-react
import {
  FlaskConical,
  Briefcase,
  Landmark,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

import "./suctom.css"; // Your custom CSS file

// Data array remains the same
const programs = [
  {
    eligibility: "Class 6th to 10th",
    exams: ["Foundation Program", "NTSE", "KVPY", "Olympiads"],
    aop: "MapMyTutor",
    icon: <FlaskConical size={32} className="text-blue-500" />,
  },
  {
    eligibility: "11th PUI, 12th PUII (Science)",
    exams: ["IIT-JEE", "NEET", "CET"],
    aop: "MapMyTutor",
    icon: <FlaskConical size={32} className="text-blue-500" />,
  },
  {
    eligibility: "11th PUI, 12th PUII (Commerce)",
    exams: ["CA", "CS", "CMA", "ACCA"],
    aop: "SuccessEdge",
    icon: <Briefcase size={32} className="text-green-500" />,
  },
  {
    eligibility: "11th PUI, 12th PUII (Science/Commerce/Arts)",
    exams: ["SSC", "Banking Services", "RRB"],
    aop: "National Excellencez Academy",
    icon: <Landmark size={32} className="text-purple-500" />,
  },
  {
    eligibility: "11th PUI, 12th PUII (Science/Commerce/Arts)",
    exams: ["UPSC/PCS Foundation Program"],
    aop: "IndiaA4IAS",
    icon: <ShieldCheck size={32} className="text-red-500" />,
  },
];

export default function IntegratedProgramCards() {
  return (
    // Replaced 'bg-slate-50' with our new 'animated-gradient' class
    <div className="group animated-gradient-bg rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out flex flex-col"
    style={{ backgroundImage: "repeating-linear-gradient(135deg, #e0e7ff 0px, #e0e7ff 2px, transparent 2px, transparent 24px)" }}>
      <div className="mt-6 md:mt-10 mx-auto lg:max-w-6xl xl:px-0 px-4 w-full flex flex-col items-center justify-center">
        <h2 className="md:text-3xl text-2xl font-bold my-2 text-center text-slate-800">
          School / Junior College Integrated Programs
        </h2>
        <p className="md:text-lg text-base text-slate-600 md:leading-relaxed text-center leading-relaxed max-w-2xl">
          Vidhyasri offers a range of courses for students. Explore our foundation programs to find the perfect one for you.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 items-stretch justify-center grid-cols-1 gap-8 md:my-12 my-8 w-full">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 pr-4">
                    {program.exams.join(" / ")}
                  </h3>
                  <div className="bg-slate-100 rounded-lg p-3 group-hover:animate-bounce transition-all">
                    {program.icon || <GraduationCap size={32} className="text-slate-500" />}
                  </div>
                </div>
                
                <p className="text-sm font-medium text-slate-500 -mt-2 mb-4">
                  AOP: <span className="font-semibold text-blue-600">{program.aop}</span>
                </p>

                <div className="text-xs font-medium mr-2 mb-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow">
                  {program.eligibility.split(", ").map((eligibilityTag) => (
                    <span
                      key={eligibilityTag}
                      className="text-xs font-medium mr-2 mb-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700"
                    >
                      {eligibilityTag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-200 my-2"></div>
              {/* Updated Button Section */}
              <div className="inline-block text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-block text-sm font-semibold text-white bg-blue-600 px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Learn More &rarr;
                </motion.a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}