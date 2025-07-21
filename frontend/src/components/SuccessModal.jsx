import React from 'react';
import '../styles/SucessModal.css'

const SuccessModal = ({ isOpen, onClose, service, submissionId }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content success-modal" onClick={(e) => e.stopPropagation()}>
        <div className="success-content">
          {/* Success Icon */}
          <div className="success-icon">
            <div className="success-circle">
              <svg className="success-checkmark" viewBox="0 0 52 52">
                <circle className="success-circle-bg" cx="26" cy="26" r="25" fill="none"/>
                <path className="success-check" fill="none" d="m14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <div className="success-message">
            <h3>🎉 Aplikasi Berhasil Dikirim!</h3>
            <p>Aplikasi visa <strong>{service?.title}</strong> Anda telah berhasil dikirim ke sistem kami.</p>
          </div>

          {/* Submission Details */}
          <div className="submission-details">
            <div className="detail-item">
              <span className="detail-label">ID Aplikasi:</span>
              <span className="detail-value">{submissionId}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status:</span>
              <span className="detail-value status-pending">Sedang Diproses</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Estimasi Proses:</span>
              <span className="detail-value">3-5 Hari Kerja</span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="next-steps">
            <h4>📋 Langkah Selanjutnya:</h4>
            <ul>
              <li>✉️ Cek email Anda untuk konfirmasi aplikasi</li>
              <li>📞 Tim CS akan menghubungi dalam 24 jam</li>
              <li>📋 Siapkan dokumen tambahan jika diperlukan</li>
              <li>💳 Lakukan pembayaran sesuai instruksi</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <p>💬 <strong>Butuh bantuan?</strong></p>
            <p>WhatsApp: <a href="https://wa.me/6281234567890">+62 812-3456-7890</a></p>
            <p>Email: <a href="mailto:cs@visaservice.com">cs@visaservice.com</a></p>
          </div>

          {/* Action Button */}
          <button className="btn-success-close" onClick={onClose}>
            ✨ Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;