import React from 'react'
import { useState } from 'react'
import profile from '../images/profile.jpeg'
import Squiggle from '../images/squiggle.svg'
import Skills2 from '../components/Skills2'
import Interests from '../components/Interests'

export default function About() {
  const [interests, showInterests] = useState(false)

  return <section id="about" className="section">
    <div /*about section container*/>
      <div>
        <h1 className="has-text-white has-text-centered title is-1">ABOUT</h1>
      </div>
      <div>
        <Squiggle id="squiggle" />
      </div>
      <div className="aboutTextImgContainer">
        {/* about: text and image container  */}
        <div className="columns has-text-white is-vcentered is-centered">
          <div className="column is-two-thirds">
            <p>Hi 👋  I'm Kate. I'm a recent grad from General Assembly's Software Engineering Immersive bootcamp currently seeking my first junior developer role. </p>
            <br />
            <p >My interest in coding began after feeling the impact of a custom application on my team’s day to day. It amazed me how one piece of software created so much <span className="keyword">positive change</span> easing pain points and <span className="keyword">boosting efficiency</span>.</p>
            <br />
            <p></p>
            <p>With a background in delivering events and brand experiences, I hope to provide value for future clients using a blend of technical and soft skills to deliver <span className="keyword">solutions that count</span>. I’d love to work in a collaborative team where I can learn from others, add value and contribute to exciting projects. </p>
          </div>
          <div className="column is-one-third profileImgContainer">
            <img id="profile" className="" src={profile} />
          </div>
        </div>
      </div>
      <div className="has-text-centered mt-3">
        {/* about: button and interest section container  */}
        <button onClick={() => showInterests(!interests)} className="button has-text-white mb-4" >Tell me more</button>
      </div>
      <div style={{ display: interests ? '' : 'none' }} >
        <Interests />
      </div>
      <Skills2 />
    </div>
  </section>
}

