import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const Navig = () => (
  <Navbar bg="dark" variant="dark" expand="md" sticky="top">
    <Navbar.Brand href='#'> RITESH MAHARJAN </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Nav.Link className="section" href="/#">HOME</Nav.Link>
      <Nav.Link className="section" href="#about">ABOUT</Nav.Link>
      <Nav.Link className="section" href="#skills">SKILLS</Nav.Link>
      <Nav.Link className="section" href="#projects">PORTFOLIO</Nav.Link>
      <Nav.Link className="section" href="#contacts">CONTACT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navig
