import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Instagram, Facebook, Twitter, ChevronDown } from 'lucide-react';

const Hero = () => {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1920&auto=format&fit=crop" 
  ];

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${images[currentImg]})` }}
    >
      <div className="hero-overlay">
        {/* Social Sidebar */}
        <div className="hero-socials">
          <Facebook size={20} className="social-icon" />
          <Instagram size={20} className="social-icon" />
          <Twitter size={20} className="social-icon" />
          <div className="social-line"></div>
        </div>

        <div className="hero-content">
          <span className="hero-tagline">ELITE FITNESS DESTINATION</span>
          <h1>TRANSFORM YOUR <br /> <span>BODY TODAY</span></h1>
          <p>
            Start your fitness journey with expert trainers, modern equipment, <br />
            and personalized programs designed to achieve your goals.
          </p>
          <div className="hero-btns">
            <button className="join-btn">JOIN NOW</button>
          </div>
        </div>
        
        <div className="status-bar">
          <span className="live-dot"></span> 
          Live Apex Gym Capacity : 64% - API Active
        </div>

        <div className="scroll-indicator">
          <p>SCROLL</p>
          <ChevronDown className="bounce-arrow" />
        </div>

        <div className="slider-dots">
          {images.map((_, index) => (
            <div key={index} className={`dot ${index === currentImg ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;