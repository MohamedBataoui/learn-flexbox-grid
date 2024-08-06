import React from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import "../styles/NavBar.css";

const NavBar = ({ toggleTheme, currentTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <h1>Learn Flexbox and Grid</h1>
        <div className="nav-items">
          <ul>
            <li>
              <NavLink
                exact="true"
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/flexbox"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Flexbox
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/grid"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Grid
              </NavLink>
            </li>
          </ul>
          <button className="theme-toggle" onClick={toggleTheme}>
            {currentTheme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
