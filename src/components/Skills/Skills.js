import React from 'react'

import './skills.css'


const Skills = () => (
  <div id='skills' className='skills'>
    <div className='wrapper'>
        <h1>MY SKILLS</h1>
        <div className='row-in'>
          <h2 className='skillTitle'>Languages & Frameworks</h2>
          <div className='sk'>React, JavaScript, JQuery, HTML/CSS, Bootstrap, Express, AJAX, Axios, Python, Django</div>
        </div>

          <div className='row-in'>
            <h2 className='skillTitle'>Management & Environment</h2>
            <div className='sk'>Git, Github, heroku, Node.js</div>
          </div>

            <div className='row-in'>
              <h2 className='skillTitle'>Methodologies</h2>
              <div className='sk'>Object Oriented Programming, MVC, Responsive Design, Authentication, User Stores, Wireframing, ERD's, Agile Development, Scrum, RESTful api, Single Page Applications</div>
            </div>

              <div className='row-in'>
                <h2 className='skillTitle'>Databases</h2>
                <div className='sk'>MongoDB, postgreSQL</div>
              </div>
    </div>
  </div>
)

export default Skills
