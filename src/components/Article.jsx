import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ✅
import '../styles/Articles.css';

const Articles = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅
  const articles = t('articles.list', { returnObjects: true }); // ✅

  return (
    <div className="articles-container">
      <div className="articles-header">
        <h1>{t('articles.title')}</h1>
        <p>{t('articles.description')}</p>
      </div>

      <div className="articles-grid">
        {articles.map((article, index) => (
          <article key={index} className="article-card">
            <div className="article-image">
              <img 
                src={require(`../assets/img/${article.image}`)} 
                alt={article.title}
              />
            </div>
            <div className="article-content">
              <h3>{article.title}</h3>
              <div className="article-footer">
                <span className="article-date">{article.date}</span>
                <button className="arrow-btn" onClick={() => navigate('/news')}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Articles;
