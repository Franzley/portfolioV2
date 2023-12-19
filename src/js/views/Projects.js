import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import projectList from '../variables/projectList';
import { useContext } from 'react';
import { MyContext } from '../components/AppContext';

const Projects = () => {
  let { project } = useParams();
  const [projectData, setProjectData] = useState([])
  const { setText } = useContext(MyContext);

  // Filters the array to find the selected project and pulls object containing its corresponding data
  useEffect(() => {
    const [dataVal] = projectList.filter((item) => {
      return item.value === project
    })
    setProjectData(dataVal)
    setText(dataVal)
  }, [project, projectData, setText])


  return (
    <div className="feed">
      <div>
        <div className='project-header'>
          <img width={1000} height={550} src={projectData.image} alt="Project" />
        </div>
        <div className='project-description'>
          <span>{projectData.description}</span>
          <div className='project-links'>
            {projectData.media && <iframe title='project' width="600" height="350" src={projectData.media} />}
            {projectData.github && <Link to={projectData.github}>View on Github</Link>}
            {projectData.page && <Link to={projectData.page}>View Webpage</Link>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects