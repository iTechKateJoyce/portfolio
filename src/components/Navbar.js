import React from 'react'
import logo from '../images/logo.png'

export default function Navbar() {
  return <div>
    <nav className="navbar is-black">
    <a id="navItemHome" className="navbar-item" href={'/'}>
      <img src={logo}/>
    </a>
      <a id="navItemAbout" className="navbar-item" href={'#About'}>About</a>
      <a id="navItemWork" className="navbar-item" href={'#projects'}>Work</a>
      <a id="navItemHello" className="navbar-item" href={'#contact'}>Say hello 👋</a>
    </nav>
  </div >
}