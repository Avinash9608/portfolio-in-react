import React from "react";
import "../styles/Contact.css"; // Import styles
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa"; // Import icons

function Contact() {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the platforms below:</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/avinash-kumar-653001213/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />{" "}
            <span className="social-text">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/tns_server_protocal_error/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram className="social-icon" />{" "}
            <span className="social-text">Instagram</span>
          </a>
          <a
            href="https://x.com/Avinashmadhuka"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaTwitter className="social-icon" />{" "}
            <span className="social-text">Twitter</span>
          </a>
          <a href={`mailto:avinash25di@gmail.com`} className="social-link">
            <FaEnvelope className="social-icon" />{" "}
            <span className="social-text">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
