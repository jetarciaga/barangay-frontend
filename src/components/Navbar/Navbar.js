import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const auth = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">Barangay Online Appointment</div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <Link to="/appointment">Appointment</Link>
        </li>
        <li>
          <button
            onClick={() => {
              auth.logout();
            }}
          >
            <FontAwesomeIcon icon={faSignOut} />
          </button>
        </li>
      </ul>
      <div className="navbar-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
