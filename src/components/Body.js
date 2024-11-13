// src/pages/Body.js
import React from "react";
import "../styles/Body.css"; // Import Body styles
import AviPic from "../assets/images/Profile.png";

function Body() {
  return (
    <section className="intro-section">
      <div className="profile-container">
        <img src={AviPic} alt="Profile" className="profile-image" />
      </div>
      <div className="intro-text">
        <p className="hello-text">Hello, </p>
        <h2 className="name-text">I am Avinash Kumar</h2>
        <h2 className="typing-intro">
          "A driven software engineer committed to crafting innovative,
          high-performance solutions that solve real-world problems and drive
          technological progress."
        </h2>
      </div>
    </section>
  );
}

export default Body;
