import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import NavBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// ? Styles!
import 'bulma'
import './styles/style.scss'

const App = () => {
  return <BrowserRouter>
    <NavBar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </BrowserRouter>
}

export default App