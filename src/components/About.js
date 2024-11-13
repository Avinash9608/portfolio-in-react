import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <p>
        <strong>Here’s a quick view of my academic journey:</strong>
      </p>

      <div className="roadmap">
        <div className="roadmap-point">
          <div className="circle"></div>
          <div className="roadmap-details">
            <h3>10th - Doon Global School</h3>
            <p>Passed in 2018 with 75.6%</p>
          </div>
        </div>
        <div className="roadmap-point">
          <div className="circle"></div>
          <div className="roadmap-details">
            <h3>12th - Pratibha Pallavan Public School</h3>
            <p>Passed in 2020 with 71%</p>
          </div>
        </div>
        <div className="roadmap-point">
          <div className="circle"></div>
          <div className="roadmap-details">
            <h3>B.Tech in Computer Science Engineering</h3>
            <p>Graduated in 2024 June with 7.95 CGPA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
