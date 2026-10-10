
const connectedServices = [
  {
    number: "01",
    title: "Web Solutions",
    description: "Design, development & maintenance",
  },
  {
    number: "02",
    title: "Custom Forms",
    description: "Booking, contact & submissions",
  },
  {
    number: "03",
    title: "SHASHA AI",
    description: "24/7 website customer support",
  },
  {
    number: "04",
    title: "AI Form Assistant",
    description: "Prompt-based form creation",
  },
  {
    number: "05",
    title: "Client Operations",
    description: "Projects, files & client management",
  },
];


export default function ConnectedExperienceSection() {
  return (
    <section className="connected-experience">
      {/* Background design */}
      <div
        aria-hidden="true"
        className="connected-experience-background"
      >
        <div className="connected-experience-glow connected-experience-glow-top" />
        <div className="connected-experience-glow connected-experience-glow-bottom" />
      </div>

      <div className="connected-experience-container">
        {/* Heading */}
        <div className="connected-experience-heading">
          <p className="connected-experience-eyebrow">
            Integrated Digital Solutions
          </p>

          <h2 className="connected-experience-title">
            One Connected{" "}
            <span className="connected-experience-gradient">
              Digital Experience
            </span>
          </h2>

          <p className="connected-experience-description">
            From websites and custom forms to AI-powered products and client
            operations, Velquorin Labs helps businesses build a more connected
            digital experience.
          </p>
        </div>

        {/* Connected system */}
        <div className="connected-experience-system">
          {/* Inner background glow */}
          <div
            aria-hidden="true"
            className="connected-experience-inner-glow"
          />

          <div className="connected-experience-grid">
            {connectedServices.map((service, index) => (
              <div
                key={service.number}
                className="connected-experience-item"
              >
                {/* Card */}
                <article className="connected-experience-card">
                  <div className="connected-experience-number">
                    {service.number}
                  </div>

                  <h3 className="connected-experience-card-title">
                    {service.title}
                  </h3>

                  <p className="connected-experience-card-description">
                    {service.description}
                  </p>

                  <div
                    aria-hidden="true"
                    className="connected-experience-card-accent"
                  />
                </article>

                {/* Desktop connector */}
                {index < connectedServices.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="connected-experience-connector"
                  >
                    <span>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Workflow */}
          <div className="connected-experience-workflow-wrapper">
            
            <div className="connected-experience-workflow">
              <span className="connected-experience-workflow-dot" />

              <span>Website</span>
              <span className="connected-experience-workflow-arrow">→</span>

              <span>Forms</span>
              <span className="connected-experience-workflow-arrow">→</span>

              <span>Customer</span>
              <span className="connected-experience-workflow-arrow">→</span>

              <span>AI Support</span>
              <span className="connected-experience-workflow-arrow">→</span>

              <span>Operations</span>
            </div>

          </div>
        </div>

        {/* Supporting statement */}
        <div className="connected-experience-support">
          <p>
            Start with the service you need today and expand into additional
  digital solutions as your business grows.
          </p>
        </div>
      </div>
    </section>
  );
}