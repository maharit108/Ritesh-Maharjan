import React from 'react'

import './about.css'


const About = () => (
  <div id='about' className='about'>
    <h2 className='aboutTitle'> About Me </h2>
    <div className='row'>
      <div className='me who'>
      <h4 className='titleme'>Introduction</h4>
      <p>Hi! I'm Ritesh. <br />Excited to start my career in software industry<br />Completed Software Engineering Coding Bootcamp<br /><strong>Motto- </strong>Hard and Smart Work beats Talent</p>
      </div>
      <div className='me background'>
      <h4 className='titleme'>Background</h4>
      <p>Civil engineer in Nepal for around 2 years. <br />
          Finally pursuing my ambition of being a software engineer, after many roadblocks...Yay!! </p>
      </div>
    </div>
    <div className='row'>
      <div className='me where'>
      <h4 className='titleme'>Location</h4>
      <p>Currently in Chicago, IL.<br />
        Originally from a small village in Nepal. <br />
        Legal resident in US </p>
      </div>
      <div className='me interests'>
      <h4 className='titleme'>Interests</h4>
      <p> Learn random stuff<br /> Watching anime<br /> Also, I love dogs. Afraid they might take a bite off me but still love them </p>
      </div>
    </div>
  </div>
)

export default About
