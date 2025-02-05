import { useEffect, useState } from "react";
import ProjectCard from "../COMPONANTS/Projects/ProjectCard";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import Footer from "../COMPONANTS/Footer/Footer";
import Pagination from "../COMPONANTS/Pagination/Pagination";

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalPages,setTotalPages]= useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `https://portfolio-node-express-b7vo.onrender.com/api/v1/project/get-projects?page=${page}`,
          { withCredentials: true }
        );
        // // console.log(response.data.totalPages);
        setTotalPages(response.data.totalPages);
        console.log(response.data)
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
  }, [page]);
 


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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center m-5">
              {projects.map((project, index) => (
                  <ProjectCard key={project._id} project={project} />
              ))}
          </div>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />

      </div>
      <div className="flex flex-col items-center ">
      <Footer />
    </div>
    </>
  ); 
}

export default Project;
