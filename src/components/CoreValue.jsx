// WorkingProcess.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CoreValue.css';

const WorkingProcess = () => {
  const navigate = useNavigate(); // <-- tambahkan ini

  const steps = [
    {
      icon: '📄',
      title: 'Free Consultation',
      description: 'Our team will provide tailored solutions to meet your visa needs.”'
    },
    {
      icon: '🤖',
      title: 'Document Submission',
      description: 'Upload your personal details and required documents. Our team will ensure everything is complete.'
    },
    {
      icon: '💳',
      title: 'Application and Verification',
      description: 'Your visa application will be submitted by our team in accordance with the requirements.'
    },
    {
      icon: 'done',
      title: 'Visa Completion and Ready to Use',
      description: 'Once the process is finished, you can download your visa immediately.'
    }
  ];

  const handleSeeMoreClick = () => {
    navigate('/visa-service'); // <-- arahkan ke path Visa Service
  };

  return (
    <section className="working-process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">
          How Indobiz Corner Works
          </h2>
        </div>
        
        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="card-icon">
                <span className="icon">{step.icon}</span>
              </div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-description">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="process-footer">
          <button className="btn-more" onClick={handleSeeMoreClick}>
            Lihat selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
