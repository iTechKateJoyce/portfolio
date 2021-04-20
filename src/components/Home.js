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
            <p className="title has-text-white">Hi, I'm Kate 👋</p>
            <p className="subtitle hero has-text-light">a London based junior developer</p>
            <Link to={"/Projects"} className="button is-rounded" >View Work</Link>
            <Link to={"/Contact"} className="button is-rounded">Reach out</Link>
            
          </div>
        </div>
      </section>
    </header>
    <About />
    <Skills />
  </main>
}