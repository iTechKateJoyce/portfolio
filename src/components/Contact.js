import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
import github_logo from '../images/github_logo.png'
import linkedin_logo from '../images/linkedin_logo.png'

export default function Contact() {

  const [formValue, setFormValue] = useState({
    email: 'Email',
    name: 'Name',
    message: 'Let\'s talk about...'
  })

  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm('service_us5xiz4', 'template_o0xj25v', e.target, 'user_z6p3eEhgRcZ5kP3AyrqIk')
      .then((result) => {
        location.reload()
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      });
  }

  return <section id="contact" className="section is-small">
    <div className="columns px-6">
      <div className="column gradient is-flex-direction-column">
        <h1 className="title is-1 has-text-white">Let's</h1>
        <h1 className="title is-1 has-text-white">Chat</h1>
        <div className="logos is-flex">
          <a href="https://www.linkedin.com/in/kate-joyce/" target="_blank">
            <img className="contactIcon" src={linkedin_logo} />
          </a>
          <a href="https://github.com/kate1562" target="_blank">
            <img className="contactIcon" src={github_logo} />
          </a>

        </div>

      </div>
      <div className="column form py-6">
        <form className="" onSubmit={sendEmail}>
          <input className="input" type="text" name="from_name" placeholder={formValue.name} />
          <input className="input" type="email" name="from_email" placeholder={formValue.email} />
          <textarea className="input" name="message" placeholder={formValue.message} />
          <input className="input button is-black" type="submit" value="Send" />
        </form>
      </div>
    </div>
  </section>
}