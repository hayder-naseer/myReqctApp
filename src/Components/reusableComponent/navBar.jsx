import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="nav-link" to="/dashboard">
        Dashboard
      </NavLink>
    </nav>
  );
};

export default NavBar;
