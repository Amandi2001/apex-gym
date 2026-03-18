import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    { 
      name: 'Alex Rivera', 
      role: 'Bodybuilding Expert', 
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      name: 'Sarah Chen', 
      role: 'Yoga & Flexibility', 
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400' 
    },
    { 
      name: 'Marcus Thorne', 
      role: 'Nutrition Specialist', 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' 
    }
  ];

  return (
    <section className="trainers-section">
      {/* Subtle background glow for depth */}
      <div className="trainers-bg-glow"></div>
      
      <div className="container">
        <h2 className="section-title">MEET OUR <span>TRAINERS</span></h2>
        <p className="trainers-subtitle">Push your limits with guidance from our world-class certified experts.</p>
        
        <div className="trainer-cards-container">
          {trainers.map((t, i) => (
            <div key={i} className="trainer-profile-card">
              <div className="trainer-img-wrapper">
                <img src={t.image} alt={t.name} className="trainer-img" />
                <div className="trainer-img-overlay"></div>
              </div>
              <div className="trainer-info">
                <h4>{t.name}</h4>
                <p className="trainer-role">{t.role}</p>
                <div className="trainer-socials">
                  <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                  <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                  <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;