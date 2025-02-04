import { useEffect, useState } from "react";
import ProjectCard from "../COMPONANTS/Projects/ProjectCard";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import Footer from "../COMPONANTS/Footer/Footer";

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-node-express-b7vo.onrender.com/api/v1/project/get-projects?page=1&limit=10",
          { withCredentials: true }
        );
        if (response.data.success) {
          setProjects(response.data.projects);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="text-6xl text-blue-400 animate-spin" />
      </div>
    );

  

  return (
    <>
      <div className="py-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mt-14">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
              {projects.map((project, index) => (
                  <ProjectCard key={project._id} project={project} />
              ))}
          </div>
          
      </div>
      <div className="flex flex-col items-center ">
      <Footer />
    </div>
    </>
  ); 
}

export default Project;
