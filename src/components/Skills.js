import React from 'react'

// import Babel from '../icons/Babel.svg'
import Bulma from '../icons/Bulma.svg'
import Canva from '../icons/Canva.svg'
// import CSS3 from '../icons/CSS 3.svg' //rename in canva clash
import Flask from '../icons/Flask.svg'
import Git from '../icons/Git.svg'
import GitHub from '../icons/GitHub.svg'
import Heroku from '../icons/Heroku.svg'
import HTML5 from '../icons/HTML5.svg'
import JavaScript from '../icons/JavaScript.svg'
import Marshmallow from '../icons/Marshmallow.svg'
import MongoDB from '../icons/MongoDB.svg'
import MySQL from '../icons/MySQL.svg'
import Nodejs from '../icons/Node.js.svg'
import Npm from '../icons/Npm.svg'
import PostgreSQL from '../icons/PostgreSQL.svg'
import Python from '../icons/Python.svg'
import ReactIcon from '../icons/ReactIcon.svg'
import Sass from '../icons/Sass.svg'
import VSCode from '../icons/VSCode.svg'
import Webpack from '../icons/Webpack.svg'
import Express from '../icons/Express.svg'

export default function Skills() {
  return <section id="skills" className="section is-small has-text-centered">
    <h1 className="title is-2">Skills</h1>
    <div className="skillsContainer">
      <div className="comfortable">
        <Bulma className="icon" />
        {/* <Babel /> */}
        <Canva className="icon" />
        {/* <CSS3 /> */}
        <Flask className="icon" />
        <Git className="icon" />
        <GitHub className="icon" />
        <Heroku className="icon" />

      </div>
      <div className="beginner">
        <HTML5 className="icon" />
        <JavaScript className="icon" />
        <Marshmallow className="icon" />
        <MongoDB className="icon" />
        <MySQL className="icon" />
        <Nodejs className="icon" />

      </div>
      <div className="learning">
        <PostgreSQL className="icon" />
        <Npm className="icon" />
        <Python className="icon" />
        <ReactIcon className="icon" />
        <Sass className="icon" />
        <VSCode className="icon" />
        <Webpack className="icon" />
        <Express className="icon" />

      </div>


    </div>

  </section>
}

