import React from 'react';
import { Element } from 'react-scroll';
import AboutMe from './AboutMe';
import Experience from './Experience';
import ContactMe from './ContactMe';

const Home = () => {
  return (
    <div className="relative">
      <Element name="aboutme" className="min-h-screen">
        <AboutMe />
      </Element>
      
      <Element name="experience" className="min-h-screen">
        <Experience />
      </Element>
      
      <Element name="contactme" className="min-h-screen">
        <ContactMe />
      </Element>
    </div>
  );
};

export default Home; 