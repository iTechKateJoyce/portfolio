import React from 'react'
// import { Link } from 'react-router-dom'
import Squiggle from '../images/squiggle.svg'
import { SiGithub } from 'react-icons/si'
import { FaRocket } from 'react-icons/fa'

import Dreamland from '../images/Dreamland.png'
import Hackasnack from '../images/Hackasnack.png'
import insbaration from '../images/insbaration.png'
import frogger from '../images/frogger.png'


export default function Projects() {
  return <section id="projects" className="section">
    <div>
      <h1 className="has-text-white has-text-centered title is-1">PROJECTS</h1>
    </div>
    <div>
      <Squiggle id="squiggle" />
    </div>
    {/* dreamland */}
    <section id="dreamland" className="columns is-vcentered">
      <div className="projectImg column is-one-third">
        <img className="dreamlandMobile" src={Dreamland} />
      </div>
      <div className="column card-content is-two-thirds has-text-justified projectSpiel">
        <h2 className="projectTitle title is-2">DREAMLAND: FESTIVAL APP</h2>
        <hr className="projectRule" />
        <p>Dreamland is a mobile first, full stack app formed of a React.js frontend and a Python/Flask backend talking to a PostreSQL database. Users can view the festival line up, create their personal schedule, place bar orders and view real-time status updates. Trello was used to manage technical tickets and Balsamiq to wireframe the design.</p>
        <br />
        <p>In order to gain experience working across the full stack I built backend models, views, controllers and frontend features for the lineup and menu ordering systems.</p>
        <br />
        <div className="is-flex-direction-column">
          <div className="is-flex">
            <a href="http://dreamland-festival-app.herokuapp.com/" rel="noreferrer" target="_blank">
              <SiGithub className="projectLink" />
            </a>
            <p className="linkLabel">See my approach</p>
          </div>
          <br />
          <div className="is-flex">
            <a href="http://dreamland-festival-app.herokuapp.com/" rel="noreferrer" target="_blank">
              <FaRocket className="projectLink" />
            </a>
            <p className="linkLabel">See it live</p>
          </div>
        </div>
      </div>
    </section>
    {/* hack-a-snack */}
    <section id="hackasnack" >
      <h2 className="projectTitle title is-2 mb-0">HACK-A-SNACK: RECIPE COLLECTION</h2>
      <div className="columns is-vcentered">
        <div className="column card-content is-three-fifths pt-0">
          <hr className="projectRule" />
          <div className="has-text-justified projectSpiel">
            <p>Hack-a-snack is a full stack MERN app built with React JS, Node.js, Express, Mongoose and talking to a NoSQL MongoDB database. The Edamam API was used to seed initial data and it was deployed via Heroku.</p>
            <br />
            <p>The site operates as an online recipe collection, users can browse, search, review, save and post recipes. I built out the recipes backend and user profile frontend which made use of React Slick slider library.</p>
            <br />
          </div>
          <div className="is-flex-direction-column">
            <div className="is-flex">
              <a href="https://github.com/kate1562/project-3" rel="noreferrer" target="_blank">
                <SiGithub className="projectLink" />
              </a>
              <p className="linkLabel">See my approach</p>
            </div>
            <br />
            <div className="is-flex">
              <a href="http://hack-a-snack-project.herokuapp.com/" rel="noreferrer" target="_blank">
                <FaRocket className="projectLink" />
              </a>
              <p className="linkLabel">See it live</p>
            </div>
          </div>
        </div>
        <div className="hackasnackMac ProjectImg column is-two-fifths">
          <img className="" src={Hackasnack} />
        </div>
      </div>
    </section>

    {/* insBARation */}
    <section id="insbaration" >
      <div className="columns is-vcentered">
        <div className="insbaration ProjectImg column is-two-fifths">
          <img className="" src={insbaration} />
        </div>
        <div className="column card-content is-three-fifths pt-0">
          <h2 className="projectTitle title is-2 mb-0">INSBARATION: COCKTAIL RECIPES</h2>
          <hr className="projectRule" />
          <div className="has-text-justified projectSpiel">
            <p>Insbaration was the second project completed as part of the GA Software Engineering Immersive course and my first application built with React. We had 48 hours to pair program using a liveshare code editing extension and the driver/navigator technique to take turns in each role.</p>
            <br />
            <p>The program allows users to browse 100 cocktail recipes by base alcohol, or if they can't decide, gives them a random cocktail to try. We used the cocktailDB API to seed our data and deployed on GitHub pages.</p>
            <br />
          </div>
          <div className="is-flex-direction-column">
            <div className="is-flex">
              <a href="https://github.com/kate1562/project-2" rel="noreferrer" target="_blank">
                <SiGithub className="projectLink" />
              </a>
              <p className="linkLabel">See my approach</p>
            </div>
            <br />
            <div className="is-flex">
              <a href="https://kate1562.github.io/project-2/" rel="noreferrer" target="_blank">
                <FaRocket className="projectLink" />
              </a>
              <p className="linkLabel">See it live</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* frogger */}
    <section id="frogger" >
      <h2 className="projectTitle title is-2 mb-0">FROGGER: GRID GAME</h2>
      <div className="columns is-vcentered">
        <div className="column card-content is-three-fifths pt-0">
          <hr className="projectRule" />
          <div className="has-text-justified projectSpiel">
            <p>Frogger was the very first project as part of the GA software Engineering immersive course built using Vanilla JS, HTML and CSS. We were tasked to re-create a classic grid game over the course of a week as a solo project, at this point we'd studied JavaScript for two weeks.</p>
            <br />
            <p>The functionality of the game includes automated moving elements, collision detection, timers and player movement logic.</p>
            <br />
          </div>
          <div className="is-flex-direction-column">
            <div className="is-flex">
              <a href="https://github.com/kate1562/project-1/blob/main/README.md" rel="noreferrer" target="_blank">
                <SiGithub className="projectLink" />
              </a>
              <p className="linkLabel">See my approach</p>
            </div>
            <br />
            <div className="is-flex">
              <a href="https://kate1562.github.io/project-1/" rel="noreferrer" target="_blank">
                <FaRocket className="projectLink" />
              </a>
              <p className="linkLabel">See it live</p>
            </div>
          </div>
        </div>
        <div className="froggerImg column is-two-fifths">
          <img className="dreamlandMobile" src={frogger} />
        </div>
      </div>
    </section>

  </section >
}