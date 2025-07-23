import React, { useState } from 'react';
import '../styles/VisitVisa.css';

const VisitVisa = () => {
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

  const visaServices = [
    {
      id: 1,
      title: 'Visa Extension on Arrival',
      price: '49 SR / application',
      icon: '✈️',
      color: 'green',
      description: 'Extend your visa upon arrival at the airport or border.'
    },
    {
      id: 2,
      title: 'Single Entry Business Visa',
      price: '39 SR / application',
      icon: '💼',
      color: 'orange',
      description: 'Single entry visa for business purposes and meetings.'
    },
    {
      id: 3,
      title: 'Multiple Entry Visa',
      price: '89 SR / application',
      icon: '🔄',
      color: 'blue',
      description: 'Multiple entry visa for frequent travelers.'
    },
    {
      id: 4,
      title: 'Single Entry Tourist Visa',
      price: '29 SR / application',
      icon: '🏖️',
      color: 'purple',
      description: 'Single entry visa for tourism and leisure travel.'
    },
    {
      id: 5,
      title: 'Visa Code 320',
      price: '59 SR / application',
      icon: '📋',
      color: 'teal',
      description: 'Special visa category code 320 for specific purposes.'
    },
    {
      id: 6,
      title: 'Express Processing',
      price: '99 SR / application',
      icon: '⚡',
      color: 'red',
      description: 'Fast-track processing for urgent visa applications.'
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
    <div className='visit-visa-container'>
    <div className='container-visa'>
      <div className="header-section">
        <h1>Visit Visa</h1>
        <p>Visa application service</p>
      </div>

      <div className="visa-grid">
        {visaServices.map((visa) => (
          <div key={visa.id} className={`visa-card ${visa.color}`}>
            <div className="visa-icon">
              <span>{visa.icon}</span>
            </div>
            <h3>{visa.title}</h3>
            <div className="visa-price">
              <span>{visa.price}</span>
            </div>
            <div className="visa-actions">
              <button 
                className="info-btn"
                onClick={() => handleInfoClick(visa)}
              >
                ℹ️ Info
              </button>
              <button 
                className="apply-btn"
                onClick={() => handleFormSubmit(visa)}
              >
                Apply →
              </button>
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
            <form onSubmit={handleSubmit} className="visa-form">
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
                  multiple
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
                <p>3-5 business days</p>
              </div>
              <div className="info-item">
                <h3>Required Documents</h3>
                <ul>
                  <li>Valid passport (6 months validity)</li>
                  <li>Passport-sized photographs</li>
                  <li>Completed application form</li>
                  <li>Supporting documents (varies by visa type)</li>
                </ul>
              </div>
              <div className="info-item">
                <h3>Validity</h3>
                <p>Varies by visa type (30-90 days)</p>
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

export default VisitVisa;