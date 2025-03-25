import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: faPhone,
      title: 'Teléfono',
      info: '+54 343 123 456',
      link: 'tel:+34600123456'
    },
    {
      icon: faEnvelope,
      title: 'Email',
      info: 'chef@tudominio.com',
      link: 'mailto:chef@tudominio.com'
    },
    {
      icon: faMapMarker,
      title: 'Ubicación',
      info: 'Entre Rios, Argentina',
      link: 'https://www.google.com.ar/maps/place/Entre+R%C3%ADos/@-32.0902087,-60.6071431,8z/data=!3m1!4b1!4m6!3m5!1s0x95a551ddba482fbf:0x69284bf0dcd46382!8m2!3d-32.5175643!4d-59.1041758!16zL20vMDJrZ3Bx?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Aquí iría la lógica de envío del formulario
    toast.success('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="relative min-h-screen flex items-center py-20">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1428515613728-6b4607e44363?q=80&w=2070')] bg-cover bg-fixed bg-center" />
        <div className="absolute inset-0 bg-truffle/90 backdrop-blur-sm" />
      </div>

      {/* Círculos decorativos */}
      <div className="absolute right-0 top-1/4 w-[40vh] h-[40vh] rounded-full border border-sage/10 animate-[spin_30s_linear_infinite]" />
      <div className="absolute left-0 bottom-1/4 w-[25vh] h-[25vh] rounded-full border border-copper/10 animate-[spin_20s_linear_infinite_reverse]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-migra text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Contacto
          </h2>
          <p className="font-ginger text-cream/80 text-lg max-w-2xl mx-auto">
            ¿Interesado en mis servicios? Contáctame para crear juntos una experiencia gastronómica única
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cream/5 backdrop-blur-sm flex items-center justify-center border border-cream/10 group-hover:border-sage/30 transition-all duration-300">
                    <FontAwesomeIcon icon={item.icon} className="text-copper text-xl" />
                  </div>
                  <div>
                    <h4 className="font-monument text-sage text-sm tracking-wider mb-1">{item.title}</h4>
                    <p className="font-ginger text-cream">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-cream/5 backdrop-blur-sm rounded-xl border border-cream/10"
            >
              <h4 className="font-monument text-cream text-lg mb-4">Horario de Atención</h4>
              <div className="space-y-2 font-ginger text-cream/80">
                <p>Lunes a Viernes: 10:00 - 20:00</p>
                <p>Sábados: 11:00 - 15:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl px-6 py-4 text-cream placeholder-transparent peer focus:border-sage/30 transition-all duration-300"
                    placeholder="Nombre"
                  />
                  <label className="absolute left-6 -top-6 text-cream/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-cream/40 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-cream/60 peer-focus:text-sm">
                    Nombre
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl px-6 py-4 text-cream placeholder-transparent peer focus:border-sage/30 transition-all duration-300"
                    placeholder="Email"
                  />
                  <label className="absolute left-6 -top-6 text-cream/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-cream/40 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-cream/60 peer-focus:text-sm">
                    Email
                  </label>
                </div>
              </div>
              
              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl px-6 py-4 text-cream placeholder-transparent peer focus:border-sage/30 transition-all duration-300"
                  placeholder="Teléfono"
                />
                <label className="absolute left-6 -top-6 text-cream/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-cream/40 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-cream/60 peer-focus:text-sm">
                  Teléfono
                </label>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl px-6 py-4 text-cream placeholder-transparent peer focus:border-sage/30 transition-all duration-300 resize-none"
                  placeholder="Mensaje"
                ></textarea>
                <label className="absolute left-6 -top-6 text-cream/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-cream/40 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-cream/60 peer-focus:text-sm">
                  Mensaje
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-sage to-copper text-cream font-monument text-sm tracking-wider uppercase py-4 rounded-xl hover:opacity-90 transition-opacity duration-300"
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <Toaster
        position="bottom-center"
        toastOptions={{
          className: 'bg-cream/10 backdrop-blur-md border border-cream/10 text-cream',
          style: {
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#F5F5F5',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          duration: 4000,
        }}
      />
    </div>
  );
};

export default ContactMe;