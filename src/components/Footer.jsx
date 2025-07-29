import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title-footer">{t('footer.heroTitle')}</h1>
        <button className="cta-button" onClick={() => window.open('#appointment', '_blank')}>
          {t('footer.bookAppointment')} →
        </button>
      </div>

      {/* Footer Links */}
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-section-title">{t('footer.contactTitle')}</h3>
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
                <span>{t('footer.address.line1')}</span>
                <span>{t('footer.address.line2')}</span>
                <span>{t('footer.address.line3')}</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:hi@indobizcorner.com" className="contact-link">
                csindobizcorner@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-section-title">{t('footer.navigate')}</h3>
          <ul className="footer-links">
            <li><a href="#services">{t('footer.links.services')}</a></li>
            <li><a href="#success-stories">{t('footer.links.successStories')}</a></li>
            <li><a href="#discover">{t('footer.links.discover')}</a></li>
            <li><a href="#care">{t('footer.links.career')}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-section-title">{t('footer.discover')}</h3>
          <ul className="footer-links">
            <li><a href="#latest-news">{t('footer.links.latestNews')}</a></li>
            <li><a href="#new-arrivals">{t('footer.links.newArrivals')}</a></li>
            <li><a href="#career">{t('footer.links.career')}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-section-title">{t('footer.followUs')}</h3>
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
          <span>© {t('footer.copyright')}</span>
          <a>PT Cipta Dinamika</a>
          <span> {t('footer.rightsReserved')}</span>
        </div>
        <div className="legal-links">
          <a href="#privacy-policy">{t('footer.privacyPolicy')}</a>
          <a href="#terms-conditions">{t('footer.termsCondition')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
