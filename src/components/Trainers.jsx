import React from 'react';

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
      <div className="container">
        <h2 className="section-title">Meet Our <span>Trainers</span></h2>
        <div className="trainer-cards-container">
          {trainers.map((t, i) => (
            <div key={i} className="trainer-profile-card">
              <div className="trainer-img-wrapper">
                <img src={t.image} alt={t.name} className="trainer-img" />
              </div>
              <div className="trainer-info">
                <h4>{t.name}</h4>
                <p className="trainer-role">{t.role}</p>
                <div className="trainer-socials">
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
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