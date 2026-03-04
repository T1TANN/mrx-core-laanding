import { useEffect, useRef, useState } from 'react'
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
import WhyUs from './components/WhyUs'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import BookCallModal from './components/BookCallModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        <Hero onOpenModal={() => setIsModalOpen(true)} />

        {/* Sections with opaque backgrounds so they scroll over the 3D scene */}
        <div className="sections-wrapper">
          <div className="sections-glow-top"></div>
          <Problem />
          <Solution />
          <HowItWorks />
          <WhyUs />
          <Portfolio />
          <Testimonials />
          <Results />
          <LeakFinder />
          <Guarantee />
          <Pricing />
          <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
        </div>
      </main>

      <Footer />

      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
