import React from 'react';
import '../App.css';
import OttoMenegassoPires from '../FotosEgressos/1746549889466 - Otto Menegasso Pires.jpg';

const ex_membros = [
  {
    nome: "Otto Menegasso Pires",
    curso: "Ciêncas da Computação",
    foto: OttoMenegassoPires 
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Egressos;