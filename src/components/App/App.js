import React, { Fragment, useState } from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import 'bootstrap/dist/css/bootstrap.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Home from '../Landing/Home.js'
import About from '../About_Me/About.js'
import Skills from '../Skills/Skills.js'
import Project from '../Projects/Project.js'
import Contact from '../Contacts/Contact.js'
import Timeline from '../Timeline/Timeline.js'

import LandingGear from '../LandingGear/LandingGear.js'

import resume from './Ritesh_Maharjan_resume.pdf'

function App() {
  const [expanded, setExpanded] = useState(false)
  const [switchGear, setSwitchGear] = useState(false)
  return (
    <Fragment>
      { switchGear ? (
        <LandingGear />
      ) : (
        <>
         < Route exact path='/' render ={() => (
           <>
          <Home />
          <Navbar bg="dark" variant="dark" expand="md" sticky="top" expanded={expanded}>
            <Navbar.Brand href='#'> RITESH MAHARJAN </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
              <Nav.Link onClick={() => setExpanded(false)} href="#home">HOME</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#about">ABOUT</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#skills">SKILLS</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#projects">PORTFOLIO</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="#contacts">CONTACTS</Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href={resume} target="_blank">RESUME</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <About />
          <Skills />
          <Project />
          <Contact />
          </>
        )} />
        
        < Route exact path='/projects/:projectName' render ={() => (
          <Timeline />
        )} />
        </>
      )}
    </Fragment>
  )
}

export default App;
