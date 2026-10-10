
const customSolutionFeatures = [
  {
    number: "01",
    title: "Custom Website Development",
    description:
      "Build tailored websites and web applications designed around your business goals, customer needs, and required functionality.",
  },
  {
    number: "02",
    title: "AI-Powered Solutions",
    description:
      "Explore custom AI tools and intelligent features that help address specific business challenges and improve customer experiences.",
  },
  {
    number: "03",
    title: "Business Process Automation",
    description:
      "Connect systems and automate repetitive tasks with workflows designed around how your business operates.",
  },
  {
    number: "04",
    title: "Integrated Digital Experiences",
    description:
      "Bring websites, AI chatbots, conversational forms, and business integrations together into a solution tailored to your requirements.",
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

            <span>Custom Web &amp; AI Solutions · Service 06</span>
          </div>

          <p className="services-custom-eyebrow">
            Tailored to Your Business Requirements
          </p>

          <h2 className="services-custom-title">
            Your Business Is Unique.{" "}
            <span>Your Digital Solutions Should Be Too.</span>
          </h2>

          <p className="services-custom-description">
            Every business has different goals, challenges, and workflows.
            Velquorin Labs develops custom web and AI-based solutions around
            your specific requirements, helping you create digital experiences
            that fit the way your business works.
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

                <p>Solutions Built Around Your Needs</p>
              </div>

              <h3>
                Bring Your Web, AI, and Automation Ideas to Life.
              </h3>

              <p className="services-custom-connected-description">
                Whether you need a custom website, an AI-powered tool, an
                automated workflow, or a combination of technologies, we can
                discuss your requirements and plan a solution around your
                business goals.
              </p>

              {/* Technology Pills */}
              <div className="services-custom-pills">
                {[
                  "Custom Websites",
                  "AI Solutions",
                  "AI Automation",
                  "Conversational Forms",
                  "System Integrations",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="services-custom-cta">
              <a href="/contact">
                Discuss Your Project
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Flow */}
        <div className="services-custom-flow-wrapper">
          <div className="services-custom-flow">
            <div className="services-custom-flow-content">
              <span>Your Business Needs</span>

              <span className="services-custom-flow-arrow">→</span>

              <span>Plan the Solution</span>

              <span className="services-custom-flow-arrow">→</span>

              <span>Custom Development</span>

              <span className="services-custom-flow-arrow">→</span>

              <span>Test &amp; Refine</span>

              <span className="services-custom-flow-arrow">→</span>

              <span>Launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
