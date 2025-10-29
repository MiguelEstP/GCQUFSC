import React from 'react';
import '../App.css';

const projetos = [
  {
    nome: "Ket",
    descricao: "Desenvolvimento da plataforma de programação quântica Ket.",
    pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa, ", "Eduardo Inacio Duzzioni"],
    link: "https://quantumket.org/guide.html",
    subprojetos: [
      {
        nome: "Aprenda Ket",
        descricao: "Projeto de extensão para desenvolvimento de material didático para ensino de computação quântica.",
        pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa, ", "Eduardo Inacio Duzzioni, ", "Miguel Estivalet Pinto"],
        link: "https://aprenda.quantumket.org"
      },
      {
        nome: "QuBox",
        descricao: "Projeto de extensão que disponibiliza um simulador para computador quântico para fins acadêmicos.",
        pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa, ", "Eduardo Inacio Duzzioni"],
        link: "https://qubox.ufsc.br/index.html"
      },
      {
        nome: "Integração Ket",
        descricao: "Integração do Ket com o Amazon Braket.",
        pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa, ", "Ruan Luiz Molgero Lopes"],
        link: "https://quantumket.org/guide.html"
      },
      {
        nome: "Simulador de Cirquitos Quânticos de Clifford",
        descricao: "Implementando um simulador de circuitos quânticos de Clifford em tempo polinomial utilizando o KET.",
        pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa, ", "Gabriel Turatti Andrade"],
        link: "https://quantumket.org/guide.html"
      },
      {
        nome: "Simulação de Hamiltonianos",
        descricao: "Desenvolvimento de um material de ensino sobre simulação de Hamiltonianos utilizando o KET.",
        pesquisadores: ["Jerusa Marchi, ", "Evandro Chagas Ribeiro da Rosa, ", "Kalleb da Costa Santos"],
        link: "https://quantumket.org/guide.html"
      }
    ]
  },
  {
    nome: "Otimização de problemas combinatórios NP-difíceis através do paradigma da computação quântica adiabática e do quantum annealing",
    descricao: "Análise e modelagem de problemas como o caixeiro viajante, soma de subconjuntos e empacotamento de retângulos, mapeando restrições e objetivos para Hamiltonianos de Ising/QUBO e aplicando algoritmos de otimização quântica.",
    pesquisadores: ["Eduardo Inacio Duzzioni, ", "César Augusto Freitas Bernardes"],
    link: "https://quantumket.org/guide.html"
  },
  {
    nome: "Estratégias Inteligentes de Compilação e Controle Quântico",
    descricao: "Aperfeiçoamento de metodologias de compilação e controle quântico, combinando técnicas de computação e controle para aumentar fidelidade e reduzir erros.",
    pesquisadores: ["Eduardo Willwock Lussi, ", "Rafael de Santiago, ", "Eduardo Inacio Duzzioni"],
    link: "https://quantumket.org/guide.html"
  },
  {
    nome: "Algoritmos de Otimização Quântica",
    descricao: "Desenvolvimento de algoritmos de otimização quântica e Classical Shadows utilizando o KET.",
    pesquisadores: ["Letícia Bertuzzi, ", "Eduardo Inacio Duzzioni"],
    link: "https://quantumket.org/guide.html"
  },
  {
    nome: "Algoritmos Quânticos Variacionais para Modelos Econômicos",
    descricao: "Aplicação de métodos de machine learning e machine learning quântico na resolução de equações diferenciais em economia.",
    pesquisadores: ["Cesar Augusto do Amaral, ", "Eduardo Inacio Duzzioni"],
    link: "https://quantumket.org/guide.html"
  },
  {
    nome: "Desenvolvimento de LLMs para a Química Computacional Quântica",
    descricao: "Desenvolvimento de um LLM capaz de gerar circuitos quânticos para problemas de química, acelerando avanços em química computacional e descoberta de fármacos.",
    pesquisadores: ["Eduardo Inacio Duzzioni, ", "José Carlos Libois Neto"],
    link: "https://quantumket.org/guide.html"
  },
  {
    nome: "Problema de sobreajuste benigno nas redes neurais profundas",
    descricao: "Investigação teórica sobre como redes neurais profundas aproximam e generalizam bem, apesar de sua alta capacidade de parametrização.",
    pesquisadores: ["Vladmir Pestov"],
    link: "https://quantumket.org/guide.html"
  },
  {
    nome: "Médias invariantes sobre grupos de laços e caminhos com valores num grupo de Lie compacto",
    descricao: "Estudo de problemas da análise harmônica abstrata derivados da física matemática, como a existência de um vácuo invariante na teoria de campos de calibre.",
    pesquisadores: ["Vladmir Pestov"],
    link: "https://quantumket.org/guide.html"
  }
];

function Projetos() {
  return (
    <div className="projetos-wrapper">
      <div className="projetos-content">
        <h1 className="big-section-title">Projetos Atuais</h1>
        <p className="section-text">
          O Grupo de Computação Quântica (GCQ) da UFSC está envolvido em uma série de projetos inovadores focados na exploração e desenvolvimento de novas tecnologias e metodologias quânticas. Nossos projetos abrangem diversas áreas, incluindo algoritmos quânticos, simulações, otimização e aplicações em diferentes setores.
        </p>

        <div className="projetos-container">
          {projetos.map((proj, index) => (
            <div key={index} className="projeto-card guarda-chuva">
              <div className="titulo-e-botao">
                <h2 className="titulo-artigo">{proj.nome}</h2>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="botao-artigo">
                  Ver Projeto
                </a>
              </div>
              <p><strong>Autores:</strong> {proj.pesquisadores}</p>
              <p className="resumo-artigo">{proj.descricao}</p>

              {/* Subprojetos (se existirem) */}
              {proj.subprojetos && (
                <div className="subprojetos-lista">
                  {proj.subprojetos.map((sub, i) => (
                    <div key={i} className="subprojeto-card">
                      <div className="titulo-e-botao">
                        <h3 className="titulo-artigo sub">{sub.nome}</h3>
                        <a href={sub.link} target="_blank" rel="noopener noreferrer" className="botao-artigo">
                          Ver Subprojeto
                        </a>
                      </div>
                      <p><strong>Autores:</strong> {sub.pesquisadores}</p>
                      <p className="resumo-artigo">{sub.descricao}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projetos;
