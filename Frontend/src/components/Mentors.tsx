import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Rajeshr from "../assets/Rajeshr.jpg";
import Philp from "../assets/Philp.png";

const teamMembers = [
  {
    id: "rajesh-dhktode",
    name: "Mr. Rajesh R. Dhaktode",
    role: "Mentor",
    avatar: Rajeshr,
    initials: "MD",
    bio: "Rajesh brings 30+ years of expertise in Operations and HR across hospitality, cruise liners, and theme parks. He has led HR functions for major brands like Adlabs Imagica, P&O Cruises, and Delta Corp. With global experience across India, the Middle East, and Europe, he builds service-driven organizations. His strength lies in people leadership, business transformation, and fostering a winning culture.",
    categories: ["Leadership", "Strategy"],
  },
  {
    id: "philip-antonio",
    name: "Mr. Philip Antonio",
    role: "Mentor",
    avatar: Philp,
    initials: "PA",
    bio: "A commerce graduate with advanced management education from Xavier Institute and Cornell University, I bring over 39 years of leadership in the hospitality industry. As CEO, I focus on innovation, strategic growth, and building agile, purpose-driven teams. My approach blends bold ambition with thoughtful execution, turning challenges into opportunities. I’m also passionate about leadership development and championing diversity across organizations.",
    categories: ["Entrepreneurship"],
  },
];

export default function Mentors() {
  const categories = [
    "All",
    "Leadership",
    "Tech",
    "Product",
    "Design",
    "Sales",
    "Data",
    "Finance",
  ];

  return (
    <>
      <div className="h-1 w-32 mx-auto my-8 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 opacity-70"></div>
      <section id="team" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Mentors
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Our accomplished business mentors blend industry expertise,
                entrepreneurial vision, and a commitment to excellence—guiding
                the next generation of leaders to achieve remarkable success.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-md h-full">
                  <CardContent className="p-6 space-y-4 flex flex-col h-full">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-24 h-24 mb-4 mask-cover">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xl">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-bold text-xl text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                    </div>

                    <p className="text-gray-600">{member.bio}</p>

                    <div className="flex flex-wrap gap-2 justify-center mt-auto">
                      {member.categories.map((category, catIndex) => (
                        <Badge
                          key={catIndex}
                          variant="outline"
                          className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-center text-sm font-medium text-gray-500">
                    <a href={`/learn-more/${member.id}`} className="text-blue-600 hover:underline">
                      Click Here To Learn More
                    </a>
                  </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
