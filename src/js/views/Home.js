import React from "react";
import projectList from "../variables/projectList";
import { useState } from "react";

const Home = () => {
  const [projects, setProjects] = useState(projectList);
  const [isSelected, setIsSelected] = useState("all");

  const onSelection = (projectType) => {
    if (projectType === 'all') {
      setProjects(projectList)
    } else {
      setProjects(() => {
        return projectList.filter((item, index) => {
          return item.type === projectType
        })
      })
    }
  }

  const handleClick = (e) => {
    onSelection(e.target.id);
    setIsSelected(e.target.id)
  }

  return (
    // Main Content
    <div className="feed">
      <div className="tabs">
        <button className={`project-type-tab ${isSelected === "all" ? 'button-background' : ""}`} id="all" onClick={handleClick}>All</button>
        <button className={`project-type-tab ${isSelected === "website" ? 'button-background ' : ""}`} id="website" onClick={handleClick}>Website</button>
        <button className={`project-type-tab ${isSelected === "figma" ? 'button-background' : ""}`} id="figma" onClick={handleClick}>Figma</button>
      </div>

      <div className="projects">
        {projects.map((project, index) => {
          return <img className="project-image" key={index} width={350} src={project.image} alt="Project" />
        })}
      </div>
    </div>
  );
};

export default Home;
