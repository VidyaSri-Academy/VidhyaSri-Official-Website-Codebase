import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import Aarav from "../assets/Aarav.jpg";
import Diya from "../assets/Divya.jpg"; 
import Rahul from "../assets/Rahul.jpg";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Engineering Student, BGS",
    avatar: Aarav,
    initials: "AM",
    content: "Using Vidhyasri Platform helped me personalize my study plan and stay ahead in competitive exams. Their recommendations and real-time feedback made my preparation smarter and more focused."
  },
  {
    name: "Diya Sharma",
    role: "B.Com Student, The Oxford Educational Institute",
    avatar: Diya,
    initials: "DS",
    content: "Balancing discipline was tough, but this platform simplified it all. The intuitive dashboard, skill-based learning modules, and expert mentorship gave me a clear edge in college selection."
  },
  {
    name: "Rahul Iyer",
    role: "Class 12 Student, Baldwin Methodist College",
    avatar: Rahul,
    initials: "RI",
    content: "What I loved most was how engaging learning became! The platform turned boring topics into interactive sessions. It's like having a personal tutor 24/7—my board exam confidence has skyrocketed."
  }
];


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Top</span> Students.
            </h2>
            <p className="text-lg text-gray-600">
              Discover how our students have transformed their institutions through our proven expertise!
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-md h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.content}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}