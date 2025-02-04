import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaCode,
  FaHome,
  FaInfoCircle,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // To toggle mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu
  };

  return (
    <>
      <header className="bg-[#E8F5E9] px-4 py-3 shadow-lg fixed w-full z-1000 top-0 left-0">
        <div className="container mx-auto flex justify-between items-center ">
          <h1 className="text-gray-800 text-2xl font-bold flex items-center">
            Vijay
            <span className="ml-2 text-3xl text-blue-500">
              <FaCode />
            </span>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 ">
            <Link
              to="/"
              className="text-gray-800 flex items-center gap-2 hover:text-gray-600"
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 flex items-center gap-2 hover:text-gray-600"
            >
              <FaInfoCircle /> About
            </Link>
            <Link
              to="/skills"
              className="text-gray-800 flex items-center gap-2 hover:text-gray-600"
            >
              <FaTools /> Skills
            </Link>
            <Link
              to="/projects"
              className="text-gray-800 flex items-center gap-2 hover:text-gray-600"
            >
              <FaProjectDiagram /> Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 flex items-center gap-2 hover:text-gray-600"
            >
              <FaEnvelope /> Contact
            </Link>
          </nav>


          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>

        {/* Mobile Navigation (hidden by default, shown when toggled) */}
        <div
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} mt-4`}
        >
          <nav className="space-y-4">
            <Link
              to="/"
              className="block text-gray-800 flex items-center gap-2 hover:text-gray-600"
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-800 flex items-center gap-2 hover:text-gray-600"
            >
              <FaInfoCircle /> About
            </Link>
            <Link
              to="/skills"
              className="block text-gray-800 flex items-center gap-2 hover:text-gray-600"
            >
              <FaTools /> Skills
            </Link>
            <Link
              to="/projects"
              className="block text-gray-800 flex items-center gap-2 hover:text-gray-600"
            >
              <FaProjectDiagram /> Projects
            </Link>
            <Link
              to="/contact"
              className="block text-gray-800 flex items-center gap-2 hover:text-gray-600"
            >
              <FaEnvelope /> Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
