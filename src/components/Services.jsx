import React, { useState } from 'react';
import { User, Users, Activity, Dumbbell } from 'lucide-react';

function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const servicesData = [
    { id: 1, icon: <User size={32} />, title: "Personal Training", desc: "One-on-one coaching for personalized fitness" },
    { id: 2, icon: <Users size={32} />, title: "Group Classes", desc: "Fun and energetic workouts with a community" },
    { id: 3, icon: <Activity size={32} />, title: "Cardio Zone", desc: "Improve stamina and burn calories efficiently" },
    { id: 4, icon: <Dumbbell size={32} />, title: "Strength Area", desc: "Build muscle with modern strength equipment" }
  ];

  // Search logic
  const filteredServices = servicesData.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="text-uppercase">OUR SERVICES</h2>
        <p className="services-subtitle">Train smarter, get stronger, and achieve your fitness goals with our expert programs</p>
        
        {/* Search Input */}
        <div className="search-wrapper">
          <input 
            type="text" 
            placeholder="Search services..." 
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="service-cards-row">
          {filteredServices.map((service) => (
            <div className="card-item" key={service.id}>
              <div className="card">
                <div className="icon-box">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.desc}</p>
              </div>
              <button className="view-more-btn">View More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;