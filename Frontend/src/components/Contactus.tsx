import { motion } from "framer-motion";
import { 
  Mail, MapPin, Phone, 
  Sparkles, MessageSquare, 
  ArrowRight, Globe, Zap,
  Clock, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-white font-sans">
      {/* Background Architectural Accents - Pure CSS to prevent 404s */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#073D5E]/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#E21E26]/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        {/* 1. Dynamic Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[#073D5E] text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3 h-3 text-[#E21E26]" />
            Connect With VidhyaSri Academy
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none">
            Let’s Build the <span className="text-[#073D5E]">Foundation</span> of Your Future.
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Reach out to our academic experts or institutional support team. We're here to guide every step of your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 2. Professional Contact Form (7 Columns) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-[#073D5E]/5 rounded-2xl text-[#073D5E]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Send an Inquiry</h3>
                <p className="text-sm text-slate-400 font-bold flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-emerald-500" /> Estimated response: 2 hours
                </p>
              </div>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" className="h-14 rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all text-sm font-semibold focus:ring-[#073D5E]" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</Label>
                  <Input id="email" type="email" placeholder="email@example.com" className="h-14 rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all text-sm font-semibold focus:ring-[#073D5E]" />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="interest" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Area of Interest</Label>
                <Input id="interest" placeholder="e.g., IIT JEE, NEET, Foundation" className="h-14 rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all text-sm font-semibold" />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can our counselors help you today?"
                  className="min-h-[160px] rounded-[2rem] border-slate-100 bg-slate-50/50 focus:bg-white transition-all p-6 text-sm font-semibold"
                />
              </div>
              
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button className="w-full h-16 bg-[#073D5E] hover:bg-[#052d45] text-white font-black rounded-2xl text-lg shadow-xl shadow-[#073D5E]/20 flex items-center justify-center gap-3 transition-all group">
                  Send Your Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* 3. Bento Information Hub (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Action Bento Cards */}
            <div className="flex flex-col gap-4">
              {/* Speak To Us Card */}
              <motion.div 
                variants={itemVariants} 
                whileHover={{ y: -5 }} 
                className="bg-[#073D5E] p-8 rounded-[2rem] text-white overflow-hidden relative group shadow-2xl shadow-[#073D5E]/20"
              >
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Phone className="w-32 h-32" />
                </div>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-3">Speak to Us</p>
                <h4 className="text-3xl font-black mb-1">+91 8600105949</h4>
                <p className="text-xs text-slate-400 font-bold">Mon - Sat (9:00 AM - 7:00 PM)</p>
              </motion.div>

              {/* Direct Email Card */}
              <motion.div 
                variants={itemVariants} 
                whileHover={{ y: -5 }} 
                className="bg-[#E21E26] p-8 rounded-[2rem] text-white overflow-hidden relative group shadow-2xl shadow-[#E21E26]/20"
              >
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Mail className="w-32 h-32" />
                </div>
                <p className="text-[10px] font-bold text-red-200 uppercase tracking-[0.2em] mb-3">Direct Email</p>
                <h4 className="text-xl sm:text-2xl font-black mb-1 break-words leading-tight">office@vidhyasri-academy.com</h4>
                <p className="text-xs text-red-100/60 font-bold tracking-tight">Guaranteed response within 2 hours</p>
              </motion.div>
            </div>

            {/* Corporate Location Card */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-[#073D5E] group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-[0.2em] mb-2">Corporate Office</h4>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed">
                    No. 34/1, Upkar Chambers, R.V. Road<br />
                    Basavanagudi, Bengaluru, KA - 560004
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">HSR Layout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Mumbai Branch</span>
                </div>
              </div>
            </motion.div>

            {/* Secondary Utility Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <motion.div whileHover={{ x: 5 }} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer group flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-orange-500" />
                    <span className="font-black text-slate-800 text-[10px] uppercase tracking-wider">Schedule Demo</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#073D5E] group-hover:translate-x-1 transition-all" />
               </motion.div>

               <motion.div whileHover={{ x: 5 }} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 cursor-pointer group flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-indigo-500" />
                    <span className="font-black text-slate-800 text-[10px] uppercase tracking-wider">Investor Portal</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#073D5E] group-hover:translate-x-1 transition-all" />
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}