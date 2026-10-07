const services = [
  {
    number: "01",
    label: "AI CUSTOMER EXPERIENCE",
    title: "AI Chatbots",
    description:
      "Intelligent AI chatbots designed to answer customer questions, provide business information, capture leads, and support visitors around the clock.",
    features: [
      "24/7 automated customer support",
      "Business knowledge integration",
      "Lead capture and qualification",
    ],
  },
  {
    number: "02",
    label: "BUSINESS AUTOMATION",
    title: "AI Automation",
    description:
      "Automate repetitive workflows and connect business processes with intelligent systems designed to save time and reduce manual work.",
    features: [
      "Workflow automation",
      "Business process integration",
      "AI-powered task automation",
    ],
  },
  {
    number: "03",
    label: "SMART LEAD COLLECTION",
    title: "Conversational AI Forms",
    description:
      "Transform traditional forms into conversational experiences that intelligently collect, understand, validate, and organize customer information.",
    features: [
      "Conversational data collection",
      "Structured lead information",
      "Smart validation and workflows",
    ],
  },
  {
    number: "04",
    label: "WEB SOLUTIONS",
    title: "Website Design & Maintenance",
    description:
      "Modern, responsive websites designed to strengthen your digital presence, support your business goals, and stay reliable as your company grows.",
    features: [
      "Modern responsive websites",
      "Website updates and maintenance",
      "Performance and reliability",
    ],
  },
];

export default function ServicesOverviewSection() {
  return (
    <section id="services" className="services-overview-section">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="services-overview-glow services-overview-glow-primary"
      />

      <div
        aria-hidden="true"
        className="services-overview-glow services-overview-glow-secondary"
      />

      <div className="services-overview-container">
        {/* Heading */}
        <div className="services-overview-heading">
          <p className="services-overview-eyebrow">
            Our Core Services
          </p>

          <h2 className="services-overview-title">
            Practical Solutions for{" "}
            <span className="services-overview-title-gradient">
              Modern Businesses.
            </span>
          </h2>

          <p className="services-overview-description">
            From intelligent conversations to automated workflows and modern
            websites, Velquorin Labs builds digital solutions designed around
            real business needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="services-overview-grid">
          {services.map((service) => (
            <article
              key={service.number}
              className="services-overview-card"
            >
              <div className="services-overview-card-header">
                <div>
                  <p className="services-overview-card-label">
                    {service.label}
                  </p>

                  <p className="services-overview-card-service-number">
                    Service {service.number}
                  </p>
                </div>

                <div className="services-overview-card-number">
                  {service.number}
                </div>
              </div>

              <h3>{service.title}</h3>

              <p className="services-overview-card-description">
                {service.description}
              </p>

              <ul className="services-overview-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span className="services-overview-feature-icon">
                      <span />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <div className="services-overview-card-footer">
                <span>Explore Service →</span>
              </div>
            </article>
          ))}
        </div>

        {/* Custom solution strip */}
        <div className="services-overview-custom">
          <div className="services-overview-custom-content">
            <h3>Need something more specific?</h3>

            <p>
              We can also build custom AI and digital solutions around your
              business requirements.
            </p>
          </div>

          <a
            href="/contact"
            className="services-overview-custom-button"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}