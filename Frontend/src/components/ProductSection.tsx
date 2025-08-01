import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductSection() {
  return (
    <section id="product" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-[#073D5E] bg-clip-text text-transparent">Innovative</span> Platform
            </h2>
            <p className="text-lg text-gray-600">
              Experience our comprehensive education technology ecosystem designed to 
              transform learning experiences for both educators and students.
            </p>
          </motion.div>
        </div>
        
        <Tabs defaultValue="students" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="students">For Students</TabsTrigger>
            <TabsTrigger value="teachers">For Teachers</TabsTrigger>
            <TabsTrigger value="institutions">For Institutions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="students" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                  <span>For Students</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Personalized Learning Journey</h3>
                <p className="text-gray-600">
                  Our platform adapts to each student's unique learning style, pace, and interests, 
                  creating a tailored educational experience that maximizes engagement and knowledge retention.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">AI-driven personalized learning paths</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Interactive exercises and gamified content</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Real-time progress tracking and feedback</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Collaborative learning spaces and peer support</span>
                  </li>
                </ul>
                <div>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Student dashboard mockup */}
                    <div className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
                      <div className="font-medium">Student Dashboard (LMS)</div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Your Learning Path</h4>
                        <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{width: '65%'}}></div>
                        </div>
                        <div className="flex justify-between mt-1 text-sm">
                          <span className="text-gray-600">65% Complete</span>
                          <span className="text-blue-600 font-medium">Next: Advanced Concepts</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-gray-700 mb-1">Today's Tasks</div>
                          <div className="text-2xl font-bold text-blue-600">4</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-gray-700 mb-1">Weekly Goal</div>
                          <div className="text-2xl font-bold text-indigo-600">85%</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Recommended Lessons</h4>
                        <div className="space-y-2">
                          <div className="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
                            <span className="font-medium">Advanced Mathematics</span>
                            <Button variant="ghost" size="sm" className="h-8 text-blue-600">
                              Start
                            </Button>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                            <span className="font-medium">Scientific Methods</span>
                            <Button variant="ghost" size="sm" className="h-8 text-blue-600">
                              Start
                            </Button>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                            <span className="font-medium">Literature Analysis</span>
                            <Button variant="ghost" size="sm" className="h-8 text-blue-600">
                              Start
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 h-20 w-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl rotate-12 shadow-lg hidden md:block"></div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="teachers" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">
                  <span>For Teachers</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Powerful Teaching Tools</h3>
                <p className="text-gray-600">
                  Empower educators with comprehensive tools that simplify administrative tasks, 
                  provide valuable insights into student performance, and facilitate more effective teaching methods.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Automated grading and performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Customizable curriculum builder</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Interactive classroom management</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Integrated communication platform</span>
                  </li>
                </ul>
                <div>
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Teacher dashboard mockup */}
                    <div className="bg-indigo-600 text-white px-6 py-4 flex items-center justify-between">
                      <div className="font-medium">Teacher Dashboard (LMS)</div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Class Performance</h4>
                        <div className="h-24 flex items-end space-x-2">
                          <div className="w-1/6 bg-blue-200 h-[40%] rounded-t"></div>
                          <div className="w-1/6 bg-blue-300 h-[60%] rounded-t"></div>
                          <div className="w-1/6 bg-blue-400 h-[80%] rounded-t"></div>
                          <div className="w-1/6 bg-blue-500 h-[95%] rounded-t"></div>
                          <div className="w-1/6 bg-blue-600 h-[75%] rounded-t"></div>
                          <div className="w-1/6 bg-blue-700 h-[50%] rounded-t"></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>Module 1</span>
                          <span>Module 2</span>
                          <span>Module 3</span>
                          <span>Module 4</span>
                          <span>Module 5</span>
                          <span>Module 6</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Student Progress Alerts</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between bg-yellow-50 p-2 rounded-lg border border-yellow-100">
                            <span className="font-medium text-sm">3 students falling behind in Math</span>
                            <Button variant="outline" size="sm" className="h-8 text-yellow-600 border-yellow-200">
                              View
                            </Button>
                          </div>
                          <div className="flex items-center justify-between bg-green-50 p-2 rounded-lg border border-green-100">
                            <span className="font-medium text-sm">5 students excelling in Science</span>
                            <Button variant="outline" size="sm" className="h-8 text-green-600 border-green-200">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-lg font-semibold">Upcoming Classes</h4>
                          <Button variant="ghost" size="sm" className="h-6 text-indigo-600 p-0">
                            View All
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-gray-50 p-2 rounded-lg">
                            <div className="flex justify-between">
                              <span className="font-medium">Advanced Biology</span>
                              <span className="text-gray-500 text-sm">10:00 AM</span>
                            </div>
                            <div className="text-sm text-gray-600">Class 10-A • 28 Students</div>
                          </div>
                          <div className="bg-gray-50 p-2 rounded-lg">
                            <div className="flex justify-between">
                              <span className="font-medium">Physics Lab</span>
                              <span className="text-gray-500 text-sm">1:30 PM</span>
                            </div>
                            <div className="text-sm text-gray-600">Class 11-B • 24 Students</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 h-20 w-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl -rotate-12 shadow-lg hidden md:block"></div>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="institutions" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-medium">
                  <span>For Institutions</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Institutional Excellence</h3>
                <p className="text-gray-600">
                  Transform your educational institution with a comprehensive platform that streamlines administration, 
                  enhances teaching and learning, and provides data-driven insights for continuous improvement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Centralized data management system</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Institution-wide analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Customizable implementation to fit your needs</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                    <span className="text-gray-700">Seamless integration with existing systems</span>
                  </li>
                </ul>
                <div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Institution dashboard mockup */}
                    <div className="bg-purple-600 text-white px-6 py-4 flex items-center justify-between">
                      <div className="font-medium">Institution Dashboard (LMS)</div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-purple-50 p-3 rounded-lg text-center">
                          <div className="text-sm font-medium text-gray-700 mb-1">Students</div>
                          <div className="text-2xl font-bold text-purple-600">1,248</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <div className="text-sm font-medium text-gray-700 mb-1">Teachers</div>
                          <div className="text-2xl font-bold text-blue-600">64</div>
                        </div>
                        <div className="bg-pink-50 p-3 rounded-lg text-center">
                          <div className="text-sm font-medium text-gray-700 mb-1">Courses</div>
                          <div className="text-2xl font-bold text-pink-600">86</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Performance Overview</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium">Average GPA</span>
                              <span className="text-green-600">8.2/10</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 rounded-full" style={{width: '85%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium">Graduation Rate</span>
                              <span className="text-blue-600">92%</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 rounded-full" style={{width: '92%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium">Student Satisfaction</span>
                              <span className="text-purple-600">4.7/5.0</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-purple-500 rounded-full" style={{width: '94%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-lg font-semibold">Resource Utilization</h4>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
                              </div>
                              <div className="text-sm font-medium text-gray-700">Library</div>
                              <div className="text-lg font-semibold">84% Usage</div>
                            </div>
                            <div>
                              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                              </div>
                              <div className="text-sm font-medium text-gray-700">Labs</div>
                              <div className="text-lg font-semibold">76% Usage</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 h-20 w-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl rotate-12 shadow-lg hidden md:block"></div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}