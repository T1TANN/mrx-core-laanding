import { useEffect, useRef, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef()
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroH = window.innerHeight
      // Fade out hero text as user scrolls
      setOpacity(Math.max(0, 1 - scrollY / (heroH * 0.6)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__content container" style={{ opacity, transform: `translateY(${(1 - opacity) * -40}px)` }}>
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          Only 2 Spots Left for Q2 2025
        </div>

        <h1 className="hero__title">
          We <span className="hero__title-accent">Build</span>, Run &amp; Scale<br />
          Your Food Business<br />
          <span className="hero__title-highlight">in 7 Days</span>
        </h1>

        <p className="hero__subtitle">
          The "Business-in-a-Box Flip" for food manufacturers doing ₹50L+ who want to stop being the bottleneck. Custom software + 12-month operations management. You sit. We sweat.
        </p>

        <div className="hero__actions">
          <a href="#cta" className="cta-button hero__cta" id="hero-cta">
            Book Free 30-Min Leak Finder
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#how-it-works" className="cta-button-outline" id="hero-secondary-cta">
            See How It Works
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">47+</span>
            <span className="hero__stat-label">Businesses Flipped</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">₹30L+</span>
            <span className="hero__stat-label">Avg. Revenue Gain</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">7</span>
            <span className="hero__stat-label">Days to Go-Live</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" style={{ opacity }}>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
