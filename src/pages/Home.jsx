import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Pricing from '../components/Pricing'; // New
import Trainers from '../components/Trainers'; // New
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials'; // New

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../App.css';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Trainers /> 
      <Gallery />
      <Testimonials /> 
      
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;