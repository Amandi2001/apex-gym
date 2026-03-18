import React, { useState } from 'react';
import { User, Users, Activity, Dumbbell } from 'lucide-react';

function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const servicesData = [
    { id: 1, icon: <User />, title: "Personal Training", desc: "One-on-one coaching for personalized fitness" },
    { id: 2, icon: <Users />, title: "Group Classes", desc: "Fun and energetic workouts with a community" },
    { id: 3, icon: <Activity />, title: "Cardio Zone", desc: "Improve stamina and burn calories efficiently" },
    { id: 4, icon: <Dumbbell />, title: "Strength Area", desc: "Build muscle with modern strength equipment" }
  ];

  const filteredServices = servicesData.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="services">
      <h2>OUR SERVICES</h2>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search services..." 
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="service-cards">
        {filteredServices.map((service) => (
          <div className="card" key={service.id}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <button className="view-more-btn">View More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;