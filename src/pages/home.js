import React from 'react';
import '../App.css';
import logo2 from '../logogcq2.png';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <img src={logo2} alt="Logo GCQ" className="home-logo" />

        <h1 className="home-title">GRUPO DE COMPUTAÇÃO QUÂNTICA</h1>
        <p className="home-extra-subtitle">
            G|C|Q⟩
        </p>
        <p className="home-subtitle">
          Pesquisa e desenvolvimento em computação quântica na Universidade Federal de Santa Catarina.
        </p>

        <section className="home-section">
          <h2 className="section-title">O QUE É O GCQ?</h2>
          <p className="section-text">
            TEXTO DO O QUE É O GCQ
          </p>
        </section>

        <section className="home-section">
          <h2 className="section-title">ONDE ESTAMOS?</h2>
          <p className="section-text">ONDE ESTAMOS</p>
          <div className="map-container">
            <iframe
              title="Localização GCQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.032830287451!2d-48.51994988494206!3d-27.601786082839464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273824d6849357%3A0x548fbc7a06b67691!2sINE%20-%20Departamento%20de%20Inform%C3%A1tica%20e%20Estat%C3%ADstica%20-%20UFSC!5e0!3m2!1spt-BR!2sbr!4v1713194063787!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
