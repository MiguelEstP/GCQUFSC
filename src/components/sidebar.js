import React from 'react';
import "../App.css";
import { sidebarData } from './sidebarData';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logogcq.png'; // certifique-se do caminho correto

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <img src={logo} alt="Logo GCQ" />
      <ul className="sidebarList">
        {sidebarData.map((val, key) => (
          <Link to={val.link} key={key} style={{ textDecoration: 'none' }}>
            <li
              className="row"
              id={location.pathname === val.link ? "active" : ""}
            >
              <div>{val.title}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
