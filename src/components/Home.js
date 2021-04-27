import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Skills from './Skills'

export default function Home() {
  return <main>
    <header>
      <section className="hero is-large">
        <div className="hero-body">
          <div className="">
            <h1 id="heroTitle" className="title has-text-white">Hi, I'm Kate 👋</h1>
            <h2 id="heroSubtitle" className="subtitle hero has-text-light">a London based junior developer</h2>
            <Link to={"/Projects"} className="button mr-1" >View Work</Link>
            <Link to={"/Contact"} className="button">Reach out</Link>
          </div>
        </div>
      </section>
    </header>
    {/* <About /> */}
    {/* <Skills /> */}
  </main>
}