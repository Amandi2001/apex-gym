import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
     
      <div className="hero-overlay">
        <div className="hero-content">
        <h1>TRANSFORM YOUR <br /> BODY TODAY</h1>
          <p>
            Start your fitness journey with expert trainers, <br />
            modern equipment, and personalized workout <br />
            programs designed to help you achieve your goals.
          </p><br></br>
          <button className="join-btn">Join Now</button>
        </div>
        
        {/* Floating Info Bar from the image */}
        <div className="hero-status-bar">
          Live Apex Gym Opacity : 64% - Dynamic Class Schedule API Active
        </div>
      </div>
    </section>
  );
}

export default Hero;