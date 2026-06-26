import './Hero.css'

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '200+', label: 'Articles Published' },
  { value: '50+', label: 'Happy Clients' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-label fade-up">Professional Content Writer</span>

          <h1 className="hero__name fade-up" style={{ transitionDelay: '0.1s' }}>
            Hello, I am<br />
            <em className="hero__name-accent">Your Name</em>
          </h1>

          <p className="hero__bio fade-up" style={{ transitionDelay: '0.2s' }}>
            A long-time content writer, internet marketer, and website owner with
            10+ years of experience in digital marketing and SEO-driven content strategy.
          </p>

          <div className="hero__actions fade-up" style={{ transitionDelay: '0.3s' }}>
            <a href="#contact" className="btn-primary">Hire Me</a>
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
              {/* Replace with: <img src="/your-photo.png" alt="Your Name" /> */}
              <div className="hero__img-initials">YN</div>
            </div>
            <div className="hero__img-ring" />
            <div className="hero__badge hero__badge--top">
              <span className="hero__badge-icon">✍</span>
              <span>SEO Expert</span>
            </div>
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