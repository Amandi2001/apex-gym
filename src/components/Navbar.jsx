import React from 'react';
import logoImg from '../assets/logo.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImg} alt="Apex Gym Logo" className="logo-icon" />
        <h2>APEX <span>GYM</span></h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#membership">Membership</a></li>
        <li><a href="#trainers">Trainers</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-actions">
        <button className="join-nav-btn">JOIN NOW</button>
      </div>
    </nav>
  );
}

export default Navbar;