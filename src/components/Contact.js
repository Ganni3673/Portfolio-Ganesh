import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <a href="mailto:ganeshjadhav96111@gmail.com">
            ganeshjadhav96111@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <FaPhone className="icon" />
          <span>+91 6361116034</span>
        </div>

        <div className="contact-item">
          <FaGithub className="icon" />
          <a
            href="https://github.com/ganeshjadhav"
            target="_blank"
            rel="noreferrer"
          >
            github.com/ganeshjadhav
          </a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/ganesh-jadhav-810051210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/ganeshjadhav
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
