import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left section */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Vijay Kumar. All rights reserved.</p>
        </div>

        {/* Right section: Social media and contact */}
        <div className="flex space-x-6 mt-4 pl-4 md:mt-0">
          <a href="https://github.com/vijay-tech-colab" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/in/vijay-kumar" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com/vijay_kumar" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-500" />
          </a>
          <a href="mailto:vijay@example.com">
            <FaEnvelope className="text-2xl hover:text-blue-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
