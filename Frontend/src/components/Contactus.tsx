import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about our platform or interested in a demo? 
              Our team is ready to assist you and explore how we can help your institution.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Input id="institution" placeholder="Your school or organization" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your needs or questions..."
                  rows={6}
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Send Message
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Information</h3>
              <Card className="bg-white shadow-md border-0">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-600 mr-3 shrink-0" />
                      <div>
                        <h4 className="font-medium">Corporate Office</h4>
                        <p className="text-gray-600">
                          No. 34/1, Upkar Chambers, R.V. Road<br />
                          Basavanagudi, Bengaluru, Karnataka<br />
                          India - 560004
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-600 mr-3 shrink-0" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-gray-600">
                          +918600105949
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-600 mr-3 shrink-0" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">
                          info@vidhyasriacademy.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Building className="h-6 w-6 text-blue-600 mr-3 shrink-0" />
                      <div>
                        <h4 className="font-medium">Regional Offices</h4>
                        <p className="text-gray-600">
                          • HSR Bangalore • Bandra Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Schedule a Demo</h3>
              <p className="text-gray-600 mb-6">
                See our platform in action with a personalized demonstration 
                tailored to your institution's specific needs.
              </p>
              <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                Book a Demo
              </Button>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Investor Relations</h3>
              <p className="text-gray-600 mb-6">
                Interested in investment opportunities? Contact our investor relations 
                team for more information about our growth and future plans.
              </p>
              <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                Investor Information
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
