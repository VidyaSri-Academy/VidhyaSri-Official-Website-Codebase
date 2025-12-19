import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, ChevronRight, BookOpen, GraduationCap, 
  Trophy, Search, Menu, X, Rocket, Atom, Globe, 
  ArrowRight, Sparkles, Flame, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import vidicon from "./image.png"; 

// --- Enhanced Data ---
const COURSE_DATA = {
  "Competitive Exams": {
    badge: <Flame className="w-3 h-3 text-orange-500" />,
    items: [
      { name: "IIT JEE", icon: <Atom className="text-blue-500" />, sub: "Main & Advanced" },
      { name: "NEET", icon: <Rocket className="text-red-500" />, sub: "UG Medical" },
      { name: "GATE", icon: <Globe className="text-teal-500" />, sub: "Engineering" },
      { name: "AE/JE", icon: <BookOpen className="text-orange-500" />, sub: "State Exams" },
    ]
  },
  "School Preparation": {
    badge: <Sparkles className="w-3 h-3 text-purple-500" />,
    items: [
      { name: "Foundation", icon: <GraduationCap className="text-purple-500" />, sub: "Class 6th - 10th" },
      { name: "Class 11-12", icon: <Trophy className="text-yellow-500" />, sub: "Boards + KVPY" },
    ]
  },
};

