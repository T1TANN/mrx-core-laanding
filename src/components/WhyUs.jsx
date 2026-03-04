import './WhyUs.css'

export default function WhyUs() {
    const reasons = [
        {
            title: 'Predictable Outcomes',
            desc: 'We don’t guess. Every system we build has defined metrics, timelines, and expected results before we write a single line of code.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
            )
        },
        {
            title: 'Built for Manufacturers',
            desc: 'We understand the difference between shop floor realities and board room projections. Our solutions bridge the gap between both.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            )
        },
        {
            title: 'Zero Technical Overhead',
            desc: 'You don’t need an IT department to manage our systems. We handle the heavy technical lifting so you can focus on production.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            )
        }
    ]

    return (
        <section className="why-us section" id="why-us">
            <div className="gradient-orb gradient-orb--orange why-us__orb-1"></div>

            <div className="container">
                <div className="reveal">
                    <span className="section-label">Why Choose MRX</span>
                    <h2 className="section-title">
                        The Difference<br />Between Trying and <span className="text-accent">Scaling</span>
                    </h2>
                    <p className="section-subtitle">
                        Most agencies leave you with software that your team actually hates using. We build systems
                        that integrate seamlessly into your daily operations.
                    </p>
                </div>

                <div className="why-us__grid">
                    {reasons.map((reason, idx) => (
                        <div className={`glass-card why-us__card reveal reveal-delay-${idx + 1}`} key={idx}>
                            <div className="why-us__icon">
                                {reason.icon}
                            </div>
                            <h3 className="why-us__card-title">{reason.title}</h3>
                            <p className="why-us__card-desc">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
