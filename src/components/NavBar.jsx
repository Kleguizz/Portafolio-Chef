import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#d7d7b8] shadow-lg z-50 p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Kevin Leguizamon</div>
        <ul className="flex space-x-16">
          <li>
            <Link
              to="aboutme"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center text-gray-800 no-underline py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[#8ba6ac] hover:text-white"
              activeClass="bg-[#8ba6ac] text-white"
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
              className="flex items-center text-gray-800 no-underline py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[#8ba6ac] hover:text-white"
              activeClass="bg-[#8ba6ac] text-white"
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
              className="flex items-center text-gray-800 no-underline py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[#8ba6ac] hover:text-white"
              activeClass="bg-[#8ba6ac] text-white"
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