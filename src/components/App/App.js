import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import 'bootstrap/dist/css/bootstrap.css'

import Navig from '../Header/Navig.js'
import Home from '../Landing/Home.js'
import About from '../About_Me/About.js'
// import Skills from '../Skills/Skills.js'
// import Project from '../Projects/Project.js'
// import Contact from '../Contacts/Contact.js'

function App() {
  return (
    <Fragment>
      <Route exact path='/' component={Home} />
      <Navig />
      <About />
    </Fragment>
  )
}

export default App;
