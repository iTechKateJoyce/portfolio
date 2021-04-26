import React from 'react'
// import profile from '../images/profile.jpg'
// import profile from 'portfolio/src/images/profile.jpg'
import profile from '../images/profile.jpg'

export default function About() {
  return <section id="About" className="columns section is-medium">
    <div className="column is-one-third">
      <img id="profile" src={profile} />
      {/* <div>
        <a>LinkedIn</a>
        <a>GitHub</a>
        <a>Twitter</a>
      </div> */}
    </div>
    <div className="column is-two-thirds">
      <p className="has-text-light">My interest in coding began after feeling the impact of a custom application on my team’s day to day. It amazed me how one piece of software created so much <span className="keyword">positive change</span> easing pain points and <span className="keyword">boosting efficiency</span>.</p>
      <br />
      <p className="has-text-light">With a background in events and brand experiences I hope to provide value for future clients using a blend of technical and soft skills to deliver <span className="keyword">solutions that count</span>. I’d love to work in a collaborative team where I can learn from others, add value and contribute to exciting projects. </p>

      {/* <button className="button is-rounded is-primary">Reach out</button> */}
    </div>
  </section>
}