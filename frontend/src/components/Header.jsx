import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Header.css";

function Header() {
  return (
    <header className="header">
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/zoo">Zoo</NavLink>
        </li>
        <li>
          <NavLink to="/gestion">Gestion</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
