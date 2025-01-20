import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/AboutMe";
import Contact from "./pages/ContactMe";
import Experience from "./pages/Experience";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <a
        href="https://wa.me/1234567890"
        className="fixed bottom-10 right-10 bg-green-500 text-white p-6 m-7 rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-4xl" />
      </a>
    </Router>
  );
}

export default App;