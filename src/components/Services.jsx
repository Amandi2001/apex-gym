import React, { useState } from 'react';
import { User, Users, Activity, Dumbbell, Search } from 'lucide-react';

function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const servicesData = [
    { id: 1, icon: <User size={32} />, title: "Personal Training", desc: "One-on-one coaching for personalized fitness" },
    { id: 2, icon: <Users size={32} />, title: "Group Classes", desc: "Fun and energetic workouts with a community" },
    { id: 3, icon: <Activity size={32} />, title: "Cardio Zone", desc: "Improve stamina and burn calories efficiently" },
    { id: 4, icon: <Dumbbell size={32} />, title: "Strength Area", desc: "Build muscle with modern strength equipment" }
  ];

  const filteredServices = servicesData.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="services-section">
      <div className="services-bg-pattern"></div> {/* Subtle overlay texture */}
      
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">OUR <span>SERVICES</span></h2>
          <p className="services-subtitle">Train smarter, get stronger, and achieve your fitness goals with our expert programs.</p>
          
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search services..." 
              className="search-input"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="service-cards-row">
          {filteredServices.map((service) => (
            <div className="card-item" key={service.id}>
              <div className="service-card">
                <div className="icon-box">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.desc}</p>
                <button className="view-more-btn">View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;