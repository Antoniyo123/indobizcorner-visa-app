import React, { useState } from 'react';
import '../styles/Consultation.css';
import { apiService } from '../services/api'; // sesuaikan path jika beda


const Consultation = () => {
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiService.submitConsultation(formData);
      setShowModal(true);
  
      // Reset form
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
      alert('Something went wrong. Please try again later.');
    }
  };
  

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="consultation-container">
      <div className="consultation-content">
        {/* Left Section */}
        <div className="consultation-left">
          <h1 className="consultation-title">
            Professional visa services take the 
            <span className="highlight-text"> headache out of </span>
            <span className="accent-text">visa compliance.</span>
          </h1>
          
          <p className="consultation-description">
            Our comprehensive visa consultation service provides expert guidance 
            for all your visa requirements. From application assistance to 
            document preparation, we simplify the complex visa process.
          </p>
          
          <p className="consultation-subtitle">
            Get personalized assistance today. It sounds too good to be true - 
            discover why it's not.
          </p>
          
          <div className="consultation-buttons">
            {/* <button className="btn-demo">Try demo</button> */}
            <button className="btn-talk">
              <span className="phone-icon">📞</span>
              Talk to consultant
            </button>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="consultation-right">
          <div className="form-container">
            <h2 className="form-title">
              Book a 20 minutes <span className="discovery-text">discovery call</span> now.
            </h2>
            
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
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
                    placeholder="Last name"
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
                      placeholder="Email"
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
                      placeholder="Phone"
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
                      placeholder="Company"
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
                      placeholder="Job title"
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
                  <option value="">Country</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Other">Other</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="input-field textarea-field"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn-consultation">
                Book a call
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
              <h3>Request Submitted Successfully!</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <p>Thank you for your consultation request. Our team will contact you within 24 hours to schedule your discovery call.</p>
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