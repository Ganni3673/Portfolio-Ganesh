import React from "react";
import "./../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I’m a Java Developer with <strong>4+ years of experience</strong>,
          passionate about building applications that combine clean code,
          robust architecture, and user-friendly design.
        </p>
        <ul className="highlights">
          <li>⚡ Delivered 30+ enterprise and eCommerce modules</li>
          <li>⚡ Improved system performance by ~15%</li>
          <li>⚡ Proficient in Spring Boot & React.js</li>
          <li>⚡ Dedicated to reducing technical debt</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
