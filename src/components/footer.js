import React from 'react';
import '../App.css';
import UFSCimagem from '../logo-ufsc.png';


function Footer() {
  return (
    <footer className="footer">
  <div className="footer-content">
    <img src={UFSCimagem} alt="Logo UFSC" className="logo-ufsc" />
    <p>© 2025 GCQ - UFSC. Todos os direitos reservados.</p>
  </div>
</footer>
  );
}

export default Footer;
