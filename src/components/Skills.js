import React from 'react'


// import { Icon, InlineIcon } from '@iconify/react';
// import fileTypeBabel2 from '@iconify-icons/vscode-icons/file-type-babel2';


import Babel from '../icons/Babel.svg'
import Bulma from '../icons/Bulma.svg'
import Canva from '../icons/Canva.svg'
import CSS3 from '../icons/css3.svg' //rename in canva clash
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
        <div className="iconWrapper">
          <JavaScript className="icon" />
          <div className="iconLabel">JavaScript</div>
        </div>
        <div className="iconWrapper">
          <ReactIcon className="icon" />
          <div className="iconLabel">React</div>
        </div>
        <div className="iconWrapper">
          <HTML5 className="icon" />
          <div className="iconLabel">HTML5</div>
        </div>
        <div className="iconWrapper">
          <Nodejs className="icon" />
          <div className="iconLabel">Node.js</div>
        </div>
        <div className="iconWrapper">
          <Python className="icon" />
          <div className="iconLabel">Python</div>
        </div>
        <div className="iconWrapper">
          <Babel className="icon"/>
          <div className="iconLabel">Babel</div>
        </div>
        <div className="iconWrapper">
          <Git className="icon" />
          <div className="iconLabel">Git</div>
        </div>
        {/* //! row 2 */}
      </div>
      <div className="beginner">
        <div className="iconWrapper">
          <MongoDB className="icon" />
          <div className="iconLabel">MongoDB</div>
        </div>
        <div className="iconWrapper">
          <Flask className="icon" />
          <div className="iconLabel">Flask</div>
        </div>
        <div className="iconWrapper">
          <Webpack className="icon" />
          <div className="iconLabel">Webpack</div>
        </div>
        <div className="iconWrapper">
          <GitHub className="icon" />
          <div className="iconLabel">GitHub</div>
        </div>
        <div className="iconWrapper">
          <Heroku className="icon" />
          <div className="iconLabel">Heroku</div>
        </div>
        <div className="iconWrapper">
          <Bulma className="icon" />
          <div className="iconLabel">Bulma</div>
        </div>
        <div className="iconWrapper">
          <CSS3 className="icon" />
          <div className="iconLabel">CSS3</div>
        </div>
        {/* //!row 3 */}
      </div>
      <div className="learning">
        <div className="iconWrapper">
          <PostgreSQL className="icon" />
          <div className="iconLabel">PostgreSQL</div>
        </div>
        <div className="iconWrapper">
          <Npm className="icon" />
          <div className="iconLabel">Npm</div>
        </div>
        <div className="iconWrapper">
          <Sass className="icon" />
          <div className="iconLabel">Sass</div>
        </div>
        <div className="iconWrapper">
          <VSCode className="icon" />
          <div className="iconLabel">VSCode</div>
        </div>
        <div className="iconWrapper">
          <Express className="icon" />
          <div className="iconLabel">Express</div>
        </div>
        <div className="iconWrapper">
          <Canva className="icon" />
          <div className="iconLabel">Canva</div>
        </div>
      </div>
    </div>
  </section>
}

