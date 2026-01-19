import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">

        <div className="contact-item" data-aos="fade-up">
          <FaEnvelope className="icon" />
          <a href="mailto:ganeshjadhav96111@gmail.com">
            ganeshjadhav96111@gmail.com
          </a>
        </div>

        <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
          <FaPhone className="icon" />
          <span>+91 6361116034</span>
        </div>

        <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
          <FaGithub className="icon" />
          <a
            href="https://github.com/Ganni3673"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Ganni3673
          </a>
        </div>

        <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
          <FaLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/ganesh-jadhav-810051210"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <footer>
        <p>© {new Date().getFullYear()} Ganesh Jadhav. All rights reserved.</p>
        <p>Built with React.js & Modern CSS</p>
      </footer>
    </section>
  );
};

export default Contact;
