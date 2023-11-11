import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <NavLink className="px-3 py-2 rounded-md text-sm font-medium" to="/">
        Home
      </NavLink>
      <NavLink className="px-3 py-2 rounded-md text-sm font-medium" to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
