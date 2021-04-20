import React from 'react'

export default function Projects() {
  return <section id="projects" className="section is-large">
    <h1 className="title">Projects</h1>
    <section id="dreamland" className="columns has-text-light">
      <div className="column is-two-thirds">
        <h2 className="subtitle">DREAMLAND: FESTIVAL APP</h2>
        <a href="http://dreamland-festival-app.herokuapp.com/" target="blank">🔗dreamland project</a>
        <br />
        <p>Dreamland is a full stack MERN app built with Python, React JS, Flask, SQLAlchemy, Marshmallow interacting with a PostgreSQL database. It was created for attendees and event staff to use onsite across the live days of the event. Due to the presumed use case we decided on a mobile first design. Attendees can view the festival line up, create their personal schedule and place bar orders whilst event staff can view incoming orders and update collection status. </p>
        <div className="">
          {/* tech icons here - image for now  */}
        </div>
      </div>
      <div className="column is-one-third">
        {/* mobile project imagery here  */}
        <img src="../images/Dreamland.png"/>
      </div>

    </section>

  </section>
  
  
  
}