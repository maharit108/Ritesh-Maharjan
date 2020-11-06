import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './contact.css'
import dwn from './dwn.jpg'

const Contact = () => {
  const [senderName, setsenderName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

      // <img className='dwn' src={dwn} alt='deployed Link' />

return (
    <div id='contacts' className='contacts'>
        <h2 className='contactTitle'> CONTACT ME </h2>
        <p className='mymsg'>You can send me an email at <a href="mailto:maha.rit108@gmail.com" className='meMail'>maha.rit108@gmail.com</a> or shoot me a message by filling the form below. </p>
      <div className='formDiv'>
        <Form>
            <Form.Group controlId="senderName">
              <Form.Control
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
                size="sm"
                type="text"
                value={title}
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Control
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
  )
}

export default Contact
