// Testimonial.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Testimonial.css';
import { apiService } from '../services/api';

const Testimonial = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backendStatus, setBackendStatus] = useState('checking...');
  const testimonials = t('testimonial.testimonials', { returnObjects: true });

  const clients = [
    require('../assets/img/PT Hindo (H&M).png'),
    require('../assets/img/PT NARI INDONESIA FOREVER.jpeg'),
    require('../assets/img/PT. ASIAN COLLECTIONS GARMENT.webp'),
    require('../assets/img/PT. ELGI EQUIPMENTS INDONESIA.png'),
    require('../assets/img/PT. HONOR TECHNOLOGIES INDONESIA.jpg'),
    require('../assets/img/PT. ESCOOP GREEN INDONESIA.jpg'),
    require('../assets/img/PT. FUJIKURA INDONESIA.jpg'),
    require('../assets/img/PT. EYE GRAPHIC INDONESIA.jpg'),
    require('../assets/img/PT. GIKOKO KOGYO .jpg'),
    require('../assets/img/PT. DAESE GARMIN.png'),
  ];

  useEffect(() => {
    const testBackend = async () => {
      try {
        const response = await apiService.testConnection();
        setBackendStatus(`✅ Connected - ${response.data.message}`);
        console.log('Backend connected:', response.data);
      } catch (error) {
        setBackendStatus(`❌ Failed: ${error.message}`);
        console.error('Backend connection failed:', error);
      }
    };

    testBackend();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-header">
          <div className="testimonial-badge">{t('testimonial.badge')}</div>
          <h2>{t('testimonial.title')}</h2>
        </div>

        <div className="testimonial-slider">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="testimonial-container">
            <div
              className="testimonial-wrapper"
              style={{
                transform: `translateX(-${(currentIndex / 3) * 100}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card-testi">
                  <div className="quote-icon">
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33333 24C5.86667 24 4.58333 23.4667 3.48333 22.4C2.38333 21.3333 1.83333 20.0667 1.83333 18.6C1.83333 17.1333 2.38333 15.8667 3.48333 14.8C4.58333 13.7333 5.86667 13.2 7.33333 13.2C8.8 13.2 10.0833 13.7333 11.1833 14.8C12.2833 15.8667 12.8333 17.1333 12.8333 18.6C12.8333 20.0667 12.2833 21.3333 11.1833 22.4C10.0833 23.4667 8.8 24 7.33333 24ZM24.6667 24C23.2 24 21.9167 23.4667 20.8167 22.4C19.7167 21.3333 19.1667 20.0667 19.1667 18.6C19.1667 17.1333 19.7167 15.8667 20.8167 14.8C21.9167 13.7333 23.2 13.2 24.6667 13.2C26.1333 13.2 27.4167 13.7333 28.5167 14.8C29.6167 15.8667 30.1667 17.1333 30.1667 18.6C30.1667 20.0667 29.6167 21.3333 28.5167 22.4C27.4167 23.4667 26.1333 24 24.6667 24Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-username">{testimonial.username}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next-btn" onClick={nextSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Clients Logo Marquee */}
      <div className="clients-section">
        <div className="clients-wrapper">
          <div className="clients-track">
            {[...clients, ...clients].map((clientLogo, index) => (
              <div key={index} className="client-item">
                <img src={clientLogo} alt={`Client ${index + 1}`} className="client-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
