import React from 'react';
import '../App.css';

const projetos = [
  {
    nome: "Ket",
    descricao: "Desenvolvimento da plataforma de programação quântica Ket.",
    pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa"],
    link: "https://quantumket.org/guide.html"
  },
  {
    nome: "Aprenda Ket",
    descricao: "Projeto de extensão para desenvolvimento de material didático para ensino de computação quântica.",
    pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa, ", "Miguel Estivalet Pinto"],
    link: "https://aprenda.quantumket.org"
  },
  {
    nome: "QuBox",
    descricao: "Projeto de extensão que disponibiliza um simulador para computador quântico para fins acadêmicos.",
    pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa, "],
    link: "https://qubox.ufsc.br/index.html"
  },
  {
    nome: "Integração Ket",
    descricao: "Integração do Ket com o Amazon Braket",
    pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa, ", "Ruan Luiz Molgero Lopes"],
    link: "https://eelslap.com"
  },
  {
    nome: "Simulador de Cirquitos Quânticos de Clifford",
    descricao: "Implementando um simulador de circuitos quânticos de Clifford em tempo Polinomial utilizando o KET.",
    pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa, ", "Gabriel Turatti Andrade"],
    link: "https://eelslap.com"
  },
  {
    nome: "Algoritmos de Otimização Quântica",
    descricao: "Algoritmos de Otimização Quântica e Classical Shadows utilizando o KET.",
    pesquisadores: ["Letícia Bertuzzi, "],
    link: "https://eelslap.com"
  },
  {
    nome: "Algoritmos Quânticos Variacionais para Modelos Economicos",
    descricao: "Buscamos aplicar métodos de machine learning e machine learning quântico, estudando diferentes arquiteturas possíveis para a resolução de equações diferenciais aplicadas em economia.",
    pesquisadores: ["Cesar Augusto do Amaral, "],
    link: "https://eelslap.com"
  },
  {
    nome: "Problema de sobreajuste benigno nas redes neurais profundas",
    descricao: "Como explicar o fato empírico que redes neurais profundas aproximam e generalizam bem? A teoria clássica de Vadnik-Chervonenkis não da resposta",
    pesquisadores: ["Vladmir Pestov"],
    link: "https://eelslap.com"
  },
  {
    nome: "Médias invariantes sobre grupos de laços e caminhos com valores num grupo de Lie compacto",
    descricao: "Estudando um problema da análise harmônica abstrata que vem da física matemática (existência de um vácuo invariante na teoria de campos de calibre)",
    pesquisadores: ["Vladmir Pestov"],
    link: "https://eelslap.com"
  }
];

function Projetos() {
  return (
<div className="projetos-wrapper">
  <div className="projetos-content">
      <h1 className="big-section-title">Projetos Atuais</h1>
      <p className="section-text">
            O Grupo de Computação Quântica (GCQ) da UFSC está envolvido em uma série de projetos inovadores focados na exploração e desenvolvimento de novas tecnologias e metodologias quânticas. Nossos projetos abrangem diversas áreas, incluindo algoritmos quânticos, simulações, otimização e aplicações em diferentes setores. Através da colaboração com pesquisadores, instituições e empresas, buscamos avançar no campo da computação quântica e explorar seu potencial para resolver desafios complexos e transformar diversas indústrias.
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
                    Ver Projeto
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
