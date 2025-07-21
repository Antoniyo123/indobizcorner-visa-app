// PromoSection.jsx
import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import '../styles/AboutSection.css';
import { apiService } from '../services/api'; // ganti path sesuai lokasi `api.js`


const PromoSection = () => {
  const url = "https://indobizcorner.vercel.app/";
  
  // Data promo
  const promoData = [
    {
      id: 1,
      image: require('../assets/img/7.7 indobiz corner option 1.png'),
      title: "EXCLUSIVE DISCOUNT FOR EXPRESS VISA",
      subtitle: "Limited Time Offer",
      description: "Save up to 77% for express visa service. Get your visa faster with professional support in every step.",
      discount: "77% OFF",
      validUntil: "Valid until July 7, 2025"
    },
    {
      id: 2,
      image: require('../assets/img/7.7 travel.png'),
      title: "BALI TOUR PACKAGE",
      subtitle: "Premium Service",
      description: "All-inclusive packages with full itineraries and great hotel deals!",
      discount: "77% OFF",
      validUntil: "Valid until July 7, 2026"
    },
    {
      id: 3,
      image: require('../assets/img/7.7 travel.png'),
      title: "FAMILY VISA BUNDLE",
      subtitle: "Best Value Deal",
      description: "Special bundle for family visa applications. Cover up to 4 family members with our comprehensive visa services.",
      discount: "77% OFF",
      validUntil: "Valid until July 7, 2026"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [claimCount, setClaimCount] = useState(() => {
    // Ambil dari localStorage atau default 0
    const saved = localStorage.getItem('promoClaimCount');
    return saved ? parseInt(saved) : 0;
  });
  const [isOfferExpired, setIsOfferExpired] = useState(false);

  const MAX_CLAIMS = 77;
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        resetClaimCounter();
      }
    };
  
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
  
  
  // Auto slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoData.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [promoData.length]);

  // Check if offer is expired based on claim count
  useEffect(() => {
    if (claimCount >= MAX_CLAIMS) {
      setIsOfferExpired(true);
    }
  }, [claimCount]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promoData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promoData.length) % promoData.length);
  };

  // Fungsi untuk handle claim offer
  const handleClaimOffer = () => {
    // Cek apakah sudah mencapai batas maksimal
    if (claimCount >= MAX_CLAIMS) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }

    const currentPromo = promoData[currentSlide];
    
    // Set selected offer sesuai yang diklik
    setSelectedOffer({
      ...currentPromo,
      claimNumber: claimCount + 1
    });
    
    // Opsi 1: Redirect ke WhatsApp dengan pesan otomatis
    const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp bisnis Anda
    const message = `Hi! I'm interested in claiming the ${currentPromo.title} offer (${currentPromo.discount}). This is claim #${claimCount + 1} of ${MAX_CLAIMS} available spots. Can you help me with the details?`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Opsi 2: Buka modal untuk form kontak
    setShowModal(true);
    
    // Opsi untuk WhatsApp (uncomment jika ingin langsung ke WhatsApp)
    // window.open(whatsappUrl, '_blank');
    
    // Update claim count
    const newCount = claimCount + 1;
    setClaimCount(newCount);
    localStorage.setItem('promoClaimCount', newCount.toString());
  };

  // Fungsi untuk handle learn more
  const handleLearnMore = () => {
    // Redirect ke halaman detail atau scroll ke bagian informasi
    window.location.href = "/services";
  };

  // Fungsi admin untuk reset counter (bisa dihapus di production)


  // Keyboard shortcut untuk admin reset (Ctrl+Shift+R)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        resetClaimCounter();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const resetClaimCounter = async () => {
    const confirmReset = window.confirm('Reset semua klaim promo?');
  
    if (!confirmReset) return;
  
    try {
      // Kirim permintaan reset ke backend
      await apiService.resetPromoClaims({ secret: 'admin123' }); // Ganti 'admin123' kalau kamu pakai ENV
  
      // Reset frontend state
      setClaimCount(0);
      setIsOfferExpired(false);
      localStorage.removeItem('promoClaimCount');
  
      alert('✅ Semua klaim berhasil direset!');
    } catch (error) {
      console.error('Reset failed:', error);
      alert('❌ Gagal reset klaim.');
    }
  };
  
  
  
  

  // Fungsi untuk handle submit form di modal
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      promo: selectedOffer?.title || currentPromo.title,
      claimNumber: selectedOffer?.claimNumber || claimCount
    };
  
    try {
      await apiService.submitPromoClaim(data); // ⬅️ kirim ke backend
      setShowModal(false);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      console.error('Failed to send promo claim:', error);
      alert('Gagal mengirim promo claim. Silakan coba lagi.');
    }
  };
  
  

  const currentPromo = promoData[currentSlide];

  return (
    <>
      <section className="promo-section">
        <div className="promo-container">
          <div className="promo-left">
            <div className="image-card">
              <div className="discount-badge">
                {currentPromo.discount}
              </div>
              
              <img 
                src={currentPromo.image}
                alt={currentPromo.title}
                className="promo-image"
              />
              
              <div className="navigation-dots">
                {promoData.map((_, index) => (
                  <div 
                    key={index}
                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></div>
                ))}
              </div>
              
              <div className="image-controls">
                <button className="control-btn prev" onClick={prevSlide}>
                  <span>←</span>
                </button>
                <button className="control-btn next" onClick={nextSlide}>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="promo-right">
            <div className="content-card">
              <div className="promo-header">
                <span className="promo-subtitle">{currentPromo.subtitle}</span>
                <h2 className="promo-title">
                  {currentPromo.title}
                </h2>
              </div>
              
              <div className="promo-content">
                <p className="promo-description">
                  {currentPromo.description}
                </p>
                
                <div className="promo-validity">
                  <span className="validity-text">{currentPromo.validUntil}</span>
                </div>
                
                <div className="promo-actions">
                  <button 
                    className={`cta-button ${isOfferExpired ? 'disabled' : ''}`} 
                    onClick={handleClaimOffer}
                    disabled={isOfferExpired}
                  >
                    {isOfferExpired ? 'Offer Expired' : `Claim Offer Now (${MAX_CLAIMS - claimCount} left)`}
                  </button>
                  <button className="secondary-button" onClick={handleLearnMore}>
                    Learn More
                  </button>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="qr-code-section">
                <h3>Scan to Visit Our Website</h3>
                <QRCodeCanvas 
                  value={url}
                  size={120}
                  fgColor="#ffffff"
                  bgColor="transparent"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="slide-progress">
          <div 
            className="progress-bar"
            style={{
              width: `${((currentSlide + 1) / promoData.length) * 100}%`
            }}
          ></div>
        </div>
      </section>

      {/* Modal untuk Form Kontak */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Claim Your Offer #{selectedOffer?.claimNumber || claimCount + 1}</h3>
              <button 
                className="close-btn"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="claim-info">
              <p className="claim-status">
                🎉 Congratulations! You're claiming spot #{selectedOffer?.claimNumber || claimCount + 1} of {MAX_CLAIMS} available offers.
              </p>
            </div>
            <form onSubmit={handleSubmitForm}>
              <div className="form-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label>Selected Offer</label>
                <input 
                  type="text" 
                  value={selectedOffer?.title || currentPromo.title} 
                  readOnly 
                  className="readonly-input"
                />
              </div>
              <div className="form-group">
                <label>Discount</label>
                <input 
                  type="text" 
                  value={selectedOffer?.discount || currentPromo.discount} 
                  readOnly 
                  className="readonly-input"
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-btn">
                  Submit Request
                </button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Notification */}
      {showNotification && (
        <div className="notification">
          <div className="notification-content">
            {isOfferExpired ? (
              <>
                <span className="notification-icon">❌</span>
                <span>Sorry! All 7 offer slots have been claimed. No more offers available.</span>
              </>
            ) : (
              <>
                <span className="notification-icon">✓</span>
                <span>Offer claimed successfully! You got spot #{selectedOffer?.claimNumber || claimCount}.</span>
              </>
            )}
          </div>
        </div>
        
      )}
            <button 
        onClick={resetClaimCounter} 
        className="admin-reset-btn"
      >
        🔄 Reset Promo (Admin)
      </button>


    </>
  );
};

export default PromoSection;