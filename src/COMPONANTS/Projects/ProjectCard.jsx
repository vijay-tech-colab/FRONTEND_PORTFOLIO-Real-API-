import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    if (!project || project.length === 0) {
        return (
            <div className="py-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
                <p className="text-gray-600">No projects available at the moment.</p>
            </div>
        );
    }
    return (
        <div className="shadow rounded-xl p-5 flex flex-col">
            <img 
                src={project.projectIcon.url} 
                alt={`${project.title} thumbnail`} 
                className="rounded-t-xl w-full h-48 object-cover"
                title={project.title}
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-4" title={project.title}>{project.title}</h3>
            <p className="text-gray-600 text-sm mt-2" title={project.description}>{project.description}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded" title={tech}>
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex space-x-4 mt-6">
                <Link
                    to={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black flex items-center space-x-1"
                    title="GitHub Repository"
                >
                    <FaGithub className="text-gray-800" /> <span>GitHub</span>
                </Link>
                <Link
                    to={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black flex items-center space-x-1"
                    title="Live Demo"
                >
                    <FaExternalLinkAlt className="text-gray-800" /> <span>Live Demo</span>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;