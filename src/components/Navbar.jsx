import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Awards', href: '#awards' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section[id]'))
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActive(`#${visibleEntry.target.id}`)
        }
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: '-20% 0px -45% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const handleNav = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={() => handleNav('#hero')}>
          <span className="navbar__logo-mark">MJ</span>
          <span className="navbar__logo-text">Mary Jane</span>
        </a>

        <ul id="primary-navigation" className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`navbar__link${active === l.href ? ' navbar__link--active' : ''}`}
                onClick={() => handleNav(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-primary navbar__cta"
          onClick={() => {
            setOpen(false)
            setActive('#contact')
          }}
        >
          Contact
        </a>

        <button
          type="button"
          className="navbar__burger"
          aria-label="Toggle menu"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`burger-line${open ? ' open' : ''}`} />
          <span className={`burger-line${open ? ' open' : ''}`} />
          <span className={`burger-line${open ? ' open' : ''}`} />
        </button>
      </div>
    </nav>
  )
}