import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="contact">
      <h2>Contact Section</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit" className="join-btn">Send Message</button>
        </form>
        
        <div className="success-box" style={{ opacity: submitted ? 1 : 0.3 }}>
          <CheckCircle color="#27ae60" size={48} />
          <p>{submitted ? "Message Sent Successfully" : "Waiting for message..."}</p>
        </div>
      </div>
    </section>
  );
}
export default Contact;