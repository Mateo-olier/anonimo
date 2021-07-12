import React from "react";
import "../style/App.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="" className="active">
            Todos
          </a>
        </li>
        <li>
          <a href="">Motivadores</a>
        </li>
        <li>
          <a href="">Sad</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
