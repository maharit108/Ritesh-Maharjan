import React from 'react'

import './about.css'


const About = () => (
  <div id='about' className='about'>
    <h2 className='aboutTitle'> About Me </h2>
    <div className='row'>
      <div className='me who'>
      <h4 className='titleme'>Introduction</h4>
      <p>I am a full-stack developer. I like to write clear, concise codes to create products with an artistic touch. I believe in working smart, being consistent and accountable. I love challenges and roadblocks as challenges help me grow.</p>
      </div>
      <div className='me where'>
      <h4 className='titleme'>Location</h4>
      <p>I am currently located in Chicago, IL. Before coming to Chicago, I was in Nepal. I am a legal resident in US and am allowed to work in US. </p>
      </div>
    </div>
    <div className='row'>
      <div className='me background'>
      <h4 className='titleme'>Background</h4>
      <p>I was a Civil engineer in Nepal for around 2 years. After moving to US, I did some survival jobs (around 8 months as a Pharmacy Technician) before finally pursuing my ambition of being a software engineer. </p>
      </div>
      <div className='me interests'>
      <h4 className='titleme'>Interests</h4>
      <p>Programming has always been my hobby even though I could not pursue it as a career in Nepal. Apart from programming, I like listening to music and reading random facts. Also, I love dogs. </p>
      </div>
    </div>
  </div>
)

export default About
