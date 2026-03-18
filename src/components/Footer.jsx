import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">APEX <span>GYM</span></h2>
          <p>Reach Your Peak. <br /> Transform Your Life.</p>
          <div className="social-icons">
            <Facebook size={24} className="social-icon" />
            <Twitter size={24} className="social-icon" />
            <Instagram size={24} className="social-icon" />
            <Youtube size={24} className="social-icon" />
          </div>
          <h3 className="apex-elit">APEX Elit</h3>
        </div>

        {/* Contact Column */}
        <div className="footer-col contact-col">
          <h3>Contact & Find Us</h3>
          <div className="contact-item">
            <MapPin size={18} />
            <span>123 Performance Way, Summit City, Kandy</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>(+94)76-3752137</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>info@apexgym.com</span>
          </div>
        </div>

        {/* Map Column - FIXED GOOGLE MAP URL */}
        <div className="footer-col map-col">
          <div className="map-container">
            <iframe 
              title="Google Map" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.43054178331!2d80.5910398863655!3d7.295444318059032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662d08f4c28f%3A0x67399589d985a975!2sKandy!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="find-us-tag">FIND US</div>
          </div>
        </div>

        {/* Hours Column */}
        <div className="footer-col hours-col">
          <h3>Hours</h3>
          <p>Mon-Fri: 5.00A.M - 10.00 P.M</p>
          <p>sat-Sun: 7.00A.M - 8.00 P.M</p>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom">
        <div className="legal-links">
          <span>Privacy policy</span> | <span>Terms Of Services</span> | <span>Membership Agreement</span>
        </div>
        <div className="copyright">
          @2024 Apex Gym. All Right reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;