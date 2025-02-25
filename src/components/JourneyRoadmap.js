import React from "react";
import "../styles/JourneyRoadmap.css";

const JourneyRoadmap = () => {
  const journey = [
    {
      title: "B.Tech in Computer Science and Engineering",
      description: "Graduated in June 2024 with 7.95 CGPA.",
      icon: "🎓",
    },
    {
      title: "Learned Computer Fundamentals and Networks",
      description:
        "Studied the basics of computer systems, networking, and protocols.",
      icon: "💻",
    },
    {
      title: "Mastered Programming Languages",
      description:
        "Learned C, C++, Java, and practiced problem-solving on platforms like HackerRank, HackerEarth, GFG, and CodingNinja.",
      icon: "📚",
    },
    {
      title: "Explored Web Development",
      description:
        "Learned HTML, CSS, JavaScript, and React for frontend development.",
      icon: "🌐",
    },
    {
      title: "Practiced Data Structures and Algorithms",
      description:
        "Solved DSA problems on platforms like LeetCode, GFG, and InterviewBit.",
      icon: "🧠",
    },
    {
      title: "Studied Advanced Topics",
      description:
        "Read documentation on W3Schools, GFG, and explored JSE, JEE, and other frameworks.",
      icon: "📖",
    },
    {
      title: "Learned Backend Technologies",
      description:
        "Gained expertise in Node.js, Express, MongoDB, and AWS for backend development.",
      icon: "🔧",
    },
    {
      title: "Internship as a Backend Developer",
      description:
        "Currently working as a backend developer intern, using React, Node.js, Express, and MongoDB.",
      icon: "👨‍💻",
    },
  ];

  return (
    <div className="roadmap-container">
      <h2 className="roadmap-title">My Developer Journey</h2>
      <div className="roadmap">
        {journey.map((step, index) => (
          <div key={index} className="roadmap-step">
            <div className="step-icon">
              <div className="icon-circle">{step.icon}</div>
              {index < journey.length - 1 && (
                <div className="vertical-line"></div>
              )}
            </div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyRoadmap;
