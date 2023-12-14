import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import skills from "../variables/skills";

const About = () => {
  const colors = ['primary', 'secondary', 'danger', 'success']
  let count = 0
  return (
    // Main Content
    <div className="wrap-page">
      <Navbar />
      <div className="feed">
        <p>My Skills</p>
        <div className="skills">
          {skills.map((item, index) => {
            if (count % 4 === 0) {
              count = 0
            }
            return <span key={index} className={`span-${colors[count++]}`}>{item}</span>
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
