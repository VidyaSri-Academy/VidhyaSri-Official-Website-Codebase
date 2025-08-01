
import { motion } from "framer-motion";

import {
  FlaskConical,
  Briefcase,
  Landmark,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

import "./suctom.css";


const programs = [
  {
    eligibility: "Any Graduate",
    exams: ["CA", "CS", "CMA", "ACCA"],
    aop: "SuccessEdge",
    icon: <Briefcase size={32} className="text-blue-500" />,
  },
  {
    eligibility: "Any Graduate",
    exams: ["SSC", "Banking Services", "RRB"],
    aop: "National Excellencez Academy",
    icon: <Landmark size={32} className="text-green-500" />,
  },
  {
    eligibility: "Any Graduate",
    exams: ["UPSC(IAS)", "KPSC(KAS)"],
    aop: "IndiaA4IAS",
    icon: <ShieldCheck size={32} className="text-red-500" />,
  },
];

export default function IntegratedProgramCards2() {
  return (
    <div className="animated-gradient-bg py-12 sm:py-16">
      <div className="mt-6 md:mt-10 mx-auto lg:max-w-6xl xl:px-0 px-4 w-full flex flex-col items-center justify-center">
        <h2 className="md:text-3xl text-2xl font-bold my-2 text-center text-slate-800">
          College Integrated Programs
        </h2>
        <p className="md:text-lg text-base text-slate-600 md:leading-relaxed text-center leading-relaxed max-w-2xl">
          Vidhyasri offers a range of courses for students. Explore our programs Graduate and Post Graduate to find the perfect one for you.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 md:my-12 my-8 w-full">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out flex flex-col max-w-md mx-auto"
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
                <div className="flex flex-row items-start pt-2 flex-wrap gap-2">
                  {program.eligibility.split(", ").map((eligibilityTag) => (
                    <span
                      key={eligibilityTag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow"
                    >
                      {eligibilityTag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-200 mx-6"></div>
              <div className="bg-slate-50/70 px-6 py-4 rounded-b-xl flex items-center">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-block text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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