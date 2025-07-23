import React from 'react';
import '../App.css';
import MiguelEstivaletPinto from '../FotosPessoal/MiguelEstivaletPinto.jpg';
import VladmirPestov from '../FotosPessoal/IMG_4600 - Vladimir Pestov.jpeg'
import LeticiaBertuzzi from '../FotosPessoal/fotopero - Leticia Bertuzzi.jpeg';
import GabrielTurattiAndrade from '../FotosPessoal/eloise4at5 - Gabriel Turatti.jpg';
import Castelluci from '../FotosPessoal/Pedro Castelluci.jpg';
import JerusaMarchi from '../FotosPessoal/IMG_5531 - Jerusa Marchi.jpeg';
import CesarAmaral from '../FotosPessoal/IMG_20240126_141037 - Cesar Amaral.jpg';
import EvandroChagas from '../FotosPessoal/20240715_163007~3 - Evandro Chagas Ribeiro da Rosa.png';
import EduardoLussi from '../FotosPessoal/servletrecuperafoto - Eduardo Lussi.gif';
import RuanLopes from '../FotosPessoal/20250507_083513 - Ruan.jpg';

const membros = [
  {
    nome: "Jerusa Marchi",
    funcao: "Professora",
    curso: "INE - UFSC",
    foto: JerusaMarchi,
    data: "2017 - atual"
  },
  {
    nome: "Pedro Belin Castellucci",
    funcao: "Professor",
    curso: "INE - UFSC",
    foto: Castelluci,
    data: "2022 - atual"
  },
  {
    nome: "Vladimir Pestov",
    funcao: "Professor",
    curso: "MTM - UFSC",
    foto: VladmirPestov,
    data: "2025 - atual"
  },
  {
    nome: "Cesar Augusto do Amaral",
    funcao: "Doutorando",
    curso: "Física",
    foto: CesarAmaral,
    data: "2024 - atual"
  },
  {
    nome: "Evandro Chagas Ribeiro da Rosa",
    funcao: "Doutorando",
    curso: "Ciências da Computação",
    foto: EvandroChagas,
    data: "2017 - atual"
  },
  {
    nome: "Letícia Bertuzzi",
    funcao: "Doutoranda",
    curso: "Física",
    foto: LeticiaBertuzzi,
    data: "2022 - atual"
  },
  {
    nome: "Eduardo Willwock Lussi",
    funcao: "Mestrando",
    curso: "Física",
    foto: EduardoLussi,
    data: "2022 - atual"
  },
  {
    nome: "Gabriel Turatti Andrade",
    funcao: "Graduando",
    curso: "Ciências da Computação",
    foto: GabrielTurattiAndrade,
    data: "2024 - atual"
  },
    {
    nome: "Miguel Estivalet Pinto",
    funcao: "Graduando",
    curso: "Ciências da Computação",
    foto: MiguelEstivaletPinto,
    data: "2025 - atual"
  },
  {
    nome: "Ruan Luiz Molgero Lopes",
    funcao: "Graduando",
    curso: "Sistemas de Informação",
    foto: RuanLopes,
    data: "2024 - atual"
  }
];

function Pessoal() {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1 className="home-title">Integrantes do GCQ</h1>

        <div className="membros-container">
          {membros.map((membro, index) => (
            <div key={index} className="membro-card">
              <img src={membro.foto} alt={membro.nome} className="membro-foto" />
              <h3>{membro.nome}</h3>
              <p><strong>{membro.funcao}</strong></p>
              <p>{membro.curso}</p>
              <p className="datatxt">{membro.data}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pessoal;