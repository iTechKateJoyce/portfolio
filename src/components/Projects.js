import React from 'react'
import ReactDOM from "react-dom"
import useState from 'react'
// import Carousel from 'react-elastic-carousel'
import Squiggle from '../images/squiggle.svg'
import { SiGithub } from 'react-icons/si'
import { FaRocket } from 'react-icons/fa'

import Dreamland from '../images/Dreamland.png'
import Hackasnack from '../images/Hackasnack.png'
import insbaration from '../images/insbaration.png'
import frogger from '../images/frogger.png'


export default function Projects() {
  const slideData = [
    {
      name: 'dreamland',
      image: Dreamland,
      title: 'DREAMLAND: FESTIVAL APP',
      description: 'Dreamland is a full stack MERN app formed of a Python backend and mobile first React frontend. Users can view the festival line up, create their personal schedule and place bar orders. Trello was used to manage technical tickets and Balsamiq to further cement our understanding and wireframe the design. In order to gain experience working across the full stack I built backend models, views, controllers and frontend features for the lineup and menu ordering systems.',
      linkLive: 'http://dreamland-festival-app.herokuapp.com/',
      linkApproach: 'https://github.com/kate1562/project-4-dreamland'
    },
    {
      name: 'hackasnack',
      image: Hackasnack,
      title: 'HACK-A-SNACK: RECIPE COLLECTION',
      description: 'Hack-a-snack is a full stack MERN app built with React JS, Node.js, Express, Mongoose and talking to a NoSQL MongoDB database. The Edamam API was used to seed initial data and it was deployed via Heroku. The site operates as an online recipe collection, users can browse, search, review, save and post recipes. I built out the recipes backend and user profile frontend which made use of React Slick slider library.',
      linkLive: 'http://hack-a-snack-project.herokuapp.com/',
      linkApproach: 'https://github.com/kate1562/project-3'
    },
    {
      name: 'insbaration',
      image: insbaration,
      title: 'INSBARATION: COCKTAIL CLUB',
      description: 'Insbaration was the second project completed as part of the GA Software Engineering Immersive course and my first application built with React. We had 48 hours to pair program using a liveshare code editing extension and the driver/navigator technique to take turns in each role.The program allows users to browse 100 cocktail recipes by base alcohol, or if they can\'t decide, gives them a random cocktail to try. The cocktailDB API was used to seed data and it was deployed on GitHub pages.',
      linkLive: 'https://kate1562.github.io/project-2/',
      linkApproach: 'https://github.com/kate1562/project-2'
    },
    {
      name: 'frogger',
      image: frogger,
      title: 'FROGGER: GRID GAME',
      description: 'Frogger was the very first project as part of the GA software Engineering immersive course built using Vanilla JS, HTML and CSS. We were tasked to re-create a classic grid game over the course of a week as a solo project, at this point we\'d studied JavaScript for two weeks. The functionality of the game includes automated moving elements, collision detection, timers and player movement logic.',
      linkLive: 'https://kate1562.github.io/project-1/',
      linkApproach: 'https://bit.ly/frogger-readme'

    }
  ]

  return <section id="projects">
    <div>
      <h1 className="has-text-white has-text-centered title is-1">PROJECTS</h1>
    </div>
    <div>
      <Squiggle id="squiggle" />
    </div>
    <div id="carousel" >{slideData.map(slide => {
      return <section key={slide.name} id={slide.name} className="columns is-vcentered">
        <div className="projectImg column is-one-third">
          <img src={slide.image} />
        </div>
        <div className="column card-content is-two-thirds has-text-justified projectSpiel">
          <h2 className="projectTitle title is-2">{slide.title}</h2>
          <hr className="projectRule" />
          <p>{slide.description}</p>
          <br />
          <div className="is-flex-direction-column">
            <div className="is-flex">
              <a href={slide.linkApproach} target="blank">
                <SiGithub className="projectLink" />
              </a>
              <p className="linkLabel">See my approach</p>
            </div>
            <br />
            <div className="is-flex">
              <a href={slide.linkLive} target="blank">
                <FaRocket className="projectLink" />
              </a>
              <p className="linkLabel">See it live</p>
            </div>
          </div>
        </div>
      </section>
    })}
    </div>
  </section >
}