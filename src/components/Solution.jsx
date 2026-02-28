import { useInView } from 'react-intersection-observer'
import './Solution.css'

export default function Solution() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const pillars = [
    {
      number: '01',
      title: 'We Build',
      desc: 'Custom ERP, inventory automation, compliance tracking, WhatsApp bot, supplier management, real-time dashboard — tailored to your manufacturing workflow.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'We Run',
      desc: 'Rapid response ops support, team training, monthly audits, data management. We handle the chaos so you don\'t have to.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'You Own',
      desc: 'All code, all data, full IP. Complete handover after engagement. Stay or leave — the system works independently.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      number: '04',
      title: 'You Scale',
      desc: 'Monthly 5-min voice audit. Revenue climbs. Expand locations, product lines, and sales channels — while you sleep.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="solution section" id="solution" ref={ref}>
      <div className="gradient-orb gradient-orb--purple" style={{ width: '600px', height: '600px', bottom: '-20%', left: '-15%' }}></div>

      <div className="container">
        <div className={`reveal ${inView ? 'visible' : ''}`}>
          <span className="section-label">The Solution</span>
          <h2 className="section-title">The 4 Pillars of<br />"You Sit, We Sweat"</h2>
          <p className="section-subtitle">Custom software + 90-day operations guarantee. Not an agency — we're operators.</p>
        </div>

        <div className="solution__grid">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`solution__card glass-card reveal ${inView ? 'visible' : ''} reveal-delay-${i + 1}`}
            >
              <div className="solution__card-header">
                <div className="solution__card-icon">{pillar.icon}</div>
                <span className="solution__card-number">{pillar.number}</span>
              </div>
              <h3 className="solution__card-title">{pillar.title}</h3>
              <p className="solution__card-desc">{pillar.desc}</p>
              <div className="solution__card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
