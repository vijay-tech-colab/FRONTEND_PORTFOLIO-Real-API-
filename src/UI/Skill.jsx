import React, { useEffect, useState } from "react";
import axios from "axios";
import SkillCard from "../COMPONANTS/Skill/SkillCard";
import { FaLaptopCode, FaDatabase, FaPaintBrush, FaCogs, FaUserTie, FaSpinner } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import Pagination from "../COMPONANTS/Pagination/Pagination";
import Spinner from "../COMPONANTS/spinner/Spinner";

const SkillList = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://portfolio-node-express-b7vo.onrender.com/api/v1/skill/all-skills?page=${page}`,
          { withCredentials: true }
        );
        setTotalPages(data.totalPages);
        setSkills(data.skills); // Ensure API returns skills inside an array
      } catch (error) {
        console.error("Error fetching skills:", error);
        setError("Failed to load skills.");
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, [page]);

  // Function to map category to an icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming":
        return <FaLaptopCode className="text-blue-500" />;
      case "Database":
        return <FaDatabase className="text-green-500" />;
      case "Web Development":
        return <FaLaptopCode className="text-indigo-500" />;
      case "Design":
        return <FaPaintBrush className="text-pink-500" />;
      case "DevOps":
        return <FaCogs className="text-orange-500" />;
      case "Data Science":
        return <MdGraphicEq className="text-purple-500" />;
      default:
        return <FaUserTie className="text-gray-500" />;
    }
  };

  return (
    <div className="container mx-auto py-8 py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>

      {loading && (
        <div className="h-[80vh] flex items-center justify-center">
         <Spinner/>
        </div>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5">
        {!loading &&
          !error &&
          skills.map((skill, i) => (
            <SkillCard skill={skill} key={i} icon={getCategoryIcon(skill.category)} />
          ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default SkillList;
