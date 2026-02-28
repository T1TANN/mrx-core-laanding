import { useInView } from 'react-intersection-observer'
import './Guarantee.css'

export default function Guarantee() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  const antiAgency = [
    { agency: 'Builds and disappears', mrx: 'Builds, runs, and stays 12 months' },
    { agency: 'Delivers "software"', mrx: 'Delivers a running business system' },
    { agency: 'No accountability', mrx: 'Monthly audits with signed guarantees' },
    { agency: '50+ clients', mrx: 'Only 6 clients — personal attention' },
    { agency: 'Hourly billing', mrx: 'Outcome-based partnership' },
  ]

  return (
    <section className="guarantee section" id="guarantee" ref={ref}>
      <div className="gradient-orb gradient-orb--purple" style={{ width: '400px', height: '400px', top: '-10%', left: '-5%' }}></div>

      <div className="container">
        <div className={`guarantee__header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">Trust</span>
          <h2 className="section-title">We're Not an Agency.<br />We're Operators.</h2>
        </div>

        <div className={`guarantee__comparison glass-card reveal ${inView ? 'visible' : ''} reveal-delay-1`}>
          <div className="guarantee__comparison-header">
            <div className="guarantee__col-header guarantee__col-header--agency">Typical Agency</div>
            <div className="guarantee__col-header guarantee__col-header--mrx">MRX Core</div>
          </div>
          {antiAgency.map((row, i) => (
            <div key={i} className="guarantee__row">
              <div className="guarantee__cell guarantee__cell--agency">
                <span className="guarantee__x">✗</span>
                {row.agency}
              </div>
              <div className="guarantee__cell guarantee__cell--mrx">
                <span className="guarantee__check">✓</span>
                {row.mrx}
              </div>
            </div>
          ))}
        </div>

        <div className={`guarantee__promise reveal ${inView ? 'visible' : ''} reveal-delay-2`}>
          <div className="guarantee__promise-inner glass-card">
            <div className="guarantee__shield">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9,12 11,14 15,10"/>
              </svg>
            </div>
            <h3 className="guarantee__promise-title">"ROI Up, System Runs, or We Work Free"</h3>
            <p className="guarantee__promise-desc">
              Don't find leaks? Full refund of ₹5L + ₹1L for your time. This is a contract. We sign it. You sleep.
            </p>
            <div className="guarantee__quals">
              <span className="guarantee__qual">₹50L+ revenue</span>
              <span className="guarantee__qual">2+ team members</span>
              <span className="guarantee__qual">Willing to delegate</span>
              <span className="guarantee__qual">Respond within 48 hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
