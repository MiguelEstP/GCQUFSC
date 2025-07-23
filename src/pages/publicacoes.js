import React from 'react';
import '../App.css';

const artigos = [
];

const dissertacoes = [
  {
    titulo: "Time Optimization Framework for the Implementation of Robust Low-Latency Quantum Circuits",
    resumo: "Quantum computing has garnered attention for its potential to solve complex computational problems considerably more rapidly than classical computing. Despite notable advancements in the field, achieving meaningful scalability and noise control in quantum hardware remains challenging. Incoherent errors caused by decoherence restrict the total computation time, often making it very short. While hardware advancements continue to progress, quantum software specialists seek to minimize quantum circuit latency to mitigate dissipation; however, at the pulse level, fast quantum gates often lead to leakage, leaving minimal room for further optimization. Recent advancements have demonstrated the effectiveness of quantum control techniques in generating quantum gates that are robust to coherent error sources. Nevertheless, these techniques come with a trade-off—extended gate durations. In this paper, we introduce an alternative approach to pulse scheduling that enables the use of both fast and robust quantum gates within the same quantum circuit. The time-optimization framework models the quantum circuit as a dependency graph, implements the fastest quantum gates on the critical path, and uses idle periods outside the critical path to optimally implement longer, more robust gates from the gate set, without increasing latency. Experiments conducted on IBMQ Brisbane show that this approach improves the absolute success probability of quantum circuit execution by more than 25%, with performance gains scaling as the number of qubits increases.",
    autores: ["Eduardo Willwock Lussi", "Rafael de Santiago", "Eduardo Inacio Duzzioni"],
    link: "https://doi.org/10.1103/PhysRevApplied.23.044036"
  },
];

const tccs = [
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
  
