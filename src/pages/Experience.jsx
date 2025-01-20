import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/laptop_code_programming_212332_5184x3456.jpg'; // Asegúrate de ajustar la ruta según la ubicación de tu imagen

const Experience = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-10">
        <h1 className="text-5xl font-bold mb-10 text-white">Mi Experiencia</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faBriefcase} className="text-4xl text-[#8ba6ac] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Desarrollador Web</h2>
            <p className="text-gray-700 mb-2">Empresa XYZ (2020 - Presente)</p>
            <p className="text-gray-600 text-center">Desarrollo de aplicaciones web utilizando React, Tailwind CSS y Node.js.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faBriefcase} className="text-4xl text-[#8ba6ac] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Ingeniero de Software</h2>
            <p className="text-gray-700 mb-2">Empresa ABC (2018 - 2020)</p>
            <p className="text-gray-600 text-center">Implementación de soluciones de software y mantenimiento de sistemas existentes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faGraduationCap} className="text-4xl text-[#8ba6ac] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Educación</h2>
            <p className="text-gray-700 mb-2">Licenciatura en Ciencias de la Computación</p>
            <p className="text-gray-600 text-center">Universidad DEF (2014 - 2018)</p>
            <p className="text-gray-700 mb-2">Curso de Desarrollo Web</p>
            <p className="text-gray-600 text-center">Academia GHI (2019)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faProjectDiagram} className="text-4xl text-[#8ba6ac] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Proyecto A</h2>
            <p className="text-gray-700 text-center">Descripción breve del proyecto y tecnologías utilizadas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faProjectDiagram} className="text-4xl text-[#8ba6ac] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Proyecto B</h2>
            <p className="text-gray-700 text-center">Descripción breve del proyecto y tecnologías utilizadas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;