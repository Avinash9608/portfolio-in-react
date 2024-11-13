import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      {/* Programming Languages Section */}
      <div className="skills-category programming-languages">
        <h3>Programming Languages</h3>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>JavaScript (JS)</li>
          <li>Java (JEE)</li>
        </ul>
      </div>

      {/* Core Competencies Section */}
      <div className="skills-category core-competencies">
        <h3>Core Competencies</h3>
        <p>Data Structures and Algorithms (Medium Proficiency)</p>
      </div>

      {/* Databases Section */}
      <div className="skills-category databases">
        <h3>Databases</h3>
        <ul>
          <li>SQL</li>
          <li>Oracle</li>
        </ul>
      </div>

      {/* Tools / Platforms Section */}
      <div className="skills-category tools-platforms">
        <h3>Tools / Platforms</h3>
        <ul>
          <li>NetBeans</li>
          <li>VSCode</li>
          <li>IntelliJ IDEA</li>
        </ul>
      </div>

      {/* Git, Github, AWS Section */}
      <div className="skills-category git-github-aws">
        <h3>Version Control & Cloud Platforms</h3>
        <p>Basic Understanding of GIT, GITHUB, and AWS</p>
      </div>
    </section>
  );
}

export default Skills;
