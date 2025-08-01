import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import "./suctom.css";

const values = [
  {
    title: "Student First",
    description: "We constantly push the boundaries of what's possible in educational technology, pioneering new approaches to learning and teaching students first."
  },
  {
    title: "Hard Work",
    description: "Every feature we build and decision we make prioritizes improving outcomes for learners of all ages, backgrounds, and abilities."
  },
  {
    title: "Accountability",
    description: "We harness the power of data analytics to provide actionable insights while maintaining the highest standards of privacy and security with their results."
  },
  {
    title: "Inclusive by Design",
    description: "We create solutions that are accessible to all, ensuring equitable access to quality education regardless of circumstances."
  },
  {
    title: "Research-Backed",
    description: "Our approaches are grounded in educational research and cognitive science, with continuous assessment of efficacy."
  },
  {
    title: "Collaborative Spirit",
    description: "We believe in the power of partnership with educators, institutions, and communities to create lasting positive change."
  }
];

export default function Values() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-gray-600">
              These core principles guide everything we do as we work to transform education 
              through technology and make a positive impact on learners worldwide.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}