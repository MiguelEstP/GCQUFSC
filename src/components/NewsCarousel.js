import React, { useState } from 'react';
import premiacaoSBC2025 from '../imagensnoticias/premiodeinovação.jpg';
import './NewsCarousel.css'; 

const news = [
  {
    title: "Projeto do GCQ é premiado na SBC 2025",
    description: "Nosso projeto Ket acaba de ganhar o Selo de Inovação 2025 da Sociedade Brasileira de Computação (SBC)!",
    image: premiacaoSBC2025,
  },
];


export default function NewsCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % news.length);
  const prev = () => setIndex((index - 1 + news.length) % news.length);

  const item = news[index];

  return (
    <div className="carousel-container">
      <div className="carousel-card">
        <img src={item.image} alt={item.title} className="carousel-image" />
        <h3 className="carousel-title">{item.title}</h3>
        <p className="carousel-desc">{item.description}</p>
      </div>
      <div className="carousel-controls">
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </div>
  );
}
