import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
  FaGitAlt,
  FaNetworkWired,
  FaCogs,
  FaCodeBranch,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

const Timeline = () => {
  const techList = [
    {
      icon: <FaHtml5 title="HTML" />, name: "HTML",
      description: "The foundation of web development, used to structure content on the web."
    },
    {
      icon: <FaCss3Alt title="CSS" />, name: "CSS",
      description: "Used for styling web pages, making them visually appealing and responsive."
    },
    {
      icon: <FaJs title="JavaScript" />, name: "JavaScript",
      description: "Enables dynamic and interactive web applications with client-side scripting."
    },
    {
      icon: <FaReact title="React.js" />, name: "React.js",
      description: "A powerful JavaScript library for building fast and scalable user interfaces."
    },
    {
      icon: <FaBootstrap title="Bootstrap" />, name: "Bootstrap",
      description: "A popular CSS framework for building responsive and mobile-first web pages."
    },
    {
      icon: <SiTailwindcss title="Tailwind CSS" />, name: "Tailwind CSS",
      description: "A utility-first CSS framework for rapidly building custom designs."
    },
    {
      icon: <SiNextdotjs title="Next.js" />, name: "Next.js",
      description: "A React framework for building server-side rendered and static web applications."
    },
    {
      icon: <SiTypescript title="TypeScript" />, name: "TypeScript", 
      description: "A typed superset of JavaScript that enhances code quality and maintainability."
    },
    {
      icon: <FaNodeJs title="Node.js" />, name: "Node.js",
      description: "A runtime environment for executing JavaScript server-side applications."
    },
    {
      icon: <FaGitAlt title="Git & GitHub" />, name: "Git & GitHub", 
      description: "Version control tools for tracking changes and collaborating on code projects."
    },
    {
      icon: <FaDatabase title="DBMS (SQL & MySQL)" />, name: "DBMS (SQL & MySQL)", 
      description: "Database management systems for storing, retrieving, and managing structured data."
    },
    {
      icon: <FaNetworkWired title="Computer Networks" />, name: "Computer Networks", 
      description: "Understanding networking concepts to facilitate communication between devices."
    },
    {
      icon: <FaCogs title="Operating System" />, name: "Operating System",
      description: "Managing system resources and providing services for software applications."
    },
    {
      icon: <FaCodeBranch title="DSA" />, name: "DSA", 
      description: "Data structures and algorithms for solving computational problems efficiently."
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16 ">
      <h2 className="text-4xl font-bold text-center mb-12">
        Technology Timeline
      </h2>

      <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 relative ">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full rounded-2xl"></div>

        {techList.map((tech, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center md:items-${
              index % 2 === 0 ? "end" : "start"
            } text-center md:text-left`}
          >
            <div
              className={`flex flex-col md:flex-row items-center md:items-center bg-gradient-to-r gradient: "from-gray-900 to-white shadow-lg rounded-2xl p-6 md:max-w-sm transition-transform transform hover:scale-105`}
            >
              <div className="w-16 h-16 flex items-center justify-center px-2 rounded-full bg-white text-gray-800 text-3xl mb-4 md:mb-0 md:mr-4 shadow-lg">
                {tech.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {tech.name}
                </h3>
                <p className="text-gray-700">{tech.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 