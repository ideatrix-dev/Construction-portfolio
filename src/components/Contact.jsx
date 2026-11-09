import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="band">
      <div className="wrap">
        <h2>Ready to start your project?</h2>
        <p className="sub">Tell us about your plot and we will get back to you.</p>
        <form onSubmit={handleSubmit}>
          <input placeholder="Your name" required />
          <input type="tel" placeholder="Phone number" required />
          <input placeholder="Plot location" />
          <select defaultValue="Home construction">
            <option>Home construction</option>
            <option>Commercial construction</option>
            <option>Interiors / renovation</option>
          </select>
          <button className="btn" type="submit">
            {submitted ? 'Thanks, we will call you' : 'Request a call back'}
          </button>
        </form>
      </div>
    </section>
  )
}
