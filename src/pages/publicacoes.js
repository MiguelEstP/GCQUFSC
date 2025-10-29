import React, { useState } from 'react';
import '../App.css';

const artigos = [
  {
    titulo: "Ket Quantum Programming",
    resumo: "Quantum programming languages (QPL) fill the gap between quantum mechanics and classical programming constructions, simplifying the development of quantum applications. However, most QPL addresses the inherent quantum programming problem, neglecting quantum computer implementation constraints. We present a runtime architecture for classical-quantum execution that mitigates the limitation of interaction between classical and quantum computers originated from the cloud-based model of quantum computation provided by several vendors, which implies a quantum computer processing in batch. In the proposed runtime architecture, we introduce (i) runtime quantum code generation to enable generic quantum programming and dynamic quantum execution; and (ii) the concept of futures to handle dynamic interaction between classical and quantum computers. To support our proposal, we have implemented the Ket Quantum Programming framework that features a Python-embedded classical-quantum programming language named Ket, the C++ quantum programming library Libket, and Ket Bitwise (quantum computing) Simulator. The last one improves over the bitwise representation, making the simulation time not dependent on the number of qubits but the amount of superposition and entanglement of simulation.",
    autores: ["Evandro Chagas Ribeiro Da Rosa", "Rafael De Santiago"],
    link: "https://dl.acm.org/doi/10.1145/3474224"
  },
  {
    titulo: "Optimizing Gate Decomposition for High-Level Quantum Programming",
    resumo: "This paper presents novel methods for optimizing multi-controlled quantum gates, which naturally arise in high-level quantum programming. Our primary approach involves rewriting U(2) gates as SU(2) gates, utilizing one auxiliary qubit for phase correction. This reduces the number of CNOT gates required to decompose any multi-controlled quantum gate from O(n²) to at most 32n. Additionally, we can reduce the number of CNOTs for multi-controlled Pauli gates from 16n to 12n and propose an optimization to reduce the number of controlled gates in high-level quantum programming. We have implemented these optimizations in the Ket quantum programming platform and demonstrated significant reductions in the number of gates. For instance, for a Grover's algorithm layer with 114 qubits, we achieved a reduction in the number of CNOTs from 101,252 to 2,684. This reduction in the number of gates significantly impacts the execution time of quantum algorithms, thereby enhancing the feasibility of executing them on NISQ computers.",
    autores: ["Evandro Chagas Ribeiro Da Rosa", "Eduardo Inacio Duzzioni","Rafael De Santiago"],
    link: "https://journals.aps.org/pra/abstract/10.1103/snht-7jsf?fbclid=PAQ0xDSwMIu5NleHRuA2FlbQIxMQABp5RUIbSUm8eUq6JwQOkQdZl1l3ut-_Z38Rdt0EwK_5aTbpswu6eFuqc3Z819_aem_g10lk-4iiwQZKAue0QMF3w"
  },
  {
    titulo: "Quantum Gate Decomposition: A Study of Compilation Time vs. Execution Time Trade-offs",
    resumo: "Similar to classical programming, high-level quantum programming languages generate code that cannot be executed directly by quantum hardware and must be compiled. However, unlike classical code, quantum programs must be compiled before each execution, making the trade-off between compilation time and execution time particularly significant. In this paper, we address the first step of quantum compilation: multi-qubit gate decomposition. We analyze the trade-offs of state-of-the-art decomposition algorithms by implementing them in the Ket quantum programming platform and collecting numerical performance data. This is the first study to both implement and analyze the current state-of-the-art decomposition methods within a single platform. Based on our findings, we propose two compilation profiles: one optimized for minimizing compilation time and another for minimizing quantum execution time. Our results provide valuable insights for both quantum compiler developers and quantum programmers, helping them make informed decisions about gate decomposition strategies and their impact on overall performance.",
    autores: ["Evandro Chagas Ribeiro Da Rosa, Eduardo Inacio Duzzioni, Jerusa Marchi, Rafael De Santiago"],
    link: "https://sol.sbc.org.br/index.php/sblp/article/view/36943"
  },
  {
    titulo: "Adiabatic Quantum Computing for the Subset Sum Problem: Preliminary Studies",
    resumo: "Nesse trabalho, comparamos as soluções clássicas e quânticas para o problema da soma de subconjuntos para instâncias fáceis e difíceis.",    
    autores: ["César Augusto Freitas Bernardes,  Pedro Castellucci, Douglas Gonçalves , Eduardo Duzzioni, Antonio Mucherino."],
    link: "https://hal.science/IRISA/hal-05164717v1"
  },
  {
    titulo: "Shadow measurements for feedback-based quantum optimization",
    resumo: "Improving the performance of quantum algorithms is a fundamental task to achieve quantum advantage. In many cases, extracting information from quantum systems poses an important challenge for practical implementations of real-world quantum computers, given the high resource cost of performing state tomography. In this scenario, randomized measurements have emerged as a promising tool. In particular, the classical shadow protocol allows one to retrieve expected values of low-weight Pauli observables by performing only local measurements. In this paper, we present an implementation of the recently introduced feedback-based algorithm for quantum optimization using the Ket quantum programming platform to solve the MaxCut optimization problem. We employ classical shadows for the feedback routine of parameter estimation and compare this approach with the direct estimation of observables. Our results show that depending on the graph geometry of the MaxCut problem, the number of measurements required to estimate expected values of observables with classical shadows can be up to 16 times lower than with direct-observable estimation. Furthermore, by analyzing complete graphs, we numerically confirm logarithmic growth in the required number of measurements relative to the number of observables, reinforcing that classical shadows can be a useful tool for estimating low-locality Pauli observables in quantum algorithms.",
    autores: ["Letícia Bertuzzi", "João P. Engster", "Evandro C. R. da Rosa","Eduardo Inacio Duzzioni"],
    link: "https://journals.aps.org/pra/abstract/10.1103/snht-7jsf?fbclid=PAQ0xDSwMIu5NleHRuA2FlbQIxMQABp5RUIbSUm8eUq6JwQOkQdZl1l3ut-_Z38Rdt0EwK_5aTbpswu6eFuqc3Z819_aem_g10lk-4iiwQZKAue0QMF3w"
  },
  {
    titulo: "Time-optimization framework for the implementation of robust low-latency quantum circuits",
    resumo: "Quantum computing has garnered attention for its potential to solve complex computational problems considerably more rapidly than classical computing. Despite notable advancements in the field, achieving meaningful scalability and noise control in quantum hardware remains challenging. Incoherent errors caused by decoherence restrict the total computation time, often making it very short. While hardware advancements continue to progress, quantum software specialists seek to minimize quantum circuit latency to mitigate dissipation; however, at the pulse level, fast quantum gates often lead to leakage, leaving minimal room for further optimization. Recent advancements have demonstrated the effectiveness of quantum control techniques in generating quantum gates that are robust to coherent error sources. Nevertheless, these techniques come with a trade-off—extended gate durations. In this paper, we introduce an alternative approach to pulse scheduling that enables the use of both fast and robust quantum gates within the same quantum circuit. The time-optimization framework models the quantum circuit as a dependency graph, implements the fastest quantum gates on the critical path, and uses idle periods outside the critical path to optimally implement longer, more robust gates from the gate set, without increasing latency. Experiments conducted on IBMQ Brisbane show that this approach improves the absolute success probability of quantum circuit execution by more than 25%, with performance gains scaling as the number of qubits increases.",
    autores: ["Eduardo Willwock Lussi", "Rafael de Santiago","Eduardo Inacio Duzzioni"],
    link: "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.23.044036"
  },
];

