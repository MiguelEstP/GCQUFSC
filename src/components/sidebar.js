import React, { useEffect, useRef } from "react";
import "../App.css";
import { sidebarData } from "./sidebarData";
import { Link, useLocation } from "react-router-dom";
import logo from "../GCQ_logo_branco.png";

function Sidebar() {
  const location = useLocation();
  const itemRefs = useRef([]);

  useEffect(() => {
    // Animação de entrada escalonada para os itens
    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      // estado inicial
      item.style.transform = "translateX(-20px)";
      item.style.opacity = "0";

      setTimeout(() => {
        // usar template literal para montar a propriedade transition
        item.style.transition = `transform 0.3s ease-out ${index * 0.1}s, opacity 0.3s ease ${index * 0.1}s`;
        item.style.transform = "translateX(0)";
        item.style.opacity = "1";
      }, 100);
    });
  }, []);

  return (
    <div className="sidebar">
      <img src={logo} alt="Logo GCQ" />
      <ul className="sidebarList">
        {sidebarData.map((val, index) => (
          <Link to={val.link} key={index} style={{ textDecoration: "none" }}>
            <li
              className="row"
              id={location.pathname === val.link ? "active" : ""}
              ref={(el) => (itemRefs.current[index] = el)}
              style={{ transform: "translateX(-20px)", opacity: 0 }}
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