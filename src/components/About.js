import React from "react";
import "./../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I’m a Java Developer with <strong>3+ years of experience</strong>,
          passionate about building applications that combine clean code,
          robust architecture, and user-friendly design.
        </p>
        <ul className="highlights">
          <li>⚡ Delivered 30+ enterprise and eCommerce modules in Java</li>
          <li>⚡ Improved system performance by 12–15%</li>
          <li>⚡ Strong backend (Spring Boot) + frontend (React.js)</li>
          <li>⚡ Problem-solver, reducing bugs & issue resolution time</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
