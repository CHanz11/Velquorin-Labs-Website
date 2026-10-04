const reasons = [
  {
    number: "01",
    title: "Business-Focused Solutions",
    description:
      "We design solutions around real business problems, workflows, and goals instead of adding technology without a clear purpose.",
  },
  {
    number: "02",
    title: "Customizable Solutions",
    description:
      "Every business works differently. Our solutions can be adapted around your processes, requirements, and customer experience.",
  },
  {
    number: "03",
    title: "Designed to Integrate",
    description:
      "Our solutions are built to work with your existing systems, tools, and digital processes wherever practical.",
  },
  {
    number: "04",
    title: "Built to Grow",
    description:
      "We create solutions with future improvements in mind, making it easier to expand capabilities as your business evolves.",
  },
];

export default function WhyVelquorinSection() {
  return (
    <section className="why-velquorin-section">
      {/* Background design */}
      <div
        aria-hidden="true"
        className="why-velquorin-background"
      >
        <div className="why-velquorin-glow why-velquorin-glow-left" />
        <div className="why-velquorin-glow why-velquorin-glow-right" />
      </div>

      <div className="why-velquorin-container">
        {/* Heading */}
        <div className="why-velquorin-heading">
          <p className="why-velquorin-eyebrow">
            Why Velquorin Labs
          </p>

          <h2 className="why-velquorin-title">
            Built Around{" "}
            <span className="why-velquorin-gradient-text">
              Your Business
            </span>
          </h2>

          <p className="why-velquorin-description">
            We focus on practical, flexible solutions designed around your
            business instead of forcing your business around the technology.
          </p>
        </div>

        {/* Reasons */}
        <div className="why-velquorin-grid">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="why-velquorin-card"
            >
              {/* Subtle glow */}
              <div
                aria-hidden="true"
                className="why-velquorin-card-glow"
              />

              <div className="why-velquorin-card-content">
                {/* Number */}
                <div className="why-velquorin-number">
                  {reason.number}
                </div>

                {/* Content */}
                <div className="why-velquorin-card-text">
                  <h3 className="why-velquorin-card-title">
                    {reason.title}
                  </h3>

                  <p className="why-velquorin-card-description">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Hover accent */}
              <div
                aria-hidden="true"
                className="why-velquorin-card-accent"
              />
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="why-velquorin-bottom">
          <div className="why-velquorin-statement">
            <span className="why-velquorin-statement-dot" />

            <span>
              Technology should support your business — not complicate it.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}