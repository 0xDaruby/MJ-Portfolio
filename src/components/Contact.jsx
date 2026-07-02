import { useState } from 'react'
import './Contact.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrewyayb'
const INITIAL_FORM = { firstName: '', lastName: '', email: '', topic: '', message: '', website: '' }
const MAX_LENGTHS = { firstName: 50, lastName: 50, email: 254, topic: 50, message: 1000 }
const VALID_TOPICS = ['content', 'seo', 'copywriting', 'other']
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const sanitizeText = (value) =>
  value.replace(/[\u0000-\u001f\u007f]/g, '').replace(/\s+/g, ' ').trim()

function validateForm(form) {
  const errors = {}
  const firstName = sanitizeText(form.firstName)
  const lastName = sanitizeText(form.lastName)
  const email = sanitizeText(form.email)
  const topic = sanitizeText(form.topic)
  const message = sanitizeText(form.message)
  const website = sanitizeText(form.website)

  if (website) errors.website = 'Unexpected input.'

  if (!firstName) {
    errors.firstName = 'First name is required.'
  } else if (firstName.length > MAX_LENGTHS.firstName) {
    errors.firstName = 'First name is too long.'
  } else if (!/^[A-Za-zÀ-ÿ' -]+$/.test(firstName)) {
    errors.firstName = 'Please use letters, spaces, hyphens, or apostrophes.'
  }

  if (!lastName) {
    errors.lastName = 'Last name is required.'
  } else if (lastName.length > MAX_LENGTHS.lastName) {
    errors.lastName = 'Last name is too long.'
  } else if (!/^[A-Za-zÀ-ÿ' -]+$/.test(lastName)) {
    errors.lastName = 'Please use letters, spaces, hyphens, or apostrophes.'
  }

  if (!email) {
    errors.email = 'Email address is required.'
  } else if (email.length > MAX_LENGTHS.email) {
    errors.email = 'Email address is too long.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!topic) {
    errors.topic = 'Please select a topic.'
  } else if (!VALID_TOPICS.includes(topic)) {
    errors.topic = 'Invalid topic selected.'
  }

  if (!message) {
    errors.message = 'Message is required.'
  } else if (message.length < 10) {
    errors.message = 'Please share a little more detail.'
  } else if (message.length > MAX_LENGTHS.message) {
    errors.message = 'Message is too long.'
  } else if (/[<>]/.test(message)) {
    errors.message = 'Please avoid HTML characters in your message.'
  }

  return errors
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [serverMessage, setServerMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerMessage('')

    const validationErrors = validateForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus('idle')
      return
    }

    if (form.website) {
      setStatus('success')
      setForm(INITIAL_FORM)
      return
    }

    const now = Date.now()
    const lastSubmitted = Number(window.localStorage.getItem('contact-last-submit') || '0')
    if (now - lastSubmitted < 60_000) {
      setStatus('error')
      setServerMessage('Please wait a moment before sending another message.')
      return
    }

    setStatus('submitting')

    try {
      const payload = new URLSearchParams({
        firstName: sanitizeText(form.firstName),
        lastName: sanitizeText(form.lastName),
        email: sanitizeText(form.email),
        topic: sanitizeText(form.topic),
        message: sanitizeText(form.message),
        _replyto: sanitizeText(form.email),
        _subject: 'New message from your portfolio site',
      })

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      })

      if (!response.ok) throw new Error('Unable to send your message right now. Please try again in a moment.')

      window.localStorage.setItem('contact-last-submit', String(now))
      setForm(INITIAL_FORM)
      setErrors({})
      setStatus('success')
    } catch (error) {
      setStatus('error')
      setServerMessage(error.message || 'Unable to send your message right now. Please try again in a moment.')
    }
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
                <a href="tel:+2348072838162" className="contact__detail-value">+234 807 283 8162 </a>
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
                <a href="mailto:maryjanemiracle1@gmail.com" className="contact__detail-value">maryjanemiracle1@gmail.com</a>
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
                <span className="contact__detail-value">Owerri, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap fade-right" style={{ transitionDelay: '0.15s' }}>
          {status === 'success' ? (
            <div className="contact__success" role="status" aria-live="polite">
              <div className="contact__success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="firstName" className="sr-only">First name</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    maxLength={MAX_LENGTHS.firstName}
                    autoComplete="given-name"
                  />
                  {errors.firstName && <span className="contact__field-error">{errors.firstName}</span>}
                </div>
                <div className="contact__field">
                  <label htmlFor="lastName" className="sr-only">Last name</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    maxLength={MAX_LENGTHS.lastName}
                    autoComplete="family-name"
                  />
                  {errors.lastName && <span className="contact__field-error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={MAX_LENGTHS.email}
                    autoComplete="email"
                  />
                  {errors.email && <span className="contact__field-error">{errors.email}</span>}
                </div>
                <div className="contact__field">
                  <label htmlFor="topic" className="sr-only">Select a topic</label>
                  <select id="topic" name="topic" value={form.topic} onChange={handleChange} required>
                    <option value="">Select Topic</option>
                    <option value="content">Content Writing</option>
                    <option value="seo">SEO Strategy</option>
                    <option value="copywriting">Copywriting</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.topic && <span className="contact__field-error">{errors.topic}</span>}
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  maxLength={MAX_LENGTHS.message}
                />
                {errors.message && <span className="contact__field-error">{errors.message}</span>}
              </div>

              <div className="contact__field contact__field--honeypot">
                <label htmlFor="website" className="sr-only">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                  aria-hidden="true"
                />
              </div>

              {serverMessage && (
                <p className="contact__form-error" role="alert">{serverMessage}</p>
              )}

              <button type="submit" className="btn-primary contact__submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
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