import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/CoreValue.css';

const WorkingProcess = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const steps = t('workingProcess.steps', { returnObjects: true });

  const handleSeeMoreClick = () => {
    navigate('/visa-service');
  };

  return (
    <section className="working-process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">{t('workingProcess.title')}</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="card-icon">
                <span className="icon">
                  {['📄', '🤖', '💳', '✅'][index]}
                </span>
              </div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="process-footer">
          <button className="btn-more" onClick={handleSeeMoreClick}>
            {t('workingProcess.seeMore')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
