import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaDatabase, FaNetworkWired, FaCogs, FaCodeBranch, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

const Timeline = () => {
  const techList = [
    { icon: <FaHtml5 />, name: "HTML", color: "bg-red-600" },
    { icon: <FaCss3Alt />, name: "CSS", color: "bg-blue-500" },
    { icon: <FaJs />, name: "JavaScript", color: "bg-yellow-500" },
    { icon: <FaReact />, name: "React.js", color: "bg-blue-600" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "bg-purple-600" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "bg-teal-500" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "bg-black" },
    { icon: <SiTypescript />, name: "TypeScript", color: "bg-blue-400" },
    { icon: <FaNodeJs />, name: "Node.js", color: "bg-green-600" },
    { icon: <FaGitAlt />, name: "Git & GitHub", color: "bg-black" },
    { icon: <FaDatabase />, name: "DBMS (SQL & MySQL)", color: "bg-orange-600" },
    { icon: <FaNetworkWired />, name: "Computer Networks", color: "bg-indigo-600" },
    { icon: <FaCogs />, name: "Operating System", color: "bg-gray-800" },
    { icon: <FaCodeBranch />, name: "DSA", color: "bg-purple-500" },
    { icon: <FaDocker />, name: "Docker", color: "bg-blue-500" }
  ];

return (
    <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">My Technology Timeline</h2>
        <div className="relative">
            {/* Vertical Line (visible only on medium and larger screens) */}
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full"></div>

            <div className="space-y-12">
                {techList.map((tech, index) => (
                    <div
                        key={index}
                        className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} space-x-8 md:space-x-12`}
                    >
                        {/* Tech Card */}
                        <div
                            className={`flex items-center justify-center w-full md:w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}
                        >
                            <div className={`flex items-center justify-center w-full md:w-auto p-6 rounded-lg  shadow`}>
                                <div className={`w-16 h-16 flex items-center justify-center rounded-full ${tech.color} text-white mr-4`}>
                                    {tech.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{tech.name}</h3>
                                    <p className="text-gray-600">Learned in-depth knowledge of {tech.name}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
};

export default Timeline;
