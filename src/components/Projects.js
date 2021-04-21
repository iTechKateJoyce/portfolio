import React from 'react'
import dreamland from '../images/Dreamland.png'
import hackasnack from '../images/Hack-a-snack-image.png'
import insbaration from '../images/insbaration.png'
import frogger from '../images/frogger.png'

export default function Projects() {
  return <section id="projects" className="section has-text-light has-text-justified">
    <h1 className="title is-1">Projects</h1>

    <section id="dreamland" className="section is-small columns">
      <div className="column is-half">
        <h2 className="subtitle is-3">DREAMLAND: FESTIVAL APP</h2>
        <a href="http://dreamland-festival-app.herokuapp.com/" target="blank">🔗 dreamland project</a>
        <br />
        <p>Dreamland is a full stack MERN app built with Python, React JS, Flask, SQLAlchemy, Marshmallow interacting with a PostgreSQL database. It was created for attendees and event staff to use onsite across the live days of the event. Due to the presumed use case we decided on a mobile first design. Attendees can view the festival line up, create their personal schedule and place bar orders whilst event staff can view incoming orders and update collection status. </p>
        <div className="">
          {/* tech icons here - image for now  */}
        </div>
      </div>
      <div className="column is-half appImage">
        {/*project imagery here, update to GIF and svg iphone icon */}
        <img className="dreamlandMobile"src={dreamland}/>
      </div>
    </section>

    <section id="hack-a-snack" className="section is-small columns is-vcentered">
      <div className="column is-half">
        <h2 className="subtitle is-3">HACK-A-SNACK: RECIPE COLLECTION</h2>
        <a href="http://hack-a-snack-project.herokuapp.com/" target="blank">🔗 hack-a-snack project</a>
        <br />
        <p>Hack-a-Snack is a full stack application which operates  as an online recipe collection. Users can browse a recipe database (seeded from an external API), post their own recipes, comment on others’ posts. The Edamam API was used to seed recipe data and provide the initial content for users to browse. We used Canva to whiteboard initial ideas and to plan the backend MVC, Google Slides was utilised to create a clickthrough wireframe. I was responsible for building the recipes backend and the user profile frontend which made use of React Slick slider library.</p>
        <div className="">
          {/* tech icons here - image for now  */}
        </div>
      </div>
      <div className="column is-half">
        {/*project imagery here update with svg macbook icon and GIF screen */}
        <img src={hackasnack}/>
      </div>
    </section>

    <section id="insbaration" className="section columns is-vcentered">
      <div className="column is-half">
        <h2 className="subtitle is-3">INSBARATION: COCKTAIL CLUB</h2>
        <a href="https://kate1562.github.io/project-2/" target="blank">🔗 insBARation project</a>
        <br />
        <p>InsBARation  is a React application that allows users to browse cocktail recipes by base alcohol. We pair programmed using a liveshare code editing extension and the driver/navigator technique to take turns in each role. We used an external API called cocktailsDB to seed our data.</p>
        <div className="">
          {/* tech icons here - image for now  */}
        </div>
      </div>
      <div className="column is-half">
        {/*project imagery here update with svg macbook icon and GIF screen */}
        <img src={insbaration}/>
      </div>
    </section>

    <section id="frogger" className="section columns is-vcentered">
      <div className="column is-half">
        <h2 className="subtitle is-3">FROGGER: CLASSIC GRID GAME</h2>
        <a href="https://kate1562.github.io/project-1/" target="blank">🔗 frogger project</a>
        <br />
        <p>Frogger was the first GA project undertaken in Vanilla JS, HTML and CSS. The functionality of the grid game includes automated moving elements, collision detection, timers and player movement logic. </p>
        <div className="">
          {/* tech icons here - image for now  */}
        </div>
      </div>
      <div className="column is-half">
        {/*project imagery here update with svg macbook icon and GIF screen */}
        <img src={frogger}/>
      </div>
    </section>
  </section>
  
  
  
}