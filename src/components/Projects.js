import React from "react";
import "../styles/Projects.css";
import techimg from "../assets/images/TechQuize.png";
import yummimg from "../assets/images/yummxpress.png";
import wanderlust from "../assets/images/wanderlust.png";
function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="project-card">
        <img src={techimg} alt="Online Quiz Application" />
        <h3>Online Quiz Application</h3>
        <p>
          Created a database and inserted values for Admin and Student data.
          <br />
          Established a connection between JSE and Database (SQL).
        </p>
        <a
          href="https://github.com/Avinash9608/Quiz_Application_Avinash"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </div>

      <div className="project-card">
        <img src={yummimg} alt="Online Food Delivery Application" />
        <h3>Online Food Delivery Application</h3>
        <p>
          Implemented email validation, password encryption, and decryption.
        </p>
        <a
          href="https://github.com/Avinash9608/Online_Food_Delivery_Application"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </div>

      <div className="project-card">
        <img src={wanderlust} alt="Wanderlust" />
        <h3>Clone of Airbnb - Wanderlust</h3>
        <p>
          Wanderlust is a web project focused on helping users explore and plan
          travel experiences.
          <br />
          Features: Destination guides, itineraries, booking options, and
          personalized recommendations.
        </p>
        <a
          href="https://wanderlust-project-uugv.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <br />
        <a
          href="https://github.com/Avinash9608/wanderlust_Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </div>
    </section>
  );
}

export default Projects;
