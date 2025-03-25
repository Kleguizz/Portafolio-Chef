import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCircleIcon, 
  SparklesIcon, 
  AcademicCapIcon 
} from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      title: "Chef Ejecutivo",
      place: "Le Petit Jardin",
      period: "2018 - Presente",
      description: "Dirección creativa y ejecutiva de un restaurante con 2 estrellas Michelin. Desarrollo de menús estacionales y gestión de un equipo de 25 personas.",
      icon: UserCircleIcon,
      color: "text-copper"
    },
    {
      title: "Chef de Cuisine",
      place: "L'Atelier Gourmet",
      period: "2015 - 2018",
      description: "Responsable de la cocina principal, innovación en técnicas moleculares y desarrollo de platos signature.",
      icon: SparklesIcon,
      color: "text-sage"
    },
    {
      title: "Formación Culinaria",
      place: "Le Cordon Bleu, París",
      period: "2012 - 2015",
      description: "Especialización en alta cocina francesa y técnicas contemporáneas. Prácticas en restaurantes de renombre internacional.",
      icon: AcademicCapIcon,
      color: "text-moss"
    }
  ];

  const dishes = [
    {
      image: "https://images.unsplash.com/photo-1614436163996-25cee5f54290?q=80&w=1942",
      title: "Vieira con Emulsión de Cítricos"
    },
    {
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1780",
      title: "Risotto de Trufa Negra"
    },
    {
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
      title: "Cordero en Costra de Hierbas"
    },
    {
      image: "https://images.unsplash.com/photo-1612240498936-65f5101365d2?q=80&w=1887",
      title: "Postre de Chocolate y Oro"
    }
  ];

  return (
    <div className="relative min-h-screen py-20 will-change-transform">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070')] bg-cover bg-fixed bg-center" />
        <div className="absolute inset-0 bg-truffle/90 backdrop-blur-sm" />
      </div>

      {/* Círculos decorativos */}
      <div className="absolute left-0 top-1/3 w-[30vh] h-[30vh] rounded-full border border-sage/10 animate-[spin_25s_linear_infinite]" />
      <div className="absolute right-0 bottom-1/3 w-[20vh] h-[20vh] rounded-full border border-copper/10 animate-[spin_15s_linear_infinite_reverse]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-migra text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
            Trayectoria Culinaria
          </h2>
          <p className="font-monument text-sm tracking-[0.3em] uppercase text-sage/80">
            Un viaje gastronómico marcado por la excelencia, la innovación y la pasión por crear experiencias únicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-cream/5 backdrop-blur-md border border-cream/10 hover:border-sage/30 transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-sage/5 to-copper/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-cream/5 ${exp.color} backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <exp.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-cormorant text-3xl text-cream mb-2">
                    {exp.title}
                  </h3>
                  
                  <p className="font-marcellus text-sm tracking-wider text-sage/90 uppercase mb-1">
                    {exp.place}
                  </p>
                  
                  <p className="font-cormorant text-sm tracking-wider text-cream/60 uppercase mb-4 italic">
                    {exp.period}
                  </p>
                  
                  <p className="font-marcellus text-cream/80 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Galería de platos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="font-monument text-sage text-sm tracking-[0.3em] uppercase text-center mb-12">
            Creaciones Destacadas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dishes.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-truffle/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-4">
                  <p className="font-ginger text-cream text-sm transform transition-transform duration-500">
                    {dish.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;