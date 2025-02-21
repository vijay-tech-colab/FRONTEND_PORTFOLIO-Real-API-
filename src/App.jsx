import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import Header from "./COMPONANTS/Header/Header";
import "./App.css";
import Home from "./UI/Home";
import About from "./UI/About";
import ContactForm from "./UI/Contact";
import Projects from "./UI/Project";
import Skill from "./UI/Skill";
import NotFound from "./UI/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"  // Changed position to top-right
        autoClose={3000}  // Closes after 3 seconds
        hideProgressBar={false}
        newestOnTop={true}  // Shows newest toast on top
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"  // Better UI theme
        limit={3}  // Prevents excessive toasts
      />

      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill/>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
