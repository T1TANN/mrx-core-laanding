import { useInView } from 'react-intersection-observer'
import './FinalCTA.css'

export default function FinalCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="final-cta section" id="cta" ref={ref}>
      {/* Animated glow effect using CSS */}
      <div className="final-cta__glow"></div>
      <div className="final-cta__glow-2"></div>

      <div className="container final-cta__content">
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <div className="final-cta__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
            </svg>
          </div>

          <h2 className="final-cta__title">
            Ready to <span className="final-cta__title-accent">Flip</span><br />Your Business?
          </h2>

          <p className="final-cta__desc">
            Application takes 4 minutes. We review in 24 hrs. Not ready? We'll tell you why.<br />
            No hard sell. Hard truth.
          </p>

          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="cta-button final-cta__btn" id="final-cta-btn">
            Book Free 30-Minute Leak Finder
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <div className="final-cta__trust">
            <div className="final-cta__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>
              No credit card required
            </div>
            <div className="final-cta__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>
              100% free, no strings
            </div>
            <div className="final-cta__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>
              Results in 30 minutes
            </div>
          </div>

          <p className="final-cta__ps">
            <strong>P.S.</strong> Rahul was skeptical too. Then we found his ₹45K leak in 12 minutes. Book the call. Or keep bleeding. <strong>Your move.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
