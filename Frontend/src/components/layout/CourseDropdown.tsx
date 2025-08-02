
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge"
import { Book, BrainCircuit, Target, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface CourseItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
}

const k12Courses: CourseItem[] = [
  {
    title: "Core Mathematics",
    description: "Fundamental math concepts from arithmetic to algebra and geometry",
    icon: Target,
    href: "#",
    badge: "Popular"
  },
  {
    title: "Science Explorer",
    description: "Hands-on science curriculum for elementary and middle school",
    icon: BrainCircuit,
    href: "#"
  },
  {
    title: "Reading & Language Arts",
    description: "Comprehensive literacy program with adaptive learning",
    icon: Book,
    href: "#"
  },
  {
    title: "Social Studies & History",
    description: "Interactive lessons on world history and social sciences",
    icon: UsersRound,
    href: "#"
  }
];

// const higherEdCourses: CourseItem[] = [
//   {
//     title: "Computer Science",
//     description: "Programming, algorithms, and software engineering fundamentals",
//     icon: BrainCircuit,
//     href: "#",
//     badge: "Trending"
//   },
//   {
//     title: "Business Administration",
//     description: "Management, marketing, finance, and entrepreneurship",
//     icon: Target,
//     href: "#"
//   },
//   {
//     title: "Health Sciences",
//     description: "Anatomy, physiology, and healthcare management",
//     icon: ScrollText,
//     href: "#"
//   },
//   {
//     title: "Data Science & Analytics",
//     description: "Statistical analysis, machine learning, and data visualization",
//     icon: GraduationCap,
//     href: "#"
//   }
// ];

// const professionalCourses: CourseItem[] = [
//   {
//     title: "Leadership Development",
//     description: "Strategic management and organizational leadership",
//     icon: UsersRound,
//     href: "#"
//   },
//   {
//     title: "Digital Marketing",
//     description: "Social media, SEO, content marketing, and analytics",
//     icon: Target,
//     href: "#"
//   },
//   {
//     title: "Software Engineering",
//     description: "Web development, mobile apps, and cloud computing",
//     icon: BrainCircuit,
//     href: "#",
//     badge: "New"
//   },
//   {
//     title: "Professional Certifications",
//     description: "Exam prep for industry-recognized credentials",
//     icon: GraduationCap,
//     href: "#"
//   }
// ];

const ListItem = ({
  className,
  title,
  description,
  icon: Icon,
  href,
  badge,
}: CourseItem & { className?: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100",
            className
          )}
        >
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1.5 rounded-md">
              <Icon className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-sm font-medium leading-none text-gray-900">{title}</div>
            {badge && (
              <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200">
                {badge}
              </Badge>
            )}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500 pl-8">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default function CourseDropdown() {
  return (
    <NavigationMenu className="lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>

          <NavigationMenuTrigger className=" hover:text-blue-600 font-medium text-transform: capitalize transition-colors">
            Courses
          </NavigationMenuTrigger>

          <NavigationMenuContent>

            <div className="grid grid-cols-3 w-[900px] gap-3 p-4 bg-white shadow-lg rounded-md">
              <div className="flex flex-col">
                <div className="mb-3 text-lg font-semibold text-gray-900">Foundation</div>
                <ul className="grid gap-3">
                  {k12Courses.map((course, index) => (
                    <ListItem
                      key={`k12-${index}`}
                      title={course.title}
                      description={course.description}
                      icon={course.icon}
                      href={course.href}
                      badge={course.badge}
                    />
                  ))}
                </ul>
                <div className="mt-auto pt-4 pl-3">
                  <Link to="#" className="text-sm font-medium text-blue-600 hover:underline">
                    View all K-12 courses →
                  </Link>
                </div>
              </div>
            </div>

            
          </NavigationMenuContent>

        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}