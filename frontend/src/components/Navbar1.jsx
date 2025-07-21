import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar1.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('id'); // 'id' for Indonesian, 'en' for English
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Language content object
  const content = {
    en: {
      home: 'Home',
      visaServices: 'Visa Services',
      about: 'About Us',
      contact: 'Contact Us',
      news: 'News',
      consultation: 'Consultation',
      consultationNow: 'Consult Now',
      menu: 'Menu',
      tagline: 'IndoBIZCorner - Your Business Partner'
    },
    id: {
      home: 'Beranda',
      visaServices: 'Layanan Visa',
      about: 'Tentang Kami',
      contact: 'Kontak Kami',
      news: 'Berita',
      consultation: 'Konsultasi',
      consultationNow: 'Konsultasi Sekarang',
      menu: 'Menu',
      tagline: 'IndoBIZCorner - Mitra Bisnis Anda'
    }
  };

  const languages = [
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
        setIsLanguageDropdownOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    setIsLanguageDropdownOpen(false);
    // Here you would typically also update your app's language context
    // localStorage.setItem('language', langCode); // If you want to persist the choice
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage);
  };

  const t = content[currentLanguage]; // Translation helper

  return (
    <header className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <nav className="nav-container">
        {/* Logo Section */}
        <div className="logo-section">
          <NavLink to="/" className="logo-link" onClick={closeMobileMenu}> 
            <img src={require('../assets/img/logo 01.png')} alt="IndoBIZCorner Logo" className="logo-icon" />
          </NavLink>
        </div>

        {/* Desktop Navbar Links */}
        <div className="nav-menu-center desktop-menu">
          <div className="nav-pills">
            <NavLink to="/" className="nav-pill" end>
              {t.home}
            </NavLink>
            <NavLink to="/visa-services" className="nav-pill">
              {t.visaServices}
            </NavLink>
            <NavLink to="/about" className="nav-pill">{t.about}</NavLink>
            <NavLink to="/contact" className="nav-pill">{t.contact}</NavLink>
            <NavLink to="/news" className="nav-pill">{t.news}</NavLink>
          </div>
        </div>

        {/* Desktop Right Section with Language Switcher and Consultation Button */}
        <div className="nav-right desktop-menu">
          {/* Language Switcher */}
          <div className="language-switcher">
            <button 
              className="language-btn"
              onClick={toggleLanguageDropdown}
              aria-label="Change language"
            >
              <span className="language-flag">{getCurrentLanguage().flag}</span>
              <span className="language-code">{currentLanguage.toUpperCase()}</span>
              <span className={`language-dropdown-arrow ${isLanguageDropdownOpen ? 'active' : ''}`}>▼</span>
            </button>
            
            {isLanguageDropdownOpen && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className="language-flag">{lang.flag}</span>
                    <span className="language-name">{lang.name}</span>
                    {currentLanguage === lang.code && <span className="language-check">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Consultation Button */}
          <NavLink to="/consultation">
            <button className="get-started-btn">
              {t.consultation} <span className="arrow-icon">→</span>
            </button>
          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <div className="hamburger-menu">
          <button 
            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <h3 className="mobile-menu-title">{t.menu}</h3>
            </div>
            
            <div className="mobile-nav-items">
              <NavLink to="/" className="mobile-nav-item" onClick={closeMobileMenu} end>
                <span className="mobile-nav-icon">🏠</span>
                <span className="mobile-nav-text">{t.home}</span>
                <span className="mobile-nav-arrow">→</span>
              </NavLink>
              <NavLink to="/visa-services" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">📋</span>
                <span className="mobile-nav-text">{t.visaServices}</span>
                <span className="mobile-nav-arrow">→</span>
              </NavLink>
              <NavLink to="/about" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">👥</span>
                <span className="mobile-nav-text">{t.about}</span>
                <span className="mobile-nav-arrow">→</span>
              </NavLink>
              <NavLink to="/contact" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">📞</span>
                <span className="mobile-nav-text">{t.contact}</span>
                <span className="mobile-nav-arrow">→</span>
              </NavLink>
              <NavLink to="/news" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">📰</span>
                <span className="mobile-nav-text">{t.news}</span>
                <span className="mobile-nav-arrow">→</span>
              </NavLink>
            </div>

            {/* Mobile Language Switcher */}
            <div className="mobile-language-section">
              <div className="mobile-language-header">
                <span className="mobile-language-icon">🌐</span>
                <span className="mobile-language-title">Language / Bahasa</span>
              </div>
              <div className="mobile-language-options">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`mobile-language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className="mobile-language-flag">{lang.flag}</span>
                    <span className="mobile-language-name">{lang.name}</span>
                    {currentLanguage === lang.code && <span className="mobile-language-check">✓</span>}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mobile-consultation">
              <NavLink to="/consultation" onClick={closeMobileMenu}>
                <button className="mobile-consultation-btn">
                  <span className="consultation-icon">💬</span>
                  {t.consultationNow}
                  <span className="consultation-arrow">→</span>
                </button>
              </NavLink>
            </div>

            <div className="mobile-menu-footer">
              <p className="mobile-menu-tagline">{t.tagline}</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;