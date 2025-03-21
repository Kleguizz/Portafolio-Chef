import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-violet-900/95 to-fuchsia-900/95 backdrop-blur-sm shadow-lg z-50 p-4 sm:p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold text-white font-poppins">Kevin Leguizamon</div>
        
        {/* Botón de menú móvil */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
        </button>

        {/* Menú de navegación */}
        <ul className={`${
          isMenuOpen 
            ? 'absolute top-full left-0 right-0 bg-gradient-to-r from-violet-900/95 to-fuchsia-900/95 backdrop-blur-sm p-4 space-y-4' 
            : 'hidden'
          } lg:relative lg:flex lg:space-x-8 lg:space-y-0 lg:p-0 lg:bg-transparent lg:flex`}>
          <li>
            <Link
              to="aboutme"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center text-gray-200 no-underline py-2 px-4 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-violet-500/30 hover:text-white font-poppins text-sm sm:text-base"
              activeClass="bg-violet-500/30 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center text-gray-200 no-underline py-2 px-4 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-violet-500/30 hover:text-white font-poppins text-sm sm:text-base"
              activeClass="bg-violet-500/30 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              Mi Experiencia
            </Link>
          </li>
          <li>
            <Link
              to="contactme"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center text-gray-200 no-underline py-2 px-4 rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-violet-500/30 hover:text-white font-poppins text-sm sm:text-base"
              activeClass="bg-violet-500/30 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Contáctame
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;