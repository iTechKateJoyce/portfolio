import React from 'react'
// ? We need Link because we don't want to reload the page when we change
// ? our URL.
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div>
    <ul>
      <li>
        <Link to={'/About'}>About</Link>
      </li>
      <li>
        <Link to={'/Skills'}>Skills</Link>
      </li>
      <li>
        <Link to={'/Projects'}>Projects</Link>
      </li>
      <li>
        <Link to={'/Contact'}>Contact</Link>
      </li>
    </ul>
  </div>
}