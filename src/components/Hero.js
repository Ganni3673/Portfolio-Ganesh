import React from "react";
import "./../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src="\profile.jpg.jpeg" alt="Ganesh Jadhav" className="profile-img" />

        <h1>
          Hi, I'm <span className="highlight">Ganesh Jadhav</span> 👋
        </h1>
        <p className="subtitle">
          Java Developer | Backend Engineer
        </p>
        <p className="tagline">
          Crafting scalable backend systems and modern web solutions with precision and passion.
        </p>

        <div className="btn-container">
          <a href="#projects" className="btn primary-btn">View Work</a>
          <a href="/Ganesh_Jadhav_Resume.pdf" className="btn secondary-btn" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
