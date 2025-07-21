import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Tambah ini
import '../styles/Articles.css';

const Articles = () => {
  const navigate = useNavigate(); // ✅ Tambah ini

  const handleArrowClick = () => {
    navigate('/news'); // Langsung ke halaman /news
  };
  

  return (
    <div className="articles-container">
      <div className="articles-header">
        <h1>News & Updates
        </h1>
        <p>
        Discover the latest visa regulations, travel tips, and Indobiz Corner updates here.
        </p>
      </div>

      <div className="articles-grid">
        <article className="article-card">
          <div className="article-image">
            <img 
              src={require('../assets/img/article1.png')} 
              alt="Modern library interior with curved architecture"
            />
          </div>
          <div className="article-content">
            <h3>Cepat, Tegas dan Lugas Bukti Nyata Kanim Kelas I Non TPI Bekasi Jaring 27 WNA</h3>
            <div className="article-footer">
              <span className="article-date">13 Dec 2024</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("Exploring the themes of this year's literary premiere")}
                aria-label="Read more about literary premiere"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className="article-card">
          <div className="article-image">
            <img 
              src={require('../assets/img/article2.png')} 
              alt="Green technology and environmental illustration"
            />
          </div>
          <div className="article-content">
            <h3>Anggota DPR Berikan Apresiasi Terhadap Kinerja Ditjen Imigrasi Terkait Kasus Haji Tanpa Visa Resmi</h3>
            <div className="article-footer">
              <span className="article-date">05 Sep 2024</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("How green technologies are shaping tomorrow's world")}
                aria-label="Read more about green technologies"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className="article-card">
          <div className="article-image">
            <img 
              src={require('../assets/img/article3.png')} 
              alt="Deforested area showing environmental impact"
            />
          </div>
          <div className="article-content">
            <h3>6 WNA Terjaring Razia di Apartemen Kalibata City</h3>
            <div className="article-footer">
              <span className="article-date">23 Aug 2024</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("Deforestation at a crossroads")}
                aria-label="Read more about deforestation"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Articles;
