import { motion } from "framer-motion";
import OurStory from "./Ourstory";
import Values from "./Values";
import TeamSection from "./Teams";
import Mentors from "./Mentors";

export default function About() {
  return (
    <>
      <section className="pt-24 lg:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Vidhyasri
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We're on a mission to transform education through innovative
              technology, making quality learning accessible, engaging, and
              effective for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-gray-700">Founded in 2022</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="text-gray-700">50+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-700">Global Presence</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span className="text-gray-700">100K+ Active Users</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <OurStory />
      </section>

      <section>
        <div>
          <Values />
        </div>
      </section>

      <section>
        <TeamSection />
      </section>

      <section>
        <Mentors />
      </section>

    </>
  );
}
