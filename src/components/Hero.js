import { TypeAnimation } from "react-type-animation";
import "./../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content" data-aos="fade-up">
        <img src="\profile.jpg.jpeg" alt="Ganesh Jadhav" className="profile-img" />

        <h1>
          Hi, I'm <span className="highlight">Ganesh Jadhav</span> 👋
        </h1>
        <div className="subtitle">
          <TypeAnimation
            sequence={[
              "Java Developer",
              2000,
              "Backend Engineer",
              2000,
              "Full-Stack Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            style={{ fontSize: "1em", fontWeight: "bold", color: "#38bdf8" }}
          />
        </div>
        <p className="tagline">
          Crafting scalable backend systems and modern web solutions with precision and passion.
        </p>

        <div className="btn-container">
          <a href="#projects" className="btn primary-btn">View Work</a>
          <a href="/Ganesh_Jadhav_Resume.pdf" className="btn secondary-btn" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
