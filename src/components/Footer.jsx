import React from 'react';
import './Footer.css';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
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
          <ul>
            <li>
              <MapPin size={18} />
              <span>123 Performance Way, Summit City, Kandy</span>
            </li>
            <li>
              <Phone size={18} />
              <span>(+94)76-3752137</span>
            </li>
            <li>
              <Mail size={18} />
              <span>info@apexgym.com</span>
            </li>
          </ul>
        </div>

        {/* Map Column */}
        <div className="footer-col map-col">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.44040915383!2d80.59114141639893!3d7.29544439066601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662529367f03%3A0x6b490f2095f68b32!2sKandy!5e0!3m2!1sen!2slk!4v1715800000000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Hours Column */}
        <div className="footer-col hours-col">
          <h3>Hours</h3>
          <p>Mon-Fri: 5.00A.M - 10.00 P.M</p>
          <p>Sat-Sun: 7.00A.M - 8.00 P.M</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <span>Privacy policy</span> | <span>Terms Of Services</span> | <span>Membership Agreement</span>
        </div>
        <div className="footer-copyright">
          @2024 Apex Gym. All Right reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;