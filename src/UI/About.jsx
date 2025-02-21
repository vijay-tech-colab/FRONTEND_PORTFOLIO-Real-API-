import { useContext, useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaGraduationCap,
  FaDownload,
  FaMapMarkerAlt,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/context-provider";
import Footer from "../COMPONANTS/Footer/Footer";
import Spinner from "../COMPONANTS/spinner/Spinner";

const About = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  // Show spinner if loading is true
  if (loading)
    return (
      <div className="h-[100vh] flex items-center justify-center">
         <Spinner/>
        </div>
    );

  return (
    <>
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20 container mx-auto"
    >
      <div className="max-w-4xl text-center">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src={user.avatar.url}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-lg"
            title="User Avatar"
          />
        </div>

        {/* About Content */}
        <div className="p-8 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3 text-blue-400">
            <FaUser className="text-blue-400" title="User Icon" /> About Me
          </h2>
          <p className="mb-6 leading-relaxed text-lg">
            Hi, I'm{" "}
            <span className="text-blue-400 font-semibold">{user.name}</span>, a
            passionate{" "}
            <span className="text-green-400 font-semibold">
              {" "}
              Full-Stack Developer{" "}
            </span>
            specializing in the{" "}
            <span className="text-yellow-600 font-semibold">MERN stack</span>.
            {user.bio}
          </p>

          {/* Contact Info */}
          <div className="mb-6 text-lg">
            <p className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt title="Address" /> {user.contact.address}
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhone title="Phone" /> {user.contact.phone}
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope title="Email" /> {user.email}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            <Link
              to={user.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 text-2xl"
              title="GitHub"
            >
              <FaGithub />
            </Link>
            <Link
              to={user.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500 text-2xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={user.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-2xl"
              title="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              to={user.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 text-2xl"
              title="Portfolio"
            >
              <FaGlobe />
            </Link>
          </div>

          {/* Education */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Education
            </h3>
            <div className="flex items-center justify-center gap-3 text-lg">
              <FaGraduationCap className="text-3xl" title="Graduation Cap" />
              <p>
                Bachelor of Computer Applications (BCA), Saltanat Veer Bahadur
                Singh PG College (2026)
              </p>
              <FaGraduationCap className="text-3xl" title="Graduation Cap" />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg"
              title="Contact Me"
            >
              <FaEnvelope /> Contact Me
            </Link>
            <Link
              to={user.resume.url}
              download
              target=""
              className="inline-flex items-center justify-center gap-2 text-white bg-green-500 hover:bg-green-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg"
              title="Download Resume"
            >
              <FaDownload /> Download Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
        <div className="flex flex-col items-center">
          <Footer />
        </div>
    </>
  );
};

export default About;
