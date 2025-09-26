import React from "react";
import "./../styles/Experience.css";
import "./../styles/Card.css";
const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="exp-card">
        <h3>Java Developer | BEdge Tech Services</h3>
        <span>May 2025 – Present</span>
        <ul>
          <li>✅ Designed & developed 15+ eCommerce modules, reducing processing time by 15%.</li>
          <li>✅ Built scalable Spring Boot microservices & REST APIs.</li>
          <li>✅ Implemented product recommendation module improving customer engagement.</li>
        </ul>
      </div>

      <div className="exp-card">
        <h3>Java Developer | I-Weave Solutions Pvt Ltd</h3>
        <span>Jul 2023 – Apr 2025</span>
        <ul>
          <li>✅ Optimized 15+ application modules, cutting transaction time by 15%.</li>
          <li>✅ Developed REST APIs and improved frontend responsiveness with React.js.</li>
          <li>✅ Integrated payment gateways & accounting systems.</li>
        </ul>
      </div>

      <div className="exp-card">
        <h3>Java Intern | Juntran Technology Pvt Ltd</h3>
        <span>Sep 2022 – Jun 2023</span>
        <ul>
          <li>✅ Automated CI/CD pipelines using Jenkins & GitHub.</li>
          <li>✅ Improved API response time with Spring MVC & Hibernate.</li>
          <li>✅ Hands-on Azure deployments with ARM templates.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
