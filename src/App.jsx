import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import Navbar from './components/NavBar';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import ContactMe from './pages/ContactMe';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Configuración inicial de scroll
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Aplicar scroll suave globalmente
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.documentElement.style.setProperty('--scroll', scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Configuración de animaciones basadas en scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        className="h-screen relative overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Círculos decorativos con animación más suave */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vh] h-[150vh] rounded-full border border-sage/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vh] h-[120vh] rounded-full border border-copper/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        />
        
        {/* Contenido del Hero */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center relative z-10"
          >
            <h1 className="font-migra text-6xl md:text-8xl lg:text-9xl text-truffle mb-6">
              Arte<br/>Culinario
            </h1>
            <p className="font-monument text-sm md:text-base uppercase tracking-[0.3em] text-moss mb-12">
              Experiencia Gastronómica Contemporánea
            </p>
            <Link
              to="aboutme"
              spy={true}
              smooth={true}
              duration={1200}
              offset={0}
              isDynamic={true}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="font-monument px-8 py-4 bg-sage text-cream rounded-full hover:bg-moss transition-all duration-500 uppercase tracking-[0.2em] text-sm"
              >
                Descubrir el Menú
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Imagen flotante con animación más suave */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-0 right-0 w-1/3 h-[70vh]"
        >
          <motion.div 
            className="relative w-full h-full"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1625943553852-781c6dd46faa?q=80&w=1974"
              alt="Plato Signature"
              className="absolute bottom-0 right-0 w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Navegación */}
      <Navbar />

      {/* Secciones Principales con transiciones más suaves */}
      <main className="relative z-10">
        <motion.section 
          id="aboutme" 
          className="min-h-screen relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cream via-cream/50 to-transparent opacity-5 transition-opacity duration-1000" />
          <div className="py-12">
            <AboutMe />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-truffle/50 to-truffle opacity-5 transition-opacity duration-1000" />
        </motion.section>

        <motion.section 
          id="experience" 
          className="min-h-screen relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-truffle via-truffle/50 to-transparent opacity-5 transition-opacity duration-1000" />
          <div className="bg-truffle text-cream py-12">
            <Experience />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-truffle via-cream/50 to-cream opacity-5 transition-opacity duration-1000" />
        </motion.section>

        <motion.section 
          id="contactme" 
          className="min-h-screen relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cream via-cream/50 to-transparent opacity-5 transition-opacity duration-1000" />
          <div className="py-12">
            <ContactMe />
          </div>
        </motion.section>
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-truffle text-cream py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="font-monument text-xs tracking-[0.2em] uppercase mb-6">Contacto</h3>
              <p className="font-ginger">reservas@chefstudio.com</p>
              <p className="font-ginger">+54 343 123 456</p>
            </div>
            <div>
              <h3 className="font-monument text-xs tracking-[0.2em] uppercase mb-6">Ubicación</h3>
              <p className="font-ginger">Paseo de la Innovación</p>
              <p className="font-ginger">Entre Rios, Argentina</p>
            </div>
            <div>
              <h3 className="font-monument text-xs tracking-[0.2em] uppercase mb-6">Horario</h3>
              <p className="font-ginger">Martes - Sábado</p>
              <p className="font-ginger">19:00 - 23:00</p>
            </div>
            <div>
              <h3 className="font-monument text-xs tracking-[0.2em] uppercase mb-6">Social</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-cream hover:text-copper transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-cream hover:text-copper transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-cream/10">
            <p className="text-center text-cream/60 font-ginger text-sm">
              © {new Date().getFullYear()} Leguizamon Kevin. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;