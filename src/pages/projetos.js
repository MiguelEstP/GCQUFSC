import React from 'react';
import '../App.css';

const projetos = [
  {
    nome: "PROJETO1",
    descricao: "ASDASDASDASDADS",
    pesquisadores: ["ASDASD", "ASDASDASD", "ASDASD"],
    link: "https://eelslap.com"
  },
  {
    nome: "PROJETO2",
    descricao: "ASDASDASDASDASD",
    pesquisadores: ["ASDASDASDASD", "ASDASDASDASD"],
    link: "https://eelslap.com"
  },
  {
    nome: "PROJETON",
    descricao: "ASDASDASDASDASDASDASD",
    pesquisadores: ["ASDASDASDASD", "ASDASDASD"],
    link: "https://eelslap.com"
  }
];

function Projetos() {
  return (
<div className="projetos-wrapper">
  <div className="projetos-content">
      <h1 className="big-section-title">Projetos Atuais</h1>
      <p className="section-text">
            PROJETOS EM ANDAMENTO LALALALLA
          </p>
          <div className="projetos-container">
            {projetos.map((proj, index) => (
              <div
                key={index}
                className={`projeto-card ${index % 2 === 0 ? 'par' : 'impar'}`}
              >
                <div className="titulo-e-botao">
                  <h2 className="titulo-artigo">{proj.nome}</h2>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="botao-artigo"
                  >
                    Ver Artigo
                  </a>
                </div>
                <p><strong>Autores:</strong> {proj.pesquisadores}</p>
                <p className="resumo-artigo">{proj.descricao}</p>
              </div>
            ))}
          </div>
    </div>
    </div>
  );
}

export default Projetos;
