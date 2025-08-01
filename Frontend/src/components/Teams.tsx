import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Rangappa from "../assets/Rangappa.jpg";
import { Link } from "react-router-dom";
import PrasadRao from "../assets/Parsadrao.jpg"
import Asutosh from "../assets/Asutosh.jpg"
import Sanjay from "../assets/Sanjay.jpg"
import Anuradha from "../assets/Anuradha.jpg";

const teamMembers = [
  {
    name: "Prof.M.Rangappa",
    role: "Managing Director",
    avatar: Rangappa,
    initials: "MD",
    bio: "We don't just educate—we engineer potential, catalyze innovation, and nurture leadership for the 21st-century world.",
    categories: ["Leadership", "Strategy"],
  },
  {
    name: "Prasad Rao Kotnani",
    role: "National Director Admin",
    avatar: PrasadRao,
    initials: "MD",
    bio: "With vision to see it, resilience to endure it, and execution to achieve it — extraordinary success becomes possible",
    categories: ["Leadership", "Strategy"],
  },
  {
    name: "Sanjay Shukla",
    role: "National Director Operation",
    avatar: Sanjay,
    initials: "SS",
    bio: "Sanjay is a dedicated educator with a wealth of experience in academic leadership and a commitment to student success.",
    categories: ["Leadership", "Academics"],
  },
  {
    name: "Ashutosh Kumar",
    role: "Director Business Development",
    avatar: Asutosh,
    initials: "AK",
    bio: "Ashutosh is a passionate educator with over 10 years of experience, specializing in JEE Mains, NDA, Olympiads, and CBSE board preparation.",
    categories: ["Leadership", "Academics"],
  },

  {
    name: "Anuradha",
    role: "National Director Academics",
    avatar: Anuradha,
    initials: "NA",
    bio: "Anuradha is a visionary leader with a passion for transforming education through innovative approaches and technology.",
    categories: ["Leadership", "Academics"],
  },

];

export default function TeamSection() {
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
                Management Team
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Our diverse team of educators, technologists, and visionaries is
              united by a shared passion for transforming education through
              innovation.
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
                    <a href={`/learn-more`} className="text-blue-600 hover:underline">
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
  );
}
