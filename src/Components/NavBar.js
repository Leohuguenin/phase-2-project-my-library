import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar nav-links">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/new-book-form">
        Add new book
      </NavLink>
      <NavLink exact to="/reading-list">
        Reading list
      </NavLink>
    </div>
  );
}

export default NavBar;

