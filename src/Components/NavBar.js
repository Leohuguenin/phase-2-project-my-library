import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar nav-links">
      <NavLink exact to="/books">
        Home
      </NavLink>
      <NavLink exact to="/reading-list">
        Reading List
      </NavLink>
    </div>
  );
}

export default NavBar;

