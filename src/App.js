// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; // Import Header
import Footer from "./components/Footer"; // Import Footer
import Body from "./components/Body"; // Import Body
import About from "./components/About"; // Import About page (example)
import Skills from "./components/Skills"; // Import Skills page (example)
import Projects from "./components/Projects"; // Import Projects page (example)
import Contact from "./components/Contact"; // Import Contact page (example)
// import ContactForm from "./components/Contact-form";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} /> {/* Main route */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/skills" element={<Skills />} /> {/* Skills page */}
        <Route path="/projects" element={<Projects />} /> {/* Projects page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
