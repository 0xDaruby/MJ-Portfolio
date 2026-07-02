import { useState } from 'react'
import './Portfolio.css'

const portfolioItems = [
  {
    id: 'email-sequences',
    title: 'Email Sequences',
    category: 'Email',
    description: 'a selection of email sequences designed to nurture leads and drive conversions.',
    sampleCount: 8,
    icon: '✉️',
    tags: ['Email', 'Conversion'],
    samples: [
      {
        title: 'Email for client acquisition',
        summary: 'I crafted a persuasive email sequence to attract and convert potential clients, highlighting the unique value proposition and benefits of the service.',
        url: 'https://drive.google.com/drive/folders/1NlIbtZhpMYJ_5p0qOA11PuO0jgMKhS9N',
      },
      {
        title: 'Storytelling sale email',
        summary: 'I developed a compelling storytelling email sequence that engaged readers, built trust, and guided them towards making a purchase decision.',
        url: 'https://drive.google.com/drive/folders/1NlIbtZhpMYJ_5p0qOA11PuO0jgMKhS9N',
      },
      {
        title: 'DWA email sequence',
        summary: 'I created a targeted email sequence for DWA, focusing on delivering valuable content, addressing pain points, and encouraging recipients to take action.',
        url: 'https://drive.google.com/drive/folders/1NlIbtZhpMYJ_5p0qOA11PuO0jgMKhS9N',
      },
    ],
  },
  {
    id: 'blog-posts',
    title: 'Blog Posts',
    category: 'Content',
    description: 'SEO-driven blog content that strengthens authority, improves discoverability, and keeps readers engaged.',
    sampleCount: 1,
    icon: '✍️',
    tags: ['Blog', 'SEO'],
    samples: [
      {
        title: 'WorkFlo Blog Post',
        summary: 'A long-form article built around search intent, reader value, and clear conversion paths.',
        url: 'https://drive.google.com/drive/folders/14WLvTScnVqpb7bN6z-lGtG2TVrNq9ReP',
      },
    ],
  },
  {
    id: 'linkedin-twitter',
    title: 'LinkedIn & Twitter',
    category: 'Social',
    description: 'Authority-building posts designed to increase visibility, engagement, and trust across social platforms.',
    sampleCount: 27,
    icon: '📱',
    tags: ['Social', 'Thought Leadership'],
    samples: [
      {
        title: 'GW Thread 1',
        summary: '',
        url: 'https://drive.google.com/drive/folders/1LrPi8ApQDfE15brw_V90zkvXUdEsDYmv',
      },
      {
        title: 'GW Thread 27',
        summary: '',
        url: 'https://drive.google.com/drive/folders/1LrPi8ApQDfE15brw_V90zkvXUdEsDYmv',
      },
    ],
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    category: 'Ads',
    description: 'Platform-specific ad copy that sharpens messaging, boosts relevance, and supports campaign performance.',
    sampleCount: 1,
    icon: '📢',
    tags: ['Ads', 'Paid Media'],
    samples: [
      {
        title: 'Meta Ads',
        summary: 'A short-form ad concept for a variety of agencies, designed to capture attention quickly and support a clear brand message.',
        url: 'https://drive.google.com/drive/folders/1HxFXo-J6Q4KOyWEZhy-03GW_r7k7F4Jk',
      },
    ],
  },
  {
    id: 'sales-pages',
    title: 'Sales Page Copies',
    category: 'Sales',
    description: 'Persuasive sales pages that explain the offer clearly, address objections, and move readers to action.',
    sampleCount: 2,
    icon: '📄',
    tags: ['Sales', 'Conversion'],
    samples: [
      {
        title: 'Affiliate Marketing course',
        summary: '',
        url: 'https://drive.google.com/drive/folders/1Oyv5M-N56sBjNs5y4AruToZwGlwG6Elr',
      },
      {
        title: 'WordPress training Sales Page copy',
        summary: '',
        url: 'https://drive.google.com/drive/folders/1Oyv5M-N56sBjNs5y4AruToZwGlwG6Elr',
      },
    ],
  },
  {
    id: 'video-scripts',
    title: 'Video Scripts',
    category: 'Content',
    description: 'Educational and persuasive video scripts that keep viewers engaged while delivering a focused message.',
    sampleCount: 5,
    icon: '🎬',
    tags: ['Video', 'Content'],
    samples: [
      {
        title: 'Real Estate Video Script',
        summary: 'A concise script for a real estate video, designed to highlight property features and benefits while maintaining viewer interest.',
        url: 'https://drive.google.com/drive/folders/1B5MCz9ArwUuVAQT8F5TV0xV4h3CwFAAD',
      },
      {
        title: 'Reel Script for fitness trainer',
        summary: '.',
        url: 'https://drive.google.com/drive/folders/1B5MCz9ArwUuVAQT8F5TV0xV4h3CwFAAD',
      },
    ],
  },
]

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState(portfolioItems[0].id)

  const selectedItem = portfolioItems.find((item) => item.id === selectedId) || portfolioItems[0]

  const handleViewSamples = (item) => {
    setSelectedId(item.id)
    document.getElementById('portfolio-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="portfolio" className="section-pad portfolio">
      <div className="container">
        <div className="portfolio__header fade-up">
          <h2 className="section-title">Recent Work</h2>
          <p className="section-subtitle">
            A selection of my recent projects and writing samples.
          </p>
        </div>

        <div className="portfolio__grid">
          {portfolioItems.map((item, index) => (
            <article
              key={item.id}
              className={`portfolio-card fade-up${selectedItem.id === item.id ? ' portfolio-card--selected' : ''}`}
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <div className="portfolio-card__thumb">
                <div className="portfolio-card__thumb-inner">
                  <span className="portfolio-card__thumb-icon" aria-hidden="true">{item.icon}</span>
                </div>
              </div>
              <div className="portfolio-card__body">
                <span className="portfolio-card__category">{item.category}</span>
                <h3 className="portfolio-card__title">{item.title}</h3>
                <p className="portfolio-card__desc">{item.description}</p>
                <div className="portfolio-card__meta">
                  <span>{item.sampleCount} samples</span>
                  <span>{item.tags.join(' • ')}</span>
                </div>
                <div className="portfolio-card__tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="portfolio-card__tag">{tag}</span>
                  ))}
                </div>
                <button className="portfolio-card__action" onClick={() => handleViewSamples(item)}>
                  View Samples
                </button>
              </div>
            </article>
          ))}
        </div>

        <div id="portfolio-detail" className="portfolio-detail fade-up">
          <div className="portfolio-detail__header">
            <span className="section-label">Selected Work</span>
            <h3 className="portfolio-detail__title">{selectedItem.title}</h3>
            <p className="portfolio-detail__desc">{selectedItem.description}</p>
          </div>

          <div className="portfolio-detail__samples">
            {selectedItem.samples.map((sample) => (
              <div key={sample.title} className="portfolio-sample">
                <div>
                  <h4 className="portfolio-sample__title">{sample.title}</h4>
                  <p className="portfolio-sample__summary">{sample.summary}</p>
                </div>
                <a href={sample.url} target="_blank" rel="noreferrer" className="portfolio-sample__link">
                  Read Sample
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}