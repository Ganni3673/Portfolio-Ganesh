import React from "react";
import "./../styles/Education.css";
import "./../styles/Card.css";
// Try to import logo, if it fails validation we might need to check if the file exists. 
// Based on previous file read, it was imported. I'll keep the import but check the path. 
// Previous file: import logo from "../assets/sharnbasva-logo.png";
import logo from "../assets/sharnbasva-logo.png";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education-container">
        <div className="card">
          <div className="edu-header">
            <img src={logo} alt="University Logo" className="edu-logo" />
            <div className="edu-info">
              <h3>Sharnbasva University, Kalaburagi</h3>
              <p>Master of Computer Applications (MCA)</p>
              <p>Graduated: 2021</p>
            </div>
          </div>
          <ul>
            <li>Achieved First Class with Distinction</li>
            <li>Focus: Data Structures, Algorithms, Database Management</li>
            <li>Academics: OOPs, Web Technologies, Software Engineering</li>
          </ul>
        </div>

        <div className="card" style={{ marginTop: "30px" }}>
          <div className="edu-header">
            {/* Using same logo or maybe generic one if specific one not available. I'll use the same one for visual consistency or hide it */}
            <div className="edu-logo" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#ddd", color: "#333", fontSize: "24px", fontWeight: "bold" }}>V</div>
            <div className="edu-info">
              <h3>Vivekanand Institute of Management</h3>
              <p>Bachelor of Computer Applications (BCA)</p>
              <p>Graduated: 2019</p>
            </div>
          </div>
          <ul>
            <li>Core programming foundations in C, C++, and Java</li>
            <li>Web development fundamentals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
