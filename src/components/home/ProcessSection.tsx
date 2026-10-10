
const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We discuss your business goals, project ideas, requirements, and references to understand what you need and recommend the right solution.",
    label: "DISCOVERY",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the scope, features, design, timeline, and approach for your website, custom forms, or tailored digital solution.",
    label: "PLANNING",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop your solution, review the details with you, and make the agreed adjustments before delivery.",
    label: "DEVELOPMENT",
  },
  {
    number: "04",
    title: "Deliver & Support",
    description:
      "We launch or hand over your completed project and provide ongoing website maintenance or further improvements as agreed.",
    label: "DELIVERY",
  },
];


export default function ProcessSection() {
  return (
    <section className="process-section">
      {/* Background design */}
      <div aria-hidden="true" className="process-background">
        <div className="process-glow process-glow-top" />
        <div className="process-glow process-glow-bottom" />
      </div>

      <div className="process-container">
        {/* Section heading */}
        <div className="process-heading">
          <p className="process-eyebrow">Our Process</p>

          <h2 className="process-title">
            From Idea to{" "}
            <span className="process-gradient-text">
              Working Solution
            </span>
          </h2>

          <p className="process-description">
            A straightforward, collaborative process to turn your business
            requirements into practical digital solutions.
          </p>

        </div>

        {/* Process steps */}
        <div className="process-grid">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="process-connecting-line"
          />

          {processSteps.map((step) => (
            <article key={step.number} className="process-card">
              {/* Step number */}
              <div className="process-card-top">
                <div className="process-number">
                  {step.number}
                </div>

                <span className="process-label">
                  {step.label}
                </span>
              </div>

              <h3 className="process-card-title">
                {step.title}
              </h3>

              <p className="process-card-description">
                {step.description}
              </p>

              {/* Bottom accent */}
              <div className="process-card-accent">
                <div className="process-card-accent-fill" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="process-bottom">
          <div className="process-bottom-message">
            <span className="process-bottom-dot" />
            <span>
              Simple process. Practical solutions. Built around your business.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}