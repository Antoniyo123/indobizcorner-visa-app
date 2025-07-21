// src/components/Home.jsx
import React from 'react';
import '../styles/Hero.css';

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Your journey begins here</h1>
          <p className="hero-subtitle">
            Seamless visa processing solutions tailored to your travel needs.
            <span className="cta-link">Apply now →</span>
          </p>
        </div>
        <div className="hero-image">
          <img src={require('../assets/img/SWELLOW.png')} alt="Passport and travel documents" />
        </div>
      </section>

      {/* Sub Hero */}
      <section className="sub-hero">
        <div className="sub-hero-content">
          <h2 className="section-title"><span className="emphasized">Visa</span> is a gateway to new experiences.</h2>
          <p className="section-description">Let us simplify your journey.</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2 className="section-heading">Categories</h2>
        <div className="category-cards">
          <div className="category-card">
            <div className="category-image">
              <img src= {require('../assets/img/SBY PESPOR.png')} alt="Tourist visa" />
            </div>
            <span className="category-name">Tourist</span>
          </div>
          <div className="category-card">
            <div className="category-image">
              <img src={require('../assets/img/SBY PESPOR.png')} alt="Business visa" />
            </div>
            <span className="category-name">Business</span>
          </div>
          <div className="category-card">
            <div className="category-image">
              <img src={require('../assets/img/SBY PESPOR.png')} alt="Student visa" />
            </div>
            <span className="category-name">Student</span>
          </div>
        </div>
      </section>

      {/* Services Collection */}
      <section className="collections">
        <div className="collections-text">
          <h2 className="collections-title">Selection of services</h2>
          <p className="collections-subtitle">
            Created with the highest standards of efficiency and reliability.
          </p>
        </div>
        <div className="filters">
          <div className="filter-item">
            <span className="filter-name">Processing Time</span>
            <span className="filter-count">(4)</span>
          </div>
          <div className="filter-item">
            <span className="filter-name">Destination</span>
            <span className="filter-count">(25)</span>
          </div>
          <div className="filter-item">
            <span className="filter-name">Visa Type</span>
            <span className="filter-count">(8)</span>
          </div>
          <div className="filter-item">
            <span className="filter-name">Requirements</span>
            <span className="filter-count">(12)</span>
          </div>
          <div className="filter-item">
            <span className="filter-name">Support</span>
            <span className="filter-count">(5)</span>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="popular">
        <h2 className="section-heading">Popular</h2>
        
        <div className="popular-grid">
          <div className="popular-item large">
            <img src={require('../assets/img/pexels-sound-on-3756879.jpg')} alt="Europe visa" />
            <div className="popular-item-overlay">
              <span className="popular-item-price">$149</span>
            </div>
          </div>
          
          <div className="popular-item">
            <img src={require('../assets/img/pexels-timmossholder-1722196.jpg')} alt="Asia visa" />
            <div className="popular-item-overlay">
              <span className="popular-item-price">$99</span>
            </div>
          </div>
          
          <div className="popular-item">
            <img src={require('../assets/img/pexels-timmossholder-1722196.jpg')} alt="Americas visa" />
            <div className="popular-item-overlay">
              <span className="popular-item-price">$129</span>
            </div>
          </div>
        </div>
        
        <div className="popular-description">
          <div className="description-column">
            <p>We deliver only the best services and expertise to make your visa application process smooth and stress-free.</p>
          </div>
          <div className="description-column">
            <p>Premium support, reliable solutions. We handle the complexities of applications with care and attention to every detail.</p>
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="inspiration">
        <h2 className="section-heading">Travel Essentials</h2>
        <div className="inspiration-content">
          <img src={require('../assets/img/pexels-thirdman-7652469.jpg')} alt="Travel essentials" />
        </div>
      </section>

      {/* Style Section */}
      <section className="style">
        <div className="style-content">
          <h2 className="style-title">Travel with confidence</h2>
          <p className="style-description">
            Create memorable experiences with peace of mind
            knowing your visa requirements are handled by experts,
            allowing you to focus on your journey.
          </p>
          <button className="style-button">Learn More</button>
        </div>
        <div className="style-gallery">
          <div className="gallery-image"><img src={require('../assets/img/pexels-thirdman-7652469.jpg')} alt="Travel gallery 1" /></div>
          <div className="gallery-image"><img src={require('../assets/img/pexels-thirdman-7652469.jpg')} alt="Travel gallery 2" /></div>
          <div className="gallery-image"><img src={require('../assets/img/pexels-thirdman-7652469.jpg')} alt="Travel gallery 3" /></div>
        </div>
      </section>
    </div>
  );
};

export default Home;