const dissertacoes = [
  {
    titulo: "Time Optimization Framework for the Implementation of Robust Low-Latency Quantum Circuits",
    resumo: "Quantum computing has garnered attention for its potential to solve complex computational problems considerably more rapidly than classical computing. Despite notable advancements in the field, achieving meaningful scalability and noise control in quantum hardware remains challenging. Incoherent errors caused by decoherence restrict the total computation time, often making it very short. While hardware advancements continue to progress, quantum software specialists seek to minimize quantum circuit latency to mitigate dissipation; however, at the pulse level, fast quantum gates often lead to leakage, leaving minimal room for further optimization. Recent advancements have demonstrated the effectiveness of quantum control techniques in generating quantum gates that are robust to coherent error sources. Nevertheless, these techniques come with a trade-off—extended gate durations. In this paper, we introduce an alternative approach to pulse scheduling that enables the use of both fast and robust quantum gates within the same quantum circuit. The time-optimization framework models the quantum circuit as a dependency graph, implements the fastest quantum gates on the critical path, and uses idle periods outside the critical path to optimally implement longer, more robust gates from the gate set, without increasing latency. Experiments conducted on IBMQ Brisbane show that this approach improves the absolute success probability of quantum circuit execution by more than 25%, with performance gains scaling as the number of qubits increases.",
    autores: ["Eduardo Willwock Lussi", "Rafael de Santiago", "Eduardo Inacio Duzzioni"],
    link: "https://doi.org/10.1103/PhysRevApplied.23.044036"
  },
  {
    titulo: "Classical Shadows para algoritmos quânticos de feedback",
    resumo: "To improve the performance of quantum algorithms and overcome problems associated with measurements, we need to deal with extracting information from quantum systems, which in many cases represents a major challenge for practical implementations in real-world quantum computers, due to the high resource cost of performing state tomography. In this scenario, the Classical Shadows technique has emerged as a promising tool. In particular, the protocol allows one to retrieve expected values of low- weight Pauli observables by performing only local measurements. In this dissertation, we present an efficient implementation of the Feedback-based algorithm for quantum optimization FALQON with the KET quantum programming platform, for solving the Max-Cut optimization problem, and we implement CS in the feedback routine to estimate the expected values, and compare this approach with the direct measurements. Our numerical tests show that, depending on the graph geometry for the Max-Cut problem, the number of measurements required to estimate expected values of observables with CS can be up to 16 times lower than with direct observable estimation. Furthermore, by analyzing complete graphs, we numerically confirm that the number of measurements when using CS grows logarithmically, reinforcing that it can be a useful tool for estimating low-locality Pauli observables in quantum algorithms.",
    autores: ["Leticia Bertuzzi", "Eduardo Inacio Duzzioni"],
    link: "https://repositorio.ufsc.br/handle/123456789/265955"
  },
  {
    titulo: "Ket quantum programming",
    resumo: "Quantum programming languages fill the gap between quantum mechanics and classical programming constructions to simplify the development of quantum applications. However, most quantum programming languages only address the inherent quantum programming constraints without observing the construction restrictions of quantum computers. Due to decoherence, cloud-based quantum computers must run as fast as possible, which leads to batch processing, limiting the interaction between classical and quantum computers. In this work, we present Ket, a Python-embedded quantum programming language for hybrid classical-quantum programming that mitigates this interaction limitation with a runtime architecture suitable for cloud-based quantum computers. As the core of our proposed runtime architecture, we have the C++ runtime library Libket, which features runtime quantum code generation to enable generic quantum programming with dynamic quantum execution while keeping the quantum computation as specific as possible. Libket also introduces the future variables to delay the quantum execution, which Ket used to mitigate the interaction limitation between classical and quantum computers. Ket, Libket, and Ket Bitwise (quantum computer) Simulator (KBW) constitute the Ket Quantum Programming framework. With KBW, we improve over the Bitwise representation, associating the simulation time to the amount of superposition and entanglement in the quantum system, not the number of qubits.",
    autores: ["Evandro Chagas Ribeiro Da Rosa", "Rafael de Santiago"],
    link: "https://repositorio.ufsc.br/handle/123456789/229874"
  },
];

