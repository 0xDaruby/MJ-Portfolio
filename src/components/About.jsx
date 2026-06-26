import './About.css'

const skills = [
  { label: 'SEO Writing', pct: 95 },
  { label: 'Content Strategy', pct: 90 },
  { label: 'Copywriting', pct: 88 },
  { label: 'Technical Writing', pct: 82 },
]

const highlights = [
  { icon: '📅', label: 'Experience', value: '10+ Years' },
  { icon: '📝', label: 'Articles Written', value: '500+' },
  { icon: '🌐', label: 'Websites Managed', value: '30+' },
  { icon: '🏆', label: 'Awards Won', value: '5' },
]

export default function About() {
  return (
    <section id="about" className="section-pad about">
      <div className="container about__inner">
        <div className="about__image-col fade-left">
          <div className="about__img-wrap">
            <div className="about__img-placeholder">
              {/* Replace with: <img src="/about-photo.jpg" alt="About me" /> */}
              <div className="about__img-initials">YN</div>
            </div>
            <div className="about__highlights">
              {highlights.map((h) => (
                <div key={h.label} className="about__highlight-card">
                  <span className="about__highlight-icon">{h.icon}</span>
                  <div>
                    <div className="about__highlight-value">{h.value}</div>
                    <div className="about__highlight-label">{h.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about__text-col fade-right">
          <span className="section-label">About Myself</span>
          <h2 className="section-title">
            Crafting words that<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>drive results</em>
          </h2>
          <p className="about__para">
            I have 10+ years of experience writing for the web in an SEO-friendly manner,
            published on top-rated sites. I deliver articles on time that follow your
            writing and formatting guidelines, with familiarity in extensive keyword research.
          </p>
          <p className="about__para" style={{ marginTop: '16px' }}>
            My articles are well-researched, driving strong traffic to your website.
            All content is created with the highest quality standards and tailored
            to your brand voice.
          </p>

          <div className="about__skills">
            {skills.map((s) => (
              <div key={s.label} className="about__skill">
                <div className="about__skill-header">
                  <span>{s.label}</span>
                  <span className="about__skill-pct">{s.pct}%</span>
                </div>
                <div className="about__skill-bar">
                  <div
                    className="about__skill-fill"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary" style={{ marginTop: '36px' }}>
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  )
}