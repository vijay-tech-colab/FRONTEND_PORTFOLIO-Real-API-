
const SkillCard = ({ skill }) => {
    if (!skill) {
        return null;
    }
return (
    <div className="shadow-lg rounded-xl p-5 flex flex-col items-center  hover:shadow-2xl transition-shadow duration-300">
        {/* Skill Icon */}
        <div className="mb-3">
            <img
                src={skill.skillIcon.url}
                alt={skill.name}
                className="w-16 h-16 object-contain"
            />
        </div>

        {/* Skill Name */}
        <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>

        {/* Proficiency Level */}
        <p className="text-gray-600">{skill.proficiency}</p>

        {/* Experience */}
        <p className="text-gray-500">
            Experience: {skill.yearsOfExperience} years
        </p>

        {/* Category */}
        <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-lg mt-2">
            {skill.category}
        </span>
    </div>
);
};

export default SkillCard
