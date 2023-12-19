import React, { useState } from "react";
import projectList from "../variables/projectList";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [projects, setProjects] = useState(projectList);
  const [isSelected, setIsSelected] = useState("all");
  const navigate = useNavigate();

    // When the tab changes, filter the projects displayed
  const onSelection = (projectType) => {
    switch (projectType) {
      case 'all':
        return setProjects(projectList);
      default:
        return setProjects(() => projectList.filter((item) =>
          item.type === projectType
        ))
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
          return <img onClick={() => navigate(`/projects/${project.value}`)} className="project-image" key={index} width={350} src={project.image} alt="Project" />
        })}
      </div>
    </div>
  );
};

export default Home;
