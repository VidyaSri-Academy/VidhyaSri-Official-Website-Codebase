import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <p className="text-lg text-gray-700 font-['sans-serif']">
              In a rapidly evolving world shaped by technological advancements,
              the education sector plays a pivotal role in preparing
              future-ready minds. VidhyaSri is a respected name in this domain,
              committed to delivering innovative and future-focused educational
              solutions to leading schools.
            </p>
            <p className="text-lg text-gray-700 font-['sans-serif']">
              Our flagship initiative, the Advanced Integrated Program (AIP),
              brings structured, on-site training directly to school campuses.
              This program nurtures logical reasoning and scientific aptitude in
              students from an early age, guiding them through a critical
              academic transition—from foundational learning to a more mature
              and analytical academic approach. We recognize this as the crucial
              stage where students progress from text-based academics to a more
              advanced and holistic educational experience.
            </p>
            <p className="text-lg text-gray-700 font-['sans-serif']">
              Under the AIP umbrella, we offer Pre-Foundation, Foundation, and
              Post-Foundation courses tailored for students from Grades 6 to 12,
              as well as PU I and PU II. Our mission is to empower aspiring
              learners who aim to excel in careers spanning science, technology,
              engineering, medicine, and other competitive domains, at both
              state and national levels.
            </p>
            <div className="pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <span className="text-gray-500 italic">
                  "Education is the most powerful weapon which you can use to
                  change the world."
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)]"
                  style={{ backgroundSize: "20px 20px" }}
                ></div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div className="h-0.5 flex-1 bg-blue-200"></div>
                    <div className="text-blue-600 font-semibold">2022</div>
                  </div>
                  <div className="ml-6 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Founded in Bengaluru, Karnataka, India
                    </h3>
                    <p className="text-gray-600">
                      Initial team of 5 educators and developers created our
                      first prototype
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div className="h-0.5 flex-1 bg-indigo-200"></div>
                    <div className="text-indigo-600 font-semibold">2023</div>
                  </div>
                  <div className="ml-6 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Series A Funding
                    </h3>
                    <p className="text-gray-600">
                      Secured ₹30L to expand our team and develop the core
                      platform
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div className="h-0.5 flex-1 bg-purple-200"></div>
                    <div className="text-purple-600 font-semibold">2024</div>
                  </div>
                  <div className="ml-6 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Expansion
                    </h3>
                    <p className="text-gray-600">
                      Expanded over 3 offices in Indian Cities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl rotate-12 shadow-lg hidden md:block"></div>
            <div className="absolute -bottom-8 -left-8 h-16 w-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg -rotate-12 shadow-lg hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
