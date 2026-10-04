const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, challenges, workflows, and goals before recommending the right solution.",
    label: "Discovery",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We plan the experience, workflow, integrations, and technology needed to turn the idea into a practical solution.",
    label: "Strategy",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, integrate, test, and refine your solution using modern technologies built around your business.",
    label: "Development",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "After launch, we maintain, optimize, and improve the solution as your business and requirements grow.",
    label: "Optimization",
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
            A clear, collaborative approach to turn your business needs into
            practical AI and digital solutions.
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