export default function Header() {
  const [activeTab, setActiveTab] = useState("Competitive Exams");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Test Series", href: "/test-series" },
    { name: "Results", href: "/results" },
    { name: "Next Batch", href: "/next-batch" },
  ];

  return (
    <header className="relative w-full bg-white/60 backdrop-blur-2xl border-b border-slate-200/40 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center gap-2 sm:gap-4 group shrink-0">
          <div className="relative">
            <img src={vidicon} alt="Logo" className="h-9 sm:h-12 w-auto transition-transform duration-500 group-hover:rotate-[360deg]" />
            <div className="absolute -inset-1 bg-[#1A5D7A]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-[#1A5D7A] leading-none">VIDHYASRI</span>
            <span className="hidden sm:block text-[9px] font-semibold text-[#E21E26] tracking-[0.2em] uppercase opacity-90">The Foundation for Excellence</span>
          </div>
        </Link>

        {/* 2. Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Courses Dropdown Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all rounded-full ${isDropdownOpen ? 'bg-white/80 text-[#1A5D7A] shadow-sm' : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'}`}>
              Online Courses 
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.98 }}
                  className="absolute top-full left-[-150px] w-[750px] bg-white/95 backdrop-blur-xl border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-3xl overflow-hidden z-50 flex mt-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                  {/* Left Column: Navigation Tabs */}
                  <div className="w-[260px] bg-slate-50/40 backdrop-blur-sm border-r border-slate-100/60 p-4 flex flex-col gap-1 relative z-10">
                    <p className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Categories</p>
                    {Object.keys(COURSE_DATA).map((cat) => (
                      <button
                        key={cat}
                        onMouseEnter={() => setActiveTab(cat)}
                        className={`group flex items-center justify-between px-4 py-4 rounded-2xl text-sm font-semibold transition-all ${
                          activeTab === cat 
                          ? "bg-white/90 text-[#1A5D7A] shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/50 backdrop-blur-sm" 
                          : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {COURSE_DATA[cat as keyof typeof COURSE_DATA].badge}
                          {cat}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === cat ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100'}`} />
                      </button>
                    ))}
                    
                    <div className="mt-auto p-4 bg-[#1A5D7A]/8 rounded-2xl border border-[#1A5D7A]/15 backdrop-blur-sm">
                       <p className="text-[11px] font-semibold text-[#1A5D7A] flex items-center gap-2"><Clock className="w-3 h-3"/> New Batches</p>
                       <p className="text-[10px] text-slate-600 mt-1 font-medium">Starting from 1st Jan 2026. Register now!</p>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Content */}
                  <div className="flex-1 p-8 bg-transparent relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-slate-900">{activeTab}</h3>
                      <Link to="/all-courses" className="text-xs font-semibold text-[#1A5D7A] flex items-center gap-1 hover:underline">
                        View All <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {COURSE_DATA[activeTab as keyof typeof COURSE_DATA].items.map((course) => (
                        <motion.div
                          key={course.name}
                          whileHover={{ y: -2 }}
                          className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100/60 hover:border-[#1A5D7A]/30 hover:bg-white/60 cursor-pointer group/card transition-all backdrop-blur-sm"
                        >
                          <div className="p-3 bg-slate-50/60 rounded-xl group-hover/card:bg-white group-hover/card:shadow-md transition-all">
                            {course.icon}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">{course.name}</p>
                            <p className="text-[11px] font-medium text-slate-600 mt-0.5">{course.sub}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Simple Nav Links */}
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="relative px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#1A5D7A] transition-colors group"
            >
              {link.name}
              {location.pathname === link.href && (
                <motion.div layoutId="nav-pill" className="absolute inset-0 bg-[#1A5D7A]/5 rounded-full -z-10" />
              )}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#1A5D7A] transition-all group-hover:w-1/2 group-hover:left-1/4" />
            </Link>
          ))}
        </nav>

        {/* 3. Action Buttons & Search */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10 rounded-full text-slate-600 hover:text-[#1A5D7A] hover:bg-white/70">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          <div className="hidden sm:block h-6 w-[1px] bg-slate-200/60 mx-1 sm:mx-2" />

          <Button variant="ghost" className="hidden md:flex font-semibold text-slate-700 hover:text-[#1A5D7A] rounded-full px-4 lg:px-6 hover:bg-white/70 cursor-pointer">
            Sign In
          </Button>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="hidden sm:block">
            <Button className="bg-[#1A5D7A] hover:bg-[#144961] text-white font-semibold rounded-full px-4 sm:px-6 lg:px-8 h-10 sm:h-12 shadow-[0_10px_25px_rgba(26,93,122,0.25)] hover:shadow-[0_15px_30px_rgba(26,93,122,0.3)] flex items-center gap-2 transition-all text-sm">
              <span className="hidden md:inline cursor-pointer">Join For Free</span>
              <span className="md:hidden cursor-pointer">Join</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-xl bg-white/70 text-[#1A5D7A] hover:bg-white/90 transition-all active:scale-95"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* --- Mobile Sidebar --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100] lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-white z-[110] lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white pointer-events-none" />
              <div className="p-5 sm:p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6 sm:mb-8 relative z-10 pb-4 border-b border-slate-100">
                  <span className="font-extrabold text-[#1A5D7A] tracking-tight text-lg sm:text-xl">VIDHYASRI</span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="p-2.5 bg-slate-100 rounded-full hover:rotate-90 transition-transform hover:bg-slate-200 active:scale-95"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700"/>
                  </button>
                </div>
                
                {/* Mobile Courses Section */}
                <div className="mb-6 relative z-10 flex-1 overflow-y-auto">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Online Courses</h3>
                  <div className="space-y-2">
                    {Object.keys(COURSE_DATA).map((cat) => (
                      <details key={cat} className="group">
                        <summary className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-all list-none">
                          <span className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                            {COURSE_DATA[cat as keyof typeof COURSE_DATA].badge}
                            {cat}
                          </span>
                          <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="mt-2 space-y-2 px-2">
                          {COURSE_DATA[cat as keyof typeof COURSE_DATA].items.map((course) => (
                            <Link
                              key={course.name}
                              to={`/course/${course.name.toLowerCase().replace(/ /g, '-')}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all"
                            >
                              <div className="p-2 bg-white rounded-lg shadow-sm">
                                {course.icon}
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-slate-800">{course.name}</p>
                                <p className="text-xs text-slate-600">{course.sub}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                
                {/* Navigation Links */}
                <div className="space-y-1 mt-6 mb-6 relative z-10">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Quick Links</h3>
                  {navLinks.map(link => (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3.5 text-base font-semibold text-slate-800 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 relative z-10 pt-4 border-t border-slate-100">
                  <Button variant="outline" className="w-full py-5 sm:py-6 rounded-2xl font-semibold border-slate-200 hover:bg-slate-50 transition-all">Sign In</Button>
                  <Button className="w-full py-5 sm:py-6 rounded-2xl bg-[#1A5D7A] font-semibold shadow-lg hover:bg-[#144961] transition-all">Start Learning</Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}