import { useInView } from 'react-intersection-observer'
import './HowItWorks.css'

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const steps = [
    {
      day: 'Day 1',
      title: 'Extraction',
      desc: '2-hour voice call while you drive. We pull out your chaos. No prep needed.',
      icon: '🎙️',
    },
    {
      day: 'Days 2-4',
      title: 'Panic-Proof Build',
      desc: 'Auto-inventory, FSSAI shield, WhatsApp bot built. You sleep. We code.',
      icon: '⚡',
    },
    {
      day: 'Day 5',
      title: 'Silent Switch',
      desc: 'Excel dies quietly. We handle team drama. You change absolutely nothing.',
      icon: '🔄',
    },
    {
      day: 'Day 6',
      title: 'Auto-Pilot Test',
      desc: '72-hour simulation. "What if I get COVID?" Tested. Every scenario covered.',
      icon: '🛡️',
    },
    {
      day: 'Day 7',
      title: 'Go-Live Shadow',
      desc: 'Real orders flow. Team calls us, not you. You post your victory.',
      icon: '🚀',
    },
    {
      day: 'Months 2-12',
      title: 'Scale Guide',
      desc: 'Monthly 5-min voice audit. Reply yes/no. Revenue climbs. You live your life.',
      icon: '📈',
    },
  ]

  return (
    <section className="hiw section" id="how-it-works" ref={ref}>
      <div className="container">
        <div className={`hiw__header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">The System</span>
          <h2 className="section-title">The 6-Step<br />"We Work, You Watch" System</h2>
          <p className="section-subtitle">From chaos to autopilot in 7 days. Then 11 months of scaling.</p>
        </div>

        <div className="hiw__timeline">
          <div className="hiw__timeline-line"></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={`hiw__step reveal ${inView ? 'visible' : ''} reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className="hiw__step-marker">
                <div className="hiw__step-dot">
                  <span>{step.icon}</span>
                </div>
              </div>
              <div className="hiw__step-content glass-card">
                <span className="hiw__step-day">{step.day}</span>
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`hiw__note glass-card reveal ${inView ? 'visible' : ''} reveal-delay-4`}>
          <strong>Weeks 2-4:</strong> Optimization phase. Where others fail, we stay. Fine-tuning until boringly reliable.
        </div>
      </div>
    </section>
  )
}
