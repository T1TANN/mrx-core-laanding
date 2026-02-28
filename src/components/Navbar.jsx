import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Results', href: '#results' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" id="logo-link">
          <img src="/logo.jpeg" alt="Mrx Core" className="navbar__logo-img" />
          <span className="navbar__logo-text">MRX CORE</span>
        </a>

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`} id="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-wrapper">
            <a href="#cta" className="cta-button navbar__cta" id="nav-cta" onClick={() => setMobileOpen(false)}>
              Book Free Audit
            </a>
          </li>
        </ul>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
