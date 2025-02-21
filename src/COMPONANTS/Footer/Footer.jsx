import { useContext } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/context-provider";

const Footer = () => {
  const {user} = useContext(AuthContext)
  return (
    <footer className="py-2 w-full bg-[#FDF3E7] rounded-t-2xl">
      <div className="container mx-auto px-6 flex flex-col  md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Vijay Kumar</h2>
          <p className="text-gray-400 text-sm">Full-Stack Developer | MERN Stack</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 text-center">
          <Link to="/" className="text-gray-300 hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-blue-400 transition">About</Link>
          <Link to="/skills" className="text-gray-300 hover:text-blue-400 transition">Skills</Link>
          <Link to="/projects" className="text-gray-300 hover:text-blue-400 transition">Projects</Link>
          <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition">Contact</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition">
            <FaGithub />
          </a>
          <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition">
            <FaLinkedin />
          </a>
          <a href={user.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-2xl transition">
            <FaTwitter />
          </a>
          <a href={`mailto:${user.email}`} className="text-gray-300 hover:text-white text-2xl transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Vijay Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