const tccs = [
  {
    titulo: "QSystem: simulador quântico para Python",
    resumo: "Esse trabalho documenta a implementação de um simulador de computação quântica baseado no modelo de circuitos quânticos onde é possível executar uma computação quântica tanto em vetor de estado quanto em matriz densidade, possibilitando, assim, a simulação de erros quânticos. O simulador foi desenvolvido majoritariamente em C++ e entregue como um módulo de Python, denominado QSystem, desta forma, obtém uma boa performance ao mesmo tempo que é dinâmico para o uso. Toda a base teórica referente a computação quântica necessária para a implementação do simulador é apresentada nos primeiros capítulos.",
    autores: ["Evandro Chagas Ribeiro Da Rosa", "Bruno Gouvea Taketani", "Jerusa Marchi"],
    link: "https://tcc.inf.ufsc.br/public/projetos.xhtml"
  },
  {
    titulo: "Síntese de Circuitos Quânticos usando Projective Simulation",
    resumo: "A computação quântica é uma área que vem evoluindo muito nos últimos anos. Embora os algoritmos quânticos desenvolvidos atualmente tenham demonstrado superioridade em relação às suas contrapartes clássicas, fatores como tempo de decoerência de um qubit e a necessidade de qubits auxiliares para rotinas de tolerância a erro têm se mostrado grandes barreiras no uso efetivo de algoritmos quânticos. Por causa dessas restrições, busca-se maneiras de minimizar o custo envolvido em um algoritmo. Para isso são desenvolvidas técnicas para síntese e otimização de circuitos quânticos. Síntese de circuitos quânticos engloba técnicas para se produzir um circuito que seja capaz de realizar uma determinada tarefa. Muitas técnicas de síntese não garantem a otimalidade de seu circuito criado, sendo necessário um processo de otimização do circuito após a síntese. Este trabalho busca estudar as técnicas existentes de síntese de circuitos quânticos, indicando o atual estado da arte e por fim implementa seu próprio sintetizador usando uma técnica recente e pouco explorada conhecida como Projective Simulation. O novo sintetizador demonstrou-se capaz de sintetizar circuitos quânticos de dois qubits, tendo seu desempenho avaliado a partir de sua capacidade de criar os circuitos geradores dos estados de Bell.",
    autores: ["Otto Menegasso Pires", "Eduardo Inacio Duzzioni", "Jerusa Marchi"],
    link: "https://tcc.inf.ufsc.br/public/projetos.xhtml"
  },
  {
    titulo: "Relações entre classes de problemas computacionais: um estudo sobre classes de complexidade quânticas",
    resumo: "Computadores quânticos são cada vez uma realidade menos distante e, com eles, vem a grande expectativa de melhorar a eficiência de algoritmos que buscam resolver diversos tipos de problemas considerados intratáveis classicamente. Neste sentido, será feito neste trabalho um estudo sobre modelos teóricos de computação e as principais classes de complexidade clássicas e quânticas, mostrando relações de contingência e equivalência entre elas, de forma a definir os limites da computação quântica sobre aspectos teóricos de computabilidade e tratabilidade. Definindo também as principais relações em aberto e conjecturas na literatura sobre a teoria da complexidade computacional quântica",    
    autores: ["Maurício Machado Barbosa", "Jerusa Marchi"],
    link: "https://tcc.inf.ufsc.br/public/projetos.xhtml"
  },
  {
    titulo: "Modelos Computacionais Quânticos",
    resumo: "A computação quântica vem evoluindo bastante nos últimos anos. O presente trabalho estuda a computação quântica por meio da utilização de máquinas abstratas que utilizam efeitos quânticos: as versões quânticas de autômatos finitos e de pilha. Esse trabalho apresenta alguns dos modelos existentes e suas propriedades conhecidas. Apresenta-se também exemplos de linguagens tratáveis pelo MO-1QFA, um autômato finito quântico com menor poder de reconhecimento, que ainda assim reconhece algumas linguagens que sua versão clássica não reconhece. Esse trabalho também apresenta um estudo de caso explorando os erros atrelados à execução de um autômato finito quântico em uma plataforma quântica real.",
    autores: ["Lucas Cavalcante de Sousa", "Eduardo Inacio Duzzioni", "Jerusa Marchi"],
    link: "https://tcc.inf.ufsc.br/public/projetos.xhtml"
  },
  {
    titulo: "Estudo de algoritmos criptográficos pós-quânticos e seus custos",
    resumo: "Apresenta-se um estudo dos algoritmos criptográficos pós-quânticos e seus custos através do acompanhamento do processo de padronização que o NIST está realizando. Com isso, conseguiu-se realizar um estudo de alguns algoritmos que estão em fase de padronização e que já passaram das primeiras etapas eliminatórias. Este estudo visou entender como estes algoritmos funcionam e seus custos. O processo do NIST ainda não terminou, mas já se vê melhorias em alguns algoritmos, onde os criadores conseguiram aumentar a eficiência como também diminuir o tamanho das chaves e assinatura.",
    autores: ["Daniel Boso", "Paulo Manoel Mafra", "Jerusa Marchi"],
    link: "https://tcc.inf.ufsc.br/public/projetos.xhtml"
  },
  {
    titulo: "Análise do crossover-point em uma máquina quântica utilizando implementação do problema da Satisfação Booleana (SAT) no algoritmo de Grover",
    resumo: "O crossover point representa um ponto onde as instâncias do problema de satisfação booleana (SAT) são muito mais difíceis de serem resolvidas. O objetivo desse trabalho é fazer uma investigação do comportamento das instâncias ao serem executadas no algoritmo de Grover. O algoritmo de Grover é um algoritmo quântico utilizado para encontrar um elemento em uma lista desordenada que apresenta comportamento assintótico da ordem de √N, onde N é a quantidade de elementos na lista. Para sua implementação, fez-se uso da linguagem Ket e do simulador de computação quântica QuBox. A investigação faz uso de instâncias SAT geradas aleatoriamente, porém limitadas no número de qubits. Foram implementados, além do algoritmo de Grover e o de geração de instâncias SAT, um algoritmo para converter tais instâncias em oráculos de Grover e um algoritmo para iterar o algoritmo de Grover, quando o número de respostas para o oráculo é desconhecido. Devido às diversas limitações e ao tempo necessário para a execução das instâncias, não foi possível ter uma visão clara sobre a real complexidade da execução de instâncias SAT no ponto de crossover, quando executadas no algoritmo de Grover.",
    autores: ["Teo Haeser Gallarza", "Jerusa Marchi", "Evandro Chagas Ribeiro Da Rosa"],
    link: "https://tcc.inf.ufsc.br/public/projetos.xhtml"
  },
  {
    titulo: "Análise comparativa de técnicas de mitigação de erros em processos de computação quântica",
    resumo: "A computação clássica vem chegando cada vez mais próximo dos limites da Lei de Moore, existem problemas complexos que são completamente inviáveis de serem solucionados por computadores clássicos. O paradigma de computação quântica tem a capacidade computacional necessária para resolver alguns problemas de forma muito mais eficiente, entretanto, sistemas quânticos ainda são extremamente instáveis e são muito difíceis de controlar adequadamente. Por esse motivo, existe uma grande demanda pelo desenvolvimento de técnicas para caracterizar e mitigar erros que atrapalham o uso da computação quântica. Este trabalho tem como objetivo implementar técnicas para mitigar os erros de decoerência de sistemas quânticos em aplicações práticas. Para isso, a área de controle quântico em computadores quânticos de supercondutores será investigada com o intuito de utilizar técnicas que calibram o hardware quântico e controlam a computação por meio de portas lógicas quânticas descritas na forma de pulsos de micro-ondas. As aplicações práticas consideram a implementação de um autômato finito quântico MO1QFA para resolver o problema do módulo, onde são realizados diversos experimentos com diferentes implementações de portas lógicas em que a robustez a diferentes erros é avaliada. A IBM Quantum Experience e o kit de desenvolvimento de software Qiskit são utilizados como ambientes de modelagem de sistemas quânticos e aplicação em máquinas reais. Em complemento ao Qiskit, as ferramentas oferecidas pelo Q-CTRL Boulder Opal são utilizadas para automatizar os processos de otimização do hardware quântico. Além da investigação das otimizações, espera-se que este trabalho sirva de referência para estudantes de Ciências Exatas que estejam interessados em estudar controle quântico em computadores quânticos de supercondutores, fornecendo o conteúdo teórico e prático necessário para que seja possível realizar otimizações em seus experimentos.",
    autores: ["Eduardo Willwock Lussi", "Jerusa Marchi", "Eduardo Inacio Duzzioni"],
    link: "https://tcc.inf.ufsc.br/public/projetos.xhtml"
  },
  {
    titulo: "OTIMIZAÇÃO DE CIRCUITOS QUÂNTICOS UTILIZANDO CALCULO-ZX NA PLATAFORMA KET",
    resumo: "A Computação Quântica é uma área relevante de pesquisa porque promete um ganho de desempenho para uma classe de problemas da computação. Alguns desses problemas são a fatoração de números primos, possível pelo algoritmo de Shor e a busca em listas desordenadas, com o algoritmo de Grover. No entanto, há uma série de desafios que precisam ser superados para que seja viável a execução desses algoritmos em hardware quântico. Um deles é o ruído, que em computação quântica refere-se a perturbações indesejadas nos estados quânticos, que comprometem a precisão dos cálculos e a confiabilidade dos resultados. Para contornar esse problema, as perspectivas futuras para computação quântica se encontram na correção de erros usando portas quânticas tolerantes a falhas. A adoção em larga escala desses protocolos encerraria a era quântica atual NISQ (Noisy intermediate-scale quantum era), marcada pela computação ruidosa. No entanto, nestes protocolos algumas portas têm custo de implementação desproporcionalmente maior que outras, em especial a porta T. Visto isso, é responsabilidade dos compiladores de circuitos quânticos otimizar os circuitos de forma a reduzir o uso dessas portas que consomem mais recursos. Neste trabalho, explora-se o cálculo-ZX como forma de representar e otimizar circuitos quânticos e é feito um levantamento do estado da arte de técnicas de otimização na literatura com essa ferramenta. Um algoritmo de otimização é selecionado e implementado na Plataforma de Desenvolvimento Quântico Ket. Para esta implementação ser viável e não comprometer a arquitetura da Plataforma com a representação-ZX, um transpilador é implementado de forma a permitir a comunicação entre código Ket e diagramas-ZX via linguagem de assembly quântica OpenQASM 2.0. Os resultados finais são analisados conforme a redução do número de portas T, quantidade total de portas lógicas, caminho crítico do circuito, quantidade de portas de 2-qubits e tempo de execução da otimização.",
    autores: ["Gabriel da Silva Cardoso", "Evandro Chagas Ribeiro Da Rosa", "Jerusa Marchi"],
    link: "https://tcc.inf.ufsc.br/public/projetos.xhtml"
  },
  {
    titulo: "Comparison of quadratization methods for integer factorization via adiabatic quantum computing",
    resumo: "Adiabatic quantum computing (AQC) has been studied as an alternative for the circuit-based quantum computing model, specially regarding optimization problems. Recent studies have shown the applicability of AQC in the context of integer factorization. We have provided a general formula for a Hamiltonian operator, which encodes the solution to the integer factorization problem. This formula includes Boolean simplifications, followed by a Hamiltonian quadratization via two different methods. We also present a comparison between these two quadratization methods, considering metrics such as the number of auxiliary variables required and the range of coefficients in the resulting Hamiltonians.",
    autores: ["Gilson Trombetta Magro", "Jerusa Marchi", "Eduardo Inacio Duzzioni"],
    link: "https://tcc.inf.ufsc.br/public/projetos.xhtml"
  },
];

