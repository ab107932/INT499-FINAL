import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';  // Optional: for custom styling

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")} // About page first
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")} // StreamList
          >
            StreamList
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? "active-link" : "")} // Movies
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "active-link" : "")} // Cart
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
