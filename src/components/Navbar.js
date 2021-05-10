import React from 'react'
// import logo from '../images/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isActive, setisActive] = useState(false)
  console.log(isActive)

  return <div>
    {/* <nav className="navbar is-black">
      <a id="navItemHome" className="navbar-item" href={'/portfolio'}>
        <img src={logo} />
      </a>
      <a id="navItemAbout" className="navbar-item" href={'#about'}>About</a>
      <a id="navItemWork" className="navbar-item" href={'#projects'}>Work</a>
      <a id="navItemHello" className="navbar-item" href={'#contact'}>Say hello 👋</a>
    </nav> */}
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a onClick={() => setisActive(!isActive)} role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>
      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a onClick={() => setisActive(!isActive)} id="navItemAbout" className="navbar-item" href={'#about'}>About</a>
          <a onClick={() => setisActive(!isActive)} id="navItemWork" className="navbar-item" href={'#projects'}>Work</a>
          <a onClick={() => setisActive(!isActive)} id="navItemHello" className="navbar-item" href={'#contact'}>Say hello 👋</a>
        </div>
      </div>

    </nav>
  </div >
}