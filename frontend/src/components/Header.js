import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../style/App.css";

function Header() {
  return (
    <div className="container">
      <header>
        <ul>
          {/* 
            <li className="icono">Icono</li>
          */}
          <li className="logo">
            <Link to="/">
              {" "}
              <img src='1.png'></img>{" "}
            </Link>
          </li>
          <li className="search">
            <a href="">
              <i>
                {" "}
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-black"
                  size="2x"
                />
              </i>
            </a>
            <input placeholder="Buscar"></input>
          </li>
          <li className="buttonSesion">
            <a href="#">Cerrar sesión</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
