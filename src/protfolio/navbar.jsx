// src/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // toggle menu open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  // close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          Portfolio
        </Link>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" onClick={closeMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Education" onClick={closeMenu}>Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Projects" onClick={closeMenu}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Skills" onClick={closeMenu}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certifications" onClick={closeMenu}>Certificates</Link>
            </li>
          </ul>

          {/* Resume Button */}
          <span className="navbar-text">
            <a href="/resume.pdf" className="btn btn-outline-primary" download>
              Download Resume
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
