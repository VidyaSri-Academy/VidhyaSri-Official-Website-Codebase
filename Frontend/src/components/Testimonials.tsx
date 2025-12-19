import { Testimonial } from "@/components/ui/testimonial-card";
import { motion } from "framer-motion";

import Aarav from "../assets/Aarav.jpg";
import Diya from "../assets/Divya.jpg"; 
import Rahul from "../assets/Rahul.jpg";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Engineering Student",
    company: "BGS",
    image: Aarav,
    rating: 5,
    testimonial: "Using Vidhyasri Platform helped me personalize my study plan and stay ahead in competitive exams. Their recommendations and real-time feedback made my preparation smarter and more focused."
  },
  {
    name: "Diya Sharma",
    role: "B.Com Student",
    company: "The Oxford Educational Institute",
    image: Diya,
    rating: 5,
    testimonial: "Balancing discipline was tough, but this platform simplified it all. The intuitive dashboard, skill-based learning modules, and expert mentorship gave me a clear edge in college selection."
  },
  {
    name: "Rahul Iyer",
    role: "Class 12 Student",
    company: "Baldwin Methodist College",
    image: Rahul,
    rating: 5,
    testimonial: "What I loved most was how engaging learning became! The platform turned boring topics into interactive sessions. It's like having a personal tutor 24/7—my board exam confidence has skyrocketed."
  }
];


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-[#1A5D7A]">
              Trusted by <span className="text-[#E21E26]">Our Top</span> Students
            </h2>
            <p className="text-base md:text-lg text-slate-600 font-medium">
              Discover how our students have transformed their academic journey through our proven expertise!
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Testimonial 
                {...testimonial}
                className="h-full hover:border-[#1A5D7A]/20 bg-white"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}