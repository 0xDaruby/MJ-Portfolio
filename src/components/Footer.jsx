import './Footer.css'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-mark">N</span>
            <span className="footer__logo-text">YourName</span>
          </a>
          <p className="footer__tagline">
            Professional content writer helping brands grow through strategic,
            SEO-driven writing. Let's build something remarkable together.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="footer__social" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__nav-col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__nav">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="footer__nav-link">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__newsletter-col">
          <h4 className="footer__col-title">Newsletter</h4>
          <p className="footer__newsletter-desc">
            Get writing tips, SEO insights and content strategy advice delivered to your inbox.
          </p>
          <form
            className="footer__newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="your@email.com" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">© 2026 Mary Jane. All rights reserved.</span>
          <a href="https://www.oxdaruby.tech/" target="_blank" rel="noreferrer" className="footer__credit">
            Built by 0xdaruby✦
          </a>
        </div>
      </div>
    </footer>
  )
}