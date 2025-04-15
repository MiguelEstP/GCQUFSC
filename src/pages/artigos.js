import React from 'react';
import '../App.css';

const artigos = [
  {
    titulo: "ARTIGO1",
    resumo: "ASDASDASDASDADS",
    autores: ["ASDASD", "ASDASDASD", "ASDASD"],
    link: "https://exemplo.com/artigo1"
  },
  {
    titulo: "ARTIGO2",
    resumo: "ASDASDASDASDASD",
    autores: ["ASDASDASDASD", "ASDASDASDASD"],
    link: "https://exemplo.com/artigo1"
  },
  {
    titulo: "ARTIGON",
    resumo: "ASDASDASDASDASDASDASD",
    autores: ["ASDASDASDASD", "ASDASDASD"],
    link: "https://eelslap.com"
  }
];

function Artigos() {
    return (
      <div className="projetos-wrapper">
        <div className="projetos-content">
         <h1 className="big-section-title">Artigos Publicados</h1>
             <p className="section-text">
             Artigos Publicados LALALALLA
             </p>
          <div className="projetos-container">
            {artigos.map((artigo, index) => (
              <div
                key={index}
                className={`projeto-card ${index % 2 === 0 ? 'par' : 'impar'}`}
              >
                <div className="titulo-e-botao">
                  <h2 className="titulo-artigo">{artigo.titulo}</h2>
                  <a
                    href={artigo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="botao-artigo"
                  >
                    Ver Artigo
                  </a>
                </div>
                <p><strong>Autores:</strong> {artigo.autores}</p>
                <p className="resumo-artigo">{artigo.resumo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Artigos;
  
