import { useState } from 'react'
import './Portfolio.css'

const portfolioItems = [
  {
    id: 'email-sequences',
    title: 'Email Sequences',
    category: 'Email',
    description: 'Welcome, nurture, launch, and recovery email flows that guide subscribers toward action with clarity and momentum.',
    sampleCount: 8,
    icon: '✉️',
    tags: ['Email', 'Conversion'],
    samples: [
      {
        title: 'Lead Magnet Welcome Sequence',
        summary: 'A five-email onboarding sequence that introduces the offer, builds trust, and encourages the next step.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
      },
      {
        title: 'Cart Recovery Sequence',
        summary: 'A persuasive re-engagement flow designed to recover abandoned interest with urgency and value.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
      },
      {
        title: 'Launch Email Series',
        summary: 'A multi-email campaign that creates anticipation and highlights the offer clearly.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
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
        title: 'SEO Content Sample',
        summary: 'A long-form article built around search intent, reader value, and clear conversion paths.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
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
        title: 'Thought Leadership Post',
        summary: 'A post designed to spark conversation while reinforcing expertise and relevance.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
      },
      {
        title: 'Brand Awareness Post',
        summary: 'A concise social post crafted to increase reach and create a stronger brand presence.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
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
        title: 'Meta Ad Copy Sample',
        summary: 'A short-form ad concept focused on attention, value, and a clear call to action.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
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
        title: 'Product Launch Page',
        summary: 'A conversion-focused page structured for clarity, trust, and a stronger offer narrative.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
      },
      {
        title: 'Service Sales Page',
        summary: 'A benefits-led page designed to communicate value and make the offer feel easier to choose.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
      },
    ],
  },
  {
    id: 'video-ads',
    title: 'Video Ads Scripts',
    category: 'Ads',
    description: 'Short-form video concepts written to capture attention quickly and support a clear brand message.',
    sampleCount: 1,
    icon: '🎥',
    tags: ['Video', 'Ads'],
    samples: [
      {
        title: 'Short Video Script',
        summary: 'A concise script built to hook viewers early and guide them toward the intended action.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
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
        title: 'Explainer Video Script',
        summary: 'A structured script that turns complex ideas into a clear and engaging story.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
      },
    ],
  },
  {
    id: 'youtube-scripts',
    title: 'YouTube Scripts',
    category: 'Content',
    description: 'Narrative-driven video scripts tailored for audience retention, clarity, and a strong finish.',
    sampleCount: 1,
    icon: '▶️',
    tags: ['YouTube', 'Video'],
    samples: [
      {
        title: 'YouTube Script Sample',
        summary: 'A ready-to-record script written to keep pacing steady while reinforcing the main message.',
        url: 'https://drive.google.com/drive/u/0/my-drive',
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
          <span className="section-label">My Work</span>
          <h2 className="section-title">Recent Work</h2>
          <p className="section-subtitle">
            A selection of service-based writing samples designed to show the value of the work at a glance.
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