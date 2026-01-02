import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, CheckCircle2, Sparkles, Layout, Users, 
  GraduationCap, BarChart3, Bell, Calendar, PieChart, 
  Globe, ShieldCheck, Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="product" className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-[#073D5E]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-[#E21E26]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-[#073D5E] text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4 text-[#E21E26]" />
            <span>The VidhyaSri Ecosystem Powered By MapSystems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-slate-900 tracking-tight">
            One Platform. <span className="text-[#073D5E]">Limitless</span> Possibilities.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
            From individual learners to global institutions, we provide the tools to build, 
            scale, and master the future of education.
          </p>
        </motion.div>

        <Tabs defaultValue="students" className="w-full">
          {/* Custom Styled Tab List */}
          <div className="flex justify-center mb-12 md:mb-16">
            <TabsList className="inline-flex flex-col sm:flex-row h-auto sm:h-14 w-full sm:w-auto items-center justify-center rounded-2xl bg-slate-100/80 p-1.5 backdrop-blur-sm shadow-inner border border-slate-200 gap-2 sm:gap-0">
              <TabsTrigger value="students" className="rounded-xl px-6 sm:px-8 h-12 sm:h-full w-full sm:w-auto data-[state=active]:bg-white data-[state=active]:text-[#073D5E] data-[state=active]:shadow-lg font-bold transition-all text-sm cursor-pointer">
                <GraduationCap className="w-4 h-4 mr-2 " /> For Students
              </TabsTrigger>
              <TabsTrigger value="teachers" className="rounded-xl px-6 sm:px-8 h-12 sm:h-full w-full sm:w-auto data-[state=active]:bg-white data-[state=active]:text-[#073D5E] data-[state=active]:shadow-lg font-bold transition-all text-sm cursor-pointer">
                <Users className="w-4 h-4 mr-2" /> For Teachers
              </TabsTrigger>
              <TabsTrigger value="institutions" className="rounded-xl px-6 sm:px-8 h-12 sm:h-full w-full sm:w-auto data-[state=active]:bg-white data-[state=active]:text-[#073D5E] data-[state=active]:shadow-lg font-bold transition-all text-sm cursor-pointer">
                <Layout className="w-4 h-4 mr-2" /> Institutions
              </TabsTrigger>
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            {/* STUDENTS CONTENT */}
            <TabsContent value="students" key="students" className="outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="lg:col-span-5 space-y-6 md:space-y-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
                    A Learning Journey <br/><span className="text-[#E21E26]">Tailored</span> to You.
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600">
                    Our reports about students doesn't just show you content; it understands your pace. Unlock a personalized map that adapts as you grow.
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    {["AI-Driven Personalized Paths", "Interactive & Gamified Content", "Real-time Rank Analysis", "Instant Doubt Clearing"].map((item, i) => (
                      <motion.div key={i} variants={itemVariants} className="flex items-center gap-3 font-bold text-slate-700">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" /> {item}
                      </motion.div>
                    ))}
                  </div>
                  <Button className="h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-[#073D5E] hover:bg-[#073D5E]/90 text-white font-bold text-base sm:text-lg shadow-xl shadow-[#073D5E]/20 group cursor-pointer w-full sm:w-auto">
                    Explore LMS <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <div className="lg:col-span-7 relative mt-8 lg:mt-0">
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 md:gap-4 p-3 md:p-4 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-200">
                    <motion.div whileHover={{ scale: 1.02 }} className="col-span-4 sm:col-span-4 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
                        <span className="font-black text-[#073D5E] text-sm sm:text-base">Current Progress</span>
                        <span className="text-[10px] sm:text-xs font-bold text-slate-400 bg-slate-50 px-2 sm:px-3 py-1 rounded-full tracking-widest uppercase">IIT JEE Phase 1</span>
                      </div>
                      <div className="space-y-6">
                        <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} animate={{ width: "72%" }} transition={{ duration: 1.5 }} className="h-full bg-gradient-to-r from-[#073D5E] to-blue-500" />
                        </div>
                        <div className="flex justify-between text-sm font-bold">
                          <span className="text-slate-500">72% Completed</span>
                          <span className="text-[#073D5E]">12 Modules Left</span>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="col-span-4 sm:col-span-2 bg-[#1A5D7A] text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col justify-center items-center text-center shadow-lg">
                      <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                      <span className="text-xl sm:text-2xl font-black">98.2</span>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase opacity-80">Percentile</span>
                    </motion.div>
                    <div className="col-span-2 sm:col-span-3 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100">
                      <p className="text-[10px] sm:text-xs font-black text-slate-400 uppercase mb-3 sm:mb-4">Today's Goals</p>
                      <div className="space-y-2 sm:space-y-3">
                        {[1, 2].map(t => (<div key={t} className="h-2 sm:h-3 w-full bg-slate-50 rounded-full animate-pulse" />))}
                      </div>
                    </div>
                    <div className="col-span-2 sm:col-span-3 bg-[#E21E26] text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-ping" />
                      <span className="font-bold text-xs sm:text-sm">Live Class: Physics</span>
                    </div>
                  </div>
                    <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="hidden lg:flex absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-xl items-center justify-center border border-slate-100">
                    <Calendar className="w-8 h-8 text-[#1A5D7A] opacity-30" />
                  </motion.div>
                </div>
              </div>
            </TabsContent>

            {/* TEACHERS CONTENT */}
            <TabsContent value="teachers" key="teachers" className="outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="lg:col-span-5 space-y-6 md:space-y-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
                    Teach Smarter, <br/><span className="text-[#1A5D7A]">Not Harder</span>.
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600">
                    Automate mundane tasks and focus on what matters—teaching. Get deep insights into every student's performance in real-time.
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    {["Automated Grading System", "Student Behavior Analytics", "Curriculum Management", "Parent-Teacher Connect"].map((item, i) => (
                      <motion.div key={i} variants={itemVariants} className="flex items-center gap-3 font-bold text-slate-700">
                        <Zap className="w-5 h-5 text-yellow-500" /> {item}
                      </motion.div>
                    ))}
                  </div>
                  <Button className="h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-[#1A5D7A] hover:bg-[#1A5D7A]/90 text-white font-bold text-base sm:text-lg shadow-xl shadow-[#1A5D7A]/20 group cursor-pointer w-full sm:w-auto">
                    Teacher Dashboard <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <div className="lg:col-span-7 relative mt-8 lg:mt-0">
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 md:gap-4 p-4 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-200">
                    <div className="col-span-4 bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                       <p className="text-xs font-black text-slate-400 uppercase mb-4">Class Performance Trend</p>
                       <div className="h-24 flex items-end gap-2">
                          {[40, 70, 45, 90, 65, 80].map((h, i) => (
                            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: i * 0.1 }} className="flex-1 bg-gradient-to-t from-[#1A5D7A] to-blue-400 rounded-t-md" />
                          ))}
                       </div>
                    </div>
                    <div className="col-span-2 bg-emerald-500 text-white p-5 rounded-xl flex flex-col justify-between shadow-lg">
                       <Bell className="w-6 h-6 animate-bounce" />
                       <span className="text-xl font-black">12</span>
                       <span className="text-[10px] font-bold uppercase">New Submissions</span>
                    </div>
                    <div className="col-span-6 bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[#1A5D7A]">JS</div>
                          <div>
                             <p className="text-sm font-black">Arnav</p>
                             <p className="text-[10px] text-slate-400 font-bold uppercase">Needs Attention</p>
                          </div>
                       </div>
                       <Button size="sm" variant="outline" className="text-[10px] h-7 font-black rounded-full">Analyze</Button>
                    </div>
                  </div>
                  {/* Floating Icon for Teachers */}
                  <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="hidden lg:flex absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-xl items-center justify-center border border-slate-100">
                    <Calendar className="w-8 h-8 text-[#1A5D7A] opacity-30" />
                  </motion.div>
                </div>
              </div>
            </TabsContent>

            {/* INSTITUTIONS CONTENT */}
            <TabsContent value="institutions" key="institutions" className="outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
                <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="lg:col-span-5 space-y-6 md:space-y-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
                    Scale Excellence <br/><span className="text-[#073D5E]">Across Your Campus</span>.
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600">
                    A centralized command center for large-scale education. Manage thousands of students and hundreds of educators from one unified dashboard.
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    {["Centralized Data Control", "ROI & Growth Analytics", "Institution-wide Security", "White-label Integration"].map((item, i) => (
                      <motion.div key={i} variants={itemVariants} className="flex items-center gap-3 font-bold text-slate-700">
                        <ShieldCheck className="w-5 h-5 text-[#073D5E]" /> {item}
                      </motion.div>
                    ))}
                  </div>
                  <Button className="h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-[#073D5E] hover:bg-slate-900 text-white font-bold text-base sm:text-lg shadow-xl shadow-[#073D5E]/20 group cursor-pointer w-full sm:w-auto">
                    Corporate Solutions <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <div className="lg:col-span-7 relative mt-8 lg:mt-0">
                  <div className="grid grid-cols-6 gap-3 p-4 rounded-3xl bg-slate-900 shadow-2xl">
                    <div className="col-span-6 flex justify-between items-center px-2 py-1">
                       <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase">Global Admin Panel</span>
                       <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-red-500" /><div className="w-2 h-2 rounded-full bg-yellow-500" /><div className="w-2 h-2 rounded-full bg-green-500" />
                       </div>
                    </div>
                    <div className="col-span-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                       <p className="text-[10px] font-bold opacity-60">Total Active Learners</p>
                       <p className="text-2xl font-black">124,802</p>
                       <div className="mt-2 text-[10px] text-emerald-400 font-bold">+12% Monthly</div>
                    </div>
                    <div className="col-span-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                       <p className="text-[10px] font-bold opacity-60">Resource Efficiency</p>
                       <p className="text-2xl font-black">94%</p>
                       <div className="mt-2 text-[10px] text-blue-400 font-bold">Optimal State</div>
                    </div>
                    <div className="col-span-6 bg-white p-4 rounded-xl">
                       <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-black text-slate-800">Regional Distribution</span>
                          <Globe className="w-4 h-4 text-slate-400" />
                       </div>
                       <div className="h-3 w-full bg-slate-100 rounded-full flex overflow-hidden">
                          <div className="w-[40%] bg-[#073D5E]" /><div className="w-[30%] bg-[#E21E26]" /><div className="w-[30%] bg-[#1A5D7A]" />
                       </div>
                       <div className="flex justify-between mt-2 text-[8px] font-bold uppercase text-slate-400">
                          <span>North</span><span>South</span><span>East</span>
                       </div>
                    </div>
                  </div>
                  {/* Floating Icon for Institutions */}
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 5 }} className="hidden lg:flex absolute -top-8 -left-8 w-20 h-20 bg-white rounded-full shadow-2xl items-center justify-center border border-slate-100">
                    <PieChart className="w-10 h-10 text-[#073D5E] opacity-20" />
                  </motion.div>
                </div>
              </div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}