import React from 'react';
import '../App.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function Contatos() {
  return (
    <div className="home-wrapper">
      <div className="home-content contato-grid">
        <div className="contato-info">
          <h1 className="home-title">Entre em Contato</h1>
          <p><strong>Email:</strong> Em ail@contato.ufsc.br</p>
          <p><strong>Localização:</strong> Departamento de Informática e Estatística (INE) - Universidade Federal de Santa Catarina</p>
          <div className="contato-redes">
            <a href="https://www.linkedin.com/company/gcq-ufsc/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/gcq_ufsc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://eelslap.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
           </div>
        </div>

        <div className="mapa-contato">
          <iframe
            title="Localização GCQ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.032830287451!2d-48.51994988494206!3d-27.601786082839464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273824d6849357%3A0x548fbc7a06b67691!2sINE%20-%20Departamento%20de%20Inform%C3%A1tica%20e%20Estat%C3%ADstica%20-%20UFSC!5e0!3m2!1spt-BR!2sbr!4v1713194063787!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contatos;
