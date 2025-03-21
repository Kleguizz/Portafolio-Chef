import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-6 mt-20 sm:mt-24">
        <div className="relative">
          <img
            src="https://avatars.githubusercontent.com/u/77468721?v=4"
            alt="Kevin Leguizamon"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full shadow-2xl mb-4 border-4 border-violet-400/30"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 animate-pulse"></div>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-4 font-poppins text-center">
          Kevin Leguizamon
        </h2>
        <p className="text-lg sm:text-xl text-violet-200 font-poppins mb-8 text-center">
          Desarrollador Web Frontend
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
          <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-poppins">
            Soy un apasionado del desarrollo web con experiencia en la creación de interfaces modernas, funcionales y visualmente atractivas. Después de haber explorado herramientas como HTML, CSS, JavaScript, React y Tailwind CSS, descubrí mi entusiasmo por combinar diseño y tecnología para construir soluciones que conecten con las personas.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-poppins mt-4">
            Mi enfoque siempre está en la simplicidad y la experiencia del usuario, asegurándome de que cada proyecto refleje calidad y atención al detalle. Además, disfruto aprender constantemente y mantenerme al día con las últimas tendencias tecnológicas. ¡Estoy emocionado de seguir creciendo y aportar mis habilidades a nuevos desafíos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;