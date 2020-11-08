import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import dwn from './dwn.jpg'
import mail from './mail.png'
import linkedin from './linkedin.svg'
import github from './../Projects/github.svg'

import resume from './../App/Ritesh_Maharjan_resume.pdf'

import './contact.css'

const Contact = () => {
  const [senderName, setsenderName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

return (
    <div id='contacts' className='contacts'>
      <div className='contactMain'>
        <h2 className='contactTitle'> CONTACT ME </h2>
        <p className='mymsg'>You can send me an email at <a href="mailto:maha.rit108@gmail.com?subject=Hello!&body=Hi" className='meMail'>maha.rit108@gmail.com</a> or shoot me a message by filling the form below. </p>
      <div className='formDiv'>
        <Form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdBOwTM6oJ9UGsVAYK1ikVkvSuuIx1Sj7eJr8XndKe8GF_kiA/formResponse" target="_blank">
            <Form.Group controlId="senderName">
              <Form.Control
                name="entry.1675593914"
                size="sm"
                type="text"
                value={senderName}
                placeholder="Full Name"
                required
                onChange={e => setsenderName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control
                name="entry.907499257"
                size="sm"
                type="email"
                value={email}
                placeholder="E-mail"
                required
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Control
                name="entry.1465924067"
                size="sm"
                type="text"
                value={title}
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Control
                name="entry.344109496"
                size="sm"
                as='textarea'
                type="text"
                value={message}
                placeholder="Your Message here"
                required
                onChange={e => setMessage(e.target.value)}
              />
            </Form.Group>

            <Button className='formSubmit' size="sm" type="submit"> SEND MESSAGE </Button>
          </Form>
        </div>
        </div>
        <div className='footer'>

          <div className='foot1'>
            <h4 className='footTitle'>CONTACT</h4>
            <p className='footp'>maha.rit@gmail.com</p>
            <p className='footp'>(773)-663-3485</p>
          </div>

          <div>
          <div className='footLogo'>
            <div className='ml'>
            <a href="mailto:maha.rit108@gmail.com?subject=Hello!&body=Hi" target="_blank" rel="noopener noreferrer">
            <img className='footLogoml' src={mail} alt='gmail Link' />
            </a>
            </div>
            <div className='gt'>
            <a href="https://github.com/maharit108" target="_blank" rel="noopener noreferrer">
            <img className='footLogogt' src={github} alt='github Link' />
            </a>
            </div>
            <div className='ln'>
            <a href="https://www.linkedin.com/in/ritesh-maharjan/" target="_blank" rel="noreferrer">
            <img className='footLogoln' src={linkedin} alt='linkedin Link' />
            </a>
            </div>
          </div>
          <div className='smlScn'>
            <p className='smp'>(773)-663-3485  |  <span>  RESUME  <a href={resume} download><img className='dwn' src={dwn} alt='deployed Link' /></a></span></p>
          </div>
          </div>

          <div className='foot2'>
              <h4 className='footTitle2'>RESUME  <a href={resume} download><img className='dwn' src={dwn} alt='deployed Link' /></a></h4>
          </div>

        </div>
    </div>
  )
}

export default Contact
