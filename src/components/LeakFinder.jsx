import { useInView } from 'react-intersection-observer'
import './LeakFinder.css'

export default function LeakFinder() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  const leakExamples = [
    { name: 'Rahul', leak: '₹45K dead stock about to be reordered', time: '12 min' },
    { name: 'Priya', leak: 'Supplier overcharging 12% for 8 months', time: '18 min' },
    { name: 'Vikram', leak: '₹2.1L working capital stuck in slow inventory', time: '22 min' },
  ]

  return (
    <section className="leak section" id="leak-finder" ref={ref}>
      <div className="container">
        <div className={`leak__header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">Free Offer</span>
          <h2 className="section-title">The "See It To Believe It" Offer</h2>
          <p className="section-subtitle">Free 30-minute Leak Finder. No pitch. Just proof. Then decide.</p>
        </div>

        <div className="leak__content">
          <div className={`leak__steps reveal ${inView ? 'visible' : ''} reveal-delay-1`}>
            <div className="leak__step-item glass-card">
              <div className="leak__step-num">1</div>
              <div>
                <h4>Factory Walkthrough</h4>
                <p>In-person or via video call — whatever works for you</p>
              </div>
            </div>
            <div className="leak__step-item glass-card">
              <div className="leak__step-num">2</div>
              <div>
                <h4>Find One Revenue Leak Live</h4>
                <p>We show you exactly where money is dripping out</p>
              </div>
            </div>
            <div className="leak__step-item glass-card">
              <div className="leak__step-num">3</div>
              <div>
                <h4>No Pitch. Just Proof.</h4>
                <p>See the leak, understand the fix, then decide with zero pressure</p>
              </div>
            </div>
          </div>

          <div className={`leak__examples reveal ${inView ? 'visible' : ''} reveal-delay-2`}>
            <h3 className="leak__examples-title">Recent Leak Discoveries</h3>
            {leakExamples.map((ex, i) => (
              <div key={i} className="leak__example glass-card">
                <div className="leak__example-avatar">
                  <span>{ex.name[0]}</span>
                </div>
                <div className="leak__example-info">
                  <span className="leak__example-name">{ex.name}'s Leak</span>
                  <p className="leak__example-desc">{ex.leak}</p>
                </div>
                <div className="leak__example-time">
                  Found in<br/><strong>{ex.time}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
