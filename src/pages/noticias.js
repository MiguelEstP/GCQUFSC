import React, { useState } from 'react';
import { newsItems } from '../Constants/newsData';
import '../App.css';
import NewsCarousel from '../components/NewsCarousel';


function NewsPage() {
  const [selectedNews, setSelectedNews] = useState(null);

  const openPopup = (newsItem) => {
    setSelectedNews(newsItem);
  };

  const closePopup = () => {
    setSelectedNews(null);
  };

  return (
    <div className="home-wrapper">
      <div className="home-content">
        
        <header className="news-header">
          <h1>Notícias do GCQ</h1>
          <p>Fique por dentro das últimas novidades do Grupo de Computação Quântica</p>
        </header>

        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-image-container">
                <img src={item.image} alt={item.title} className="news-image" />
                <span className="news-date">{item.date}</span>
              </div>
              <div className="news-content">
                <h2>{item.title}</h2>
                <p className="news-excerpt">{item.description}</p>
                <button 
                  className="read-more"
                  onClick={() => openPopup(item)}
                >
                  Leia mais
                </button>
              </div>
            </article>
          ))}
        </div>

        {selectedNews && (
          <div className="news-popup-overlay" onClick={closePopup}>
            <div className="news-popup" onClick={(e) => e.stopPropagation()}>
              <button className="close-popup" onClick={closePopup}>×</button>
              
              <div className="popup-image-container">
                <img src={selectedNews.image} alt={selectedNews.title} />
                <span className="popup-date">{selectedNews.date}</span>
              </div>
              
              <div className="popup-content">
                <h2>{selectedNews.title}</h2>
                <div className="popup-full-content">
                  {selectedNews.fullContent}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsPage;