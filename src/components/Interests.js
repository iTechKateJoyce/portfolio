import React from 'react'

export default function Interests() {

  return <section id="interests">
    <div className="interestsContainer" >
      <div className="card music">
        <div className="card-image">
          <figure className="image is-4by3">
            <img id="musicImg">

            </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
          I love live music and look forward to it's return in the future. Recently I’ve bridged the gap with online performances from  <a href="https://www.youtube.com/watch?v=uwUt1fVLb3E&t=878s">NPR’s Tiny Desk Concerts</a> and <a href="https://www.youtube.com/watch?v=1tL1mefqc2g">Sofar Sounds listening rooms</a>. 
          </div>
        </div>
      </div>
      <div className="card yoga">
        <div className="card-image">
          <figure className="image is-4by3">
            <img id="yogaImg">

            </img>
          </figure>
          
        </div>
        <div className="card-content">
          <div className="content">
          I've practiced yoga for the last five years or so, I try to do hatha yoga daily but enjoy mixing it up with other styles like Bikram too. 
          </div>
        </div>
      </div>
      <div className="card food">
        <div className="card-image">
          <figure className="image is-4by3">
            <img id="foodImg">

            </img>
          </figure>
          
        </div>
        <div className="card-content">
          <div className="content">
          I've practiced yoga for the last five years or so, I try to do some hatha yoga daily but enjoy mixing it up with other styles like Bikram too. 
          </div>
        </div>
      </div>

    </div>
  </section>
}