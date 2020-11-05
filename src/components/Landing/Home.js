import React from 'react'

import './home.css'
import pho from './photo.jpg'


const Home = () => (
  <div id='home' className='home'>
    <div className='pic'><img
            className='img-fluid mx-auto mb-2'
            src={pho}
            alt='ritesh Mmharjan img' /></div>
    <div className='brief'>
      <h2 className='name'>RITESH MAHARJAN</h2>
      <h3 className='intro'>Full Stack Software Developer</h3>
    </div>
  </div>
)

export default Home
