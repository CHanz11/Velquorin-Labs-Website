const connectedServices = [
  {
    number: "01",
    title: "Website",
    description: "Your digital presence",
  },
  {
    number: "02",
    title: "AI Chatbot",
    description: "Customer conversations",
  },
  {
    number: "03",
    title: "Conversational Forms",
    description: "Smart lead collection",
  },
  {
    number: "04",
    title: "AI Automation",
    description: "Connected workflows",
  },
  {
    number: "05",
    title: "Business Tools",
    description: "Integrated operations",
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
            Velquorin Labs can connect your website, AI, customer interactions,
            and business workflows into a more unified digital experience.
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

              <span>Conversation</span>
              <span className="connected-experience-workflow-arrow">→</span>

              <span>Lead</span>
              <span className="connected-experience-workflow-arrow">→</span>

              <span>Automation</span>
              <span className="connected-experience-workflow-arrow">→</span>

              <span>Business</span>
            </div>
          </div>
        </div>

        {/* Supporting statement */}
        <div className="connected-experience-support">
          <p>
            Start with the solution your business needs today and expand into
            additional connected services as your requirements grow.
          </p>
        </div>
      </div>
    </section>
  );
}