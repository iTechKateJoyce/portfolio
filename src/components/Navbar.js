import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div>
    <nav className="navbar is-black">
    <Link className="navbar-item" to={'/'}>
      <img src="../images/logo.png"/>
    </Link>
      <Link id="navItemAbout" className="navbar-item" to={'/About'}>About</Link>
      <Link id="navItemWork" className="navbar-item" to={'/Projects'}>Work</Link>
      <Link id="navItemHello" className="navbar-item" to={'/Contact'}>Say hello 👋</Link>
    </nav>
  </div >
}