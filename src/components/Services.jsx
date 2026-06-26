import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M7 8h10M7 12h6m-6 4h10M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
      </svg>
    ),
    title: 'Content Writing',
    desc: 'SEO-optimised articles, blog posts and website copy that engage readers and drive organic traffic.',
    bullets: ['Keyword research', 'On-page SEO', 'Long-form articles', 'Blog management'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/>
      </svg>
    ),
    title: 'Social Media',
    desc: 'Strategic social content that builds brand awareness, grows followers and drives engagement.',
    bullets: ['Post design strategy', 'Caption writing', 'Scheduling', 'Analytics review'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Website Ranking',
    desc: 'Technical and off-page SEO strategies to push your site higher on Google and keep it there.',
    bullets: ['Link building', 'Authority domains', 'Technical audit', 'Competitor analysis'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 0 1 2.828 2.828L11.828 13.828a2 2 0 0 1-1.414.586H8v-2.414a2 2 0 0 1 .586-1.414z"/>
        <path d="M3 21h18"/>
      </svg>
    ),
    title: 'Copywriting',
    desc: 'Persuasive copy for landing pages, ads and email campaigns that converts browsers into buyers.',
    bullets: ['Ad copy', 'Email sequences', 'Landing pages', 'Product descriptions'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Technical Writing',
    desc: 'Clear, structured documentation that helps users understand complex products with ease.',
    bullets: ['User manuals', 'API docs', 'How-to guides', 'Process documentation'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>
      </svg>
    ),
    title: 'Content Marketing',
    desc: 'End-to-end content strategies aligned with your business goals and brand identity.',
    bullets: ['Strategy development', 'Content calendar', 'Performance tracking', 'Brand alignment'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad services">
      <div className="container">
        <div className="services__header fade-up">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">Services I Provide</h2>
          <p className="section-subtitle">
            From a single article to a full content strategy — I cover everything
            your brand needs to grow online.
          </p>
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