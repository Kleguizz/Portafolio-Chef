import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { motion } from 'framer-motion';

const compactPlates = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    title: "Experiencia Gourmet"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=2070",
    title: "Sabores Únicos"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070",
    title: "Técnica y Pasión"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2070",
    title: "Frescura Natural"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070",
    title: "Arte Culinario"
  }
];

const CompactCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative w-full max-w-4xl mx-auto"
    >
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="py-10"
      >
        {compactPlates.map((plate) => (
          <SwiperSlide key={plate.id} className="w-64">
            <div className="relative aspect-square rounded-xl overflow-hidden group">
              <img
                src={plate.image}
                alt={plate.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-truffle/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-monument text-cream text-sm tracking-wider">
                  {plate.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default CompactCarousel; 