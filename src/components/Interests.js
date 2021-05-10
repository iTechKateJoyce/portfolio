import React from 'react'
import musicImg from '../images/musicImg.png'
import yogaImg from '../images/yogaImg.png'
import foodImg from '../images/foodImg.png'
import experienceImg from '../images/experienceImg.png'
import Squiggle from '../images/squiggle.svg'

export default function Interests() {

  return <section id="interests" className="section is-small">
    <h1 className="title is-2 has-text-centered">INTERESTS</h1>
    <Squiggle id="squiggle" />
    <div className="interestsContainer" >
      <div className="card music">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={musicImg}>

            </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            I love live music and look forward to it's return in the future. Recently I’ve bridged the gap with online performances from  <a href="https://www.youtube.com/watch?v=uwUt1fVLb3E&t=878s">NPR’s Tiny Desk Concerts</a> and <a href="https://www.youtube.com/watch?v=1tL1mefqc2g">Sofar Sounds listening rooms 🤟</a>.
          </div>
        </div>
      </div>
      <div className="card yoga">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={yogaImg}>
            </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
          I've practiced yoga for the last five years or so, I try to do hatha yoga daily but enjoy mixing it up with other styles like Bikram too. Lately, YouTube's Yoga with Adriene has been my go to.
          </div>
        </div>
      </div>
      <div className="card experiences">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={experienceImg}>

            </img>
          </figure>

        </div>
        <div className="card-content">
          <div className="content">
            Immersive experiences fascinate me, from  VR to theatre shows. Designed experiences from Secret Cinema, Gingerline, and Bompass & Parr are some of my favourites. Recently, I've found the work of <a href="https://www.surrealevents.com/" target="blank">SURREAL's</a> virtual event platform  super innovative and interesting.
          </div>
        </div>
      </div>
      <div className="card food">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={foodImg}>

            </img>
          </figure>

        </div>
        <div className="card-content">
          <div className="content">
            I love to eat, so I learned how to cook! I enjoy trying out new recipes at home and taking cooking courses to sharpen up my kitchen skills.
          </div>
        </div>
      </div>

    </div>
  </section>
}