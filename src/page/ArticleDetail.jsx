import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ArticleDetail.css';

const ArticleDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      slug: 'from-traditional-banking-to-digital-disruption',
      date: '29 Jun 2022',
      author: 'John Wright',
      title: 'From Traditional Banking to Digital Disruption',
      subtitle: 'How modern fintech is reshaping the financial landscape',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
      tags: ['Finance', 'News', 'Digital Banking'],
      readTime: '5 min read',
      content: `
        <p>The financial services industry is undergoing a fundamental transformation...</p>
        <h2>The Rise of Digital-First Banking</h2>
        <p>Digital-first banks, also known as neobanks or challenger banks...</p>
        <h2>Key Technologies Driving Change</h2>
        <p>Artificial Intelligence, Blockchain, Open Banking APIs...</p>
        <h2>The Customer Experience Revolution</h2>
        <p>Customers expect fast, modern digital services...</p>
        <h2>Looking Forward</h2>
        <p>The future belongs to those who combine trust and tech agility...</p>
      `
    },
    // Tambahkan artikel lain di sini jika dibutuhkan
  ];

  const popularArticles = [
    {
      id: 2,
      slug: 'top-10-finance-apps-for-modern-money-management',
      title: 'Top 10 Finance Apps for Modern Money Management',
      author: 'Harold Rogers',
      date: '25 Jun 2022',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=180&fit=crop',
      readTime: '4 min read'
    },
    {
      id: 3,
      slug: 'the-10-best-banking-apps-you-need-to-know',
      title: 'The 10 Best Banking Apps You Need to Know',
      author: 'David Simmons',
      date: '22 Jun 2022',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=180&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 4,
      slug: '10-finance-banking-apps-changing-the-game',
      title: '10 Finance Banking Apps Changing the Game',
      author: 'Brian Garcia',
      date: '20 Jun 2022',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=180&fit=crop',
      readTime: '7 min read'
    }
  ];

  const article = articles.find((a) => a.slug === slug);

  const handleBackClick = () => {
    navigate('/news');
  };

  const handlePopularArticleClick = (slug) => {
    navigate(`/news/${slug}`);
  };

  if (!article) {
    return (
      <div className="article-detail-container">
        <div className="article-content">
          <h1>Article Not Found</h1>
          <button className="back-button" onClick={handleBackClick}>← Back to News</button>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-container">
      <div className="article-content">
        <div className="article-header">
          <button className="back-button" onClick={handleBackClick}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to News
          </button>

          <div className="article-meta">
            <span className="article-date">{article.date}</span>
            <span className="article-author">by {article.author}</span>
            <span className="article-read-time">{article.readTime}</span>
          </div>

          <h1 className="article-title">{article.title}</h1>
          {article.subtitle && <p className="article-subtitle">{article.subtitle}</p>}

          <div className="article-tags">
            {article.tags.map((tag, index) => (
              <span key={index} className="article-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="article-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      <div className="sidebar">
        <div className="popular-articles">
          <h3>Popular Articles</h3>
          <div className="popular-articles-list">
            {popularArticles.map((popularArticle) => (
              <article
                key={popularArticle.id}
                className="popular-article-card"
                onClick={() => handlePopularArticleClick(popularArticle.slug)}
              >
                <div className="popular-article-image">
                  <img src={popularArticle.image} alt={popularArticle.title} />
                </div>
                <div className="popular-article-content">
                  <h4 className="popular-article-title">{popularArticle.title}</h4>
                  <div className="popular-article-meta">
                    <span className="popular-article-author">{popularArticle.author}</span>
                    <span className="popular-article-date">{popularArticle.date}</span>
                  </div>
                  <span className="popular-article-read-time">{popularArticle.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
