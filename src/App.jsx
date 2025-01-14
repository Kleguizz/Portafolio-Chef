import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/AboutMe";
import Contact from "./pages/ContactMe";
import Experience from "./pages/Experience";

function App() {
  

  return (
    <Router>
      <NavBar />
    <Routes>
      <Route path="/" element={<h1>Inicio</h1>} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    
  )
}

export default App
