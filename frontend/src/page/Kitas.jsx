import React, { useState } from 'react';
import '../styles/TemporaryStay.css';

const TemporaryStayPermit = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedPermit, setSelectedPermit] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    passport: '',
    purpose: '',
    documents: null
  });

  const stayPermits = [
    {
      id: 1,
      title: 'Temporary Stay Permit on Arrival',
      price: '49 SR / application',
      icon: '✈️',
      color: 'green',
      description: 'Extend your temporary stay upon arrival at the airport or border.'
    },
    {
      id: 2,
      title: 'Single Entry Temporary Stay Permit',
      price: '39 SR / application',
      icon: '💼',
      color: 'orange',
      description: 'Single entry permit for temporary stays during business activities.'
    },
    {
      id: 3,
      title: 'Multiple Entry Temporary Stay Permit',
      price: '89 SR / application',
      icon: '🔄',
      color: 'blue',
      description: 'Multiple entry permit for frequent temporary stays.'
    },
    {
      id: 4,
      title: 'Single Entry Tourist Stay Permit',
      price: '29 SR / application',
      icon: '🏖️',
      color: 'purple',
      description: 'Single entry permit for tourism and leisure activities.'
    },
    {
      id: 5,
      title: 'Special Permit Code 320',
      price: '59 SR / application',
      icon: '📋',
      color: 'teal',
      description: 'Special permit code 320 for specific purposes.'
    },
    {
      id: 6,
      title: 'Express Processing for Temporary Stay',
      price: '99 SR / application',
      icon: '⚡',
      color: 'red',
      description: 'Fast-track processing for urgent temporary stay permit applications.'
    }
  ];

  const handleFormSubmit = (permit) => {
    setSelectedPermit(permit);
    setShowFormModal(true);
  };

  const handleInfoClick = (permit) => {
    setSelectedPermit(permit);
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
    setSelectedPermit(null);
  };

  return (
    <div className='temporary-stay-container'>
      <div className='container-stay'>
        <div className="header-section">
          <h1>Temporary Stay Permit</h1>
          <p>Temporary stay permit application service</p>
        </div>

        <div className="stay-grid">
          {stayPermits.map((permit) => (
            <div key={permit.id} className={`stay-card ${permit.color}`}>
              <div className="stay-icon">
                <span>{permit.icon}</span>
              </div>
              <h3>{permit.title}</h3>
              <div className="stay-price">
                <span>{permit.price}</span>
              </div>
              <div className="stay-actions">
                <button 
                  className="info-btn"
                  onClick={() => handleInfoClick(permit)}
                >
                  ℹ️ Info
                </button>
                <button 
                  className="apply-btn"
                  onClick={() => handleFormSubmit(permit)}
                >
                  Apply →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Form Modal */}
        {showFormModal && selectedPermit && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Apply for {selectedPermit.title}</h2>
                <button className="close-btn" onClick={closeModal}>×</button>
              </div>
              <form onSubmit={handleSubmit} className="stay-form">
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
                  <label htmlFor="purpose">Purpose of Stay</label>
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
        {showInfoModal && selectedPermit && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content info-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedPermit.title} - Information</h2>
                <button className="close-btn" onClick={closeModal}>×</button>
              </div>
              <div className="info-content">
                <div className="info-item">
                  <h3>Description</h3>
                  <p>{selectedPermit.description}</p>
                </div>
                <div className="info-item">
                  <h3>Price</h3>
                  <p>{selectedPermit.price}</p>
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
                    <li>Supporting documents (varies by permit type)</li>
                  </ul>
                </div>
                <div className="info-item">
                  <h3>Validity</h3>
                  <p>Varies by permit type (30-90 days)</p>
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

export default TemporaryStayPermit;
