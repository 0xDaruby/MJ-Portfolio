import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M7 8h10M7 12h6m-6 4h10M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
      </svg>
    ),
    title: 'Email Copywriting',
    desc: 'Strategic email campaigns that nurture leads, build trust, and drive conversions.',
    bullets: [
      'Welcome sequences',
      'Launch campaigns',
      'Promotional emails',
      'Newsletter content',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <path d="M7 8h10M7 12h7M7 16h5"/>
      </svg>
    ),
    title: 'Landing Page Copy',
    desc: 'High-converting landing pages designed to capture leads and maximize campaign performance.',
    bullets: [
      'Lead generation pages',
      'Webinar pages',
      'Lead magnet pages',
      'CTA optimization',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M8 6h8M8 12h8M8 18h5"/>
        <rect x="4" y="3" width="16" height="18" rx="2"/>
      </svg>
    ),
    title: 'Sales Page Copy',
    desc: 'Persuasive sales pages that communicate value, overcome objections, and increase revenue.',
    bullets: [
      'Course sales pages',
      'Product launches',
      'Offer positioning',
      'Conversion strategy',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Website Copy',
    desc: 'Customer-focused website copy that strengthens your brand and converts visitors into clients.',
    bullets: [
      'Home pages',
      'About pages',
      'Service pages',
      'Brand messaging',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad services">
      <div className="container">
        <div className="services__header fade-up">
          <span className="section-label">What your brand needs</span>
          <h2 className="section-title">Services I Offer</h2>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="service-card fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <ul className="service-card__bullets">
                {s.bullets.map((b) => (
                  <li key={b}>
                    <span className="service-card__dot" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}