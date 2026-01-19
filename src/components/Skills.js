import React from "react";
import "./../styles/Skills.css";
import "./../styles/Card.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        <div className="card">
          <h3>💻 Backend</h3>
          <p>Core Java, Spring Boot, Hibernate, Microservices, REST APIs</p>
        </div>

        <div className="card">
          <h3>🌐 Frontend</h3>
          <p>React.js, JSON, HTML5, CSS3, JavaScript</p>
        </div>

        <div className="card">
          <h3>🗄️ Databases</h3>
          <p>MySQL, PostgreSQL, Oracle SQL</p>
        </div>

        <div className="card">
          <h3>☁️ Cloud & DevOps</h3>
          <p>AWS (EC2, S3), Azure, Docker, Jenkins</p>
        </div>

        <div className="card">
          <h3>🛠️ Tools</h3>
          <p>Git, Maven, Gradle, Jira, Postman, Eclipse/IntelliJ</p>
        </div>

        <div className="card">
          <h3>⚡ Best Practices</h3>
          <p>Agile Scrum, CI/CD, Unit Testing (JUnit), Clean Code</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
