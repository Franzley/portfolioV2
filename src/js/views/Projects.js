import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import projectList from '../variables/projectList';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Projects = () => {
  let { project } = useParams();
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    setProjectData(() => {
      return projectList.filter((item) => {
        return item.value === project
      })
    })
  }, [])




  return (
    <div className="feed">
      {projectData[0] ?
        <div>
          <div className='project-header'>
            <h1 >{projectData[0].name}</h1>
            <img width={1000} height={550} src={projectData[0].image} alt="Project" />
          </div>
          <div className='project-description'>
            <p>{projectData[0].description}</p>
            <div className='project-links'>
              {projectData[0].github && <Link to={projectData[0].github}>View on Github</Link>}
              {projectData[0].page && <Link to={projectData[0].page}>View Webpage</Link>}
            </div>
          </div>
        </div>
        : ""}
    </div>
  )
}

export default Projects