import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import ContactMe from './pages/ContactMe';
import backgroundImage from './assets/laptop_code_programming_212332_5184x3456.jpg';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Imagen de fondo fija */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradiente de fondo fijo */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-900/80 via-violet-800/50 to-transparent backdrop-blur-sm z-0"></div>

      {/* Contenido */}
      <div className="relative z-10">
        <Navbar />
        <main className="relative">
          <section id="aboutme" className="min-h-screen">
            <AboutMe />
          </section>
          <section id="experience" className="min-h-screen">
            <Experience />
          </section>
          <section id="contactme" className="min-h-screen">
            <ContactMe />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;