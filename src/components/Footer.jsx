import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/logo.jpeg" alt="Mrx Core" className="footer__logo-img" />
              <span className="footer__logo-text">MRX CORE</span>
            </div>
            <p className="footer__tagline">
              We build, run, and scale your business systems.<br />
              You sit. We sweat.
            </p>
          </div>

          <div className="footer__links-group">
            <h4>Navigate</h4>
            <a href="#problem">Your Problem</a>
            <a href="#solution">The Solution</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#results">Results</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer__links-group">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>

          <div className="footer__links-group">
            <h4>Contact</h4>
            <a href="mailto:mrxcore.official@gmail.com">mrxcore.official@gmail.com</a>
            <a href="tel:+919028546772">+91 90285 46772</a>
            <a href="#cta">Book a Call</a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Mrx Core. All rights reserved.</p>
          <p className="footer__disclaimer">
            "We do not replace legal ownership or statutory responsibility. We design, operate, and optimize systems under your authority."
          </p>
        </div>
      </div>
    </footer>
  )
}
