import React from "react";
import { ProjectsArray } from "../variables/ProjectsArray.js";
import Cards from "./Cards.jsx";
import "../../styles/projects.css";

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="sub-heading">
        <h1>Projects</h1>
        <hr></hr>
      </div>

      {/* Alters Formatting of cards when there are only 2 projects */}
      <div
        className={
          ProjectsArray.length === 2
            ? "card-wrapper-double"
            : "card-wrapper d-flex flex-wrap"
        }
      >
        {/* Projects */}
        {ProjectsArray.map((project, index) => {
          return (
            <Cards
              key={index}
              src={project.img}
              title={project.title}
              content={project.content}
              techs={project.techs}
              website={project.website}
              code={project.code}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
