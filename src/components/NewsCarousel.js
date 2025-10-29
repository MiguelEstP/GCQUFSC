import React, { useState, useEffect } from 'react';
import { newsItems } from '../Constants/newsData';
import './NewsCarousel.css';

export default function NewsCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = () => setIndex((index + 1) % newsItems.length);
  const prev = () => setIndex((index - 1 + newsItems.length) % newsItems.length);

  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(next, 5000);
      return () => clearTimeout(timer);
    }
  }, [index, isHovered]);

  const item = newsItems[index];

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-card">
        <div className="carousel-image-container">
          <img src={item.image} alt={item.title} className="carousel-image" />
          <div className="carousel-date-badge">{item.date}</div>
        </div>
        <div className="carousel-content">
          <h3 className="carousel-title">{item.title}</h3>
          <p className="carousel-desc">{item.description}</p>
          <div className="carousel-dots">
            {newsItems.map((_, i) => (
              <span 
                key={i} 
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={prev} aria-label="Previous news">
          ‹
        </button>
        <button onClick={next} aria-label="Next news">
          ›
        </button>
      </div>
    </div>
  );
}