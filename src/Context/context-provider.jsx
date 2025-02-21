import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  projects: null,
  setProjects: () => {},
  skills: null,
  setSkills: () => {},
  totalPagesProjects: 1,
  totalPagesSkills: 1,
  loadingSkills: true,
  loadingProjects: true,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(sessionStorage.getItem("user")) || null;
  });

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loadingSkills, setLoadingSkills] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [skillPage, setSkillPage] = useState(1);
  const [projectPage, setProjectPage] = useState(1);
  const [totalPagesSkills, setTotalPagesSkills] = useState(1);
  const [totalPagesProjects, setTotalPagesProjects] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchSkills = async () => {
      try {
        setLoadingSkills(true);
        const { data } = await axios.get(
          `https://portfolio-node-express-b7vo.onrender.com/api/v1/skill/all-skills?page=${skillPage}`,
          { withCredentials: true, signal: controller.signal }
        );
        setTotalPagesSkills(data.totalPages);
        setSkills(data.skills);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching skills:", error);
          setError("Failed to load skills.");
        }
      } finally {
        setLoadingSkills(false);
      }
    };
    fetchSkills();

    return () => controller.abort();
  }, [skillPage]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProjects = async () => {
      try {
        setLoadingProjects(true);
        const response = await axios.get(
          `https://portfolio-node-express-b7vo.onrender.com/api/v1/project/get-projects?page=${projectPage}`,
          { withCredentials: true, signal: controller.signal }
        );
        setTotalPagesProjects(response.data.totalPages);
        if (response.data.success) {
          setProjects(response.data.projects);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching projects: ", error);
        }
      } finally {
        setLoadingProjects(false);
      }
    };
    fetchProjects();

    return () => controller.abort();
  }, [projectPage]);

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        projects,
        setProjects,
        skills,
        setSkills,
        skillPage,
        setSkillPage,
        projectPage,
        setProjectPage,
        totalPagesProjects,
        totalPagesSkills,
        loadingSkills,
        loadingProjects,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
