import React from 'react';
import aboutImg from '../assets/about.jpg'; 

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* === Image Side === */}
        <div className="about-visual-side">
          <div className="about-image-wrapper">
            <img src={aboutImg} alt="Apex Gym Training" className="about-img" />
            
            {/* The Experience Box inside the image */}
            <div className="experience-box">
              <h3 className="exp-number">10+</h3>
              <p className="exp-text">YEARS OF ELITE TRAINING</p>
            </div>
          </div>
        </div>

        {/* === Text Side === */}
        <div className="about-text-side">
          <h2 className="section-title">
            ABOUT <span className="gold-text">OUR GYM</span>
          </h2>
          <p className="about-description">
            At Apex GYM, we are committed to helping you achieve your fitness 
            goals. With state-of-the-art equipment, certified trainers, and 
            customized workout plans, we create a motivating environment where 
            everyone can push their limits and unlock their true potential.
          </p>
          
          <div className="about-list">
            <div className="list-item">
              <span className="check-mark">✓</span>
              <p>State-of-the-art Equipment</p>
            </div>
            <div className="list-item">
              <span className="check-mark">✓</span>
              <p>Expert Certified Trainers</p>
            </div>
            <div className="list-item">
              <span className="check-mark">✓</span>
              <p>Personalized Nutrition Plans</p>
            </div>
          </div>

          <button className="about-cta">EXPLORE PROGRAMS</button>
        </div>

      </div>
    </section>
  );
}

export default About;