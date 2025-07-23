import React from 'react';
import '../styles/Hero1.css';
import heroVideo from '../assets/video/Video Slider Dummy 1.mp4'; // import video

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Video background */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-yellow">YOUR TRUSTED MANAGED</span>
            <br />
            <span className="title-white">FOR </span>
            <br />
            <span className="title-white">VISA</span>
            <br />
            <span className="title-white">SERVICES</span>
          </h1>

          <p className="hero-description">
          Trusted by thousands for fast and seamless visa processing
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-circle">
          <span className="scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
