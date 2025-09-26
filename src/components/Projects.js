import React from "react";
import "./../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>E-Commerce Backend Platform</h3>
        <p><b>Tech:</b> Java, Spring Boot, Hibernate, RabbitMQ, MySQL, React.js</p>
        <p>Developed cart, checkout, and wishlist modules with payment integration.</p>
        <p className="impact">🚀 Reduced checkout time by 15%.</p>
      </div>

      <div className="project-card">
        <h3>Inventory & Shipping Microservices</h3>
        <p><b>Tech:</b> Spring Boot, REST APIs, PostgreSQL</p>
        <p>Built APIs for real-time inventory & shipping updates.</p>
        <p className="impact">🚀 Improved data consistency across systems.</p>
      </div>

      <div className="project-card">
        <h3>Cloud Deployment Automation</h3>
        <p><b>Tech:</b> Azure ARM Templates, Jenkins, Maven</p>
        <p>Automated Azure VM deployments with ARM templates.</p>
        <p className="impact">🚀 Deployment speed increased by 40%.</p>
      </div>

      <div className="project-card">
        <h3>Personalized Recommendation System</h3>
        <p><b>Tech:</b> Java, Spring Boot, React.js, SQL</p>
        <p>Developed recommendation system for eCommerce.</p>
        <p className="impact">🚀 Increased customer engagement & sales.</p>
      </div>
    </section>
  );
};

export default Projects;
