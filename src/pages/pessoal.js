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
import Duzzioni from '../FotosPessoal/Foto_3 - Eduardo Duzzioni.jpeg';
import GabrielCervi from '../FotosPessoal/Foto_Gabriel_Cervi - Gabriel Cervi.jpg';
import RafaelSantiago from '../FotosPessoal/rafael - Rafael de Santiago.jpg';
import Sartori from '../FotosPessoal/73446902 - Gabriel Rangel.jpeg';
import CesarAugusto from '../FotosPessoal/Imagem do WhatsApp de 2025-08-14 à(s) 11.21.27_d0fe5376 - César Augusto Freitas Bernardes.jpg';
import KallebdaCostaSantos from '../FotosPessoal/me - KALLEB DA COSTA SANTOS.jpg';
import JoseCarlos from '../FotosPessoal/20251014_131723 - José Carlos Libois Neto.jpg';
import Cabral from '../FotosPessoal/IMG_20250719_201608 - Pedro Cabral.jpg';
import Hector from '../FotosPessoal/IMG_8613 - Hector Pettenghi.jpeg';
import GustavoParuckerLueders from '../FotosPessoal/IMG_20241211_131703969 - Gustavo Parucker Lueders.jpg';

const membros = [
  {
    nome: "Eduardo Inacio Duzzioni",
    funcao: "Professor",
    curso: "CFM - UFSC",
    foto: Duzzioni,
    data: "2017 - atual",
    categoria: "Professores"
  },
  {
    nome: "Hector Pettenghi Roldan",
    funcao: "Professor",
    curso: "EEL - UFSC",
    foto: Hector,
    data: "2025 - atual",
    categoria: "Professores"
  },
  {
    nome: "Jerusa Marchi",
    funcao: "Professora",
    curso: "INE - UFSC",
    foto: JerusaMarchi,
    data: "2017 - atual",
    categoria: "Professores"
  },
  {
    nome: "Pedro Belin Castellucci",
    funcao: "Professor",
    curso: "INE - UFSC",
    foto: Castelluci,
    data: "2022 - atual",
    categoria: "Professores"
  },
  {
    nome: "Rafael de Santiago",
    funcao: "Professor",
    curso: "INE - UFSC",
    foto: RafaelSantiago,
    data: "2018 - atual",
    categoria: "Professores"
  },
  {
    nome: "Vladimir Pestov",
    funcao: "Professor",
    curso: "MTM - UFSC",
    foto: VladmirPestov,
    data: "2025 - atual",
    categoria: "Professores"
  },
  {
    nome: "Cesar Augusto do Amaral",
    funcao: "Doutorando",
    curso: "Física",
    foto: CesarAmaral,
    data: "2024 - atual",
    categoria: "Doutorandos"
  },
  {
    nome: "Eduardo Willwock Lussi",
    funcao: "Doutorando",
    curso: "CIências da Computação",
    foto: EduardoLussi,
    data: "2022 - atual",
    categoria: "Doutorandos"
  },
  {
    nome: "Evandro Chagas Ribeiro da Rosa",
    funcao: "Doutorando",
    curso: "Ciências da Computação",
    foto: EvandroChagas,
    data: "2017 - atual",
    categoria: "Doutorandos"
  },
  {
    nome: "José Carlos Libois Neto",
    funcao: "Doutorando",
    curso: "Física",
    foto: JoseCarlos,
    data: "2025 - atual",
    categoria: "Doutorandos"
  },
  {
    nome: "Letícia Bertuzzi",
    funcao: "Doutoranda",
    curso: "Física",
    foto: LeticiaBertuzzi,
    data: "2022 - atual",
    categoria: "Doutorandos"
  },
  {
    nome: "César Augusto Freitas Bernardes",
    funcao: "Graduando",
    curso: "Física",
    foto: CesarAugusto,
    data: "2022 - atual",
    categoria: "Graduandos"
  },
  {
    nome: "Gabriel Reimann Cervi",
    funcao: "Graduando",
    curso: "Ciências da Computação",
    foto: GabrielCervi,
    data: "2025 - atual",
    categoria: "Graduandos"
  },
  {
    nome: "Gabriel Sartori Rangel",
    funcao: "Graduando",
    curso: "Ciências da Computação",
    foto: Sartori,
    data: "2022 - atual",
    categoria: "Graduandos"
  },
  {
    nome: "Gabriel Turatti Andrade",
    funcao: "Graduando",
    curso: "Ciências da Computação",
    foto: GabrielTurattiAndrade,
    data: "2024 - atual",
    categoria: "Graduandos"
  },
  {
    nome: "Gustavo Parucker Lueders",
    funcao: "Graduando",
    curso: "Ciências da Computação",
    foto: GustavoParuckerLueders,
    data: "2025 - atual",
    categoria: "Graduandos"
  },
  {
    nome: "Kalleb da Costa Santos",
    funcao: "Graduando",
    curso: "Engenharia da Computação",
    foto: KallebdaCostaSantos,
    data: "2025 - atual",
    categoria: "Graduandos"
  },
  {
    nome: "Miguel Estivalet Pinto",
    funcao: "Graduando",
    curso: "Ciências da Computação",
    foto: MiguelEstivaletPinto,
    data: "2025 - atual",
    categoria: "Graduandos"
  },
  {
    nome: "Pedro Artur de Aguiar Cabral",
    funcao: "Graduando",
    curso: "Ciências da Computação",
    foto: Cabral,
    data: "2025 - atual",
    categoria: "Graduandos"
  },
  {
    nome: "Ruan Luiz Molgero Lopes",
    funcao: "Graduando",
    curso: "Sistemas de Informação",
    foto: RuanLopes,
    data: "2024 - atual",
    categoria: "Graduandos"
  }
];

// Agrupa membros por categoria
const membrosPorCategoria = membros.reduce((acc, membro) => {
  if (!acc[membro.categoria]) {
    acc[membro.categoria] = [];
  }
  acc[membro.categoria].push(membro);
  return acc;
}, {});

function Pessoal() {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1 className="home-title">Integrantes do GCQ</h1>

        {Object.entries(membrosPorCategoria).map(([categoria, membros]) => (
          <div key={categoria} className="categoria-container">
            <h2 className="subsection-title">{categoria}</h2>
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
        ))}
      </div>
    </div>
  );
}

export default Pessoal;