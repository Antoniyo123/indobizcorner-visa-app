import React, { useState } from 'react';
import '../styles/InternasionalVisa.css';

const InternationalVisa = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    passport: '',
    purpose: '',
    documents: null
  });

  const internationalVisas = [
    {
      id: 1,
      title: 'Work Visa',
      icon: '🌐',
      color: 'blue',
      description: 'Visa for professionals who want to work abroad.',
      price: '99 SR / application'
    },
    {
      id: 2,
      title: 'Student Visa',
      icon: '🎓',
      color: 'green',
      description: 'Visa for students applying to international institutions.',
      price: '79 SR / application'
    },
    {
      id: 3,
      title: 'Medical Visa',
      icon: '🏥',
      color: 'orange',
      description: 'Visa for individuals seeking medical treatment abroad.',
      price: '109 SR / application'
    }
  ];

  const handleFormSubmit = (visa) => {
    setSelectedVisa(visa);
    setShowFormModal(true);
  };

  const handleInfoClick = (visa) => {
    setSelectedVisa(visa);
    setShowInfoModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    setShowFormModal(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      nationality: '',
      passport: '',
      purpose: '',
      documents: null
    });
  };

  const closeModal = () => {
    setShowFormModal(false);
    setShowInfoModal(false);
    setSelectedVisa(null);
  };

  return (
    <div className="international-visa-container">
      <div className="container-international">
        <div className="header-section">
          <h1>International Visa Services</h1>
          <p>Apply for international work, study, or medical visas.</p>
        </div>

        <div className="international-grid">
          {internationalVisas.map((visa) => (
            <div key={visa.id} className={`international-card ${visa.color}`}>
              <div className="international-icon">
                <span>{visa.icon}</span>
              </div>
              <h3>{visa.title}</h3>
              <div className="international-description">
                <p>{visa.description}</p>
              </div>
              <div className="international-actions">
                <button className="info-btn" onClick={() => handleInfoClick(visa)}>ℹ️ Info</button>
                <button className="apply-btn" onClick={() => handleFormSubmit(visa)}>Apply →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Form Modal */}
        {showFormModal && selectedVisa && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Apply for {selectedVisa.title}</h2>
                <button className="close-btn" onClick={closeModal}>×</button>
              </div>
              <form onSubmit={handleSubmit} className="international-form">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nationality">Nationality *</label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passport">Passport Number *</label>
                  <input
                    type="text"
                    id="passport"
                    name="passport"
                    value={formData.passport}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="purpose">Purpose of Visit</label>
                  <textarea
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="documents">Upload Documents *</label>
                  <input
                    type="file"
                    id="documents"
                    name="documents"
                    onChange={handleInputChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                  />
                  <small>Accepted formats: PDF, JPG, PNG</small>
                </div>
                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={closeModal}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Info Modal */}
        {showInfoModal && selectedVisa && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content info-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedVisa.title} - Information</h2>
                <button className="close-btn" onClick={closeModal}>×</button>
              </div>
              <div className="info-content">
                <div className="info-item">
                  <h3>Description</h3>
                  <p>{selectedVisa.description}</p>
                </div>
                <div className="info-item">
                  <h3>Price</h3>
                  <p>{selectedVisa.price}</p>
                </div>
                <div className="info-item">
                  <h3>Processing Time</h3>
                  <p>5-7 business days</p>
                </div>
                <div className="info-item">
                  <h3>Required Documents</h3>
                  <ul>
                    <li>Valid passport (minimum 6 months validity)</li>
                    <li>Passport-sized photo</li>
                    <li>Completed application form</li>
                    <li>Supporting documents (as required)</li>
                  </ul>
                </div>
                <div className="info-item">
                  <h3>Validity</h3>
                  <p>Usually 30–90 days depending on visa type</p>
                </div>
              </div>
              <div className="modal-footer">
                <button className="close-info-btn" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternationalVisa;
