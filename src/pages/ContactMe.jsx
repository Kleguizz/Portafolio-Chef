import React, { useRef, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const CustomToast = ({ message }) => (
  <div className="flex items-center space-x-4 bg-white rounded-lg shadow-xl p-4">
    <div className="flex-shrink-0">
      <div className="h-12 w-12 bg-violet-100 rounded-full flex items-center justify-center">
        <svg className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-900 font-poppins">¡Mensaje Enviado!</h3>
      <p className="mt-1 text-sm text-gray-500 font-poppins">{message}</p>
    </div>
  </div>
);

const ContactMe = () => {
  const messageRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInput = () => {
    const textarea = messageRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const loadingToast = toast.loading(
      <div className="flex items-center space-x-3">
        <div className="animate-pulse">
          <div className="h-10 w-10 bg-violet-500 rounded-full flex items-center justify-center">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </div>
        <div className="font-poppins">
          <p className="text-sm font-medium text-gray-900">Enviando mensaje</p>
          <p className="text-sm text-gray-500">Por favor, espera un momento...</p>
        </div>
      </div>
    );
    
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        toast.custom(
          <CustomToast message="Gracias por contactarme. Te responderé lo antes posible." />,
          { duration: 5000 }
        );
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      toast.error(
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="font-poppins">
            <p className="text-sm font-medium text-gray-900">Error al enviar</p>
            <p className="text-sm text-gray-500">Por favor, intenta nuevamente</p>
          </div>
        </div>,
        { duration: 5000 }
      );
    } finally {
      toast.dismiss(loadingToast);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <Toaster position="bottom-center" reverseOrder={false} />
      
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-2 font-poppins">Contáctame</h2>
            <p className="text-gray-300 text-center mb-8 font-poppins text-sm sm:text-base">Si te interesa colaborar conmigo, no dudes en contactarme.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300 font-poppins"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-violet-300/20 rounded-xl text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/50 transition-all duration-300 font-poppins"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300 font-poppins"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-violet-300/20 rounded-xl text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/50 transition-all duration-300 font-poppins"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 font-poppins"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border-2 border-violet-300/20 rounded-xl text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/50 transition-all duration-300 font-poppins"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 font-poppins"
                >
                  Número de Celular
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border-2 border-violet-300/20 rounded-xl text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/50 transition-all duration-300 font-poppins"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 font-poppins"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  ref={messageRef}
                  value={formData.message}
                  onChange={(e) => {
                    handleChange(e);
                    handleInput();
                  }}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border-2 border-violet-300/20 rounded-xl text-white focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/50 transition-all duration-300 resize-none font-poppins"
                  required
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    group relative inline-flex items-center justify-center px-8 py-3 rounded-xl
                    overflow-hidden font-medium transition-all duration-300 transform
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-white/50' 
                      : 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:scale-105 active:scale-100 hover:shadow-lg'
                    }
                    font-poppins text-sm sm:text-base
                  `}
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-white/20 group-hover:translate-x-full group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-white/10 group-hover:-translate-x-full group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-full h-0.5 transition-all duration-200 ease-out transform translate-x-full bg-white group-hover:translate-x-0"></span>
                  <span className="absolute bottom-0 right-0 hidden w-0.5 h-full transition-all duration-200 ease-out transform translate-y-full bg-white group-hover:translate-y-0"></span>
                  <span className="relative flex items-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;