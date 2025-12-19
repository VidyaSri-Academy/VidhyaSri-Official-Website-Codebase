import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, FlaskConical, Briefcase, 
  Landmark, ShieldCheck, ChevronDown, 
  Sparkles, GraduationCap, Search, Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Configuration for all cards
const examCategories = [
  {
    title: "School Prep",
    eligibility: "Class 6th to 10th",
    exams: ["Foundation", "NTSE", "KVPY", "Olympiads"],
    aop: "MapMyTutor",
    icon: <FlaskConical className="w-8 h-8 text-blue-500" />,
    link: "https://mapmytutor.com/",
    bg: "from-blue-50 to-indigo-50",
    accent: "bg-blue-500",
    isPrimary: true
  },
  {
    title: "Science Entrance",
    eligibility: "11th & 12th Science",
    exams: ["IIT-JEE", "NEET", "CET"],
    aop: "MapMyTutor",
    icon: <GraduationCap className="w-8 h-8 text-cyan-500" />,
    link: "https://mapmytutor.com/",
    bg: "from-cyan-50 to-blue-50",
    accent: "bg-cyan-500",
    isPrimary: true
  },
  {
    title: "Commerce Hub",
    eligibility: "11th & 12th Commerce",
    exams: ["CA", "CS", "CMA", "ACCA"],
    aop: "SuccessEdge",
    icon: <Briefcase className="w-8 h-8 text-emerald-500" />,
    link: "https://www.successedge.co/",
    bg: "from-emerald-50 to-teal-50",
    accent: "bg-emerald-500",
    isPrimary: true
  },
  {
    title: "Govt Job Exams",
    eligibility: "Science/Commerce/Arts",
    exams: ["SSC", "Banking", "RRB"],
    aop: "NEZA",
    icon: <Landmark className="w-8 h-8 text-purple-500" />,
    link: "https://neza.in/",
    bg: "from-purple-50 to-fuchsia-50",
    accent: "bg-purple-500",
    isPrimary: false
  },
  {
    title: "Civil Services",
    eligibility: "IAS/PCS Aspirants",
    exams: ["UPSC", "KPSC", "Foundation"],
    aop: "IndiaA4IAS",
    icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
    link: "https://india4ias.com/",
    bg: "from-red-50 to-orange-50",
    accent: "bg-red-500",
    isPrimary: false
  }
];

export default function ExamCategories() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = examCategories.filter(item => item.isPrimary || showAll);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#073D5E]/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[#073D5E] text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3 h-3 text-[#E21E26]" />
            Your Future, Our Map
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Exam <span className="text-[#073D5E]">Categories</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            VidyaSri is preparing students for 20+ exam categories. Select your goal below to begin.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((category, idx) => (
              <ExamCard key={category.title} category={category} index={idx} />
            ))}
            
            {/* "View All" Toggle Button as a Card */}
            {!showAll && (
              <motion.button
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 0.98, backgroundColor: "#f8fafc" }}
                onClick={() => setShowAll(true)}
                className="flex flex-col items-center justify-center p-12 rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-white group cursor-pointer h-full min-h-[350px]"
              >
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-6 group-hover:bg-[#073D5E] group-hover:text-white transition-all group-hover:rotate-90">
                  <Plus className="w-8 h-8" />
                </div>
                <p className="text-xl font-black text-slate-400 group-hover:text-[#073D5E] transition-colors">View All Categories</p>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-2">Explore 15+ More Programs</p>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Collapse Button */}
        {showAll && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-16 flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(false)}
              className="rounded-full px-12 h-14 font-black border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-[#073D5E]"
            >
              Show Less <ChevronDown className="ml-2 w-4 h-4 rotate-180" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ExamCard({ category, index }: { category: any; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className={`relative h-full flex flex-col justify-between p-10 rounded-[2.5rem] bg-gradient-to-br ${category.bg} border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] group overflow-hidden`}
    >
      {/* Visual Accent Decoration */}
      <div className={`absolute -right-8 -top-8 w-36 h-36 ${category.accent} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
      
      <div>
        <div className="flex justify-between items-start mb-8">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-lg transition-all">
            {category.icon}
          </div>
          <span className="px-3 py-1 rounded-full bg-white/50 border border-white text-[10px] font-black text-[#073D5E] uppercase tracking-widest">
            {category.aop}
          </span>
        </div>

        <h3 className="text-3xl font-black text-slate-800 mb-2 leading-tight">
          {category.title}
        </h3>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
          {category.eligibility}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {category.exams.map((exam: string) => (
            <span key={exam} className="px-3 py-1.5 rounded-xl bg-white text-[11px] font-black text-slate-600 border border-white shadow-sm">
              {exam}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200/50 flex items-center justify-between">
        <a 
          href={category.link} 
          className="text-sm font-black text-[#073D5E] flex items-center gap-2 group/btn"
        >
          Explore Category 
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}