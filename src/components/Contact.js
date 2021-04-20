import React from 'react'

export default function Contact() {
  return <section id="contact" className="section is-medium">
    <div className="columns px-6">
      <div className="column gradient">
        <h1 className="title is-1 has-text-white">Let's</h1>
        <h1 className="title is-1 has-text-white">Chat</h1>
      </div>
      <div className="column form">
        <div className="feild">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Gordon Ramsay" />
          </div>
        </div>
        <div className="feild">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="gordon@ramsay.com" />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Drop me a message"></textarea>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-dark">Send</button>
          </div>
        </div>
      </div>
    </div>
  </section>
}