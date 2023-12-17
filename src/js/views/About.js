import React from "react";
import skills from "../variables/skills";
import Timeline from "../components/Timeline";

const About = () => {
  const colors = ['primary', 'secondary', 'danger', 'success']
  let count = 0
  return (
    // Main Content
    <div className="feed">
      <div className="skills">
        {skills.map((item, index) => {
          if (count % 4 === 0) {
            count = 0
          }
          return <span key={index} className={`span-${colors[count++]}`}>{item}</span>
        })}
      </div>
      <Timeline />
    </div>
  );
};

export default About;
