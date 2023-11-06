import React from "react";
import { NavLink } from "react-router-dom";
import "../css/App.css";

const Menu = () => {
  return (
    <section className="headerContainer">
      <header>
        <nav id="menu">
          <label htmlFor="" className="logo">
            <a href="https://i.ibb.co/S7WHzFc/logoBP3D.png">
              <img src="https://i.ibb.co/S7WHzFc/logoBP3D.png" alt="logoBP3D" />
            </a>
          </label>
          <ul>
            <li>
              <NavLink to="/">Soportes de Echo Dot 3</NavLink>
            </li>
            <li>
              <NavLink to="/e4">Soportes de Echo 4</NavLink>
            </li>
            <li>
              <NavLink to="/ed4">Soportes de Echo Dot 4</NavLink>
            </li>
            <li>
              <NavLink to="/ed5">Soportes de Echo Dot 5</NavLink>
            </li>
            <li>
              <NavLink to="/ghm">Google Home Mini</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Menu;
