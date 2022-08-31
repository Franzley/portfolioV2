import React from "react";
import "../../styles/home.css";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import About from "../components/About.jsx";
import profile from "../../img/profile.jpg";
import ScrollIntoView from "react-scroll-into-view";

const Home = () => {
  return (
    // Main Content
    <div className="d-flex">
      <main className="content-body">
        <Projects />
        <Skills />
        <About />
      </main>

      {/* Sidebar */}
      <aside id="sidebar" className="sidebar">
        <img id="sidebar-pic" src={profile} alt="Profile" />

        {/* Buttons to scroll into sections */}
        <div className="scroll-section">
          <ScrollIntoView selector="#home">
            <button className="mdl-button mdl-js-button mdl-button--raised scroll-btn in-desktop">
              Home
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#skills">
            <button className="mdl-button mdl-js-button mdl-button--raised scroll-btn in-desktop">
              Skills
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#about">
            <button className="mdl-button mdl-js-button mdl-button--raised scroll-btn in-desktop">
              About
            </button>
          </ScrollIntoView>
          <ScrollIntoView selector="#contact">
            <button className="mdl-button mdl-js-button mdl-button--raised scroll-btn in-desktop">
              Contact
            </button>
          </ScrollIntoView>
        </div>
      </aside>
    </div>
  );
};

export default Home;
