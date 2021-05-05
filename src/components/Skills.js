import React from 'react'
import JavaScript from '../icons/JavaScript.svg'
// import Babel from '../icons/Babel.svg'
import Bulma from '../icons/Bulma.svg'
import Canva from '../icons/Canva.svg' //need to make text black
// import CSS3 from '../icons/CSS 3.svg'

export default function Skills() {
  return <section id="skills" className="section is-small has-text-centered">
    <h1 className="title is-2">Skills</h1>
    <div>
    <JavaScript />
    <Bulma />
    <Canva />
    {/* <CSS3 /> */}
    </div>

  </section>
}
