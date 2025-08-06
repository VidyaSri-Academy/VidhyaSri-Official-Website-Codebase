import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import CourseDropdown from "./CourseDropdown";
import vidicon from "../../assets/vidicon.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed mx-auto py-4 top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="ml-20">
        <a href="/" className="flex items-center mr-20 -my-20">
          <img src={vidicon} alt="Vidyasri Logo" className="h-40 w-auto cursor-pointer" />
        </a>
      </div>

      <div className="container mx-auto px-4 flex items-center text-transform: capitalize justify-end gap-16 font-['sans-serif']">
        {/* Desktop Navigation */}
        <nav className="hidden gap-4 lg:flex items-center space-x-8 text-[#073D5E]">
          <a
            href="/"
            className="hover:text-[#1875BA] font-medium transition-colors"
          >
            Home
          </a>
          <CourseDropdown />
          <Link
            to="#product"
            className="hover:text-[#1875BA] font-medium transition-colors cursor-pointer"
          >
            Product
          </Link>
          <Link
            to="#features"
            className="hover:text-[#1875BA] font-medium transition-colors"
          >
            Features
          </Link>
          <a
            href="/aboutus"
            className="hover:text-[#1875BA] font-medium transition-colors"
          >
            About Us
          </a>
          {/* <Link
            to="#pricing"
            className="hover:text-[#1875BA] font-medium transition-colors"
          >
            Pricing
          </Link> */}
          <Link
            to="#contact"
            className="hover:text-[#1875BA] font-medium transition-colors"
          >
            Contact us
          </Link>
          <Link
            to="#contact"
            className="hover:text-[#1875BA] font-medium transition-colors"
          >
            Career
          </Link>
          <Link
            to="#contact"
            className="hover:text-[#1875BA] font-medium transition-colors"
          >
            Investor Relation
          </Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-[#1875BA] text-[#1875BA] hover:bg-[#1875BA] hover:text-white cursor-pointer transition-colors"
          >
            Unlock a Demo
          </Button>
          <Button className="bg-gradient-to-r from-[#073D5E] to-[#1875BA] hover:from-[#005066] hover:to-[#155a92] cursor-pointer text-white">
            Partner With Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#073D5E]" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col text-transform: capitalize space-y-4 font-['Avenir','Inter','sans-serif']">
            <a
              href="/"
              className="text-[#073D5E] hover:text-[#1875BA] py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <div className="border-b pb-1">
              <div className="font-medium text-[#073D5E] mb-2">Courses</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-[#1875BA] py-1 block"
                  onClick={() => setIsOpen(false)}
                >
                  K-12 Education
                </Link>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-[#1875BA] py-1 block"
                  onClick={() => setIsOpen(false)}
                >
                  Higher Education
                </Link>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-[#1875BA] py-1 block"
                  onClick={() => setIsOpen(false)}
                >
                  Professional Development
                </Link>
              </div>
            </div>
            <Link
              to="#product"
              className="text-[#073D5E] hover:text-[#1875BA] py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Product
            </Link>
            <Link
              to="#features"
              className="text-[#073D5E] hover:text-[#1875BA] py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/aboutus"
              className="text-[#073D5E] hover:text-[#1875BA] py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            {/* <Link
              to="#pricing"
              className="text-[#073D5E] hover:text-[#1875BA] py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link> */}
            <Link
              to="#contact"
              className="text-[#073D5E] hover:text-[#1875BA] py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button
                variant="outline"
                className="border-[#1875BA] text-[#1875BA] hover:bg-[#1875BA] hover:text-white transition-colors w-full"
              >
                Unlock a Demo
              </Button>
              <Button className="bg-gradient-to-r from-[#073D5E] to-[#1875BA] hover:from-[#005066] hover:to-[#155a92] text-white w-full">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
