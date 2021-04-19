import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import NavBar from './components/Navbar'
// import Projects from '.components/Projects'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
// ? Styles!
import 'bulma'
import './styles/style.scss'

const App = () => {
  return <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Hero}/>
      <Route path="/About" component={About}/>
      <Route path="/Skills" component={Skills}/>
      {/* <Route path="/Projects" component={Projects}/> */}
      <Route path="/Contact" component={Contact}/>
    </Switch>
  </BrowserRouter>
}

export default App