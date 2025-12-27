import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight,
  Globe,
  ShieldCheck,
  Zap
} from "lucide-react";
import vidicon from "./image.png"; // Using imported variable to avoid 404

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: "Smart Learning Platform", href: "#" },
      { name: "Adaptive Curriculum", href: "#" },
      { name: "Interactive Content", href: "#" },
    ],
    company: [
      { name: "About VidyaSri", href: "/aboutus" },
      { name: "Our Expert Team", href: "/aboutus" },
      { name: "Careers", href: "#" },
      { name: "Investor Relations", href: "#" },
    ],
    resources: [
      { name: "Learning Blog", href: "#" },
      { name: "Success Stories", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Contact Support", href: "#" },
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        {/* 1. Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <img src={vidicon} alt="Logo" className="h-12 w-auto transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute -inset-1 bg-[#1A5D7A]/5 rounded-full blur-md" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-black tracking-tight text-[#1A5D7A] leading-none text-left">VIDHYASRI</span>
                <span className="text-[9px] font-bold text-[#C41E3A] tracking-[0.05em] uppercase leading-tight">The Foundation for Excellence</span>
              </div>
            </Link>

            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              Transforming global education through MapSystem technology. 
              Making excellence the standard for every learner, everywhere.
            </p>

            <div className="flex items-center gap-3">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2 flex flex-col">
            <FooterHeading>Products</FooterHeading>
            <ul className="space-y-4 flex-1">
              {footerLinks.products.map(link => (
                <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-4 flex-1">
              {footerLinks.company.map(link => (
                <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <FooterHeading>Support</FooterHeading>
            <ul className="space-y-4 flex-1">
              {footerLinks.resources.map(link => (
                <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Pulse (Novel Element) */}
          <div className="lg:col-span-2 flex flex-col">
            <FooterHeading>Contact</FooterHeading>
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3 text-slate-500 group cursor-pointer hover:text-[#1A5D7A] transition-colors">
                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-[#1A5D7A]/5"><Phone size={14}/></div>
                <span className="text-sm font-bold">+91 8600105949</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 group cursor-pointer hover:text-[#1A5D7A] transition-colors">
                <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-[#1A5D7A]/5"><Mail size={14}/></div>
                <span className="text-sm font-bold break-all">info@vidhyasri.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Trust Strip (Novel Section) */}
        <div className="mt-20 py-8 border-y border-slate-50 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#1A5D7A]"/><span className="text-xs font-black uppercase tracking-widest text-slate-400">Secure Payments</span></div>
           <div className="flex items-center gap-2"><Globe className="w-5 h-5 text-[#1A5D7A]"/><span className="text-xs font-black uppercase tracking-widest text-slate-400">Global Standards</span></div>
           <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-[#1A5D7A]"/><span className="text-xs font-black uppercase tracking-widest text-slate-400">MapSystems Powered</span></div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © {currentYear} VidhyaSri Academy @ MAPSystems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="#" className="text-slate-400 hover:text-[#C41E3A] text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-slate-400 hover:text-[#C41E3A] text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</Link>
            <Link to="#" className="text-slate-400 hover:text-[#C41E3A] text-[10px] font-black uppercase tracking-widest transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** * Helper Components for Visual Consistency
 */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="pl-3 text-[#1A5D7A] text-[11px] font-black uppercase tracking-[0.2em] mb-8">
      {children}
    </h4>
  );
}

function FooterLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <li>
      <motion.a
        href={href}
        whileHover={{ x: 4 }}
        className="text-slate-500 hover:text-[#1A5D7A] text-sm font-bold flex items-center gap-2 transition-colors group"
      >
        <div className="w-1 h-1 rounded-full bg-[#C41E3A] opacity-0 group-hover:opacity-100 transition-opacity" />
        {children}
      </motion.a>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -4, backgroundColor: "#1A5D7A", color: "#fff" }}
      className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-300 shadow-sm"
    >
      {icon}
    </motion.a>
  );
}