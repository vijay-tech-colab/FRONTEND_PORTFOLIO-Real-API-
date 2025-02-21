import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SkillCard from "../COMPONANTS/Skill/SkillCard";
import {
  FaLaptopCode,
  FaDatabase,
  FaPaintBrush,
  FaCogs,
  FaUserTie,
  FaSpinner,
} from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import Pagination from "../COMPONANTS/Pagination/Pagination";
import Spinner from "../COMPONANTS/spinner/Spinner";
import Footer from "../COMPONANTS/Footer/Footer";
import { AuthContext } from "../Context/context-provider";

const SkillList = () => {
  const [error, setError] = useState(null);
  const {
    skills,
    setSkills,
    skillPage,
    setSkillPage,
    totalPagesSkills,
    loadingSkills,
  } = useContext(AuthContext);

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
  if (loadingSkills)
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <>
      <div
        className="py-10 text-center container mx-auto"
        title="Projects Section"
      >
        <h2
          className="text-3xl font-bold text-gray-900 mt-14"
          title="Projects Title"
        >
          Skills
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5">
          {!loadingSkills &&
            !error &&
            skills.map((skill, i) => (
              <SkillCard
                skill={skill}
                key={i}
                icon={getCategoryIcon(skill.category)}
              />
            ))}
        </div>
        <Pagination
          currentPage={skillPage}
          totalPages={totalPagesSkills}
          onPageChange={setSkillPage}
        />
      </div>
      <Footer />
    </>
  );
};

export default SkillList;
