import React from "react";
import "./../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <img src="\profile.jpg.jpeg" alt="Ganesh Jadhav" className="profile-img" />

      <h1>
        Hi, I'm <span className="highlight">Ganesh Jadhav</span> 👋
      </h1>
      <p className="subtitle">
        Java Developer | Backend Engineer | Full-Stack Developer
      </p>
      <p className="tagline">
        I design and develop scalable Java applications, secure APIs, and modern web solutions.
      </p>

      <div className="btn-container">
        <a href="#projects" className="btn primary-btn">View My Projects</a>
        <a href="/Ganesh_Jadhav_Resume.pdf" className="btn secondary-btn" download>
  Download Resume
</a>
        <a href="#contact" className="btn secondary-btn">Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero;
