import React from 'react'

import './skills.css'


const Skills = () => (
  <div id='skills' className='skills'>
    <div className='wrapper'>
        <h1>MY SKILLS</h1>
        <div className='row-in'>
          <h2 className='skillTitle'>Languages & Frameworks</h2>
          <div className='sk'>React, JavaScript, JQuery, HTML/CSS, Express, Python, Django, Mongoose, Socket.io, Mapbox, jest, Redux</div>
        </div>

        <div className='row-in'>
          <h2 className='skillTitle'>Platform & Environment</h2>
          <div className='sk'>Git, Github, Heroku, Node.js, Trello </div>
        </div>

        <div className='row-in'>
          <h2 className='skillTitle'>Methodologies</h2>
          <div className='sk'>Object Oriented Programming, Functional Programming, MVC, Test-Driven development, Responsive Design, RESTful API, User Stores, Wireframing, ERD's, Agile/Scrum, Kanban </div>
        </div>

        <div className='row-in'>
          <h2 className='skillTitle'>Databases</h2>
          <div className='sk'>MongoDB, PostgreSQL, Firebase </div>
        </div>
    </div>
  </div>
)

export default Skills
