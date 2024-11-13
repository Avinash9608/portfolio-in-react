import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="nav-link">
        <h1 className="header-name">Avinash Kumar</h1>
      </Link>

      <nav>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/skills" className="nav-link">
          Skills
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        {/* <Link to="/contact-form" className="nav-link">
          Contact-form
        </Link> */}
      </nav>
    </header>
  );
}

export default Header;
