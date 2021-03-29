import React, {useState} from 'react'

import Card from 'react-bootstrap/Card'

import projectOverview from './../projectData/projectData.js'

import github from '../../static/logoIcon/github.svg'
import deploy from '../../static/logoIcon/deploy.png'

import './project.css'

const Project = () => {

  const [showDetail, setShowDetail] = useState(-1)

  const onImageFocus = (e) => {
    const { id } = e.target
    setShowDetail(id)
  }

  const onImageBlur = () => {
    setShowDetail(-1)
  }

  return (
  <div id='projects' className='project'>
    <h1 className='projectTitle'> PORTFOLIO</h1>
    <div className='row'>
      {projectOverview.map((project, idx) => (
        <div className='proj' key={idx}>
          <Card>
            <Card.Img variant="top" src={project.media} onMouseEnter={onImageFocus} id={idx}/>
              <div className='overlay' onMouseEnter={onImageFocus} onMouseLeave={onImageBlur} >
                <Card.Body id={idx}>
                  <div>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.desc}</Card.Text>
                  </div>
                  <div className='toolUse'><strong>Tech Stack:  </strong>{project.tools}</div>
                </Card.Body>
              </div>
            <Card.Footer>
            <div className='icon'>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <img className='img-fluid mx-auto mb-2' src={github} alt='github Link' />
              </a>
            </div>
            {project.site ?  
            <div className='icon'>
                <a href={project.site} target="_blank" rel="noopener noreferrer">
                <img className='img-fluid mx-auto mb-2' src={deploy} alt='deployed Link' />
              </a>
            </div>
            : '' }
           
          </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  </div>  
  )
}

export default Project
