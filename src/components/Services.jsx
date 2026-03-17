import React from 'react';
import './Services.css';
import { User, Users, Activity, Dumbbell } from 'lucide-react'; // Using lucide-react for icons

function Services() {
  const servicesData = [
    {
      icon: <User size={48} />,
      title: "Personal Training",
      desc: "One-on-one coaching for personalized fitness"
    },
    {
      icon: <Users size={48} />,
      title: "Group Classes",
      desc: "Fun and energetic workouts with a community"
    },
    {
      icon: <Activity size={48} />,
      title: "Cardio Zone",
      desc: "Improve stamina and burn calories efficiently"
    },
    {
      icon: <Dumbbell size={48} />,
      title: "Strength Area",
      desc: "Build muscle with modern strength equipment"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>OUR SERVICES</h2>
        <p className="services-subtitle">Train smarter, get stronger, and achieve your fitness goals with our expert programs</p>
        
        <div className="service-cards">
          {servicesData.map((service, index) => (
            <div className="card-wrapper" key={index}>
              <div className="card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
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