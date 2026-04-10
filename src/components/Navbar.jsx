import React from "react";
import { NavLink } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  return (

<div className="navDiv">
  <NavLink 
    to="/" 
    className={({ isActive }) => isActive ? "navLink active" : "navLink"}
  >
    Home
  </NavLink>

  <NavLink 
    to="/pastes" 
    className={({ isActive }) => isActive ? "navLink active" : "navLink"}
  >
    Pastes
  </NavLink>
</div>
  );
};

export default Navbar;