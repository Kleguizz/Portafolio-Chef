import React, { useRef, useState } from 'react';
import backgroundImage from '../assets/laptop_code_programming_212332_5184x3456.jpg';

const ContactMe = () => {
  const messageRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = () => {
    const textarea = messageRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const response = await fetch(process.env.REACT_APP_FORMSPREE_URL, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      setIsSubmitted(true);
      form.reset();
    } else {
      alert('Hubo un error al enviar el formulario. Intenta nuevamente.');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className={`relative z-10 max-w-md w-full mx-auto bg-white ${isSubmitted ? 'bg-green-100' : 'bg-opacity-45'} p-8 rounded-lg shadow-md mt-20 transition-all duration-500`}>
        <h2 className="text-2xl font-bold mb-6 text-center">{isSubmitted ? '¡Gracias!' : 'Contáctame'}</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="firstName">Nombre</label>
              <input type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdcdd0]" required />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="lastName">Apellido</label>
              <input type="text" id="lastName" name="lastName" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdcdd0]" required />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdcdd0]" required />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" ref={messageRef} rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdcdd0] resize-none" onInput={handleInput} required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-[#bdcdd0] text-black font-medium px-4 py-2 rounded-lg hover:bg-[#8ba6ac] transition duration-300">Enviar</button>
            </div>
          </form>
        ) : (
          <p className="text-center text-lg text-black">Tu mensaje fue enviado con éxito. ¡Gracias por contactarme!</p>
        )}
      </div>
    </div>
  );
};

export default ContactMe;