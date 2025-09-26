import React from "react";
import "./../styles/Skills.css";
import "./../styles/Card.css";  // ✅ reuse the card style

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="card">
        <h3>💻 Backend</h3>
        <p>Core Java, Spring Boot, Hibernate, Microservices</p>
      </div>

      <div className="card">
        <h3>🌐 Frontend</h3>
        <p>React.js, HTML5, CSS3, JavaScript, Bootstrap</p>
      </div>

      <div className="card">
        <h3>🗄️ Databases</h3>
        <p>Oracle, SQL, MySQL, PostgreSQL</p>
      </div>

      <div className="card">
        <h3>☁️ Cloud</h3>
        <p>Amazon Web Services (EC2, S3, Lambda, RDS, IAM)</p>
      </div>

      <div className="card">
        <h3>🛠️ Tools</h3>
        <p>Git, Maven, Gradle, Jenkins, Jira, JUnit</p>
      </div>

      <div className="card">
        <h3>⚡ Others</h3>
        <p>CI/CD pipelines, RabbitMQ, Agile Scrum</p>
      </div>
    </section>
  );
};

export default Skills;
