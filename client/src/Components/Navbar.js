import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link className="title" to="/">
        UCF | Knight Hacks{" "}
      </Link>
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
          <NavLink to="http://localhost:3000/dashboard">Influx</NavLink>
        </li>
        <li>
          <NavLink to="/pay/dues/Stripe">Pay Dues</NavLink>
        </li>
        <li>
          <NavLink to="/socials">Socials</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events </NavLink>
        </li>
        <li>
          <NavLink to="/login">Admin</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
