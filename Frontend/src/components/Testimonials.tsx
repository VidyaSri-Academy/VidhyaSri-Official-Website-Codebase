import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Director of Educational Technology, Stanford University",
    avatar: "",
    initials: "SJ",
    content: "EduTech Innovate has revolutionized how we approach teaching and learning at our institution. The AI-driven insights have allowed us to identify learning gaps and address them proactively, resulting in a 32% improvement in student outcomes.",
  },
  {
    name: "James Rodriguez",
    role: "High School Principal, Phillips Academy",
    avatar: "",
    initials: "JR",
    content: "The platform's ability to personalize learning for each student while giving our teachers powerful tools to track progress has been game-changing. Our teachers spend less time on administrative tasks and more time doing what they love - teaching.",
  },
  {
    name: "Prof. Michael Chen",
    role: "Educational Research Lead, MIT",
    avatar: "",
    initials: "MC",
    content: "We've been studying educational technology solutions for years, and EduTech Innovate stands out with its evidence-based approach and rigorous commitment to measurable outcomes. The data analytics capabilities are particularly impressive.",
  },
  {
    name: "Lisa Thompson",
    role: "Education Board Member, New York State",
    avatar: "",
    initials: "LT",
    content: "Implementing EduTech Innovate across our district has led to more equitable learning outcomes for all students. The platform's ability to adapt to different learning needs has helped close achievement gaps we've struggled with for years.",
  },
  {
    name: "David Oladele",
    role: "Technology Director, International School of Lagos",
    avatar: "",
    initials: "DO",
    content: "As an international institution, we needed a solution that could work across cultural and language barriers. This platform has exceeded our expectations, with strong multilingual support and culturally adaptive content.",
  },
  {
    name: "Emma Watson",
    role: "Head of E-Learning, University of Oxford",
    avatar: "",
    initials: "EW",
    content: "The ROI on our EduTech Innovate implementation has been remarkable. Beyond the improvement in student performance, we've seen significant cost savings in administrative overhead and better resource allocation.",
  },
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
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Education Leaders</span> Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              Hear from administrators, teachers, and education experts who have transformed
              their institutions with our innovative platform.
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