import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink exact to="/movies" activeClassName="active-link">
        Movies
      </NavLink>
      <NavLink exact to="/directors" activeClassName="active-link">
        Directors
      </NavLink>
      <NavLink exact to="/actors" activeClassName="active-link">
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
