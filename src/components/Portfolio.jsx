import { useState } from 'react'
import './Portfolio.css'

const projects = [
  { id: 1, title: 'Forbes Feature Article', category: 'Editorial', desc: 'Long-form investigative piece on digital marketing trends reaching 200k+ readers.', tags: ['SEO', 'Editorial'] },
  { id: 2, title: 'E-commerce Content Strategy', category: 'Strategy', desc: 'Full content audit and 6-month strategy for a fashion brand, growing organic traffic 140%.', tags: ['Strategy', 'SEO'] },
  { id: 3, title: 'SaaS Product Documentation', category: 'Technical', desc: 'Complete user documentation suite for a project management SaaS with 50k+ users.', tags: ['Technical', 'Docs'] },
  { id: 4, title: 'HubSpot Guest Post', category: 'Editorial', desc: 'Deep-dive guide on email marketing best practices, 2,500+ shares across LinkedIn.', tags: ['Copywriting', 'Editorial'] },
  { id: 5, title: 'Health Brand Blog Series', category: 'Content', desc: '30-article health & wellness blog series driving 80k monthly organic visitors.', tags: ['Content', 'SEO'] },
  { id: 6, title: 'Inc. Magazine Column', category: 'Editorial', desc: 'Monthly column on entrepreneurship and content strategy for Inc. Magazine.', tags: ['Editorial', 'Strategy'] },
]

const filters = ['All', 'Editorial', 'Strategy', 'Technical', 'Content']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="section-pad portfolio">
      <div className="container">
        <div className="portfolio__header fade-up">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            A selection of articles, strategies and documentation I'm proud of.
          </p>
        </div>

        <div className="portfolio__filters fade-up" style={{ transitionDelay: '0.1s' }}>
          {filters.map((f) => (
            <button
              key={f}
              className={`portfolio__filter${active === f ? ' portfolio__filter--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="portfolio__grid">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="portfolio-card fade-up"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="portfolio-card__thumb">
                <div className="portfolio-card__thumb-inner">
                  <span className="portfolio-card__thumb-letter">{p.title[0]}</span>
                </div>
              </div>
              <div className="portfolio-card__body">
                <span className="portfolio-card__category">{p.category}</span>
                <h3 className="portfolio-card__title">{p.title}</h3>
                <p className="portfolio-card__desc">{p.desc}</p>
                <div className="portfolio-card__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="portfolio-card__tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}