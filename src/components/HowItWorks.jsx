import { useInView } from 'react-intersection-observer'
import './HowItWorks.css'

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const steps = [
    {
      day: 'Days 1–3',
      title: 'Extraction & Discovery',
      desc: 'Deep-dive voice calls + factory/ops walkthrough. We pull out your chaos. No prep needed.',
      icon: '🎙️',
    },
    {
      day: 'Days 4–10',
      title: 'Panic-Proof Build',
      desc: 'Custom ERP, automation tools, WhatsApp bot, dashboards built. You sleep. We code.',
      icon: '⚡',
    },
    {
      day: 'Days 11–14',
      title: 'Silent Switch',
      desc: 'Old systems phased out quietly. We handle team onboarding and drama. You change nothing.',
      icon: '🔄',
    },
    {
      day: 'Days 15–17',
      title: 'Auto-Pilot Test',
      desc: '72-hour simulation. "What if I\'m unavailable?" Tested. Every scenario covered.',
      icon: '🛡️',
    },
    {
      day: 'Days 18–20',
      title: 'Go-Live Shadow',
      desc: 'Real orders flow. Team calls us, not you. System goes live with full support.',
      icon: '🚀',
    },
    {
      day: 'Day 21–90',
      title: 'Scale & Optimize',
      desc: 'Monthly 5-min voice audit. Continuous optimization. Revenue climbs. You live your life.',
      icon: '📈',
    },
  ]

  return (
    <section className="hiw section" id="how-it-works" ref={ref}>
      <div className="container">
        <div className={`hiw__header reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">The System</span>
          <h2 className="section-title">The 6-Step<br />"We Work, You Watch" System</h2>
          <p className="section-subtitle">From chaos to autopilot in 20 days. Then continuous scaling with our 90-day guarantee.</p>
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
          <strong>Weeks 3–4:</strong> Optimization phase. Where others fail, we stay. Fine-tuning until boringly reliable.
        </div>
      </div>
    </section>
  )
}
