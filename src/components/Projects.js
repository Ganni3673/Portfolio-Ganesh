import React from "react";
import "./../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Backend Platform",
      tech: ["Java", "Spring Boot", "Hibernate", "RabbitMQ", "MySQL", "React.js"],
      desc: "Developed cart, checkout, and wishlist modules with payment integration.",
      impact: "Reduced checkout time by 15%."
    },
    {
      title: "Inventory & Shipping Microservices",
      tech: ["Spring Boot", "REST APIs", "PostgreSQL"],
      desc: "Built APIs for real-time inventory & shipping updates.",
      impact: "Improved data consistency across systems."
    },
    {
      title: "Cloud Deployment Automation",
      tech: ["Azure ARM", "Jenkins", "Maven"],
      desc: "Automated Azure VM deployments with ARM templates.",
      impact: "Deployment speed increased by 40%."
    },
    {
      title: "Personalized Recommendation System",
      tech: ["Java", "Spring Boot", "React.js", "SQL"],
      desc: "Developed recommendation system for eCommerce.",
      impact: "Increased customer engagement & sales."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 data-aos="fade-down">Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <h3>{project.title}</h3>
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            <p className="project-body">
              {project.desc}
            </p>
            <div className="impact">
              🚀 {project.impact}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
