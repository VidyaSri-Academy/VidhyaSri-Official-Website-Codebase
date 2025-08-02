import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, ChartBar, FileText, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-blue-600" />,
    title: "AI-Powered Learning Paths",
    description: "Customize learning journeys based on individual student progress, preferences, and goals with our advanced AI algorithms."
  },
  {
    icon: <ChartBar className="h-10 w-10 text-indigo-600" />,
    title: "Data-Driven Insights",
    description: "Gain actionable insights from comprehensive analytics dashboards that visualize student performance and learning trends."
  },
  {
    icon: <Users className="h-10 w-10 text-blue-600" />,
    title: "Collaborative Learning",
    description: "Enable seamless collaboration between students, teachers, and parents with integrated communication and feedback tools."
  },
  {
    icon: <Target className="h-10 w-10 text-indigo-600" />,
    title: "Personalized Assessments",
    description: "Create adaptive assessments that adjust difficulty based on student responses, providing a more accurate measure of knowledge."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
    title: "Interactive Content",
    description: "Engage students with multimedia-rich interactive content that makes learning more immersive and effective."
  },
  {
    icon: <FileText className="h-10 w-10 text-indigo-600" />,
    title: "Curriculum Management",
    description: "Easily develop, organize, and update curriculum materials with our intuitive content management system."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Features</span> That Transform Education
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive platform is designed to address the unique challenges of modern education,
              providing tools that empower educators and enhance student outcomes.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-md hover:shadow-xl transition-shadow h-full">
                <CardHeader className="pb-2">
                  <div className="mb-3">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}