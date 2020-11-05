import React from 'react'

import './about.css'


const About = () => (
  <div id='about' className='about'>
    <h2 className='aboutTitle'> About Me </h2>
    <div className='row'>
      <div className='me who'></div>
      <div className='me where'></div>
    </div>
    <div className='row'>
      <div className='me background'></div>
      <div className='me interests'></div>
    </div>
  </div>
)

export default About
