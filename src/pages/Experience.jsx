import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-white font-poppins text-center">
        Mi Experiencia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full">
        {/* Experiencia Laboral */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:bg-white/20 border border-white/20">
          <FontAwesomeIcon icon={faBriefcase} className="text-4xl text-violet-400 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white font-poppins text-center">Desarrollador Web</h2>
          <p className="text-violet-200 mb-2 font-poppins text-center">Empresa XYZ (2020 - Presente)</p>
          <p className="text-gray-300 text-center font-poppins text-sm sm:text-base">Desarrollo de aplicaciones web utilizando React, Tailwind CSS y Node.js.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:bg-white/20 border border-white/20">
          <FontAwesomeIcon icon={faBriefcase} className="text-4xl text-violet-400 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white font-poppins text-center">Ingeniero de Software</h2>
          <p className="text-violet-200 mb-2 font-poppins text-center">Empresa ABC (2018 - 2020)</p>
          <p className="text-gray-300 text-center font-poppins text-sm sm:text-base">Implementación de soluciones de software y mantenimiento de sistemas existentes.</p>
        </div>

        {/* Educación */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:bg-white/20 border border-white/20">
          <FontAwesomeIcon icon={faGraduationCap} className="text-4xl text-violet-400 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white font-poppins text-center">Educación</h2>
          <div className="space-y-2 text-center">
            <div>
              <p className="text-violet-200 font-poppins">Licenciatura en Ciencias de la Computación</p>
              <p className="text-gray-300 font-poppins text-sm">Universidad DEF (2014 - 2018)</p>
            </div>
            <div>
              <p className="text-violet-200 font-poppins mt-2">Curso de Desarrollo Web</p>
              <p className="text-gray-300 font-poppins text-sm">Academia GHI (2019)</p>
            </div>
          </div>
        </div>

        {/* Proyectos */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:bg-white/20 border border-white/20">
          <FontAwesomeIcon icon={faProjectDiagram} className="text-4xl text-violet-400 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white font-poppins text-center">Proyecto A</h2>
          <p className="text-gray-300 text-center font-poppins text-sm sm:text-base">Descripción breve del proyecto y tecnologías utilizadas.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:bg-white/20 border border-white/20">
          <FontAwesomeIcon icon={faProjectDiagram} className="text-4xl text-violet-400 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white font-poppins text-center">Proyecto B</h2>
          <p className="text-gray-300 text-center font-poppins text-sm sm:text-base">Descripción breve del proyecto y tecnologías utilizadas.</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex flex-col items-center transform transition-all duration-500 hover:scale-105 hover:bg-white/20 border border-white/20">
          <FontAwesomeIcon icon={faProjectDiagram} className="text-4xl text-violet-400 mb-4" />
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white font-poppins text-center">Proyecto C</h2>
          <p className="text-gray-300 text-center font-poppins text-sm sm:text-base">Descripción breve del proyecto y tecnologías utilizadas.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;