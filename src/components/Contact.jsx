import React, { useState } from 'react';
import { CheckCircle, Send, Clock } from 'lucide-react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay"></div>
      
      <div className="contact-wrapper">
        <h2 className="section-title">GET IN <span>TOUCH</span></h2>
        <p className="contact-subtitle">Expert advice is just a message away. Reach out to our elite team.</p>
        
        <div className="contact-container">
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="input-group">
              <input type="text" placeholder="YOUR NAME" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="EMAIL ADDRESS" required />
            </div>
            <div className="input-group">
              <textarea placeholder="MESSAGE" rows="5" required></textarea>
            </div>
            <button type="submit" className="contact-btn">
              {submitted ? "MESSAGE RECEIVED" : "SEND MESSAGE"} 
              <Send size={18} style={{marginLeft: '10px'}} />
            </button>
          </form>
          
          <div className={`status-panel ${submitted ? 'success-active' : ''}`}>
            <div className="status-header">
              {submitted ? <CheckCircle size={40} color="#D4A017" /> : <Clock size={40} color="#555" />}
            </div>
            <div className="status-content">
              <h3>{submitted ? "SUCCESS" : "SYSTEM READY"}</h3>
              <p>
                {submitted 
                  ? "Your inquiry has been logged. An elite trainer will contact you within 24 hours." 
                  : "Please complete the form. Our average response time is currently 2 hours."}
              </p>
            </div>
            <div className="status-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;