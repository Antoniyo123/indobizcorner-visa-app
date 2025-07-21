// src/components/Modal.jsx
import React from 'react';
// import './Home.css';

const Modal = ({ title, description, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h4>{title}</h4>
        <p>{description}</p>
        <button className="btn-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
