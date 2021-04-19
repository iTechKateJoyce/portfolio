import React from 'react'
import About from './About'

export default function Home() {
  return <main>
    <header>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="">
            <p className="title has-text-white">Hi, I'm Kate 👋</p>
            <p className="subtitle hero has-text-light">a London based junior developer</p>
            <button className="button is-rounded">View work</button>
            <button className="button is-rounded">Reach out</button>
          </div>
        </div>
      </section>
    </header>
    <About />
    <Skills />
  </main>
}