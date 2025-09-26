import React from "react";
import "./../styles/Certifications.css";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="cert-list">

        <div className="cert-card">
          <FaCertificate className="cert-icon" />
          <div>
            <h3>Oracle Certified Java SE 11 Developer</h3>
            <p>Completed</p>
          </div>
        </div>

        <div className="cert-card">
          <FaCertificate className="cert-icon" />
          <div>
            <h3>Spring & Hibernate Certification</h3>
            <p>Completed</p>
          </div>
        </div>

        <div className="cert-card">
          <FaCertificate className="cert-icon" />
          <div>
            <h3>Microsoft Azure Fundamentals</h3>
            <p>Completed</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
