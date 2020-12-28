import React from 'react'
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

import resume from './Ritesh_Maharjan_resume.pdf'

function App() {
  return (
        <>
          <Home />
          <Navbar bg="dark" variant="dark" expand="md" sticky="top" collapseOnSelect >
            <Navbar.Brand href='#'> RITESH MAHARJAN </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#skills">SKILLS</Nav.Link>
              <Nav.Link href="#projects">PORTFOLIO</Nav.Link>
              <Nav.Link href="#contacts">CONTACTS</Nav.Link>
              <Nav.Link href={resume} target="_blank">RESUME</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <About />
          <Skills />
          <Project />
          <Contact />
       </>
  )
}

export default App;
