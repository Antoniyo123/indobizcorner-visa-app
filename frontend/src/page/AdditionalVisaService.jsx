import React, { useState } from 'react';
import '../styles/AdditionalVisaService.css';

const AdditionalVisaService = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
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
      title: 'Visa Renewal',
      price: '69 SR / application',
      icon: '🔄',
      color: 'green',
      description: 'Renew your expired or soon-to-expire visa with ease.'
    },
    {
      id: 2,
      title: 'Visa Transfer',
      price: '79 SR / application',
      icon: '🔁',
      color: 'orange',
      description: 'Transfer your visa to a new passport or to another visa type.'
    },
    {
      id: 3,
      title: 'Multiple Entry Visa Extension',
      price: '99 SR / application',
      icon: '⏳',
      color: 'blue',
      description: 'Extend your multiple entry visa for more flexibility.'
    },
    {
      id: 4,
      title: 'Visa Change of Status',
      price: '89 SR / application',
      icon: '⚖️',
      color: 'purple',
      description: 'Change your visa status without leaving the country.'
    },
    {
      id: 5,
      title: 'Visa Cancellation',
      price: '49 SR / application',
      icon: '❌',
      color: 'teal',
      description: 'Cancel your visa if you no longer require it.'
    },
    {
      id: 6,
      title: 'Visa Application Assistance',
      price: '59 SR / application',
      icon: '📝',
      color: 'red',
      description: 'Get help with filling out and submitting your visa application.'
    }
  ];

  const handleFormSubmit = (service) => {
    setSelectedService(service);
    setShowFormModal(true);
  };

  const handleInfoClick = (service) => {
    setSelectedService(service);
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
    setSelectedService(null);
  };

  return (
    <div className='additional-visa-container'>
      <div className='container-visa'>
        <div className="header-section">
          <h1>Additional Visa Services</h1>
          <p>Explore additional visa services for your needs</p>
        </div>

        <div className="visa-grid">
          {visaServices.map((service) => (
            <div key={service.id} className={`visa-card ${service.color}`}>
              <div className="visa-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <div className="visa-price">
                <span>{service.price}</span>
              </div>
              <div className="visa-actions">
                <button 
                  className="info-btn"
                  onClick={() => handleInfoClick(service)}
                >
                  ℹ️ Info
                </button>
                <button 
                  className="apply-btn"
                  onClick={() => handleFormSubmit(service)}
                >
                  Apply →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Form Modal */}
        {showFormModal && selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Apply for {selectedService.title}</h2>
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
                  <label htmlFor="purpose">Purpose of Service</label>
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
        {showInfoModal && selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content info-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedService.title} - Information</h2>
                <button className="close-btn" onClick={closeModal}>×</button>
              </div>
              <div className="info-content">
                <div className="info-item">
                  <h3>Description</h3>
                  <p>{selectedService.description}</p>
                </div>
                <div className="info-item">
                  <h3>Price</h3>
                  <p>{selectedService.price}</p>
                </div>
                <div className="info-item">
                  <h3>Processing Time</h3>
                  <p>5-7 business days</p>
                </div>
                <div className="info-item">
                  <h3>Required Documents</h3>
                  <ul>
                    <li>Valid passport</li>
                    <li>Passport-sized photographs</li>
                    <li>Completed application form</li>
                    <li>Additional supporting documents depending on the service</li>
                  </ul>
                </div>
                <div className="info-item">
                  <h3>Validity</h3>
                  <p>Depends on the service type</p>
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

export default AdditionalVisaService;
