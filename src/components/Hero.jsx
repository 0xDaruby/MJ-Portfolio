import './Hero.css'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Articles Published' },
  { value: '10+', label: 'Happy Clients' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-label fade-up">Direct Response Copywriter</span>

          <h1 className="hero__name fade-up" style={{ transitionDelay: '0.1s' }}>
            Hello, I am<br />
            <em className="hero__name-accent">Mary Jane</em>
          </h1>

          <p className="hero__bio fade-up" style={{ transitionDelay: '0.2s' }}>
            I help coaches, consultants, and SaaS businesses turn attention into revenue through strategic messaging and persuasive scripts with high conversion.
          </p>

          <div className="hero__actions fade-up" style={{ transitionDelay: '0.3s' }}>
            <a href="#contact" className="btn-primary">Let's Talk</a>
            <a href="#about" className="btn-outline">Know More</a>
          </div>

          <div className="hero__stats fade-up" style={{ transitionDelay: '0.4s' }}>
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual fade-right" style={{ transitionDelay: '0.2s' }}>
          <div className="hero__img-wrap">
            <div className="hero__img-placeholder">
              <img src="/hero.png" alt="Mary Jane Miracle, professional copywriter" loading="eager" decoding="async" width="640" height="760" />
            </div>
            <div className="hero__img-ring" />
            
            <div className="hero__badge hero__badge--bottom">
              <span className="hero__badge-icon">⭐</span>
              <span>Top Rated</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll down</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}