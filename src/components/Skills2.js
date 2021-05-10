import React from 'react'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiBulma, SiBabel, SiReact, SiHtml5, SiPython, SiGithub, SiMongodb, SiFlask, SiWebpack, SiHeroku, SiCss3, SiPostgresql, SiNpm, SiCanva } from 'react-icons/si'
import Squiggle from '../images/squiggle.svg'

export default function Skills2() {
  // eslint-disable-next-line react/jsx-key
  const skillsArray = [<SiJavascript className="icon" key={'JavaScript'} />, <SiReact className="icon" key={'React'} />, <SiHtml5 key={'HTML5'} className="icon" />, <FaNodeJs key={'Nodejs'} className="icon" />, <SiPython key={'Python'} className="icon" />, <SiBabel key={'Babel'} className="icon" />, <SiGithub key={'GitHub'} className="icon" />, <SiMongodb key={'MongoDB'} className="icon" />, <SiBulma key={'Bulma'} className="icon" />, <SiFlask key={'Flask'} className="icon" />, <SiWebpack key={'Webpack'} className="icon" />, <SiHeroku key={'Heroku'} className="icon" />, <SiCss3 key={'CSS3'} className="icon" />, <SiPostgresql key={'PostgreSQL'} className="icon" />, <SiNpm key={'npm'} className="icon" />, <SiCanva key={'Canva'} className="icon" />]

  return <section>
    <div>
      <h1 className="has-text-white has-text-centered title is-1">SKILLS</h1>
    </div>
    <div>
      <Squiggle id="squiggle" />
    </div>

    <div id="skillsContainer">
      {skillsArray.map(skill => {
        return <div className="iconWrapper" key={skill.key}>
          {skill}
          <div className="iconLabel">{skill.key}</div>
        </div>
      })}
    </div>
  </section>
}

