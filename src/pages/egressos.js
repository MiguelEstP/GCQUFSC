import React from 'react';
import '../App.css';

const ex_membros = [
  {
    nome: "AAAAA",
    funcao: "Doutoranda",
    curso: "ASDADSASD",
    foto: "https://via.placeholder.com/150"
  },
  {
    nome: "ASDASDASD",
    funcao: "Professor",
    curso: "Departamento de Informática e Estatística",
    foto: "https://via.placeholder.com/150"
  },
  {
    nome: "ADSDASDASD",
    funcao: "Mestranda",
    curso: "ASDASDASD",
    foto: "https://via.placeholder.com/150"
  }
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
              <p><strong>{membro.funcao}</strong></p>
              <p>{membro.curso}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Egressos;