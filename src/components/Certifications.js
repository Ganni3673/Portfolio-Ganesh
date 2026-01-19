import React from "react";
import "./../styles/Certifications.css";
import { FaCertificate, FaAward, FaCloud } from "react-icons/fa";

const Certifications = () => {
  const certs = [
    {
      title: "Oracle Certified Java SE 11 Developer",
      status: "Completed",
      icon: <FaCertificate />
    },
    {
      title: "Spring & Hibernate Certification",
      status: "Completed",
      icon: <FaAward />
    },
    {
      title: "Microsoft Azure Fundamentals",
      status: "Completed",
      icon: <FaCloud />
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <h2>Certifications & Awards</h2>
      <div className="cert-list">
        {certs.map((cert, index) => (
          <div className="cert-card" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="cert-icon">{cert.icon}</div>
            <div>
              <h3>{cert.title}</h3>
              <p>{cert.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
