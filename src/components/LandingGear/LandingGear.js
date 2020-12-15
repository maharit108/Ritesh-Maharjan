import React, { useState } from 'react'

import './LandingGear.css'
import pho from './../Landing/photo.jpg'


const LandingGear = () => {
  const [isHover, setHover] = useState(false)

  return (
    <div id='gearLanding' className='gearLanding'>
      <div>1</div>
      <div>
        <div className='outerGearBox' onMouseOut={() => setHover(false)}></div>

        <div className='gearWrapper' onMouseEnter={() => setHover(true)} >
          <div className='gearBox' >
            <img className='gearImg' src={pho} alt='ritesh Mmharjan img' />
          </div>
        </div>

        <div className='gearMenu' style= {isHover ? {transform: `scale(${1})`} : {transform: `scale(${0.9})`}}>
            <div className='gearItem' style= {isHover ? {transform: `translateY(${-160}px)`} : {transform: `translateY(${0}px)`}} onMouseOver={() => setHover(true)}>
              <a href='#aboutGear'>About Me</a>
            </div>
            <div className='gearItem' style= {isHover ? {transform: `translate(${140}px, ${-80}px)`} : {transform: `translate(${0}px)`}}>
              <a href='#skillsGear'>My Projects</a>
            </div>
            <div className='gearItem' style= {isHover ? {transform: `translate(${140}px, ${80}px)`} : {transform: `translate(${0}px)`}}>
              <a href='#projectsGear'>3</a>
            </div>
            <div className='gearItem' style= {isHover ? {transform: `translateY(${160}px)`} : {transform: `translateY(${0}px)`}}>
              <a href='#storyGear'>4</a>
            </div>
            <div className='gearItem' style= {isHover ? {transform: `translate(${-140}px, ${80}px)`} : {transform: `translate(${0}px)`}}>
              <a href='#galleryGear'>5</a>
            </div>
            <div className='gearItem' style= {isHover ? {transform: `translate(${-140}px, ${-80}px)`} : {transform: `translate(${0}px)`}}>
              <a href='#contactsGear'>Skills</a>
            </div>
          </div>
      </div>
      <div>2</div>
    </div>
  )
}
export default LandingGear
