import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt, BiSearch } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";

function Navigation() {
  return (
    <nav className="absolute bottom-0 left-0 w-full bg-navigationBackground px-6 py-3">
      <ul className="flex justify-between text-medium">
        <li>
          <NavLink className="navLink" to="/aktiviteter">
            <BiHomeAlt />
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/soeg">
            <BiSearch />
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/kalender">
            <FiCalendar />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
