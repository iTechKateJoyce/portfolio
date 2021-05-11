import React from 'react'
import dreamland from '../images/Dreamland.png'
import hackasnack from '../images/Hack-a-snack-image.png'
import insbaration from '../images/insbaration.png'
import frogger from '../images/frogger.png'
import Squiggle from '../images/squiggle.svg'


export default function Projects() {
  return <section id="projects">
    <div>
      <h1 className="has-text-white has-text-centered title is-1">PROJECTS</h1>
    </div>
    <div>
      <Squiggle id="squiggle" />
    </div>
    <section id="dreamland" className="columns">
      <div className="projectImg">
        {/* ammend img canva to have white background to match card  */}
        <img className="dreamlandMobile" src={dreamland} /> 
      </div>
      <div className="column is-two-thirds">
        <h2 className="">DREAMLAND: FESTIVAL APP</h2>
        <hr className="projectRule" />
      </div>
      <div className="card-content">

      </div>



    </section>

  </section >
}