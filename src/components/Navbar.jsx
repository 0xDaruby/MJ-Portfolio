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

        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
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

        <a href="#contact" className="btn-primary navbar__cta" onClick={() => setOpen(false)}>
          Contact
        </a>

        <button
          className="navbar__burger"
          aria-label="Toggle menu"
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