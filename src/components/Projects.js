import React from "react";
import "../styles/Projects.css";
import techimg from "../assets/images/TechQuize.png";
import yummimg from "../assets/images/yummxpress.png";
import wanderlust from "../assets/images/wanderlust.png";
import AdminPanel from "../assets/images/AdminPanel.png";
import ChattingApplication from "../assets/images/ChattingApplication.png";
import DynamicQR from "../assets/images/DynamicQR.png";
import Resume from "../assets/images/Resume.png";
import VideoCall from "../assets/images/VideoCall.png";
import WeddingWeb from "../assets/images/Wedding.png";
import WeddingPage from "../assets/images/WeddingPage.png";
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

      <div className="project-card">
        <img src={AdminPanel} alt="AdminPanel" />
        <h3>Saas Admin Panel</h3>
        <p>
          A centralized dashboard for managing users, subscriptions, settings,
          and analytics in a SaaS platform.
          <br />
          Features: User Management: Add, edit, and delete users with role-based
          access control.
        </p>
        <a
          href="https://invitation-backend-admin-dashboard-sija.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <br />
        <a
          href="https://github.com/Avinash9608/Invitation_Backend_AdminDashboard.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </div>

      <div className="project-card">
        <img src={ChattingApplication} alt="ChattingApp" />
        <h3>Chatting Application</h3>
        <p>
          A chatting app enables real-time messaging between users over a
          network.
          <br />
          Features:WebSockets provide full-duplex communication over a single
          TCP connection, enabling low-latency, real-time interactions.
        </p>
        <a
          href="https://chatting-application-indol.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <br />
        <a
          href="https://github.com/Avinash9608/ChattingApplicatioN.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </div>

      <div className="project-card">
        <img src={DynamicQR} alt="DynamicQR" />
        <h3>Dynamic QR Generator</h3>
        <p>
          A Dynamic QR Code generator in JavaScript creates QR codes that can
          update their destination without changing the code itself.
          <br />
          Dynamic QR codes allow real-time URL changes, tracking, and analytics
          without needing to regenerate or reprint the code.
        </p>
        <a
          href="https://dynamic-qr-generate.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <br />
        <a
          href="https://github.com/Avinash9608/Dynamic-QR-Generate.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </div>

      <div className="project-card">
        <img src={Resume} alt="Resume" />
        <h3>Resume PORTFOLIO</h3>
        <p>
          A resume is a concise document highlighting a person's skills,
          experience, and qualifications for job applications.
          <br />A well-crafted resume enhances job prospects by showcasing
          relevant expertise, achievements, and career objectives effectively.
        </p>
        <a
          href="https://portfolio-in-react-kappa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <br />
        <a
          href="https://github.com/Avinash9608/portfolio-in-react.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </div>

      <div className="project-card">
        <img src={VideoCall} alt="VideoCall" />
        <h3>VideoCall Applcation</h3>
        <p>
          A video call in JavaScript enables real-time audio and video
          communication between users using WebRTC.
          <br />
          WebRTC allows peer-to-peer video calls with low latency, secure
          encryption, and no need for external plugins.
        </p>
        <a
          href="https://video-calling-application-blue.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <br />
        <a
          href="https://github.com/Avinash9608/VideoCallChattingApplication.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </div>

      <div className="project-card">
        <img src={WeddingWeb} alt="WeddingWeb" />
        <h3>SAAS Platform Wedding</h3>
        <p>
          A SaaS wedding platform streamlines planning, guest management, and
          vendor coordination online.
          <br />
          It offers cloud-based tools for invitations, RSVPs, budgeting, and
          real-time collaboration.
        </p>
        <a
          href="https://invitation-card-zt2z.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <br />
        <a
          href="https://github.com/Avinash9608/wedding-landing-page.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
        </a>
      </div>

      <div className="project-card">
        <img src={WeddingPage} alt="WeddingPage" />
        <h3>WeddingPage Invitation</h3>
        <p>
          A wedding invitation page is a digital platform for sharing event
          details and collecting RSVPs.
          <br />
          It provides a personalized experience with event information, RSVP
          tracking, and multimedia integration.
        </p>
        <a
          href="https://invitation-card-weddingpage.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <br />
        <a
          href="https://github.com/Avinash9608/InvitationCardBackend.git"
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
