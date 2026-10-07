export default function ServicesHeroSection() {
  return (
    <section className="services-hero-section">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="services-hero-glow services-hero-glow-primary"
      />

      {/* Secondary subtle glow */}
      <div
        aria-hidden="true"
        className="services-hero-glow services-hero-glow-secondary"
      />

      <div className="services-hero-container">
        <div className="services-hero-content">
          {/* Label */}
          <div className="services-hero-label">
            <span className="services-hero-label-dot" />

            <span>Our Services</span>
          </div>

          {/* Heading */}
          <h1 className="services-hero-title">
            Intelligent Solutions Built to{" "}
            <span className="services-hero-title-gradient">
              Move Your Business Forward.
            </span>
          </h1>

          {/* Description */}
          <p className="services-hero-description">
            Velquorin Labs builds practical AI and digital solutions that help
            businesses automate work, improve customer experiences, capture
            opportunities, and create stronger digital operations.
          </p>

          {/* Buttons */}
          <div className="services-hero-buttons">
            <a
              href="#services"
              className="services-hero-button-primary"
            >
              Explore Our Services
            </a>

            <a
              href="/contact"
              className="services-hero-button-secondary"
            >
              Discuss Your Project
            </a>
          </div>

          {/* Service labels */}
          <div className="services-hero-service-labels">
            <span>AI Chatbots</span>
            <span>AI Automation</span>
            <span>Conversational AI Forms</span>
            <span>Web Solutions</span>
            <span>Custom AI Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}