import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, FlaskConical, Briefcase, 
  Landmark, ShieldCheck, ChevronDown, 
  Sparkles, Plus, GraduationCap, Atom, Microscope
} from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. Flattened Data Structure: Every Exam is a primary object
const individualExams = [
  // School / Foundation (MapMyTutor)
  { id: "ntse", name: "NTSE", eligibility: "Class 10th", aop: "MapMyTutor", icon: <Atom className="text-blue-500" />, link: "https://mapmytutor.com/", bg: "from-blue-50 to-indigo-50", accent: "bg-blue-500", isPrimary: true },
  { id: "kvpy", name: "KVPY", eligibility: "Class 11th & 12th", aop: "MapMyTutor", icon: <FlaskConical className="text-indigo-500" />, link: "https://mapmytutor.com/", bg: "from-indigo-50 to-purple-50", accent: "bg-indigo-500", isPrimary: true },
  { id: "olympiad", name: "Olympiads", eligibility: "Class 6th to 12th", aop: "MapMyTutor", icon: <Sparkles className="text-amber-500" />, link: "https://mapmytutor.com/", bg: "from-amber-50 to-orange-50", accent: "bg-amber-500", isPrimary: true },
  
  // Science Entrance (MapMyTutor)
  { id: "neet", name: "NEET", eligibility: "12th Pass/Appearing", aop: "MapMyTutor", icon: <Microscope className="text-red-500" />, link: "https://mapmytutor.com/", bg: "from-red-50 to-rose-50", accent: "bg-red-500", isPrimary: true },
  { id: "jee", name: "IIT-JEE", eligibility: "12th Pass/Appearing", aop: "MapMyTutor", icon: <GraduationCap className="text-cyan-500" />, link: "https://mapmytutor.com/", bg: "from-cyan-50 to-blue-50", accent: "bg-cyan-500", isPrimary: true },
  
  // Commerce (SuccessEdge)
  { id: "ca", name: "Chartered Accountant (CA)", eligibility: "Commerce Graduate/12th", aop: "SuccessEdge", icon: <Briefcase className="text-emerald-500" />, link: "https://www.successedge.co/", bg: "from-emerald-50 to-teal-50", accent: "bg-emerald-500", isPrimary: true },
  { id: "acca", name: "ACCA", eligibility: "Any Graduate", aop: "SuccessEdge", icon: <Briefcase className="text-teal-600" />, link: "https://www.successedge.co/", bg: "from-teal-50 to-slate-50", accent: "bg-teal-600", isPrimary: false },
  
  // Govt / UPSC (NEZA & India4IAS)
  { id: "upsc", name: "UPSC (IAS/IPS)", eligibility: "Any Graduate", aop: "India4IAS", icon: <ShieldCheck className="text-orange-600" />, link: "https://india4ias.com/", bg: "from-orange-50 to-yellow-50", accent: "bg-orange-600", isPrimary: false },
  { id: "ssc", name: "SSC CGL", eligibility: "Any Graduate", aop: "NEZA", icon: <Landmark className="text-purple-500" />, link: "https://neza.in/", bg: "from-purple-50 to-fuchsia-50", accent: "bg-purple-500", isPrimary: false },
  { id: "banking", name: "Banking Services", eligibility: "Any Graduate", aop: "NEZA", icon: <Landmark className="text-blue-600" />, link: "https://neza.in/", bg: "from-blue-50 to-sky-50", accent: "bg-blue-600", isPrimary: false },
];

export default function ExamCategories() {
  const [showAll, setShowAll] = useState(false);
  const visibleExams = individualExams.filter(exam => exam.isPrimary || showAll);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#073D5E]/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[#073D5E] text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3 text-[#E21E26]" />
            Individual Excellence Paths
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Explore All <span className="text-[#073D5E]">Exams</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Dedicated preparation modules for every major competitive milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleExams.map((exam, idx) => (
              <ExamHeroCard key={exam.id} exam={exam} index={idx} />
            ))}
            
            {!showAll && (
              <motion.button
                layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                whileHover={{ scale: 0.98 }}
                onClick={() => setShowAll(true)}
                className="flex flex-col items-center justify-center p-8 rounded-[2rem] border-2 border-dashed border-slate-200 bg-white group cursor-pointer h-full min-h-[300px]"
              >
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-[#073D5E] group-hover:text-white transition-all">
                  <Plus className="w-6 h-6" />
                </div>
                <p className="text-lg font-black text-slate-400 group-hover:text-[#073D5E]">Discover More Exams</p>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-1">SSC, Banking, UPSC & More</p>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {showAll && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-16 flex justify-center">
            <Button variant="outline" onClick={() => setShowAll(false)} className="rounded-full px-12 h-14 font-black border-slate-200 text-slate-500 hover:bg-slate-50">
              Collapse List <ChevronDown className="ml-2 w-4 h-4 rotate-180" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// 2. Specialized Card for Individual Exams
function ExamHeroCard({ exam, index }: { exam: any; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      whileHover={{ y: -8, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
      className={`relative h-full flex flex-col justify-between p-8 rounded-[2rem] bg-gradient-to-br ${exam.bg} border border-white shadow-sm group overflow-hidden`}
    >
      <div className={`absolute -right-6 -top-6 w-24 h-24 ${exam.accent} opacity-5 rounded-full blur-xl group-hover:opacity-10 transition-opacity`} />
      
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
            {React.cloneElement(exam.icon as React.ReactElement, { className: "w-7 h-7" })}
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Academy Partner</span>
            <span className="px-3 py-1 rounded-full bg-white/80 border border-white text-[10px] font-black text-[#073D5E]">
              {exam.aop}
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-black text-slate-800 mb-1 leading-tight">
          {exam.name}
        </h3>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/40 border border-white/60 text-[11px] font-bold text-slate-600">
           <GraduationCap size={14} className="opacity-50" />
           {exam.eligibility}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200/50">
        <a 
          href={exam.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-black text-[#073D5E] flex items-center justify-between group/btn"
        >
          <span>Start Preparation</span>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover/btn:bg-[#073D5E] group-hover/btn:text-white transition-all shadow-sm">
            <ArrowRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </motion.div>
  );
}