import React, { useState } from 'react';
import SuccessModal from '../components/SuccessModal';
import { sendApplicationToCS, sendConfirmationToUser } from '../assets/services/Emailservices';
import '../styles/VisaService.css';
import '../styles/ApplyModal.css';
import { apiService } from '../services/api'; // sesuaikan path-nya

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  sponsorType: 'cipta',
  workType: '',
  documents: []
};

const ApplyModal = ({ service, isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files]
    }));
  };

  const removeDocument = (index) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const submissionId = 'VS' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 4).toUpperCase();
  
      const data = new FormData();
      data.append('submissionId', submissionId);
      data.append('fullName', formData.fullName);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('sponsorType', formData.sponsorType);
      data.append('workType', formData.workType);
  
      // ✅ Kirim service sebagai JSON string
      data.append('service', JSON.stringify({
        title: service.title,
        price: service.price
      }));
  
      formData.documents.forEach((file) => {
        data.append('documents', file);
      });
  
      const response = await apiService.submitApplication(data);
  
      if (response?.data?.success) {
        setSubmissionResult({ submissionId, success: true });
        setShowSuccessModal(true);
        setFormData(initialForm);
      } else {
        alert('Gagal mengirim aplikasi. Silakan coba lagi.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('Terjadi kesalahan saat mengirim aplikasi.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    setSubmissionResult(null);
    onClose(); // Close main modal
  };

  const getRequiredDocuments = () => {
    if (!service) return [];
    
    const serviceType = service.title.toLowerCase();
    
    if (serviceType.includes('tourist') || serviceType.includes('wisata')) {
      return ['Paspor', 'Foto 4x6', 'Tiket pesawat'];
    }
    
    if (serviceType.includes('business') || serviceType.includes('bisnis')) {
      if (serviceType.includes('multiple')) {
        return ['Paspor', 'Foto 4x6', 'Tiket pesawat', 'CV'];
      }
      return ['Paspor', 'Foto 4x6', 'Tiket pesawat'];
    }
    
    if (serviceType.includes('family') || serviceType.includes('keluarga')) {
      return ['Paspor', 'Foto 4x6', 'Akta Lahir (untuk anak)', 'Akta Nikah (untuk suami/istri)'];
    }
    
    if (serviceType.includes('working') || serviceType.includes('kerja')) {
      return ['Paspor', 'Foto 4x6', 'Dokumen pekerjaan (sesuai jenis)'];
    }
    
    return ['Paspor', 'Foto 4x6'];
  };

  const showWorkTypeSelection = () => {
    return service?.title.toLowerCase().includes('working') || service?.title.toLowerCase().includes('kerja');
  };

  if (!isOpen || !service) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content apply-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-title-section">
              <span className="modal-icon" style={{ backgroundColor: service.iconColor }}>{service.icon}</span>
              <div>
                <h3 className="modal-title">Apply {service.title}</h3>
                <span className="modal-subtitle">Harga: {service.price}</span>
              </div>
            </div>
            <button className="modal-close" onClick={onClose}>×</button>
          </div>
          
          <div className="modal-body">
            <form onSubmit={handleSubmit} className="apply-form">
              {/* Sponsor Selection */}
              <div className="form-section">
                <h4>🏢 Pilihan Layanan</h4>
                <div className="sponsor-options">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="sponsorType"
                      value="cipta"
                      checked={formData.sponsorType === 'cipta'}
                      onChange={handleChange}
                    />
                    <div className="radio-content">
                      <strong>Under Cipta</strong>
                      <span>Proses otomatis melalui website</span>
                    </div>
                  </label>
                  
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="sponsorType"
                      value="sponsor"
                      checked={formData.sponsorType === 'sponsor'}
                      onChange={handleChange}
                    />
                    <div className="radio-content">
                      <strong>Sponsor dari perusahaan sendiri</strong>
                      <span>Agent akan membantu dengan dokumen lengkap</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Basic Information */}
              <div className="form-section">
                <h4>👤 Informasi Kontak</h4>
                <div className="form-group">
                  <label htmlFor="fullName">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama lengkap sesuai paspor"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Nomor Telepon *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+62 812-3456-7890"
                    />
                  </div>
                </div>
              </div>

              {/* Work Type Selection for Working Visa */}
              {showWorkTypeSelection() && (
                <div className="form-section">
                  <h4>💼 Jenis Pekerjaan</h4>
                  <div className="form-group">
                    <label htmlFor="workType">Pilih Jenis Pekerjaan *</label>
                    <select
                      id="workType"
                      name="workType"
                      value={formData.workType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Pilih jenis pekerjaan</option>
                      <option value="skilled">Skilled Worker</option>
                      <option value="professional">Professional</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Document Upload */}
              <div className="form-section">
                <h4>📎 Upload Dokumen</h4>
                <div className="document-requirements">
                  <p><strong>Dokumen yang diperlukan:</strong></p>
                  <ul>
                    {getRequiredDocuments().map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="form-group">
                  <label htmlFor="documents">Upload Dokumen</label>
                  <input
                    type="file"
                    id="documents"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={handleFileUpload}
                    className="file-input"
                  />
                  <div className="file-help">
                    Format yang diterima: PDF, JPG, PNG, DOC, DOCX (Max 5MB per file)
                  </div>
                </div>

                {formData.documents.length > 0 && (
                  <div className="uploaded-files">
                    <h5>File yang sudah diupload:</h5>
                    {formData.documents.map((file, index) => (
                      <div key={index} className="file-item">
                        <span className="file-name">📄 {file.name}</span>
                        <button
                          type="button"
                          className="remove-file"
                          onClick={() => removeDocument(index)}
                          title="Hapus file"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Information Notice */}
              {formData.sponsorType === 'sponsor' && (
                <div className="info-notice">
                  <div className="notice-content">
                    <span className="notice-icon">ℹ️</span>
                    <div>
                      <strong>Dengan Sponsor</strong>
                      <p>Agent kami akan menghubungi Anda dalam 24 jam untuk membantu melengkapi dokumen dan proses aplikasi visa.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={onClose}>
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="btn-submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '⏳ Mengirim...' : '🚀 Submit Aplikasi'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleSuccessClose}
        service={service}
        submissionId={submissionResult?.submissionId}
      />
    </>
  );
};

export default ApplyModal;