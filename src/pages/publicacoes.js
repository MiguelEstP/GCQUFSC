import React from 'react';
import '../App.css';

const artigos = [
  {
    titulo: "ARTIGO1",
    resumo: "Resumo do artigo 1",
    autores: ["Fulano", "Ciclano"],
    link: "https://exemplo.com/artigo1"
  },
  {
    titulo: "ARTIGO1",
    resumo: "Resumo do artigo 1",
    autores: ["Fulano", "Ciclano"],
    link: "https://exemplo.com/artigo1"
  },
];

const dissertacoes = [
  {
    titulo: "DISSERTAÇÃO1",
    resumo: "Resumo da dissertação 1",
    autores: ["Beltrano"],
    link: "https://exemplo.com/dissertacao1"
  },
  {
    titulo: "DISSERTAÇÃO1",
    resumo: "Resumo da dissertação 1",
    autores: ["Beltrano"],
    link: "https://exemplo.com/dissertacao1"
  },
];

const tccs = [
  {
    titulo: "TCC1",
    resumo: "Resumo do TCC 1",
    autores: ["Aluna X"],
    link: "https://exemplo.com/tcc1"
  },
  {
    titulo: "TCC1",
    resumo: "Resumo do TCC 1",
    autores: ["Aluna X"],
    link: "https://exemplo.com/tcc1"
  },
];

function Artigos() {
    return (
      <div className="projetos-wrapper">
  <div className="projetos-content">
    <h1 className="big-section-title">Publicações</h1>
    <p className="section-text">
      Algum texto sobre as publicações do grupo, como artigos, dissertações e TCCs. O Grupo de Computação Quântica (GCQ) da UFSC está envolvido em uma série de projetos inovadores focados na exploração e desenvolvimento de novas tecnologias e metodologias quânticas. Nossos projetos abrangem diversas áreas, incluindo algoritmos quânticos, simulações, otimização e aplicações em diferentes setores. Através da colaboração com pesquisadores, instituições e empresas, buscamos avançar no campo da computação quântica e explorar seu potencial para resolver desafios complexos e transformar diversas indústrias.
    </p>

    {/* Seção de Artigos */}
    <h2 className="subsection-title">Artigos</h2>
    <div className="projetos-container">
      {artigos.map((artigo, index) => (
        <div key={index} className={`projeto-card ${index % 2 === 0 ? 'par' : 'impar'}`}>
          <div className="titulo-e-botao">
            <h2 className="titulo-artigo">{artigo.titulo}</h2>
            <a href={artigo.link} target="_blank" rel="noopener noreferrer" className="botao-artigo">
              Ver Artigo
            </a>
          </div>
          <p><strong>Autores:</strong> {artigo.autores.join(", ")}</p>
          <p className="resumo-artigo">{artigo.resumo}</p>
        </div>
      ))}
    </div>

    {/* Seção de Dissertações */}
    <h2 className="subsection-title">Dissertações</h2>
    <div className="projetos-container">
      {dissertacoes.map((dissertacao, index) => (
        <div key={index} className={`projeto-card ${index % 2 === 0 ? 'par' : 'impar'}`}>
          <div className="titulo-e-botao">
            <h2 className="titulo-artigo">{dissertacao.titulo}</h2>
            <a href={dissertacao.link} target="_blank" rel="noopener noreferrer" className="botao-artigo">
              Ver Dissertação
            </a>
          </div>
          <p><strong>Autores:</strong> {dissertacao.autores.join(", ")}</p>
          <p className="resumo-artigo">{dissertacao.resumo}</p>
        </div>
      ))}
    </div>

    {/* Seção de TCCs */}
    <h2 className="subsection-title">TCCs</h2>
    <div className="projetos-container">
      {tccs.map((tcc, index) => (
        <div key={index} className={`projeto-card ${index % 2 === 0 ? 'par' : 'impar'}`}>
          <div className="titulo-e-botao">
            <h2 className="titulo-artigo">{tcc.titulo}</h2>
            <a href={tcc.link} target="_blank" rel="noopener noreferrer" className="botao-artigo">
              Ver TCC
            </a>
          </div>
          <p><strong>Autores:</strong> {tcc.autores.join(", ")}</p>
          <p className="resumo-artigo">{tcc.resumo}</p>
        </div>
      ))}
    </div>

  </div>
</div>
    );
  }
  
  export default Artigos;
  
