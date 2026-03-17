import React from 'react';
import './About.css';
import aboutImg from '../assets/about.jpg'; // Importing from assets

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={aboutImg} alt="Man training in gym" />
        </div>
        <div className="about-text">
          <h2>ABOUT OUR GYM</h2>
          <p>
            At Apex GYM, we are committed to helping you achieve your fitness 
            goals. With state-of-the-art equipment, certified trainers, and 
            customized workout plans, we create a motivating environment where 
            everyone can push their limits and unlock their true potential. 
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