import React from 'react'

import Card from 'react-bootstrap/Card'

import projectOverview from './../projectData/projectData.js'

import github from '../../static/logoIcon/github.svg'
import deploy from '../../static/logoIcon/deploy.png'

import './project.css'

const Project = () => {

  // const [showDetail, setShowDetail] = false


  return (
  <div id='projects' className='project'>
    <h1 className='projectTitle'> PORTFOLIO</h1>
    <div className='row'>
      {projectOverview.map((project, idx) => (
        <div className='proj'>
          <Card>
          <Card.Img variant="top" src={project.media} />
          <Card.Body>
            <div>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.desc}</Card.Text>
            </div>
            <div className='toolUse'><strong>Tech Stack:  </strong>{project.tools}</div>
          </Card.Body>
          <Card.Footer>
            <div className='icon'>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <img className='img-fluid mx-auto mb-2' src={github} alt='github Link' />
              </a>
            </div>
            <div className='icon'>
                <a href={project.site} target="_blank" rel="noopener noreferrer">
                <img className='img-fluid mx-auto mb-2' src={deploy} alt='deployed Link' />
              </a>
            </div>
          </Card.Footer>
        </Card>
        </div>
      ))}
    </div>
  </div>
)}

export default Project
