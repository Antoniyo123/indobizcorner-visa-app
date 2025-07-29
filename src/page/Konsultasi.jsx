import React, { useState } from 'react';
import '../styles/Consultation.css';
import { useTranslation } from 'react-i18next';
import { apiService } from '../services/api';

const Consultation = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    message: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.submitConsultation(formData);
      setShowModal(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        country: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      alert(t('consultation.alert.error'));
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="consultation-container">
      <div className="consultation-content">
        {/* Left Section */}
        <div className="consultation-left">
          <h1 className="consultation-title">
            {t('consultation.heading.part1')}
            <span className="highlight-text">{t('consultation.heading.part2')}</span>
            <span className="accent-text">{t('consultation.heading.part3')}</span>
          </h1>

          <p className="consultation-description">{t('consultation.description')}</p>

          <p className="consultation-subtitle">{t('consultation.subtitle')}</p>

          <div className="consultation-buttons">
            <button className="btn-talk">
              <span className="phone-icon">📞</span>
              {t('consultation.talkButton')}
            </button>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="consultation-right">
          <div className="form-container">
            <h2 className="form-title">
              {t('consultation.form.title.part1')} <span className="discovery-text">{t('consultation.form.title.part2')}</span>
            </h2>

            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder={t('consultation.form.firstName')}
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder={t('consultation.form.lastName')}
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <div className="input-with-icon">
                    <span className="input-icon">✉️</span>
                    <input
                      type="email"
                      name="email"
                      placeholder={t('consultation.form.email')}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-field with-icon"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-with-icon">
                    <span className="input-icon">📞</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t('consultation.form.phone')}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="input-field with-icon"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <div className="input-with-icon">
                    <span className="input-icon">🏢</span>
                    <input
                      type="text"
                      name="company"
                      placeholder={t('consultation.form.company')}
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input-field with-icon"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-with-icon">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      name="jobTitle"
                      placeholder={t('consultation.form.jobTitle')}
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="input-field with-icon"
                    />
                  </div>
                </div>
              </div>

              <div className="input-group">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="input-field select-field"
                >
                  <option value="">{t('consultation.form.country')}</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Other">{t('consultation.form.otherCountry')}</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  placeholder={t('consultation.form.message')}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="input-field textarea-field"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn-consultation">
                {t('consultation.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{t('consultation.modal.title')}</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <p>{t('consultation.modal.body')}</p>
            </div>
            <div className="modal-footer">
              <button className="modal-btn" onClick={closeModal}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultation;
