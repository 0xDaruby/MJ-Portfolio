import { useEffect, useRef, useState } from 'react'
import './About.css'

const skills = [
  { label: 'Direct Response Copywriting', pct: 98 },
  { label: 'Content Strategy', pct: 90 },
  { label: 'Copywriting', pct: 88 },
  { label: 'Conversion Optimization', pct: 90 },
]

const highlights = [
  { icon: '/calendar.png', label: 'Experience', value: '5+ Years' },
  { icon: '/book.png', label: 'Articles Written', value: '50+' },
]

export default function About() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section id="about" className="section-pad about" ref={sectionRef}>
      <div className="container about__inner">
        <div className="about__image-col fade-left">
          <div className="about__img-wrap">
            <div className="about__img-placeholder">
              <img src="/about-photo.jpg" alt="Mary Jane Miracle in a professional portrait" loading="lazy" decoding="async" width="640" height="800" />
            </div>
            <div className="about__highlights">
              {highlights.map((h) => (
                <div key={h.label} className="about__highlight-card">
                  <span className="about__highlight-icon">
                    <img src={h.icon} alt="" />
                  </span>
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
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting words that<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>drive results</em>
          </h2>
          <p className="about__para">
          I believe great copy does more than just sound good it should solve business problems.
          By combining customer psychology, market research, and persuasive messaging, 
          I create copy that connects with the right audience and inspires meaningful action.
          </p>
          <p className="about__para" style={{ marginTop: '16px' }}>
            Whether it's a website, landing page, sales page, or email campaign, 
            every word is crafted with a clear purpose: to communicate your value, build trust,
            and turn attention into measurable business growth.
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
                    className={`about__skill-fill ${hasAnimated ? 'is-visible' : ''}`}
                    style={{ '--target-width': `${s.pct}%` }}
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