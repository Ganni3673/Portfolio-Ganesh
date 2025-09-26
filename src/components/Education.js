import React from "react";
import "./../styles/Education.css";
import "./../styles/Card.css";  // reuse card styles
import logo from "../assets/sharnbasva-logo.png";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="card edu-card">
        <div className="edu-header">
          <img src={logo} alt="Sharnbasva University Logo" className="edu-logo" />
          <div className="edu-info">
            <h3>Sharnbasva University, Kalaburagi</h3>
            <p>MCA – 2021</p>


             <h3>Vivekanand Institute of Management, Kalaburagi</h3>
            <p>BCA – 2019</p>
          </div>
        </div>
        <ul>
          <li>Graduated with first class / distinction</li>
          <li>Relevant courses: Data Structures, OOP, Database Systems, Web Dev</li>
          <li>Active member: Tech club, coding events</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
