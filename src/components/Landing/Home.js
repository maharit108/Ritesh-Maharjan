import React from 'react'

import './home.css'
import pho from '../../static/logoIcon/photo.jpg'


const Home = () => (
  <div id='home' className='home'>
    <div className='pic'><img
            className='img-fluid mx-auto'
            src={pho}
            alt='ritesh Mmharjan img' /></div>
    <div className='brief'>
      <h1 className='name'>RITESH MAHARJAN</h1>
      <h3 className='intro'>Full Stack Software Developer</h3><br />
      <p className='blurb'>I am a Developer with background in Civil Engineering. I am a curious soul, who believes in keeping a learning mindset. I am passionate about technology and implementing them in this constantly evolving industry. </p>
      <p className='blurb'> I am currently contributing as a frontend developer for Code for Chicago. I believe in constant practice and constant learning.</p>
    </div>
  </div>
)

export default Home
