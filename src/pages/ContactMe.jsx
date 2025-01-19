import React, { useRef } from 'react';

const ContactMe = () => {
  const messageRef = useRef(null);

  const handleInput = () => {
    const textarea = messageRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contáctame</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
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
            className="bg-[#bdcdd0] text-white px-4 py-2 rounded-lg hover:bg-[#8ba6ac] transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;