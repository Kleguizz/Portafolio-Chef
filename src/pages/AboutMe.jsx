import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUtensils, 
  faGraduationCap, 
  faAward,
  faStar 
} from '@fortawesome/free-solid-svg-icons';
import CompactCarousel from '../components/CompactCarousel';
import { AcademicCapIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/outline';

const AboutMe = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center will-change-transform">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2080"
          alt="Cocina profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-truffle/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-cream"
          >
            <h2 className="font-migra text-4xl md:text-5xl lg:text-6xl mb-8">
              Pasión por la<br />Gastronomía
            </h2>
            <div className="space-y-6 font-ginger text-lg">
              <p className="leading-relaxed">
                Con más de 15 años de experiencia en la alta cocina, mi pasión es crear experiencias culinarias únicas que desafíen los sentidos y evoquen emociones.
              </p>
              <p className="leading-relaxed">
                Mi filosofía culinaria se basa en la fusión de técnicas tradicionales con innovación contemporánea, siempre respetando la esencia de los ingredientes locales de temporada.
              </p>
            </div>

            {/* Carrusel Compacto */}
            <div className="mt-12 mb-12">
              <CompactCarousel />
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              <div>
                <p className="font-monument text-copper text-3xl">15+</p>
                <p className="font-ginger text-cream/80">Años de Experiencia</p>
              </div>
              <div>
                <p className="font-monument text-sage text-3xl">2</p>
                <p className="font-ginger text-cream/80">Estrellas Michelin</p>
              </div>
              <div>
                <p className="font-monument text-moss text-3xl">12</p>
                <p className="font-ginger text-cream/80">Platos Signature</p>
              </div>
            </div>
          </motion.div>

          {/* Columna de imagen */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-16 lg:mt-8"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-truffle/20">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954"
                alt="Chef Portrait"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-truffle/30 via-transparent to-transparent mix-blend-multiply" />
            </div>
            
            {/* Elementos decorativos con más opacidad */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-sage/20 backdrop-blur-md rounded-full" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-copper/20 backdrop-blur-md rounded-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;