import React from 'react';
import '../App.css';
import OttoMenegassoPires from '../FotosEgressos/1746549889466 - Otto Menegasso Pires.jpg';
import GilsonTrombetta from '../FotosEgressos/1744726395635.jpeg';
import GabrieldaSilvaCardoso from '../FotosEgressos/1725197006801.jpeg';
import TeoHaezerGallarza from '../FotosEgressos/1557857312990.jpeg';
import DanielBoso from '../FotosEgressos/1749062520953.jpeg';

const ex_membros = [
  {
    nome: "Daniel Boso",
    curso: "Ciêncas da Computação",
    foto: "",
    data: ""
  },
  {
    nome: "Gabriel da Silva Cardoso",
    curso: "Ciêncas da Computação",
    foto: GabrieldaSilvaCardoso,
    data: "2023 - 2024"
  },
  {
    nome: "Gilson Trombetta Magro",
    curso: "Ciêncas da Computação",
    foto: GilsonTrombetta,
    data: "2021 - 2022"
  },
  {
    nome: "Lucas Cavalcante de Souza",
    curso: "Ciêncas da Computação",
    foto: "",
    data: ""
  },
  {
    nome: "Maurício Machado Barbosa",
    curso: "Ciêncas da Computação",
    foto: "",
    data: ""
  },
  {
    nome: "Otto Menegasso Pires",
    curso: "Ciêncas da Computação",
    foto: OttoMenegassoPires,
    data: "2017 - 2022"
  },
  {
    nome: "Teo Haeser Gallarza",
    curso: "Ciêncas da Computação",
    foto: TeoHaezerGallarza,
    data: "2020 - 2021"
  },
];

function Egressos() {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h1 className="home-title">Egressos do GCQ</h1>

        <div className="membros-container">
          {ex_membros.map((membro, index) => (
            <div key={index} className="membro-card">
              <img src={membro.foto} alt={membro.nome} className="membro-foto" />
              <h3>{membro.nome}</h3>
              <p>{membro.curso}</p>
              <p className="datatxt">{membro.data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Egressos;