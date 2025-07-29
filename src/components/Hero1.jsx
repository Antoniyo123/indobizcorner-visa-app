import React from 'react';
import { useTranslation } from 'react-i18next'; // ← Tambahkan ini
import '../styles/Hero1.css';
import heroVideo from '../assets/video/Video Slider Dummy 1.mp4';

const HeroSection = () => {
  const { t } = useTranslation(); // ← Gunakan hook i18n

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
            <span className="title-yellow">{t('hero.title1')}</span>
            <br />
            <span className="title-white">{t('hero.title2')}</span>
            <br />
            <span className="title-white">{t('hero.title3')}</span>
            <br />
            <span className="title-white">{t('hero.title4')}</span>
          </h1>

          <p className="hero-description">
            {t('hero.description')}
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
