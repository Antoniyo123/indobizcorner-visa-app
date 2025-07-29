import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, MessageCircle, Mail } from 'lucide-react';
import { apiService } from '../services/api';
import '../styles/Contact.css';

const ContactPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const officeLocations = [
    {
      id: 1,
      name: "Jakarta Office",
      address: "Ruko Tiara Buncit Blok D12, Jl. Kemang Utara IX, Pancoran, Jakarta Selatan 12760",
      phone: "+62 8129-2501-293",
      mapUrl: "https://www.google.com/maps/embed?...",
      googleMapsLink: "https://maps.google.com/?q=Ruko+Tiara+Buncit+..."
    },
    {
      id: 2,
      name: "Bekasi Office",
      address: "Megah Cikarang Center No. 45, Cikarang Selatan Kab. Bekasi 17532 – Jawa Barat",
      phone: "+62 8129-2501-293 +62 8211-3333-801",
      mapUrl: "https://www.google.com/maps/embed?...",
      googleMapsLink: "https://maps.google.com/?q=Jl+HR+Muhammad..."
    },
    {
      id: 3,
      name: "Bali Office",
      address: "Jl. Yudistira No. 24, Seminyak Kab. Badung 80361 – Bali",
      phone: "+62 813 3080 3354",
      mapUrl: "https://www.google.com/maps/embed?...",
      googleMapsLink: "https://maps.google.com/?q=Jl+Gatot+Subroto+No+456..."
    },
    {
      id: 4,
      name: "Bali Office",
      address: "Jl. Hanoman No.56, Ubud, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571",
      phone: "+62 813 3080 3354",
      mapUrl: "https://www.google.com/maps/embed?...",
      googleMapsLink: "https://maps.google.com/?q=Jl+Sunset+Road..."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (formData.name && formData.email && formData.message) {
      try {
        await apiService.submitContactMessage(formData);
        alert(t('contact.alert.success'));
        setFormData({ name: '', email: '', message: '' });
      } catch (err) {
        console.error('Submit error:', err);
        alert(t('contact.alert.error'));
      }
    } else {
      alert(t('contact.alert.emptyFields'));
    }
  };

  const handlePhoneClick = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleAddressClick = (googleMapsLink) => {
    window.open(googleMapsLink, '_blank');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero-section">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-container">
          <div className="contact-cards-row-one">
            {officeLocations.slice(0, 2).map((office, index) => (
              <div key={office.id} className="contact-office-card contact-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="contact-card-icon-wrapper"><MapPin className="contact-card-icon" /></div>
                <h3 className="contact-card-title">{office.name}</h3>
                <p className="contact-card-text contact-address-link" onClick={() => handleAddressClick(office.googleMapsLink)}>{office.address}</p>
                <p className="contact-card-text contact-phone-link contact-mb-0" onClick={() => handlePhoneClick(office.phone)}>📞 {office.phone}</p>
              </div>
            ))}
          </div>

          <div className="contact-cards-row-two">
            {officeLocations.slice(2, 4).map((office, index) => (
              <div key={office.id} className="contact-office-card contact-slide-up" style={{ animationDelay: `${(index + 2) * 0.1}s` }}>
                <div className="contact-card-icon-wrapper"><MapPin className="contact-card-icon" /></div>
                <h3 className="contact-card-title">{office.name}</h3>
                <p className="contact-card-text contact-address-link" onClick={() => handleAddressClick(office.googleMapsLink)}>{office.address}</p>
                <p className="contact-card-text contact-phone-link contact-mb-0" onClick={() => handlePhoneClick(office.phone)}>📞 {office.phone}</p>
              </div>
            ))}
          </div>

          <div className="contact-cards-row-three">
            <div className="contact-info-card contact-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="contact-card-icon-wrapper"><Mail className="contact-card-icon" /></div>
              <h3 className="contact-card-title">{t('contact.info.emailTitle')}</h3>
              <p className="contact-card-text contact-email-link" onClick={() => window.open('mailto:hi@indobizcorner.com')}>📧 hi@indobizcorner.com</p>
            </div>

            <div className="contact-info-card contact-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="contact-card-icon-wrapper"><MessageCircle className="contact-card-icon" /></div>
              <h3 className="contact-card-title">{t('contact.info.supportTitle')}</h3>
              <p className="contact-card-text">{t('contact.info.supportDesc')}</p>
              <p className="contact-card-text contact-mb-0">{t('contact.info.supportNote')}</p>
            </div>
          </div>

          <div className="contact-map-section">
            <div className="contact-map-card contact-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="contact-map-container">
                <iframe
                  className="contact-map-image"
                  src={officeLocations[0].mapUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="contact-map-location-badge">
                  <span>🏢 {t('contact.map.mainOffice')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-content">
            <div className="contact-form-text">
              <h2 className="contact-form-title">{t('contact.form.title')}</h2>
              <p className="contact-form-description">{t('contact.form.description')}</p>
            </div>
            <div className="contact-form-wrapper">
              <div className="contact-form-fields">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label">{t('contact.form.name')}</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.name')}
                      className="contact-form-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label className="contact-form-label">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.email')}
                      className="contact-form-input"
                    />
                  </div>
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">{t('contact.form.message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.message')}
                    className="contact-form-textarea"
                  ></textarea>
                </div>
                <div className="contact-form-submit-wrapper">
                  <button onClick={handleSubmit} className="contact-form-submit-btn">
                    {t('contact.form.send')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
