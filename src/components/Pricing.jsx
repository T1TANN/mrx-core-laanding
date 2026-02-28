import { useInView } from 'react-intersection-observer'
import './Pricing.css'

export default function Pricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const bonuses = [
    'Auto-Inventory System',
    'FSSAI Compliance Shield',
    'Production Scheduler',
    'WhatsApp Order Bot',
    'Supplier Automation',
    'Expiry Tracking Engine',
    'Real-time Dashboard',
    'Team Training Program',
  ]

  return (
    <section className="pricing section" id="pricing" ref={ref}>
      <div className="container">
        <div className={`pricing__header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">Investment</span>
          <h2 className="section-title">What You Get</h2>
          <p className="section-subtitle">Total bonus value: ₹3,00,000 — Free. We bet on your success.</p>
        </div>

        <div className="pricing__content">
          <div className={`pricing__bonuses reveal ${inView ? 'visible' : ''} reveal-delay-1`}>
            <h3 className="pricing__bonuses-title">Everything Included</h3>
            <div className="pricing__bonuses-grid">
              {bonuses.map((bonus, i) => (
                <div key={i} className="pricing__bonus-item glass-card">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  {bonus}
                </div>
              ))}
            </div>
          </div>

          <div className={`pricing__card glass-card reveal ${inView ? 'visible' : ''} reveal-delay-2`}>
            <div className="pricing__card-glow"></div>
            <div className="pricing__card-badge">Most Popular</div>

            <div className="pricing__card-price">
              <span className="pricing__card-currency">₹</span>
              <span className="pricing__card-amount">5,99,000</span>
              <span className="pricing__card-period">for 12 months</span>
            </div>

            <div className="pricing__card-options">
              <div className="pricing__option">
                <span className="pricing__option-label">EMI Option</span>
                <span className="pricing__option-value">₹2.1L × 3 months</span>
                <span className="pricing__option-note">No extra cost</span>
              </div>
              <div className="pricing__option">
                <span className="pricing__option-label">Upfront Discount</span>
                <span className="pricing__option-value">₹5.09L one-time</span>
                <span className="pricing__option-note">Save ₹90,000</span>
              </div>
            </div>

            <div className="pricing__card-self-fund">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              <div>
                <strong>Self-Funding:</strong> Month 1 audit typically finds ₹2L+ leak. Program pays for itself.
              </div>
            </div>

            <div className="pricing__card-net">
              <span>Net:</span> Pay ₹5L. Gain ₹30L+ and your life.
            </div>

            <a href="#cta" className="cta-button pricing__cta" id="pricing-cta">
              Book Free Leak Finder
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={`pricing__urgency reveal ${inView ? 'visible' : ''} reveal-delay-3`}>
          <div className="pricing__urgency-inner glass-card">
            <div className="pricing__urgency-spots">
              <div className="pricing__urgency-indicator">
                <span className="pricing__urgency-dot"></span>
                <span className="pricing__urgency-dot pricing__urgency-dot--filled"></span>
                <span className="pricing__urgency-dot pricing__urgency-dot--filled"></span>
                <span className="pricing__urgency-dot pricing__urgency-dot--empty"></span>
                <span className="pricing__urgency-dot pricing__urgency-dot--empty"></span>
                <span className="pricing__urgency-dot pricing__urgency-dot--empty"></span>
              </div>
              <span>Q2 2025: <strong>2 spots left</strong></span>
            </div>
            <p>Q3 2025: Waitlist (price +₹75K, 3-month delay)</p>
            <p className="pricing__urgency-cost">Every month you wait = <strong>₹3.5L gone forever</strong></p>
          </div>
        </div>
      </div>
    </section>
  )
}
