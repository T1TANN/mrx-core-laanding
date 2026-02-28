import { useInView } from 'react-intersection-observer'
import './Results.css'

export default function Results() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const testimonials = [
    {
      name: 'Rahul',
      age: 38,
      business: 'Mumbai — Snacks Manufacturing',
      avatar: '🧑‍💼',
      before: [ 'Excel at 2 AM every night', '47 WhatsApp urgents daily', '3 years without a single weekend off' ],
      after: [ '2-week Europe trip with family', 'Revenue increased +18%', 'Dad said: "I\'m proud of you."' ],
      highlight: '₹45K dead stock leak found in 12 minutes',
    },
    {
      name: 'Priya',
      age: 34,
      business: 'Bangalore — Cloud Kitchen',
      avatar: '👩‍💼',
      before: [ '₹1.8Cr revenue, ₹4L profit (2.2%)', '14-hour workdays, 7 days a week', 'Supplier overcharging 12% for 8 months' ],
      after: [ '₹3.4Cr revenue, 36% margin', 'Effective hourly: ₹78,000', 'First Sunday off in 2 years' ],
      highlight: 'Massive annual revenue increase',
    },
    {
      name: 'Vikram',
      age: 41,
      business: 'Delhi — Family Business',
      avatar: '👨‍💼',
      before: [ 'Dad wouldn\'t delegate anything', '"This is how we\'ve always done it"', '₹2.1L working capital stuck in inventory' ],
      after: [ 'Business valuation multiplied 4x', 'Dad: "Expand to Jaipur."', 'Smooth generational transition' ],
      highlight: '4x business valuation increase',
    },
  ]

  return (
    <section className="results section" id="results" ref={ref}>
      <div className="gradient-orb gradient-orb--orange" style={{ width: '500px', height: '500px', bottom: '-10%', right: '-10%' }}></div>

      <div className="container">
        <div className={`results__header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">Proof</span>
          <h2 className="section-title">Real Transformations</h2>
          <p className="section-subtitle">Stories from manufacturers who made the switch.*</p>
        </div>

        <div className="results__grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`results__card glass-card reveal ${inView ? 'visible' : ''} reveal-delay-${i + 1}`}
            >
              <div className="results__card-header">
                <div className="results__card-avatar">{t.avatar}</div>
                <div>
                  <h4 className="results__card-name">{t.name}, {t.age}</h4>
                  <span className="results__card-biz">{t.business}</span>
                </div>
              </div>

              <div className="results__card-highlight">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
                {t.highlight}
              </div>

              <div className="results__card-comparison">
                <div className="results__card-before">
                  <span className="results__card-tag results__card-tag--before">Before</span>
                  <ul>
                    {t.before.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="results__card-after">
                  <span className="results__card-tag results__card-tag--after">After</span>
                  <ul>
                    {t.after.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={`results__disclaimer reveal ${inView ? 'visible' : ''} reveal-delay-4`} style={{ textAlign: 'center', opacity: 0.5, fontSize: '0.8rem', marginTop: '1.5rem' }}>
          *Names changed for privacy. Results based on client engagements; individual outcomes may vary.
        </p>
      </div>
    </section>
  )
}
