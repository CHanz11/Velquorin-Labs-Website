const customSolutionFeatures = [
  {
    number: "01",
    title: "Built Around Your Business",
    description:
      "We start with your goals, challenges, and existing processes instead of forcing your business into a predefined solution.",
  },
  {
    number: "02",
    title: "Custom AI Systems",
    description:
      "Create tailored AI-powered tools and experiences designed around specific business requirements and workflows.",
  },
  {
    number: "03",
    title: "Connected Solutions",
    description:
      "Combine AI, automation, web experiences, and business integrations into one connected digital solution.",
  },
  {
    number: "04",
    title: "Designed to Grow",
    description:
      "Build with future expansion in mind so your solution can evolve as your operations, customers, and requirements change.",
  },
];

export default function CustomSolutionsSection() {
  return (
    <section
      id="custom-solutions"
      className="services-custom-section"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="services-custom-glow"
      />

      <div className="services-custom-container">
        {/* Heading */}
        <div className="services-custom-heading">
          <div className="services-custom-label">
            <span className="services-custom-label-dot" />

            <span>Custom AI Solutions</span>
          </div>

          <p className="services-custom-eyebrow">
            Built for Unique Business Needs
          </p>

          <h2 className="services-custom-title">
            Your Business Is Unique.{" "}
            <span>Your Solution Can Be Too.</span>
          </h2>

          <p className="services-custom-description">
            Not every business challenge fits into a standard service.
            Velquorin Labs can design custom AI and digital solutions around
            your specific goals, workflows, systems, and requirements.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="services-custom-features">
          {customSolutionFeatures.map((feature) => (
            <div
              key={feature.number}
              className="services-custom-card"
            >
              <div className="services-custom-card-content">
                <span className="services-custom-card-number">
                  {feature.number}
                </span>

                <div>
                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connected Solution */}
        <div className="services-custom-connected">
          <div className="services-custom-connected-inner">
            <div className="services-custom-connected-content">
              <div className="services-custom-connected-label">
                <span />

                <p>One Connected Solution</p>
              </div>

              <h3>
                Combine the Technology Your Business Needs.
              </h3>

              <p className="services-custom-connected-description">
                A custom solution can combine conversational AI, automation,
                forms, websites, integrations, and other digital capabilities
                into a system designed around the way your business operates.
              </p>

              {/* Technology Pills */}
              <div className="services-custom-pills">
                {[
                  "AI Chatbots",
                  "AI Automation",
                  "Conversational Forms",
                  "Web Solutions",
                  "Business Integrations",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="services-custom-cta">
              <a href="/contact">
                Discuss Your Idea
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Flow */}
        <div className="services-custom-flow-wrapper">
          <div className="services-custom-flow">
            <div className="services-custom-flow-content">
              <span>Business Need</span>

              <span className="services-custom-flow-arrow">→</span>

              <span>Strategy</span>

              <span className="services-custom-flow-arrow">→</span>

              <span>Custom Solution</span>

              <span className="services-custom-flow-arrow">→</span>

              <span>Build</span>

              <span className="services-custom-flow-arrow">→</span>

              <span>Grow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}