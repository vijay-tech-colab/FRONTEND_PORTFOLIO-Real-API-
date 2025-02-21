import { useContext,} from "react";
import ProjectCard from "../COMPONANTS/Projects/ProjectCard";

import Footer from "../COMPONANTS/Footer/Footer";
import Pagination from "../COMPONANTS/Pagination/Pagination";
import Spinner from "../COMPONANTS/spinner/Spinner";
import { AuthContext } from "../Context/context-provider";

function Project() {
  
  const {
    projects,
    projectPage,
    setProjectPage,
    totalPagesProjects,
    loadingProjects,
  } = useContext(AuthContext);
  
  if (loadingProjects)
    return (
      <div className="h-[100vh] flex items-center justify-center">
         <Spinner/>
        </div>
    );

  return (
    <>
      <div className="py-10 text-center container mx-auto" title="Projects Section">
        <h2 className="text-3xl font-bold text-gray-900 mt-14" title="Projects Title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center m-5" title="Projects Grid">
          {projects.map((project, index) => (
            <ProjectCard key={project._id} project={project} title={`Project ${index + 1}`} />
          ))}
        </div>
        <Pagination currentPage={projectPage} totalPages={totalPagesProjects} onPageChange={setProjectPage} title="Pagination" />
      </div>
      <div className="flex flex-col items-center" title="Footer Section">
        <Footer />
      </div>
    </>
  );
}

export default Project;
