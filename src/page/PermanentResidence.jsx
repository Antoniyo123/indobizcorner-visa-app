import React, { useState } from 'react';
import '../styles/PermanentResidence.css';

const PermanentResidence = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedKitap, setSelectedKitap] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    passport: '',
    currentStatus: '',
    spouseName: '',
    companyName: '',
    investmentAmount: '',
    retirementAge: '',
    bankStatement: null,
    marriageCertificate: null,
    workContract: null,
    investmentProof: null,
    additionalDocuments: null
  });

  const kitapServices = [
    {
      id: 1,
      title: 'KITAP Spouse',
      price: '2,500 SR / application',
      icon: '💑',
      color: 'pink',
      description: 'Permanent residence permit for spouses of Indonesian citizens or permanent residents.',
      requirements: [
        'Valid marriage certificate',
        'Spouse\'s Indonesian ID or KITAP',
        'Joint bank statements',
        'Proof of accommodation',
        'Health certificate'
      ],
      processingTime: '3-6 months',
      validity: '5 years (renewable)'
    },
    {
      id: 2,
      title: 'Working KITAP',
      price: '3,000 SR / application',
      icon: '💼',
      color: 'blue',
      description: 'Permanent residence permit for foreign workers with long-term employment in Indonesia.',
      requirements: [
        'Work contract minimum 3 years',
        'Company sponsorship letter',
        'Tax clearance certificate',
        'Social security registration',
        'Professional qualifications'
      ],
      processingTime: '4-8 months',
      validity: '5 years (renewable)'
    },
    {
      id: 3,
      title: 'Investor KITAP',
      price: '5,000 SR / application',
      icon: '💰',
      color: 'green',
      description: 'Permanent residence permit for foreign investors who invest significantly in Indonesia.',
      requirements: [
        'Investment proof minimum $350,000',
        'Business registration documents',
        'Investment plan and proposal',
        'Bank guarantee letter',
        'Clean criminal record'
      ],
      processingTime: '6-12 months',
      validity: '10 years (renewable)'
    },
    {
      id: 4,
      title: 'KITAP Retirement',
      price: '1,800 SR / application',
      icon: '🏖️',
      color: 'orange',
      description: 'Permanent residence permit for retirees who wish to settle in Indonesia.',
      requirements: [
        'Age minimum 55 years old',
        'Pension certificate or proof',
        'Monthly income minimum $1,500',
        'Health insurance coverage',
        'Accommodation ownership proof'
      ],
      processingTime: '2-4 months',
      validity: 'Lifetime (with annual reporting)'
    }
  ];

  const handleFormSubmit = (kitap) => {
    setSelectedKitap(kitap);
    setShowFormModal(true);
  };

  const handleInfoClick = (kitap) => {
    setSelectedKitap(kitap);
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
    console.log('KITAP Application submitted:', formData);
    alert('KITAP Application submitted successfully!');
    setShowFormModal(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      nationality: '',
      passport: '',
      currentStatus: '',
      spouseName: '',
      companyName: '',
      investmentAmount: '',
      retirementAge: '',
      bankStatement: null,
      marriageCertificate: null,
      workContract: null,
      investmentProof: null,
      additionalDocuments: null
    });
  };

  const closeModal = () => {
    setShowFormModal(false);
    setShowInfoModal(false);
    setSelectedKitap(null);
  };

  const renderSpecificFields = () => {
    if (!selectedKitap) return null;

    switch (selectedKitap.id) {
      case 1: // KITAP Spouse
        return (
          <>
            <div className="form-group">
              <label htmlFor="spouseName">Spouse Full Name *</label>
              <input
                type="text"
                id="spouseName"
                name="spouseName"
                value={formData.spouseName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="marriageCertificate">Marriage Certificate *</label>
              <input
                type="file"
                id="marriageCertificate"
                name="marriageCertificate"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
          </>
        );
      case 2: // Working KITAP
        return (
          <>
            <div className="form-group">
              <label htmlFor="companyName">Company Name *</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="workContract">Work Contract *</label>
              <input
                type="file"
                id="workContract"
                name="workContract"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
          </>
        );
      case 3: // Investor KITAP
        return (
          <>
            <div className="form-group">
              <label htmlFor="investmentAmount">Investment Amount (USD) *</label>
              <input
                type="number"
                id="investmentAmount"
                name="investmentAmount"
                value={formData.investmentAmount}
                onChange={handleInputChange}
                min="350000"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="investmentProof">Investment Proof Documents *</label>
              <input
                type="file"
                id="investmentProof"
                name="investmentProof"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                required
              />
            </div>
          </>
        );
      case 4: // KITAP Retirement
        return (
          <>
            <div className="form-group">
              <label htmlFor="retirementAge">Age *</label>
              <input
                type="number"
                id="retirementAge"
                name="retirementAge"
                value={formData.retirementAge}
                onChange={handleInputChange}
                min="55"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bankStatement">Bank Statement / Pension Proof *</label>
              <input
                type="file"
                id="bankStatement"
                name="bankStatement"
                onChange={handleInputChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='KITAP-container'>
    <div className='container-kitap'>
      <div className="header-section">
        <h1>Permanent Residence!</h1>
        <p>KITAP application service</p>
      </div>

      <div className="kitap-grid">
        {kitapServices.map((kitap) => (
          <div key={kitap.id} className={`kitap-card ${kitap.color}`}>
            <div className="kitap-icon">
              <span>{kitap.icon}</span>
            </div>
            <h3>{kitap.title}</h3>
            <div className="kitap-price">
              <span>{kitap.price}</span>
            </div>
            <div className="kitap-actions">
              <button 
                className="info-btn"
                onClick={() => handleInfoClick(kitap)}
              >
                ℹ️ Info
              </button>
              <button 
                className="apply-btn"
                onClick={() => handleFormSubmit(kitap)}
              >
                Apply →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Form Modal */}
      {showFormModal && selectedKitap && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Apply for {selectedKitap.title}</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <form onSubmit={handleSubmit} className="kitap-form">
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
                <label htmlFor="currentStatus">Current Status in Indonesia</label>
                <select
                  id="currentStatus"
                  name="currentStatus"
                  value={formData.currentStatus}
                  onChange={handleInputChange}
                >
                  <option value="">Select Status</option>
                  <option value="tourist">Tourist Visa</option>
                  <option value="business">Business Visa</option>
                  <option value="work">Work Permit</option>
                  <option value="student">Student Visa</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {renderSpecificFields()}

              <div className="form-group">
                <label htmlFor="additionalDocuments">Additional Documents</label>
                <input
                  type="file"
                  id="additionalDocuments"
                  name="additionalDocuments"
                  onChange={handleInputChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
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
      {showInfoModal && selectedKitap && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content info-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedKitap.title} - Information</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            <div className="info-content">
              <div className="info-item">
                <h3>Description</h3>
                <p>{selectedKitap.description}</p>
              </div>
              <div className="info-item">
                <h3>Application Fee</h3>
                <p>{selectedKitap.price}</p>
              </div>
              <div className="info-item">
                <h3>Processing Time</h3>
                <p>{selectedKitap.processingTime}</p>
              </div>
              <div className="info-item">
                <h3>Required Documents</h3>
                <ul>
                  {selectedKitap.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="info-item">
                <h3>Validity Period</h3>
                <p>{selectedKitap.validity}</p>
              </div>
              <div className="info-item">
                <h3>Benefits</h3>
                <ul>
                  <li>Right to live permanently in Indonesia</li>
                  <li>Multiple entry and exit without visa</li>
                  <li>Work authorization (conditions apply)</li>
                  <li>Access to government services</li>
                  <li>Property ownership rights (limited)</li>
                </ul>
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

export default PermanentResidence;