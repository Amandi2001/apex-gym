import React from 'react';
import aboutImg from '../assets/about.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* Image Side */}
        <div className="about-image-side">
          <div className="about-img-frame">
            <img src={aboutImg} alt="Gym Training" />
          </div>
        </div>

        {/* Text Side */}
        <div className="about-text-side">
          <h2 className="section-title">ABOUT OUR GYM</h2>
          <p className="section-description">
            At Apex GYM, we are committed to helping you achieve your fitness 
            goals. With state-of-the-art equipment, certified trainers, and 
            customized workout plans, we create a motivating environment where 
            everyone can push their limits and unlock their true potential.
          </p>
          <p className="section-description">
            Whether your goal is strength, endurance, weight loss, or overall 
            wellness, we have the programs and expertise to guide you every 
            step of the way.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;