import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#f8f8ec]">
      <div className="flex items-center mb-6">
        <img
          src="https://avatars.githubusercontent.com/u/77468721?v=4"
          alt="Kevin Leguizamon"
          className="w-72 h-72 rounded-full shadow-lg mr-6"
        />
        <h1 className="text-6xl">Kevin Leguizamon</h1>
      </div>
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg leading-relaxed text-gray-700">
          Soy un apasionado del desarrollo web con experiencia en la creación de interfaces modernas, funcionales y visualmente atractivas. Después de haber explorado herramientas como HTML, CSS, JavaScript, React y Tailwind CSS, descubrí mi entusiasmo por combinar diseño y tecnología para construir soluciones que conecten con las personas. Mi enfoque siempre está en la simplicidad y la experiencia del usuario, asegurándome de que cada proyecto refleje calidad y atención al detalle. Además, disfruto aprender constantemente y mantenerme al día con las últimas tendencias tecnológicas. ¡Estoy emocionado de seguir creciendo y aportar mis habilidades a nuevos desafíos!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;