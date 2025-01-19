import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/AboutMe";
import Contact from "./pages/ContactMe";
import Experience from "./pages/Experience";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="pt-32">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;