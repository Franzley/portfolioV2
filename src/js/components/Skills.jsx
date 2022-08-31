import React from "react";
import "../../styles/skills.css";

import { skillsLanguage } from "../variables/SkillsArray";
import { skillsFramework } from "../variables/SkillsArray";
import { skillsTools } from "../variables/SkillsArray";
import { skillsOthers } from "../variables/SkillsArray";

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <div className="sub-heading">
        <h1>Skills</h1>
        <hr></hr>
      </div>

      <div className="skills-content">
        <h4>Languages</h4>
        <ul className="ul-languages">
          {skillsLanguage.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>

        <h4>Frameworks</h4>
        <ul className="ul-frameworks">
          {skillsFramework.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>

        <h4>Tools</h4>
        <ul className="ul-tools">
          {skillsTools.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>

        <h4>Others</h4>
        <ul className="ul-others">
          {skillsOthers.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
