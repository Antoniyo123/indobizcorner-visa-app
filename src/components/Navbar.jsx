// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-logo">
</div>

        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li className="navbar-item">
              <a href="#home" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#categories" className="navbar-link">Categories</a>
            </li>
            <li className="navbar-item">
              <a href="#collections" className="navbar-link">Collections</a>
            </li>
            <li className="navbar-item">
              <a href="#style" className="navbar-link">Style</a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link">Contact</a>
            </li>
          </ul>
          
          <div className="navbar-buttons">
            <button className="consultation-btn">Konsultasi</button>
          </div>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;