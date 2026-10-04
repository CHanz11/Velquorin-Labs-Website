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
    href: "/services/ai-chatbots",
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
    href: "/services/ai-automation",
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
    href: "/services/conversational-ai-forms",
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
    href: "/services/website-design-maintenance",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="home-services-section">
      {/* Background effect */}
      <div
        aria-hidden="true"
        className="home-services-background-glow"
      />

      <div className="site-container home-services-container">
        {/* Section heading */}
        <div className="home-services-heading">
          <p className="home-services-eyebrow">
            Our Core Services
          </p>

          <h2 className="home-services-title">
            Solutions Built for
            <br />
            <span className="home-services-title-gradient">
              Modern Businesses
            </span>
          </h2>

          <p className="home-services-description">
            From intelligent conversations to automated workflows and modern
            websites, Velquorin Labs builds practical digital solutions
            designed around real business needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="home-services-grid">
          {services.map((service) => (
            <article
              key={service.number}
              className="home-service-card"
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="home-service-card-glow"
              />

              <div className="home-service-card-content">
                {/* Top metadata */}
                <div className="home-service-card-top">
                  <div>
                    <p className="home-service-label">
                      {service.label}
                    </p>

                    <span className="home-service-number-label">
                      Service {service.number}
                    </span>
                  </div>

                  <div className="home-service-number">
                    {service.number}
                  </div>
                </div>

                {/* Service content */}
                <h3 className="home-service-card-title">
                  {service.title}
                </h3>

                <p className="home-service-card-description">
                  {service.description}
                </p>

                {/* Features */}
                <div className="home-service-features">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="home-service-feature"
                    >
                      <span className="home-service-feature-icon">
                        <span className="home-service-feature-dot" />
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="home-service-link-wrapper">
                  <a
                    href={service.href}
                    className="home-service-link"
                  >
                    Explore Service

                    <span
                      aria-hidden="true"
                      className="home-service-link-arrow"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Supporting CTA */}
        <div className="home-services-cta">
          <div className="home-services-cta-content">
            <h3 className="home-services-cta-title">
              Need something more specific?
            </h3>

            <p className="home-services-cta-description">
              We can also build custom AI and digital solutions around your
              business requirements.
            </p>
          </div>

          <a
            href="/contact"
            className="home-services-cta-button"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}