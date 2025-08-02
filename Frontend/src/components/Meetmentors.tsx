
import { motion } from "framer-motion";
import Mentor1 from "./Biography/Rajesh";


export default function meetmentors() {
  return (
      <section id="team" className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Team of Mentors
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Our diverse team of educators, leaders, and innovators.
              </p>
            </motion.div>
          </div>
        </div>

        <Mentor1 />
      </section>
  );
}
