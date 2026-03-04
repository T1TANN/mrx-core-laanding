import './Testimonials.css'

export default function Testimonials() {
    const testimonials = [
        {
            quote: "MRX didn't just build us software; they rebuilt our operations. We went live in 18 days and saw our throughput increase by 22% in the first month.",
            name: "Rajesh Patel",
            role: "Operations Director, Apex Manufacturing",
            rating: 5
        },
        {
            quote: "Before MRX, we were running a ₹15L/month facility on spreadsheets and prayer. Their custom dashboard gave me my weekends back.",
            name: "Sanjay Gupta",
            role: "Founder, Gupta Auto Parts",
            rating: 5
        },
        {
            quote: "The only agency I've worked with that actually understands the factory floor. Their 'Business-in-a-Box' is exactly what they promised.",
            name: "Meera Reddy",
            role: "CEO, Reddy Precision",
            rating: 5
        }
    ]

    return (
        <section className="testimonials section" id="testimonials">
            <div className="gradient-orb gradient-orb--orange testimonials__orb-1"></div>

            <div className="container">
                <div className="reveal testimonials__header">
                    <span className="section-label">Client Success</span>
                    <h2 className="section-title">
                        Don't Just Take<br />Our <span className="text-accent">Word For It</span>
                    </h2>
                </div>

                <div className="testimonials__grid">
                    {testimonials.map((testimonial, idx) => (
                        <div className={`glass-card testimonials__card reveal reveal-delay-${idx + 1}`} key={idx}>
                            <div className="testimonials__stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="var(--accent-primary)" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                ))}
                            </div>
                            <p className="testimonials__quote">"{testimonial.quote}"</p>
                            <div className="testimonials__author">
                                <div className="testimonials__avatar">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="testimonials__author-info">
                                    <span className="testimonials__name">{testimonial.name}</span>
                                    <span className="testimonials__role">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
