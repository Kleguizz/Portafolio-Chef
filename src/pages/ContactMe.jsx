import React, { useRef } from 'react';
import backgroundImage from '../assets/laptop_code_programming_212332_5184x3456.jpg';
const ContactMe = () => {
  const messageRef = useRef(null);

  const handleInput = () => {
    const textarea = messageRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10 max-w-md w-full mx-auto bg-white bg-opacity-45 p-8 rounded-lg shadow-md mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Contáctame</h2>
        <form className="w-full">
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="firstName">
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdcdd0]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="lastName">
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdcdd0]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="phone">
              Celular
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdcdd0]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdcdd0]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              ref={messageRef}
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdcdd0] resize-none"
              onInput={handleInput}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#bdcdd0] text-black font-medium px-4 py-2 rounded-lg hover:bg-[#8ba6ac] transition duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;