import { motion } from "framer-motion";
import "./suctom.css";

const values = [
  {
    tag: "Core Value",
    title: "Student First",
    description: "We constantly push the boundaries of what's possible in educational technology, pioneering new approaches to learning and teaching students first.",
    link: "Learn more",
    glow: "from-sky-400 to-blue-500"
  },
  {
    tag: "Commitment",
    title: "Hard Work",
    description: "Every feature we build and decision we make prioritizes improving outcomes for learners of all ages, backgrounds, and abilities.",
    link: "Learn more",
    glow: "from-sky-400 to-blue-500"
  },
  {
    tag: "Principle",
    title: "Accountability",
    description: "We harness the power of data analytics to provide actionable insights while maintaining the highest standards of privacy and security with their results.",
    link: "Learn more",
    glow: "from-sky-400 to-blue-500"
  },
  {
    tag: "Philosophy",
    title: "Inclusive by Design",
    description: "We create solutions that are accessible to all, ensuring equitable access to quality education regardless of circumstances.",
    link: "Learn more",
    glow: "from-sky-400 to-blue-500"
  },
  {
    tag: "Approach",
    title: "Research-Backed",
    description: "Our approaches are grounded in educational research and cognitive science, with continuous assessment of efficacy.",
    link: "Learn more",
    glow: "from-sky-400 to-blue-500"
  },
  {
    tag: "Culture",
    title: "Collaborative Spirit",
    description: "We believe in the power of partnership with educators, institutions, and communities to create lasting positive change.",
    link: "Learn more",
    glow: "from-sky-400 to-blue-500"
  }
];

export default function Values() {
  return (
    <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-6">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-blue-600 opacity-90">Our DNA</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
                  Our Values
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  These core principles guide everything we do as we work to transform education 
                  through innovative technology solutions.
                </p>
              </motion.div>
            </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className={`relative rounded-3xl p-[2px] group cursor-pointer`}
              style={{zIndex: 10 - index}}
            >
              {/* Glow border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.glow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
              ></div>

              {/* Card content */}
              <motion.div 
                className="relative bg-white rounded-3xl p-8 h-full shadow-sm border border-gray-100 group-hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.span 
                  className="inline-block text-xs bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1.5 rounded-full shadow-sm text-blue-700 font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {value.tag}
                </motion.span>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>

                <motion.button 
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-indigo-600 transition-colors group/btn cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {value.link} 
                  <motion.span
                    className="text-lg"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}