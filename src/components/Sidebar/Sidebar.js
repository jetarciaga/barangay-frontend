import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Appointments", path: "/appointment" },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "active" : "sidebar-closed"}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>

      <nav className="sidebar-nav">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
