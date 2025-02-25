// import React from "react";
// import "../styles/Header.css";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <header className="header">
//       <Link to="/" className="nav-link">
//         <h1 className="header-name">Avinash Kumar</h1>
//       </Link>

//       <nav>
//         <Link to="/about" className="nav-link">
//           About
//         </Link>
//         <Link to="/skills" className="nav-link">
//           Skills
//         </Link>
//         <Link to="/projects" className="nav-link">
//           Projects
//         </Link>
//         <Link to="/contact" className="nav-link">
//           Contact
//         </Link>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="nav-link">
        <h1 className="header-name">Avinash Kumar</h1>
      </Link>

      <div className="button-container">
        <Link to="/about">
          <button className="button">About</button>
        </Link>

        <Link to="/skills">
          <button className="button">Skills</button>
        </Link>

        <Link to="/projects">
          <button className="button">Projects</button>
        </Link>

        <Link to="/contact">
          <button className="button">Contact</button>
        </Link>
        <Link to="/journeyRoadmap">
          <button className="button">JourneyRoadmap</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
