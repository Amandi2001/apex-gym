import React, { useState } from 'react';
import { User, Users, Activity, Dumbbell, Search } from 'lucide-react';

function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const servicesData = [
    { 
      id: 1, 
      icon: <User size={32} />, 
      title: "Personal Training", 
      desc: "One-on-one coaching for personalized fitness",
      bgImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400" 
    },
    { 
      id: 2, 
      icon: <Users size={32} />, 
      title: "Group Classes", 
      desc: "Fun and energetic workouts with a community",
      bgImg: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=400"
    },
    { 
      id: 3, 
      icon: <Activity size={32} />, 
      title: "Cardio Zone", 
      desc: "Improve stamina and burn calories efficiently",
      bgImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400"
    },
    { 
      id: 4, 
      icon: <Dumbbell size={32} />, 
      title: "Strength Area", 
      desc: "Build muscle with modern strength equipment",
      bgImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400"
    }
  ];

  const filteredServices = servicesData.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="services-section">
      <div className="services-bg-pattern"></div>
      
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">OUR <span>SERVICES</span></h2>
          <p className="services-subtitle">Train smarter, get stronger, and achieve your goals with our elite programs.</p>
          
          <div className="search-wrapper">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              placeholder="Search services..." 
              className="search-input"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="service-grid">
          {filteredServices.map((service) => (
            <div className="service-card" key={service.id}>
             
              <div 
                className="card-bg-overlay" 
                style={{ backgroundImage: `url(${service.bgImg})` }}
              ></div>
              
              
              <div className="card-content">
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