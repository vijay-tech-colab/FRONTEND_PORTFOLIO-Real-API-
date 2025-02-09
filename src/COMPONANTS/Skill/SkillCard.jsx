import React from "react";

const SkillCard = ({ skill, icon }) => {
  if (!skill || skill.length === 0) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
        <p className="text-gray-600">No skill available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="shadow-lg rounded-xl p-5 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
      {/* Skill Icon */}
      <div className="mb-3" title={skill.name}>
        <img
          src={skill.skillIcon?.url}
          alt={skill.name}
          className="w-16 h-16 object-contain"
        />
      </div>

      {/* Skill Name */}
      <h3 className="text-xl font-semibold text-gray-900" title={skill.name}>
        {skill.name}
      </h3>

      {/* Proficiency Level */}
      <p className="text-gray-600" title={`Proficiency: ${skill.proficiency}`}>
        {skill.proficiency}
      </p>

      {/* Experience */}
      <p className="text-gray-500" title={`Experience: ${skill.yearsOfExperience || 0} years`}>
        Experience: {skill.yearsOfExperience || 0} years
      </p>

      {/* Category */}
      <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-lg mt-2 flex items-center" title={skill.category}>
        {icon} <span className="ml-1">{skill.category}</span>
      </span>
    </div>
  );
};

export default SkillCard;
