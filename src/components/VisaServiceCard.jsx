import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/VisaService.css';

const VisaServiceCard = ({ service, onOpenInfo, onOpenApply }) => {
  const { t } = useTranslation();

  return (
    <div className="visa-card-modern">
      <div className="visa-card-icon" style={{ backgroundColor: service.iconColor }}>
        {service.icon}
      </div>
      <div className="visa-card-content">
        <h3 className="visa-card-title">{t(service.title)}</h3>
        {/* <p className="visa-card-price">{service.price} / application</p> */}
        <div className="visa-card-actions">
          <button className="btn-info" onClick={() => onOpenInfo(service)}>ℹ️ {t('buttons.info')}</button>
          <button className="btn-apply" onClick={() => onOpenApply(service)}>{t('buttons.apply')} →</button>
        </div>
      </div>
    </div>
  );
};

export default VisaServiceCard;
