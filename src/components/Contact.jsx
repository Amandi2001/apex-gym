import React, { useState, useRef } from 'react';
import { CheckCircle, Send, Clock, Loader2 } from 'lucide-react';

function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call (like EmailJS or a backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Clear the form fields after successful submission
      formRef.current.reset();

      // Optional: Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay"></div>
      
      <div className="contact-wrapper">
        <h2 className="section-title">GET IN <span>TOUCH</span></h2>
        <p className="contact-subtitle">Expert advice is just a message away. Reach out to our elite team.</p>
        
        <div className="contact-container">
          {/* Form with Reference for API handling */}
          <form 
            className="contact-form" 
            ref={formRef} 
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <input 
                type="text" 
                name="user_name" 
                placeholder="YOUR NAME" 
                required 
                disabled={submitted}
              />
            </div>
            <div className="input-group">
              <input 
                type="email" 
                name="user_email" 
                placeholder="EMAIL ADDRESS" 
                required 
                disabled={submitted}
              />
            </div>
            <div className="input-group">
              <textarea 
                name="message" 
                placeholder="MESSAGE" 
                rows="5" 
                required 
                disabled={submitted}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`contact-btn ${submitted ? 'btn-success' : ''}`}
              disabled={isSubmitting || submitted}
            >
              {isSubmitting ? (
                <>SENDING... <Loader2 className="spinner" size={18} /></>
              ) : submitted ? (
                <>MESSAGE RECEIVED <CheckCircle size={18} /></>
              ) : (
                <>SEND MESSAGE <Send size={18} /></>
              )}
            </button>
          </form>
          
          {/* Status Panel with dynamic classes */}
          <div className={`status-panel ${submitted ? 'success-active' : ''}`}>
            <div className="status-header">
              {submitted ? (
                <CheckCircle size={45} className="status-icon success" />
              ) : (
                <Clock size={45} className="status-icon pending" />
              )}
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