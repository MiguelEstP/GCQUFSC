// src/constants/newsData.js
import premiacaoSBC2025 from '../imagensnoticias/premiodeinovação.jpg';
import weciqImage from '../imagensnoticias/VIII ⟨WECIQ∣WCQ⟩ port.png';
import ExtTrabWCQ from '../imagensnoticias/extensaodedatatrabalho7.jpg';

export const newsItems = [
    // Notícia 1 - Prorrogação do prazo de envio do WECIQ/WCQ (DE NOVO)
    {
    id: 1,
    title: "Prorrogação de prazo para submissão de trabalhos",
    description: "Atenção! O prazo para submissão de trabalhos para o VIII WECIQ e WCQ foi prorrogado até 31 de agosto!",
    image: weciqImage,
    date: "22 de Agosto, 2025",
    fullContent: (
      <div className="news-content">
        <div className="news-highlight event">
          <h3>Prorrogação de prazo para submissão de trabalhos</h3>
          <p className="news-subtitle">ATENÇÃO PARTICIPANTES! ⏰</p>
        </div>

        <p>Temos uma importante atualização para todos os pesquisadores e entusiastas de tecnologias quânticas: o prazo para submissão de trabalhos para o VIII WECIQ | WCQ foi prorrogado!</p>

        <div className="deadline-update">
          <p><strong>Novo prazo:</strong> 31 de agosto de 2025</p>
        </div>

        <div className="submission-details">
          <h4>Informações sobre as submissões:</h4>
          <ul>
            <li>CATEGORIA 1: Resumo de 2 páginas (apresentação em formato de pôster, com publicação nos anais).</li>
            <li>CATEGORIA 2: Trabalho completo de 5 páginas (apresentação oral ou pôster, com publicação nos anais).</li>
            <li>CATEGORIA 3: Resumo simples (apresentação oral ou pôster, sem publicação nos anais do evento)</li>
          </ul>
        </div>

        <div className="important-notes">
          <h4>Atenção:</h4>
          <p>Cada taxa de inscrição permite a apresentação de, no máximo, dois (02) trabalhos, considerando a soma das Categorias 1, 2 e 3.</p>
          <p>Os trabalhos submetidos devem seguir rigorosamente os modelos disponibilizados na página do evento. Submissões que não atendam ao formato estabelecido poderão ser automaticamente rejeitadas pelo Comitê Científico, sem avaliação de mérito. </p>
        </div>

        <div className="event-reminder">
          <p><strong>Não se esqueça:</strong></p>
          <p>O VIII WECIQ | WCQ ocorrerá de 8 a 12 de dezembro de 2025 na UFSC, Florianópolis, com o tema "O Futuro da Ciência e Tecnologias Quânticas no Brasil".</p>
        </div>

        <div className="action-buttons">
          <a href="https://workshop-cq.ufsc.br/2025" className="news-link-button">Acesse as diretrizes para submissão no site do evento</a>
        </div>
      </div>
    )
  },

    // Notícia 2 - Prorrogação do prazo de envio do WECIQ/WCQ
    {
    id: 2,
    title: "Prorrogação de prazo para submissão de trabalhos",
    description: "Atenção! O prazo para submissão de trabalhos para o VIII WECIQ e WCQ foi prorrogado até 20 de agosto!",
    image: ExtTrabWCQ,
    date: "5 de Agosto, 2025",
    fullContent: (
      <div className="news-content">
        <div className="news-highlight event">
          <h3>Prorrogação de prazo para submissão de trabalhos</h3>
          <p className="news-subtitle">ATENÇÃO PARTICIPANTES! ⏰</p>
        </div>

        <p>Temos uma importante atualização para todos os pesquisadores e entusiastas de tecnologias quânticas: o prazo para submissão de trabalhos para o VIII WECIQ | WCQ foi prorrogado!</p>

        <div className="deadline-update">
          <p><strong>Novo prazo:</strong> 20 de agosto de 2025</p>
        </div>

        <div className="submission-details">
          <h4>Informações sobre as submissões:</h4>
          <ul>
            <li>CATEGORIA 1: Resumo de 2 páginas (apresentação em formato de pôster, com publicação nos anais).</li>
            <li>CATEGORIA 2: Trabalho completo de 5 páginas (apresentação oral ou pôster, com publicação nos anais).</li>
            <li>CATEGORIA 3: Resumo simples (apresentação oral ou pôster, sem publicação nos anais do evento)</li>
          </ul>
        </div>

        <div className="important-notes">
          <h4>Atenção:</h4>
          <p>Cada taxa de inscrição permite a apresentação de, no máximo, dois (02) trabalhos, considerando a soma das Categorias 1, 2 e 3.</p>
          <p>Os trabalhos submetidos devem seguir rigorosamente os modelos disponibilizados na página do evento. Submissões que não atendam ao formato estabelecido poderão ser automaticamente rejeitadas pelo Comitê Científico, sem avaliação de mérito. </p>
        </div>

        <div className="event-reminder">
          <p><strong>Não se esqueça:</strong></p>
          <p>O VIII WECIQ | WCQ ocorrerá de 8 a 12 de dezembro de 2025 na UFSC, Florianópolis, com o tema "O Futuro da Ciência e Tecnologias Quânticas no Brasil".</p>
        </div>

        <div className="action-buttons">
          <a href="https://workshop-cq.ufsc.br/2025" className="news-link-button">Acesse as diretrizes para submissão no site do evento</a>
        </div>
      </div>
    )
  },

  // Notícia 3 - Evento WECIQ/WCQ
  {
    id: 3,
    title: "⟨VIII WECIQ|VIII WCQ⟩",
    description: "Maior evento de tecnologias quânticas do Brasil em dezembro/2025 na UFSC",
    image: weciqImage,
    date: "1 de Agosto, 2025",
    fullContent: (
      <div className="news-content">
        <div className="news-highlight event">
          <h3>⟨VIII WECIQ|VIII WCQ⟩</h3>
          <p className="news-subtitle">SAVE THE DATE! 🗓️</p>
        </div>

        <p>É com grande entusiasmo que convidamos a todos para o maior evento de tecnologias quânticas do Brasil: o VIII WECIQ & WCQ, que acontecerá aqui na nossa casa, a UFSC em Florianópolis!</p>

        <div className="event-details">
          <p><strong>Quando:</strong> 8 a 12 de dezembro de 2025</p>
          <p><strong>Onde:</strong> UFSC, Florianópolis</p>
          <p><strong>Tema:</strong> "O Futuro da Ciência e Tecnologias Quânticas no Brasil"</p>
        </div>

        <div className="event-program">
          <h4>Programação inclui:</h4>
          <ul>
            <li>Palestras com especialistas nacionais e internacionais</li>
            <li>Minicursos de alto nível</li>
            <li>Exposição de pôsteres com as pesquisas mais recentes</li>
            <li>Muito networking e conexões valiosas</li>
          </ul>
        </div>

        <div className="event-registration">
          <p><strong>Inscrições abertas!</strong></p>
          <p>Faça a sua inscrição utilizando o Link abaixo!</p>
          <a href="https://workshop-cq.ufsc.br/2025" className="news-link-button">Acesse o site do evento</a>
        </div>
      </div>
    )
  },
  

  // Notícia 4 - Prêmio SBC 2025
  {
    id: 4,
    title: "É OFICIAL: 1º LUGAR! 🏆",
    description: "Nosso projeto Ket acaba de ganhar o Selo de Inovação 2025 da SBC!",
    image: premiacaoSBC2025,
    date: "15 de Julho, 2025",
    fullContent: (
      <div className="news-content">
        <div className="news-highlight">
          <h3>É OFICIAL: 1º LUGAR! 🏆</h3>
          <p className="news-subtitle">Nosso projeto Ket acaba de ganhar o <strong>Selo de Inovação 2025</strong> da Sociedade Brasileira de Computação (SBC)!</p>
        </div>

        <p>Um orgulho gigante para todo nosso time da UFSC e um mega incentivo para a computação quântica no Brasil.</p>

        <div className="news-details">
          <p>Essa conquista é fruto de mais de <strong>8 anos de colaboração</strong> e do trabalho incrível do nosso Grupo de Computação Quântica, nascido da pesquisa do Evandro Chagas e com a liderança dos professores:</p>
          <ul>
            <li>Rafael de Santiago</li>
            <li>Jerusa Marchi</li>
            <li>Eduardo Duzzioni</li>
            <li>Pedro Castelucci</li>
          </ul>
        </div>

        <p className="news-thanks">Agradecemos de coração à SBC pelo reconhecimento e a todos que apoiam nossa jornada para democratizar as tecnologias quânticas.</p>

        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7353455131822108673/?fbclid=PAZXh0bgNhZW0CMTEAAaeZHn6tA981QwSD4gt4OP4DZau5HbC6AcM9mNyflDD12nwXMQblukb6JROnEw_aem_CB7a1py9DybkwoHDHJhpOQ" className="news-link-button">Quer saber mais sobre essa conquista?</a>
      </div>
    )
  },
];