import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function InvestorSection() {
  return (
    <section id="investor" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investment <span className="text-blue-200">Opportunity</span>
            </h2>
            <p className="text-xl text-blue-100">
              Join us in reshaping the future of education with a solution that's achieving 
              remarkable growth and making a real impact.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="border-0 bg-white/10 backdrop-blur-lg text-white h-full">
              <CardContent className="p-6 space-y-2">
                <Users className="h-10 w-10 mb-4 mx-auto text-blue-200" />
                <div className="text-4xl font-bold">50K+</div>
                <p className="text-blue-100">Active Users</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="border-0 bg-white/10 backdrop-blur-lg text-white h-full">
              <CardContent className="p-6 space-y-2">
                <TrendingUp className="h-10 w-10 mb-4 mx-auto text-blue-200" />
                <div className="text-4xl font-bold">15%-20%</div>
                <p className="text-blue-100">YoY Growth</p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="border-0 bg-white/10 backdrop-blur-lg text-white h-full">
              <CardContent className="p-6 space-y-2">
                <LineChart className="h-10 w-10 mb-4 mx-auto text-blue-200" />
                <div className="text-4xl font-bold">Rs.1cr</div>
                <p className="text-blue-100">ARR</p>
              </CardContent>
            </Card>
          </motion.div> */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="border-0 bg-white/10 backdrop-blur-lg text-white h-full">
              <CardContent className="p-6 space-y-2">
                <BarChart className="h-10 w-10 mb-4 mx-auto text-blue-200" />
                <div className="text-4xl font-bold">84%</div>
                <p className="text-blue-100">Customer Retention</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Growth Trajectory</h3>
            <p className="text-lg text-blue-100 mb-8">
              EduTech Innovate has demonstrated strong, consistent growth across all key metrics.
              Our platform is gaining rapid adoption in K-12, higher education, and corporate training
              markets with a clear path to capturing significant market share.
            </p>
            
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">User Acquisition</span>
                  <span>↑ 210% in 18 months</span>
                </div>
                <div className="h-2.5 bg-white/20 rounded-full">
                  <div className="h-full bg-blue-300 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Institution Partnerships</span>
                  <span>↑ 175% in 18 months</span>
                </div>
                <div className="h-2.5 bg-white/20 rounded-full">
                  <div className="h-full bg-blue-300 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Revenue Growth</span>
                  <span>↑ 142% in 18 months</span>
                </div>
                <div className="h-2.5 bg-white/20 rounded-full">
                  <div className="h-full bg-blue-300 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
            </div>
            
            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50">
              Download Investor Deck <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Funding Opportunity</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Series B Round</h4>
                <p className="text-blue-100 mb-4">
                  We're raising ₹15L+ to accelerate our growth, expand into new markets, 
                  and enhance our research capabilities to further personalize the learning experience.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-sm text-blue-100 mb-1">Round Opens</div>
                    <div className="font-bold">August 1, 2025</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="text-sm text-blue-100 mb-1">Target Close</div>
                    <div className="font-bold">October 15, 2025</div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-lg font-medium mb-4">Use of Funds</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Product Development</h5>
                      <p className="text-sm text-blue-100">Study Materials and Logistics in EdTech</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Market Expansion</h5>
                      <p className="text-sm text-blue-100">Enter new geographic regions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Team Growth</h5>
                      <p className="text-sm text-blue-100">Expand engineering and sales teams</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Research</h5>
                      <p className="text-sm text-blue-100">Further education efficacy studies</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 w-full">
                  Schedule Investor Meeting
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}