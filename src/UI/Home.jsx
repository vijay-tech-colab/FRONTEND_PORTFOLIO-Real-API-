import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiMinutemailer } from "react-icons/si";
import Timeline from "../COMPONANTS/Timeline/TimeLine";
import Footer from "../COMPONANTS/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/context-provider"
import { Link } from "react-router-dom";
import Spinner from "../COMPONANTS/spinner/Spinner";

export default function LandingPage() {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // Handle loading state

  useEffect(() => {
    if (!user) {
      let isMounted = true;
  
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://portfolio-node-express-b7vo.onrender.com/api/v1/users/get-admin-data",
            { withCredentials: true }
          );
          if (isMounted && response.data.success === true) {
            setUser(response.data.adminData);
          }
        } catch (error) {
          console.error("Error fetching data: ", error);
        } finally {
          if (isMounted) {
            setLoading(false);
          }
        }
      };
  
      fetchData();
      return () => {
        isMounted = false;
      };
    } else {
      setLoading(false);
    }
  }, [user, setUser]);
  

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Internal server error...</p>
      </div>
    );
  }

  return (
    <>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col container mx-auto items-center py-10 pt-30 relative">
        <div className="max-w-5xl w-full rounded-2xl p-10 flex flex-col md:flex-row items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-700">
              {user.name}
            </h1>
            <h2 className="text-xl text-gray-600 mt-2">{user.bio}</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              Passionate about building scalable web applications with React.js,
              Node.js, and MongoDB. Always eager to learn and explore new
              technologies.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-5 mt-6">
              {[
                { href: user.github, icon: <FaGithub />, title: "GitHub" },
                { href: user.linkedin, icon: <FaLinkedin />, title: "LinkedIn" },
                { href: user.twitter, icon: <FaTwitter />, title: "Twitter" },
                { href: user.email, icon: <SiMinutemailer />, title: "Email" },
              ].map(({ href, icon, title }, index) => (
                <Link
                  key={index}
                  to={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (href === user.email) {
                      e.preventDefault();
                      window.location.href = `mailto:${user.email}`;
                    }
                  }}
                  className="text-gray-600 hover:text-blue-500 text-3xl transition-transform transform hover:scale-110"
                  title={title}
                >
                  {icon}
                </Link>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className="mt-6">
              <Link
                to={user.resume.url}
                download
                target="_blank"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
                title="Download Resume"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="md:w-1/2 flex justify-center mt-8 md:mt-0"
          >
            <img
              src={user.avatar.url}
              alt={`${user.name} - Web Developer`}
              className="w-72 rounded-xl shadow-lg"
              title={`${user.name} - Web Developer`}
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Timeline Section */}
        <section className="max-w-5xl w-full mt-12">
          <Timeline />
        </section>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
