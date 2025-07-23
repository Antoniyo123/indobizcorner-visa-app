import React from 'react';
import '../styles/VisaService.css';

const VisaServiceCard = ({ service, onOpenInfo, onOpenApply }) => (
  <div className="visa-card-modern">
    <div className="visa-card-icon" style={{ backgroundColor: service.iconColor }}>
      {service.icon}
    </div>
    <div className="visa-card-content">
      <h3 className="visa-card-title">{service.title}</h3>
      {/* <p className="visa-card-price">{service.price} / application</p> */}
      <div className="visa-card-actions">
        <button className="btn-info" onClick={() => onOpenInfo(service)}>ℹ️ Info</button>
        <button className="btn-apply" onClick={() => onOpenApply(service)}>Apply →</button>
      </div>
    </div>
  </div>
);

export default VisaServiceCard;
