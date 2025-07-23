import React, { useState } from 'react';
import '../styles/News.css';

const News = () => {
  const [activeTab, setActiveTab] = useState('All Articles');

  const tabs = [
    'All Articles',
    'Invest',
    'Payment',
    'Blockchain',
    'Marketing',
    'Product',
    'News'
  ];

  const newsData = [
    {
      id: 1,
      date: '29 Jun 2022',
      author: 'John Wright',
      title: 'From Traditional Banking to Digital Disruption',
      description: 'we need to tackle the different steps of the funnel. While different.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
      tags: ['Finance', 'News'],
      layout: 'normal'
    },
    {
      id: 2,
      date: '29 Jun 2022',
      author: 'Harold Rogers',
      title: 'Top 10 Finance Apps for Modern Money Management',
      description: 'we need to tackle the different steps of the funnel. While different.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      tags: ['Finance', 'Invest'],
      layout: 'normal'
    },
    {
      id: 3,
      date: '29 Jun 2022',
      author: 'David Simmons',
      title: 'The 10 Best Banking Apps You Need to Know',
      description: 'we need to tackle the different steps of the funnel. While different',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop',
      tags: ['Payment'],
      layout: 'normal'
    },
    {
      id: 4,
      date: '05 Sep 2022',
      author: 'Brian Garcia',
      title: '10 Finance Banking Apps Changing the Game',
      description: 'we need to tackle the different steps of the funnel. While different organizations. we need to tackle the different.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=350&fit=crop',
      tags: ['Investment', 'Blockchain', 'News'],
      layout: 'large'
    },
    {
      id: 5,
      date: '29 Jun 2022',
      author: 'Daniel Harris',
      title: 'Finance Apps to Streamline Your Financial Journey',
      description: '',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop',
      tags: [],
      layout: 'normal'
    },
    {
      id: 6,
      date: '29 Jun 2022',
      author: 'Charles Garcia',
      title: 'The Road to Financial Independence',
      description: '',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      tags: [],
      layout: 'normal'
    },
    {
      id: 7,
      date: '29 Jun 2022',
      author: 'Jerry Turner',
      title: 'Understanding Credit Scores and Reports',
      description: '',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      tags: [],
      layout: 'normal'
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleArticleClick = (articleId) => {
    console.log(`Navigating to article detail: ${articleId}`);
    // Navigate to article detail page
    // For React Router: navigate(`/article/${articleId}`);
    // For Next.js: router.push(`/article/${articleId}`);
    // For vanilla JS: window.location.href = `/article/${articleId}`;
  };

  const renderNewsCard = (news) => {
    if (news.layout === 'large') {
      return (
        <article key={news.id} className="news-card large-card" onClick={() => handleArticleClick(news.id)}>
          <div className="news-content">
            <div className="news-meta">
              <span className="news-date">{news.date}</span>
              <span className="news-author">by {news.author}</span>
            </div>
            <h2 className="news-title">{news.title}</h2>
            {news.description && (
              <p className="news-description">{news.description}</p>
            )}
            {news.tags.length > 0 && (
              <div className="news-tags">
                {news.tags.map((tag, index) => (
                  <span key={index} className="news-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
          <div className="news-image">
            <img src={news.image} alt={news.title} />
          </div>
        </article>
      );
    }

    return (
      <article key={news.id} className="news-card normal-card" onClick={() => handleArticleClick(news.id)}>
        <div className="news-image">
          <img src={news.image} alt={news.title} />
        </div>
        <div className="news-content">
          <div className="news-meta">
            <span className="news-date">{news.date}</span>
            <span className="news-author">by {news.author}</span>
          </div>
          <h3 className="news-title">{news.title}</h3>
          {news.description && (
            <p className="news-description">{news.description}</p>
          )}
          {news.tags.length > 0 && (
            <div className="news-tags">
              {news.tags.map((tag, index) => (
                <span key={index} className="news-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="news-container">
      <div className="news-box-container">
      <div className="news-header">
        <h1>News and insights from<br />our experts</h1>
      </div>

      <div className="news-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="news-grid">
        <div className="news-row">
          {newsData.slice(0, 3).map(renderNewsCard)}
        </div>
        
        <div className="news-row">
          {newsData.slice(3, 4).map(renderNewsCard)}
        </div>
        
        <div className="news-row">
          {newsData.slice(4, 7).map(renderNewsCard)}
        </div>
      </div>
      </div>

    </div>
  );
};

export default News;