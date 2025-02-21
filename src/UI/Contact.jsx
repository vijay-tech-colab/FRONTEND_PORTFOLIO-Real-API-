import { useState } from "react";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import Spinner from "../COMPONANTS/spinner/Spinner";
import { toast } from "react-toastify";
import Footer from "../COMPONANTS/Footer/Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    sender: "",
    senderEmail: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "https://portfolio-node-express-b7vo.onrender.com/api/v1/message/send-message",
        formData,
        { withCredentials: true }
      );

      toast.success("Message sent successfully!");
      setFormData({ sender: "", senderEmail: "", message: "" }); // Reset form
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 pt-10 container mx-auto"
      >
        <div className="max-w-2xl w-full p-8 rounded-2xl text-center shadow-lg ">
          <h2 className="text-4xl font-bold mb-6 flex justify-center items-center gap-3 text-green-500">
            <FaEnvelope className="text-green-500" title="Contact Me" />
            Contact Me
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have any questions or want to work together? Send me a message!
          </p>

          {/* Display error message */}
          {error && (
            <p className="text-red-500 text-sm mb-4">
              ❌ {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" title="Your Name" />
              <input
                type="text"
                name="sender"
                placeholder="Your Name"
                value={formData.sender}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" title="Your Email" />
              <input
                type="email"
                name="senderEmail"
                placeholder="Your Email"
                value={formData.senderEmail}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex justify-center items-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactForm;
