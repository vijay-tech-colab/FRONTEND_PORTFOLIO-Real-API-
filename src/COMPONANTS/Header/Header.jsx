import { useState } from "react";
import { Link } from "react-router-dom";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { RiHome4Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { MdOutlineContactMail } from "react-icons/md";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); 
  };

  return (
    <>
      <header className="bg-[#FFFDE7] px-4 py-3 shadow-lg fixed w-full z-50 top-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-gray-800 text-2xl font-bold flex items-center">
            Vijay
            <span className="ml-2 text-3xl text-blue-500">
              <FaCode />
            </span>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-800 flex items-center gap-2 hover:text-blue-100">
              <RiHome4Line /> Home
            </Link>
            <Link to="/about" className="text-gray-800 flex items-center gap-2 hover:text-blue-100">
              <CgProfile /> About
            </Link>
            <Link to="/skills" className="text-gray-800 flex items-center gap-2 hover:text-blue-100">
              <GiSkills /> Skills
            </Link>
            <Link to="/projects" className="text-gray-800 flex items-center gap-2 hover:text-blue-100">
              <GoProject /> Projects
            </Link>
            <Link to="/contact" className="text-gray-800 flex items-center gap-2 hover:text-blue-100">
              <MdOutlineContactMail /> Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-800 focus:outline-none"
            title="Menu"
          >
            {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation (Bottom Slide Animation) */}
      <div
        className={`md:hidden bg-[#FFFDE7]  rounded-t-3xl inset-shadow-sm fixed z-100 bottom-0 left-0 w-full shadow-lg p-5 transform ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="space-y-4 text-center">
          <div className="flex items-center  justify-center shadow-sm rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
            <TfiLayoutLineSolid size={40}  width={1000}/> 
          </div>
          <Link to="/" className="block text-gray-800 flex items-center gap-4 justify-center hover:text-blue-100">
            <RiHome4Line /> Home
          </Link>
          <Link to="/about" className="block text-gray-800 flex items-center gap-4 justify-center hover:text-blue-100">
            <CgProfile /> About
          </Link>
          <Link to="/skills" className="block text-gray-800 flex items-center gap-4 justify-center hover:text-blue-100">
            <GiSkills /> Skills
          </Link>
          <Link to="/projects" className="block text-gray-800 flex items-center gap-4 justify-center hover:text-blue-100">
            <GoProject /> Projects
          </Link>
          <Link to="/contact" className="block text-gray-800 flex items-center gap-4 justify-center hover:text-blue-100">
            <MdOutlineContactMail /> Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
