const automationFeatures = [
  {
    number: "01",
    title: "Booking & Appointment Forms",
    description:
      "Make it easier for customers to request appointments, book services, and submit their preferred dates and details.",
  },
  {
    number: "02",
    title: "Contact & Inquiry Forms",
    description:
      "Collect customer questions, service inquiries, and contact information through forms tailored to your business.",
  },
  {
    number: "03",
    title: "Registration Forms",
    description:
      "Gather customer, member, or participant information through structured registration forms.",
  },
  {
    number: "04",
    title: "Custom Submission Forms",
    description:
      "Create forms for applications, requests, feedback, and other information your business needs to collect.",
  },
];

export default function AiAutomationSection() {
  return (
    <section className="services-automation-section">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="services-automation-glow"
      />

      <div className="services-automation-container">
        <div className="services-automation-top">
          {/* Left Content */}
          <div className="services-automation-content">
            <div className="services-automation-label">
              <span className="services-automation-label-dot" />

              <span>Custom Development · Service 02</span>
            </div>

            <p className="services-automation-eyebrow">
              Custom Forms Development
            </p>

            <h2 className="services-automation-title">
              Custom Forms Built Around{" "}
              <span className="services-automation-title-gradient">
                Your Business.
              </span>
            </h2>

            <p className="services-automation-description">
              Velquorin Labs develops modern, customized forms designed around your business workflows, customer requirements, and information collection needs.
            </p>

            <p className="services-automation-description">
              Whether you need a booking form, contact form, registration form, or custom submission form, we tailor the structure and fields to the information your business needs to collect.
            </p>

            <div className="services-automation-buttons">
              <a
                href="/contact"
                className="services-automation-button-primary"
              >
                Request Custom Forms
              </a>

              <a
                href="#custom-solutions"
                className="services-automation-button-secondary"
              >
                Discuss Your Requirements
              </a>
            </div>
                      </div>

          {/* Feature Cards */}
          <div className="services-automation-features">
            {automationFeatures.map((feature) => (
              <div
                key={feature.number}
                className="services-automation-card"
              >
                <div className="services-automation-card-header">
                  <span className="services-automation-card-number">
                    {feature.number}
                  </span>

                  <span className="services-automation-card-dot" />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Automation Flow */}
        <div className="services-automation-flow">
          <div className="services-automation-flow-content">
            <span>Business Needs</span>
            <span className="services-automation-flow-arrow">→</span>
            <span>Form Design</span>
            <span className="services-automation-flow-arrow">→</span>
            <span>Custom Fields</span>
            <span className="services-automation-flow-arrow">→</span>
            <span>Information Collection</span>
            <span className="services-automation-flow-arrow">→</span>
            <span>Organized Submissions</span>
          </div>
        </div>
      </div>
    </section>
  );
}