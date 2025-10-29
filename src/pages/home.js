import React, { useEffect } from 'react';
import '../App.css';
import logo2 from '../GCQ_logo_principal.png';
import NewsCarousel from '../components/NewsCarousel';

function Home() {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.scale-in');
      elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'scale(1)';
      });
    };

    setTimeout(animateElements, 100);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-content">
        {/* Elementos com animação simultânea */}
        <img 
          src={logo2} 
          alt="Logo GCQ" 
          className="home-logo scale-in" 
          style={{ opacity: 0, transform: 'scale(0.8)' }}
        />

        <h1 
          className="home-title scale-in" 
          style={{ opacity: 0, transform: 'scale(0.8)' }}
        >
          GRUPO DE COMPUTAÇÃO QUÂNTICA
        </h1>
        <p 
          className="home-extra-subtitle scale-in" 
          style={{ opacity: 0, transform: 'scale(0.8)' }}
        >
          ⟨G|C|Q⟩
        </p>
        <p 
          className="home-subtitle scale-in" 
          style={{ opacity: 0, transform: 'scale(0.8)' }}
        >
          Pesquisa e desenvolvimento em computação quântica na Universidade Federal de Santa Catarina.
        </p>

        {/* Seções sem animação */}
        <section className="home-section">
          <h2 className="section-title">O QUE É O GCQ?</h2>
          <p className="section-text">
            O Grupo de Computação Quântica (GCQ) da Universidade Federal de Santa Catarina (UFSC) é um grupo interdisciplinar dedicado à exploração e desenvolvimento de tecnologias quânticas, com ênfase em algoritmos quânticos, simulações, criptografia e otimização. Combinando teoria e prática, o grupo busca avanços significativos nos estudos em computação quântica e suas aplicações em áreas como segurança da informação, inteligência artificial e ciências materiais. Além da pesquisa acadêmica, o GCQ também se dedica à formação e disseminação de conhecimento, promovendo cursos e eventos para engajar tanto a comunidade acadêmica no crescente campo da computação quântica.
          </p>
        </section>

        <section className="home-section">
          <h2 className="section-title">NOTÍCIAS</h2>
          <NewsCarousel />
        </section>

        <section className="home-section">
          <h2 className="section-title">ONDE ESTAMOS?</h2>
          <p className="section-text"> - Laboratório de Simulação e Computação Quântica - CFM / Universidade Federal de Santa Catarina</p>
          <p className="section-text"> - Laboratório de Inteligência Artificial e Algorítmo (LIAA) - INE / Universidade Federal de Santa Catarina</p>
          <div className="map-container">
            <iframe
              title="Localização GCQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.245163489648!2d-48.520719484942054!3d-27.60133483283847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273824d68c9df9%3A0x1d3b3ff482cf0b28!2sDepartamento%20de%20F%C3%ADsica%20-%20CFM%20-%20UFSC!5e0!3m2!1spt-BR!2sbr!4v1713195069891!5m2!1spt-BR!2sbr"
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