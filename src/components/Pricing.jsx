import { useInView } from 'react-intersection-observer'
import './Pricing.css'

export default function Pricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const tiers = [
    {
      name: 'Starter',
      price: '4,00,000',
      period: '90-day engagement',
      badge: null,
      features: [
        'Core ERP & Automation Setup',
        'Inventory Management System',
        'Real-time Dashboard',
        'Team Training Program',
        'WhatsApp Order Bot',
        '30-Day Optimization Support',
      ],
      cta: 'Book Free Leak Finder',
    },
    {
      name: 'Growth',
      price: '9,00,000',
      period: '90-day engagement',
      badge: 'Most Popular',
      features: [
        'Everything in Starter, plus:',
        'Compliance Tracking (FSSAI + more)',
        'Supplier Automation',
        'Production Scheduler',
        'Expiry Tracking Engine',
        'Full 90-Day Ops Management',
        'Monthly Voice Audits',
      ],
      cta: 'Book Free Leak Finder',
    },
    {
      name: 'Enterprise',
      price: '15,00,000',
      period: '90-day engagement',
      badge: 'Full Suite',
      features: [
        'Everything in Growth, plus:',
        'Multi-Location Support',
        'Custom Integrations & APIs',
        'Dedicated Account Manager',
        'Priority 24/7 Support',
        'Advanced Analytics & Forecasting',
        'Scalability Consulting',
        'Full IP & Code Handover',
      ],
      cta: 'Book Free Leak Finder',
    },
  ]

  return (
    <section className="pricing section" id="pricing" ref={ref}>
      <div className="container">
        <div className={`pricing__header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">Investment</span>
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">Three tiers designed for different stages of growth. All backed by our 90-day guarantee.</p>
        </div>

        <div className="pricing__tiers">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`pricing__card glass-card reveal ${inView ? 'visible' : ''} reveal-delay-${i + 1} ${tier.badge === 'Most Popular' ? 'pricing__card--featured' : ''}`}
            >
              <div className="pricing__card-glow"></div>
              {tier.badge && <div className="pricing__card-badge">{tier.badge}</div>}

              <h3 className="pricing__card-name">{tier.name}</h3>

              <div className="pricing__card-price">
                <span className="pricing__card-currency">₹</span>
                <span className="pricing__card-amount">{tier.price}</span>
                <span className="pricing__card-period">{tier.period}</span>
              </div>

              <ul className="pricing__card-features">
                {tier.features.map((feature, j) => (
                  <li key={j} className="pricing__card-feature">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#cta" className={`cta-button pricing__cta ${tier.badge === 'Most Popular' ? '' : 'pricing__cta--outline'}`} id={`pricing-cta-${i}`}>
                {tier.cta}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className={`pricing__self-fund glass-card reveal ${inView ? 'visible' : ''} reveal-delay-4`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <div>
            <strong>Self-Funding:</strong> Month 1 audit typically finds ₹2L+ leak. The program pays for itself.
          </div>
        </div>

        <div className={`pricing__urgency reveal ${inView ? 'visible' : ''} reveal-delay-5`}>
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
            <p>Q3 2025: Waitlist (price increase + delay)</p>
            <p className="pricing__urgency-cost">Every month you wait = <strong>revenue leaking forever</strong></p>
          </div>
        </div>
      </div>
    </section>
  )
}
