import React from 'react'
import { useState } from 'react'
import profile from '../images/profile.jpeg'
import Skills from '../components/Skills'
import Interests from '../components/Interests'

export default function About() {
  const [interests, showInterests] = useState(false)

  return <section id="about" className="section">
    <section className="columns is-vcentered">
      <div className="column is-one-third profileImgContainer">
        <img id="profile" className="" src={profile} />
      </div>
      <div className="column is-two-thirds">
        <p className="has-text-light">Coming from a background in events and brand experiences, my interest in coding began after feeling the impact of a custom application on my team’s day to day. It amazed me how one piece of software created so much <span className="keyword">positive change</span> easing pain points and <span className="keyword">boosting efficiency</span>.</p>
        <br />
        <p className="has-text-light">I hope to provide value for future clients using a blend of technical and soft skills to deliver <span className="keyword">solutions that count</span>. I’d love to work in a collaborative team where I can learn from others, add value and contribute to exciting projects. </p>
      </div>
    </section>
    <Skills />
    <div className="has-text-centered">
      <button onClick={() => showInterests(!interests)} className="button has-text-light" >Tell me more</button>
    </div>
    <div style={{ display: interests ? `` : `none` }} >
      <Interests />
    </div>
  </section>
}

