import React, { useState, useEffect } from "react";
import "../styles/Body.css"; // Import Body styles
import AviPic from "../assets/images/Profile.png"; // Your profile picture

function Body() {
  const fullText =
    "A driven software engineer and passionate\n about crafting high-performance solutions.";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50); // Adjust speed here (50ms per letter)
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="profile-section">
      <div className="card-container">
        <span className="pro">PRO</span>
        <img
          src={AviPic}
          alt="Profile"
          className="round"
          style={{ width: "60px", height: "60px" }}
        />
        <h3>Avinash Kumar</h3>
        <h6>Location: Your City</h6>
        <p className="typing-text">
          {typedText.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className="buttons">
          <button className="primary">Message</button>{" "}
          <button className="primary ghost">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front-End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Data Structures and Algorithms (Medium Proficiency)</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h3>Experience</h3>
        <p>
          <strong>Bharat Intern | Java Developer</strong>
        </p>
        <ul>
          <li>Developed an Online Quiz Application using Java.</li>
          <li>Designed interfaces for admin and student users.</li>
          <li>
            Admin functionalities: Set questions, view scores, register users.
          </li>
          <li>Student functionalities: Take exams, view scores.</li>
        </ul>

        <p>
          <strong>ZetPeak | Cyber Security Researcher (Intern)</strong>
        </p>
        <ul>
          <li>Explored cyber security research tools and practices.</li>
        </ul>

        <h3>Projects / Open-Source</h3>
        <p>
          <strong>
            Online Quiz Application | <a href="#">Link</a>
          </strong>
        </p>
        <ul>
          <li>
            Created a database and inserted values for Admin and Student data.
          </li>
          <li>Established a connection between JSE and Database (SQL).</li>
        </ul>

        <p>
          <strong>
            Online Food Delivery Application | <a href="#">Link</a>
          </strong>
        </p>
        <ul>
          <li>
            Implemented email validation, password encryption, and decryption.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Body;
