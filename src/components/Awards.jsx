import './Awards.css'

const awards = [
  {
    year: '2023',
    title: 'Best Content Strategist',
    org: 'Digital Marketing Awards',
    desc: 'Recognised for outstanding long-form content strategy that drove measurable business results.',
  },
  {
    year: '2021',
    title: 'Top Writer — Forbes',
    org: 'Forbes Contributor Network',
    desc: 'Featured as a top contributor with consistently high reader engagement and social shares.',
  },
  {
    year: '2019',
    title: 'Best Writer Award',
    org: 'Content Marketing Institute',
    desc: 'Awarded for an investigative short story and editorial excellence in B2B writing.',
  },
  {
    year: '2017',
    title: 'SEO Content Excellence',
    org: 'Moz Community Awards',
    desc: 'Recognised for a series of technical SEO articles that became reference material in the field.',
  },
]

const testimonials = [
  {
    text: 'Delivered 14 articles on schedule, all well-researched and SEO-optimised. Fixed revision requests within hours. Highly recommended.',
    name: 'Mark Cuban',
    role: 'Entrepreneur & Investor',
  },
  {
    text: 'The best content writer we have worked with. Traffic increased 140% in three months after implementing the strategy.',
    name: 'Sarah Mitchell',
    role: 'Head of Marketing, TechCorp',
  },
]

export default function Awards() {
  return (
    <section id="awards" className="section-pad awards">
      <div className="container">
        <div className="awards__header fade-up">
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Achievements & Awards</h2>
          <p className="section-subtitle">
            Professional recognition collected over a decade of writing for the web's most trusted publications.
          </p>
        </div>

        <div className="awards__body">
          <div className="awards__timeline fade-left" style={{ transitionDelay: '0.1s' }}>
            {awards.map((a, i) => (
              <div key={a.title} className="award-item">
                <div className="award-item__year">{a.year}</div>
                <div className="award-item__connector">
                  <div className="award-item__dot" />
                  {i < awards.length - 1 && <div className="award-item__line" />}
                </div>
                <div className="award-item__content">
                  <h3 className="award-item__title">{a.title}</h3>
                  <span className="award-item__org">{a.org}</span>
                  <p className="award-item__desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="awards__testimonials fade-right" style={{ transitionDelay: '0.2s' }}>
            <h3 className="awards__testimonials-heading">Client Appreciation</h3>
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__quote">&ldquo;</div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__footer">
                  <div className="testimonial-card__avatar">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}