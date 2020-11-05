import React, { Fragment } from 'react'

import './App.css'

import 'bootstrap/dist/css/bootstrap.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Home from '../Landing/Home.js'
import About from '../About_Me/About.js'
import Skills from '../Skills/Skills.js'
import Project from '../Projects/Project.js'
import Contact from '../Contacts/Contact.js'

function App() {
  return (
    <Fragment>
      <Home />
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <Navbar.Brand href='#'> RITESH MAHARJAN </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link href="/#">HOME</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#skills">SKILLS</Nav.Link>
          <Nav.Link href="#projects">PORTFOLIO</Nav.Link>
          <Nav.Link href="#contacts">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <About />
      <Skills />
      <Project />
      <Contact />
    </Fragment>
  )
}

export default App;
