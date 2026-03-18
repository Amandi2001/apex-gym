import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery'; // <--- ADD THIS LINE
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
      <Gallery /> {/* Now React will find the component here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;