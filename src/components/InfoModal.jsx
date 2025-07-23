import React from 'react';
import '../styles/VisaService.css';

const InfoModal = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content info-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-section">
            <span className="modal-icon" style={{ backgroundColor: service.iconColor }}>
              {service.icon}
            </span>
            <div>
              <h3 className="modal-title">{service.title}</h3>
              <span className="modal-subtitle">{service.countryName}</span>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="info-section">
            <h4>📝 Deskripsi Layanan</h4>
            <p>{service.description}</p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">💰</div>
              <div><span className="info-label">Harga</span><span className="info-value">{service.price}</span></div>
            </div>
            <div className="info-card">
              <div className="info-icon">⏱️</div>
              <div><span className="info-label">Waktu Proses</span><span className="info-value">{service.processingTime}</span></div>
            </div>
            <div className="info-card">
              <div className="info-icon">✅</div>
              <div><span className="info-label">Success Rate</span><span className="info-value">{service.success_rate}</span></div>
            </div>
          </div>
          <div className="info-section">
            <h4>📋 Detail Visa</h4>
            <div className="detail-grid">
              <div className="detail-item"><span className="detail-label">Masa Berlaku:</span><span className="detail-value">{service.detailedInfo.validity}</span></div>
              <div className="detail-item"><span className="detail-label">Lama Tinggal:</span><span className="detail-value">{service.detailedInfo.maxStay}</span></div>
              <div className="detail-item"><span className="detail-label">Jenis Entry:</span><span className="detail-value">{service.detailedInfo.entries}</span></div>
              <div className="detail-item"><span className="detail-label">Interview:</span><span className="detail-value">{service.detailedInfo.interview}</span></div>
            </div>
          </div>
          <div className="info-section">
            <h4>✨ Fitur Layanan</h4>
            <div className="features-grid">
              {service.features.map((feature, index) => (
                <span key={index} className="feature-badge">{feature}</span>
              ))}
            </div>
          </div>
          <div className="info-section">
            <h4>📋 Persyaratan Dokumen</h4>
            <ul className="requirements-list">
              {service.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
