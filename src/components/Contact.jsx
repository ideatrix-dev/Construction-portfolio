import { useState } from "react";
import logo from "../assets/logo.png";
import { districts } from "./Cities.jsx";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="band">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info">
            <img
              src={logo}
              alt="Beyond Bricks Construction"
              className="contact-logo"
            />
            <ul className="contact-list">
              <li>
                <span>Address</span>
                <p>
                  4th Floor, Prestige Tower, MG Road, Bengaluru, Karnataka
                  560001
                </p>
              </li>
              <li>
                <span>Phone</span>
                <a href="tel:+919845012345">+91 98450 12345</a>
              </li>
              <li>
                <span>Email</span>
                <a href="mailto:hello@beyondbricks.in">hello@beyondbricks.in</a>
              </li>
            </ul>
          </div>

          <div className="contact-form-wrap">
            <h2>Ready to start your project?</h2>
            <p className="sub">
              Tell us about your plot and we will get back to you within one
              working day.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input placeholder="Your name" required />
                <div className="phone-field">
                  <span className="phone-prefix">+91</span>
                  <input type="tel" placeholder="Phone number" required />
                </div>
              </div>
              <div className="form-row">
                <select defaultValue="" required>
                  <option value="" disabled>
                    Select plot location
                  </option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
                <select defaultValue="Home construction">
                  <option>Home construction</option>
                  <option>Commercial construction</option>
                  <option>Interiors / Renovation</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea rows="5" placeholder="Your message" />
              <button className="btn" type="submit">
                {submitted ? "Message sent" : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
