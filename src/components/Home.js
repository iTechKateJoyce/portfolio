import React from 'react'
import { a } from 'react-router-dom'
import About from './About'
import Skills from './Skills'

export default function Home() {
  return <main>
    <header>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="">
            <h1 id="heroTitle" className="title has-text-white">Hi, I'm Kate 👋</h1>
            <h2 id="heroSubtitle" className="subtitle hero has-text-light">a London based junior developer</h2>
            <a href={"#projects"} className="button mr-1" >View Work</a>
            <a href={"#contact"} className="button">Reach out</a>
          </div>
        </div>
      </section>
    </header>
  </main>
}