function Artigos() {
  const [resumosVisiveis, setResumosVisiveis] = useState({});

  const toggleResumo = (tipo, index) => {
    setResumosVisiveis(prev => ({
      ...prev,
      [`${tipo}-${index}`]: !prev[`${tipo}-${index}`]
    }));
  };

  const ResumoRetratil = ({ resumo, tipo, index }) => {
    const isVisible = resumosVisiveis[`${tipo}-${index}`];
    const resumoResumido = resumo.substring(0, 150) + '...';

    return (
      <div className="resumo-container">
        <p className="resumo-artigo">
          {isVisible ? resumo : resumoResumido}
        </p>
        <button 
          className="botao-resumo"
          onClick={() => toggleResumo(tipo, index)}
        >
          {isVisible ? 'Ver menos' : 'Ver mais'}
        </button>
      </div>
    );
  };

  return (
    <div className="projetos-wrapper">
      <div className="projetos-content">
        <h1 className="big-section-title">Publicações</h1>
        <p className="section-text">
O Grupo de Computação Quântica (GCQ) da UFSC mantém uma produção científica ativa e diversificada, com publicações que abrangem desde artigos em periódicos especializados até dissertações de mestrado e trabalhos de conclusão de curso. Nossas pesquisas contribuem para o avanço do conhecimento em áreas como algoritmos quânticos, otimização de circuitos, simulação quântica e aplicações práticas da computação quântica. Através de colaborações nacionais e internacionais, buscamos disseminar conhecimento científico de qualidade e formar novos pesquisadores na área de computação quântica.        </p>

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
              <ResumoRetratil 
                resumo={artigo.resumo} 
                tipo="artigo" 
                index={index} 
              />
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
              <ResumoRetratil 
                resumo={dissertacao.resumo} 
                tipo="dissertacao" 
                index={index} 
              />
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
              <ResumoRetratil 
                resumo={tcc.resumo} 
                tipo="tcc" 
                index={index} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artigos;