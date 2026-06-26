import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', topic: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section-pad contact">
      <div className="container contact__inner">
        <div className="contact__info fade-left">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Work<br /><em style={{ fontStyle:'italic', color:'var(--accent)' }}>Together</em></h2>
          <p className="contact__para">
            The technological revolution is changing every aspect of our lives.
            Let's create content that keeps your brand ahead of the curve.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.05 6.05l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
                </svg>
              </div>
              <div>
                <div className="contact__detail-label">Phone</div>
                <a href="tel:+2195550114" className="contact__detail-value">219 555-0114</a>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="contact__detail-label">Email</div>
                <a href="mailto:hello@yourname.com" className="contact__detail-value">hello@yourname.com</a>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="contact__detail-label">Location</div>
                <span className="contact__detail-value">New Jersey, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap fade-right" style={{ transitionDelay: '0.15s' }}>
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <select name="topic" value={form.topic} onChange={handleChange} required>
                    <option value="">Select Topic</option>
                    <option value="content">Content Writing</option>
                    <option value="seo">SEO Strategy</option>
                    <option value="copywriting">Copywriting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="contact__field">
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact__submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}