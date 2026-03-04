import { useEffect } from 'react'
import './BookCallModal.css'

export default function BookCallModal({ isOpen, onClose }) {
    useEffect(() => {
        // Prevent background scrolling when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    // We are using a placeholder script for Jotform embed right now
    // When the user provides the embed script or iframe, replace the placeholder below
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container glass-card" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="modal-content">
                    <h2 className="modal-title">Book Your Discovery Call</h2>
                    <p className="modal-subtitle">
                        Please answer a few quick questions so we can prepare for our conversation and ensure we're a good fit.
                    </p>

                    <div className="form-container">
                        {/* JOTFORM IFRAME */}
                        <iframe
                            id="JotFormIFrame-260623027608049"
                            title="Form"
                            onLoad={(e) => { e.target.contentWindow.scrollTo(0, 0); }}
                            allowtransparency="true"
                            allowFullScreen={true}
                            allow="geolocation; microphone; camera; fullscreen"
                            src="https://form.jotform.com/260623027608049"
                            frameBorder="0"
                            style={{ minWidth: '100%', maxWidth: '100%', height: '70vh', border: 'none' }}
                            scrolling="yes"
                        />
                        {/* END JOTFORM IFRAME */}
                    </div>
                </div>
            </div>
        </div>
    )
}
