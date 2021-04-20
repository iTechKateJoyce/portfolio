import React from "react"

export default function Footer() {
  return <footer className="footer is-bottom">
    <div className="is-flex-direction-column content has-text-centered">
      <hr />
      <p>© Kate Joyce 2021</p>
      <section className="is-flex-direction-row">
        <p><a className="has-text-white" href="https://github.com/kate1562"><strong>GitHub</strong></a></p>
        <p><a className="has-text-white" href="https://www.linkedin.com/in/kate-joyce/"><strong>LinkedIn</strong></a></p>
      </section>
    </div>
  </footer>
}