import { useInView } from 'react-intersection-observer'
import './Problem.css'

export default function Problem() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  const leaks = [
    { icon: '⏱️', title: '₹8,000/day', subtitle: 'Revenue leaking daily', desc: 'Every single day without systems = money down the drain' },
    { icon: '🔥', title: '6 Hours/day', subtitle: 'Lost to operations', desc: 'Time spent on tasks that should be automated' },
    { icon: '💀', title: 'Lakhs/year', subtitle: 'Gone forever', desc: 'Months of compounded operational losses adding up' },
    { icon: '🧠', title: '2,000 Hours', subtitle: 'Dead productivity', desc: 'A year of your life spent firefighting' },
  ]

  return (
    <section className="problem section" id="problem" ref={ref}>
      <div className="gradient-orb gradient-orb--orange" style={{ width: '500px', height: '500px', top: '-10%', right: '-10%' }}></div>

      <div className="container">
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">Your Problem</span>
          <h2 className="section-title">Your Problem Is<br />Bigger Than You Think</h2>
          <p className="section-subtitle">You're not building a business. You're building a prison.</p>
        </div>

        <div className="problem__story">
          <div className={`problem__story-card glass-card reveal ${inView ? 'visible' : ''} reveal-delay-1`}>
            <div className="problem__story-time">3:47 AM</div>
            <p className="problem__story-text">
              Phone buzzes. Supplier flaked. Excel won't match. 47 WhatsApp "urgent" messages await.
              You've done this 1,095 days. Tomorrow will be 1,096.
            </p>
            <p className="problem__story-unless">Unless...</p>
          </div>
        </div>

        <div className="problem__grid">
          {leaks.map((leak, i) => (
            <div
              key={i}
              className={`problem__card glass-card reveal ${inView ? 'visible' : ''} reveal-delay-${i + 1}`}
            >
              <span className="problem__card-icon">{leak.icon}</span>
              <div className="problem__card-number">{leak.title}</div>
              <div className="problem__card-subtitle">{leak.subtitle}</div>
              <p className="problem__card-desc">{leak.desc}</p>
            </div>
          ))}
        </div>

        <div className={`problem__mantra glass-card reveal ${inView ? 'visible' : ''} reveal-delay-3`}>
          <div className="problem__mantra-quote">"</div>
          <p>
            I bought the laptop. I watched the YouTube videos. I hired the freelancer. I tried the software.
            But at 11 PM, I'm still updating Excel sheets, begging suppliers for stock updates, and praying
            things don't fall apart tomorrow.
          </p>
          <span className="problem__mantra-attr">— Every manufacturer before Mrx Core</span>
        </div>
      </div>
    </section>
  )
}
