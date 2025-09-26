import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
