import React from 'react'
import { Link, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card'

import oxo from './oxo.gif'
import coffeeTalks from './coffeeTalks.gif'
import apparels from './apparels.gif'
import farmChat from './farmChat.gif'
import github from './github.svg'
import deploy from './deploy.png'

import './project.css'

import ModalComp from '../ModalComp.js'


const Project = () => {
  <Route path='/projects/apparel' component={ModalComp} />
  return (
  <div id='projects' className='project'>
    <h2 className='projectTitle'> PORTFOLIO</h2>

    <div className='row'>
      <div className='proj'>
      <Card>
        <Card.Img variant="top" src={apparels} />
        <Card.Body>
          <div>
          <Card.Title>Apparels</Card.Title>
          <Card.Text>
            An e-commerce website to browse through products and buy them online. Admin account for owner to add/ edit items for sale.
          </Card.Text>
          </div>
          <div><br />
          <b>Lazy to sign up? Try using guest account: </b><br />
          <b>Email:</b> www@www.com
          <b> Password:</b> www<br />
          <b>For Owner's View: </b><br />
          <b>Email:</b> admin@admin.com
          <b> Password:</b> admin
          </div>
          <div className='toolUse'>React, JavaScript, CSS, Axios, Bootstrap, MongoDB, Mongoose, Express </div>
        </Card.Body>
        <Card.Footer>
          <div className='icon'>
            <Link to='/projects/apparel'>Story</Link>
          </div>
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
            A chat app where a user can sign in and pass time, have nice discussions and make friends by chatting with strangers.<br />
          </Card.Text>
          </div>
          <div><br />
          <b>Lazy to sign up? Try using guest account:  </b><br />
          <b>Email:</b> www@www.com
          <b> Password:</b> www
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

      <div className='row'>

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
          <div><br />
          <b>Lazy to sign up? Try using guest account:  </b><br />
          <b>Email:</b> guest
          <b> Password:</b> guest
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
            <div><br />
            <b>Lazy to sign up? Try using guest account:  </b><br />
            <b>Email:</b> www@www.com
            <b> Password:</b> www
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

    </div>

    </div>
    <br />
  </div>
)}

export default Project
