import './Portfolio.css'

export default function Portfolio() {
    const projects = [
        {
            title: 'Automated Quote Generator',
            category: 'System Automation',
            metric: 'Reduced quote time by 80%',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
        },
        {
            title: 'Inventory Forecasting Engine',
            category: 'Data Analytics',
            metric: 'Prevented ₹10L in stockouts',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        },
        {
            title: 'Shop-Floor Operations Dashboard',
            category: 'Custom Software',
            metric: 'Increased factory throughput 22%',
            image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800',
        }
    ]

    return (
        <section className="portfolio section" id="portfolio">
            <div className="gradient-orb gradient-orb--purple portfolio__orb-1"></div>

            <div className="container">
                <div className="reveal portfolio__header">
                    <div>
                        <span className="section-label">Our Work</span>
                        <h2 className="section-title">
                            Proven Systems<br />Driving <span className="text-accent">Real ROI</span>
                        </h2>
                    </div>
                    <p className="section-subtitle portfolio__subtitle">
                        Take a look at how we've transformed manufacturing businesses from bottlenecked operations to scalable machines.
                    </p>
                </div>

                <div className="portfolio__grid">
                    {projects.map((project, idx) => (
                        <div className={`portfolio__card reveal reveal-delay-${idx + 1}`} key={idx}>
                            <div className="portfolio__image-wrapper">
                                <div className="portfolio__overlay"></div>
                                <img src={project.image} alt={project.title} className="portfolio__image" />
                                <div className="portfolio__metric">
                                    <span className="portfolio__metric-dot"></span>
                                    {project.metric}
                                </div>
                            </div>
                            <div className="portfolio__content">
                                <span className="portfolio__category">{project.category}</span>
                                <h3 className="portfolio__title">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
