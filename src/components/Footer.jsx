import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title-footer">Book Your FREE Visa Consultation        </h1>
        <button className="cta-button" onClick={() => window.open('#appointment', '_blank')}>
          Book Appointment →
        </button>
      </div>

      {/* Footer Links */}
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-section-title">Contact</h3>
          <div className="contact-info-footer">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-link">
                <div>+62 21 2271 7665</div>
                <div>+62 812-9250-1293</div>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="address">
                <span>Ruko Tiara Buncit Blok D12</span>
                <span>Jl. Kemang Utara IX, Pancoran</span>
                <span>Jakarta Selatan 12760</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:hi@indobizcorner.com" className="contact-link">csindobizcorner@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-section-title">Navigate</h3>
          <ul className="footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#success-stories">Success Stories</a></li>
            <li><a href="#discover">Discover</a></li>
            <li><a href="#care">Career</a></li>
            {/* <li><a href="#download">Download App</a></li> */}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-section-title">Discover</h3>
          <ul className="footer-links">
            <li><a href="#latest-news">Latest News</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            {/* <li><a href="#solution">Solution</a></li> */}
            {/* <li><a href="#gain-profession">Gain Profession</a></li> */}
            <li><a href="#career">Career</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-section-title">Follow Us</h3>
          <ul className="footer-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="copyright">
          <span>© Copyright </span>
          <a>PT Cipta Dinamika</a>
          <span> All rights reserved. 2024</span>
        </div>
        <div className="legal-links">
          <a href="#privacy-policy">Privacy & Policy</a>
          <a href="#terms-conditions">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
