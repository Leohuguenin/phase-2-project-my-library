import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/books" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink exact to="/reading-list" activeClassName="active-link">
        Reading List
      </NavLink>
    </div>
  );
}

export default NavBar;

