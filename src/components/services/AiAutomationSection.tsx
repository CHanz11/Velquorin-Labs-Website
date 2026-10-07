const automationFeatures = [
  {
    number: "01",
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes and routine tasks so your team can spend more time on higher-value work.",
  },
  {
    number: "02",
    title: "Business Integrations",
    description:
      "Connect the tools your business already uses so information can move between systems with less manual work.",
  },
  {
    number: "03",
    title: "AI-Powered Tasks",
    description:
      "Use AI to understand information, organize data, generate responses, and assist with everyday business operations.",
  },
  {
    number: "04",
    title: "Custom Automation",
    description:
      "Build automation workflows around your specific processes, requirements, and business goals.",
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

              <span>Business Automation · Service 02</span>
            </div>

            <p className="services-automation-eyebrow">
              AI Automation
            </p>

            <h2 className="services-automation-title">
              Smarter Workflows Built to{" "}
              <span className="services-automation-title-gradient">
                Save Time.
              </span>
            </h2>

            <p className="services-automation-description">
              Velquorin Labs creates intelligent automation systems that connect
              business processes, reduce repetitive manual work, and help teams
              operate more efficiently.
            </p>

            <p className="services-automation-description">
              From simple task automation to connected AI-powered workflows, we
              design solutions around how your business actually operates.
            </p>

            <div className="services-automation-buttons">
              <a
                href="/contact"
                className="services-automation-button-primary"
              >
                Discuss an Automation
              </a>

              <a
                href="#custom-solutions"
                className="services-automation-button-secondary"
              >
                Explore Custom Solutions
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
            <span>Business Process</span>
            <span className="services-automation-flow-arrow">→</span>
            <span>Automation</span>
            <span className="services-automation-flow-arrow">→</span>
            <span>AI Assistance</span>
            <span className="services-automation-flow-arrow">→</span>
            <span>Connected Systems</span>
            <span className="services-automation-flow-arrow">→</span>
            <span>Better Operations</span>
          </div>
        </div>
      </div>
    </section>
  );
}