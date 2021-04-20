import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div>
    <nav className="navbar is-black">
    <Link className="navbar-item" to={'/'}>Home</Link>
      <Link className="navbar-item" to={'/About'}>About</Link>
      <Link className="navbar-item" to={'/Projects'}>Work</Link>
      <Link className="navbar-item" to={'/Contact'}>Say hello 👋</Link>
    </nav>
  </div >
}