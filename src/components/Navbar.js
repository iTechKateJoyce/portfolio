import React from 'react'
// ? We need Link because we don't want to reload the page when we change
// ? our URL.
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div>
    <nav className="navbar is-black">
      <a className="navbar-item"><Link to={'/About'}>About</Link></a>
      <a className="navbar-item"> <Link to={'/Skills'}>Skills</Link></a >
      <a className="navbar-item"> <Link to={'/Projects'}>Projects</Link></a >
      <a className="navbar-item"> <Link to={'/Contact'}>Contact</Link></a >
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </nav>
  </div >
}