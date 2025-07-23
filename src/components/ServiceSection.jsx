// src/components/VisaServices.jsx
import React from 'react';
import '../styles/ServiceSection.css';

const VisaServices = () => {
  const visaTypes = [
    {
      id: 1,
      title: "Tourist Visa",
      description: "Perfect for leisure travel, visiting friends and family, or exploring new destinations.",
      processingTime: "3-5 business days",
      price: "$99"
    },
    {
      id: 2,
      title: "Business Visa",
      description: "Designed for professional visits, conferences, meetings, and business networking.",
      processingTime: "5-7 business days",
      price: "$149"
    },
    {
      id: 3,
      title: "Student Visa",
      description: "For academic pursuits, enrolling in educational institutions, or study programs.",
      processingTime: "7-10 business days",
      price: "$129"
    },
    {
      id: 4,
      title: "Work Visa",
      description: "Specialized assistance for employment opportunities abroad or temporary work assignments.",
      processingTime: "10-15 business days",
      price: "$199"
    }
  ];

  return (
    <section className="visa-services">
      <div className="services-header">
        <h2 className="services-title">Our Visa Services</h2>
        <p className="services-subtitle">Comprehensive solutions tailored to your travel needs</p>
      </div>

      <div className="services-grid">
        {visaTypes.map((visa) => (
          <div className="service-card" key={visa.id}>
            <h3 className="service-title">{visa.title}</h3>
            <p className="service-description">{visa.description}</p>
            <div className="service-details">
              <span className="service-time">
                <span className="detail-label">Processing:</span> {visa.processingTime}
              </span>
              <span className="service-price">{visa.price}</span>
            </div>
            <button className="service-button">Apply Now</button>
          </div>
        ))}
      </div>

      <div className="services-features">
        <div className="feature">
          <div className="feature-icon">✓</div>
          <div className="feature-content">
            <h4 className="feature-title">Expert Guidance</h4>
            <p className="feature-description">Professional assistance throughout the entire application process</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">✓</div>
          <div className="feature-content">
            <h4 className="feature-title">Document Review</h4>
            <p className="feature-description">Thorough examination of all required documentation</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">✓</div>
          <div className="feature-content">
            <h4 className="feature-title">Application Tracking</h4>
            <p className="feature-description">Real-time updates on your visa application status</p>
          </div>
        </div>
      </div>

      <div className="process-steps">
        <h3 className="process-title">Our Process</h3>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">01</div>
            <h4 className="step-title">Consultation</h4>
            <p className="step-description">Initial assessment of your visa requirements</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h4 className="step-title">Documentation</h4>
            <p className="step-description">Preparation and review of all necessary documents</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h4 className="step-title">Submission</h4>
            <p className="step-description">Professional handling of your visa application</p>
          </div>
          <div className="step">
            <div className="step-number">04</div>
            <h4 className="step-title">Approval</h4>
            <p className="step-description">Final confirmation and delivery of your visa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaServices;