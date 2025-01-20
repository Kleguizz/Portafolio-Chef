// import React from 'react';
// import backgroundImage from '../assets/laptop_code_programming_212332_5184x3456.jpg'; // Asegúrate de ajustar la ruta según la ubicación de tu imagen

// const AboutMe = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
//       <div className="relative z-10 flex items-center mb-6 bg-white bg-opacity-70 p-4 rounded-lg shadow-lg">
//         <img
//           src="https://avatars.githubusercontent.com/u/77468721?v=4"
//           alt="Kevin Leguizamon"
//           className="w-72 h-72 rounded-full shadow-lg mr-6"
//         />
//         <h2 className="text-6xl">Kevin Leguizamon</h2>
//       </div>
//       <div className="relative z-10 max-w-4xl bg-white bg-opacity-70 p-8 rounded-lg shadow-md">
//         <p className="text-lg leading-relaxed text-gray-700">
//           Soy un apasionado del desarrollo web con experiencia en la creación de interfaces modernas, funcionales y visualmente atractivas. Después de haber explorado herramientas como HTML, CSS, JavaScript, React y Tailwind CSS, descubrí mi entusiasmo por combinar diseño y tecnología para construir soluciones que conecten con las personas. Mi enfoque siempre está en la simplicidad y la experiencia del usuario, asegurándome de que cada proyecto refleje calidad y atención al detalle. Además, disfruto aprender constantemente y mantenerme al día con las últimas tendencias tecnológicas. ¡Estoy emocionado de seguir creciendo y aportar mis habilidades a nuevos desafíos!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

import React from 'react';
import backgroundImage from '../assets/laptop_code_programming_212332_5184x3456.jpg'; // Asegúrate de ajustar la ruta según la ubicación de tu imagen

const AboutMe = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 flex flex-col items-center mb-6">
        <img
          src="https://avatars.githubusercontent.com/u/77468721?v=4"
          alt="Kevin Leguizamon"
          className="w-72 h-72 rounded-full shadow-lg mb-4"
        />
        <h2 className="text-6xl text-white">Kevin Leguizamon</h2>
      </div>
      <div className="relative z-10 max-w-4xl bg-white bg-opacity-70 p-8 rounded-lg shadow-md">
        <p className="text-lg leading-relaxed text-gray-700">
          Soy un apasionado del desarrollo web con experiencia en la creación de interfaces modernas, funcionales y visualmente atractivas. Después de haber explorado herramientas como HTML, CSS, JavaScript, React y Tailwind CSS, descubrí mi entusiasmo por combinar diseño y tecnología para construir soluciones que conecten con las personas. Mi enfoque siempre está en la simplicidad y la experiencia del usuario, asegurándome de que cada proyecto refleje calidad y atención al detalle. Además, disfruto aprender constantemente y mantenerme al día con las últimas tendencias tecnológicas. ¡Estoy emocionado de seguir creciendo y aportar mis habilidades a nuevos desafíos!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;