import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card'

import oxo from './oxo.gif'
import coffeeTalks from './coffeeTalks.gif'
import apparels from './apparels.gif'
import farmChat from './farmChat.gif'
import github from './github.svg'
import deploy from './deploy.png'

import './project.css'


const Project = () => (
  <div id='projects' className='project'>
    <h2 className='projectTitle'> PORTFOLIO</h2>
    <div className='row'>

      <div className='proj'>
      <Card>
        <Card.Img variant="top" src={oxo} />
        <Card.Body>
          <div>
          <Card.Title>O-X-O</Card.Title>
          <Card.Text>
            A game of Tick-Tack-Toe that user can play with friends and family and have a good time. Single Page Application using vanilla JS and Jquery.
          </Card.Text>
          </div>
          <div className='toolUse'>JavaScript, HTML/CSS, JQuery, Ajax, Bootstrap</div>
        </Card.Body>
        <Card.Footer>
        <div className='icon'>
        <a href="https://github.com/maharit108/Ticky-Tacky" target="_blank" rel="noopener noreferrer">
          <img className='img-fluid mx-auto mb-2' src={github} alt='github Link' />
        </a>
        </div>
        <div className='icon'>
          <a href="https://maharit108.github.io/Ticky-Tacky/" target="_blank" rel="noopener noreferrer">
          <img className='img-fluid mx-auto mb-2' src={deploy} alt='deployed Link' />
        </a>
        </div>
        </Card.Footer>
      </Card>
  </div>

      <div className='proj'>
      <Card>
        <Card.Img variant="top" src={coffeeTalks} />
        <Card.Body>
          <div>
          <Card.Title>Coffee Talks</Card.Title>
          <Card.Text>
            Message board application where users can share their thoughts to everyone, comment on others articles and just have a good discussion.
          </Card.Text>
          </div>
          <div className='toolUse'>JavaScript, HTML/CSS, JQuery, Ajax, Bootstrap, MongoDB, Mongoose, Express, Passport, Bycrypt, Crypto</div>
        </Card.Body>
        <Card.Footer>
        <div className='icon'>
        <a href="https://github.com/maharit108/Coffee-Talk" target="_blank" rel="noopener noreferrer">
          <img className='img-fluid mx-auto mb-2' src={github} alt='github Link' />
        </a>
        </div>
        <div className='icon'>
          <a href="https://maharit108.github.io/Coffee-Talk/" target="_blank" rel="noopener noreferrer">
          <img className='img-fluid mx-auto mb-2' src={deploy} alt='deployed Link' />
        </a>
        </div>
        </Card.Footer>
      </Card>
      </div>
    </div>

    <div className='row'>
      <div className='proj'>
      <Card>
        <Card.Img variant="top" src={apparels} />
        <Card.Body>
          <div>
          <Card.Title>Apparels</Card.Title>
          <Card.Text>
            An e-commerce application where a customer can browse through beautiful apparels and buy them online. Admin feature is available where owner of the shop can present items for sale using admin account.
          </Card.Text>
          </div>
          <div className='toolUse'>React, JavaScript, CSS, Axios, Bootstrap, MongoDB, Mongoose, Express </div>
        </Card.Body>
        <Card.Footer>
        <div className='icon'>
        <a href="https://github.com/maharit108/apparel-client" target="_blank" rel="noopener noreferrer">
          <img className='img-fluid mx-auto mb-2' src={github} alt='github Link' />
        </a>
        </div>
        <div className='icon'>
          <a href="https://maharit108.github.io/apparel-client/#/" target="_blank" rel="noopener noreferrer">
          <img className='img-fluid mx-auto mb-2' src={deploy} alt='deployed Link' />
        </a>
        </div>
        </Card.Footer>
      </Card>
      </div>

      <div className='proj'>
      <Card>
        <Card.Img variant="top" src={farmChat} />
        <Card.Body>
          <div>
          <Card.Title>Farm Chats</Card.Title>
          <Card.Text>
            A chat app where a user can sign in and pass time, have nice discussions and make friends by chatting with strangers. Motto: Every friend was once a stranger.
          </Card.Text>
          </div>
          <div className='toolUse'>React, JavaScript, CSS, Axios, Bootstrap, MongoDB, Mongoose, Express, Scrum </div>
        </Card.Body>
        <Card.Footer>
        <div className='icon'>
        <a href="https://github.com/SEI-Troubleshoot/project-3-client" target="_blank" rel="noopener noreferrer">
          <img className='img-fluid mx-auto mb-2' src={github} alt='github Link' />
        </a>
        </div>
        <div className='icon'>
          <a href="https://sei-troubleshoot.github.io/project-3-client/#/" target="_blank" rel="noopener noreferrer">
          <img className='img-fluid mx-auto mb-2' src={deploy} alt='deployed Link' />
        </a>
        </div>
        </Card.Footer>
      </Card>
      </div>
    </div>
  </div>
)

export default Project
