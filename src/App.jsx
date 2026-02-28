import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroScene from './components/HeroScene'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Results from './components/Results'
import Guarantee from './components/Guarantee'
import Pricing from './components/Pricing'
import LeakFinder from './components/LeakFinder'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scroll with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all reveal elements
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      lenis.destroy()
      observer.disconnect()
    }
  }, [])

  return (
    <div className="app">
      {/* Fixed 3D background that reacts to scroll */}
      <HeroScene />

      <Navbar />

      <main className="main-content">
        <Hero />

        {/* Sections with opaque backgrounds so they scroll over the 3D scene */}
        <div className="sections-wrapper">
          <div className="sections-glow-top"></div>
          <Problem />
          <Solution />
          <HowItWorks />
          <Results />
          <LeakFinder />
          <Guarantee />
          <Pricing />
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
