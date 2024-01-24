import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <NavLink className="title" to="/">
        Controller Name{" "}
      </NavLink>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About </NavLink>
        </li>
        <li>
          <NavLink to="/socials">Socials</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
