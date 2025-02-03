import React from 'react'

export default function About({isOpen}) {
  return (
    <section id="about" className={`about ${isOpen ? 'open' : 'closed'}`}>
    <h2>About Me</h2>
    <p>I'm passionate about medical coding, AI, and programming.</p>
  </section>
  )
}
