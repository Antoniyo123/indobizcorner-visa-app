import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar1.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'id');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

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

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setCurrentLanguage(savedLang);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageDropdownOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleLanguageDropdown = () => setIsLanguageDropdownOpen(!isLanguageDropdownOpen);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setCurrentLanguage(langCode);
    localStorage.setItem('language', langCode);
    setIsLanguageDropdownOpen(false);
  };

  const getCurrentLanguage = () => languages.find(lang => lang.code === currentLanguage);

  return (
    <header className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <nav className="nav-container">
        <div className="logo-section">
          <NavLink to="/" className="logo-link" onClick={closeMobileMenu}>
            <img src={require('../assets/img/logo 01.png')} alt="Logo" className="logo-icon" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu-center desktop-menu">
          <div className="nav-pills">
            <NavLink to="/" className="nav-pill" end>{t('navbar.home')}</NavLink>
            <NavLink to="/visa-services" className="nav-pill">{t('navbar.visaServices')}</NavLink>
            <NavLink to="/about" className="nav-pill">{t('navbar.about')}</NavLink>
            <NavLink to="/contact" className="nav-pill">{t('navbar.contact')}</NavLink>
            <NavLink to="/news" className="nav-pill">{t('navbar.news')}</NavLink>
          </div>
        </div>

        {/* Right Section */}
        <div className="nav-right desktop-menu">
          <div className="language-switcher">
            <button className="language-btn" onClick={toggleLanguageDropdown}>
              <span className="language-flag">{getCurrentLanguage().flag}</span>
              <span className="language-code">{currentLanguage.toUpperCase()}</span>
              <span className={`language-dropdown-arrow ${isLanguageDropdownOpen ? 'active' : ''}`}>▼</span>
            </button>
            {isLanguageDropdownOpen && (
              <div className="language-dropdown">
                {languages.map(lang => (
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
          <NavLink to="/consultation">
            <button className="get-started-btn">
              {t('navbar.consultation')} <span className="arrow-icon">→</span>
            </button>
          </NavLink>
        </div>

        {/* Hamburger */}
        <div className="hamburger-menu">
          <button
            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <h3 className="mobile-menu-title">{t('navbar.menu')}</h3>
            <div className="mobile-nav-items">
              <NavLink to="/" className="mobile-nav-item" onClick={closeMobileMenu} end>
                🏠 {t('navbar.home')} →
              </NavLink>
              <NavLink to="/visa-services" className="mobile-nav-item" onClick={closeMobileMenu}>
                📋 {t('navbar.visaServices')} →
              </NavLink>
              <NavLink to="/about" className="mobile-nav-item" onClick={closeMobileMenu}>
                👥 {t('navbar.about')} →
              </NavLink>
              <NavLink to="/contact" className="mobile-nav-item" onClick={closeMobileMenu}>
                📞 {t('navbar.contact')} →
              </NavLink>
              <NavLink to="/news" className="mobile-nav-item" onClick={closeMobileMenu}>
                📰 {t('navbar.news')} →
              </NavLink>
            </div>

            {/* Mobile Language */}
            <div className="mobile-language-section">
              <div className="mobile-language-header">
                🌐 {t('navbar.language')}
              </div>
              {languages.map(lang => (
                <button
                  key={lang.code}
                  className={`mobile-language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.flag} {lang.name}
                  {currentLanguage === lang.code && <span className="mobile-language-check">✓</span>}
                </button>
              ))}
            </div>

            <div className="mobile-consultation">
              <NavLink to="/consultation" onClick={closeMobileMenu}>
                <button className="mobile-consultation-btn">
                  💬 {t('navbar.consultationNow')} →
                </button>
              </NavLink>
            </div>

            <div className="mobile-menu-footer">
              <p className="mobile-menu-tagline">{t('navbar.tagline')}</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
