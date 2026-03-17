import React, { useState } from "react";
import "./Contact.css";
import { CheckCircle } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    
    // Hide success message after 5 seconds if you want
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Section</h2>
      
      <div className="contact-container">
        {/* Left Side: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" className="send-btn">Send Message</button>
        </form>

        {/* Right Side: Success Box */}
        <div className={`success-box ${submitted ? 'show' : ''}`}>
          <div className="success-content">
            <CheckCircle className="check-icon" size={40} />
            <p>Message Sent Successfully</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;