
const reasons = [
  {
    number: "01",
    title: "Solutions for Real Business Needs",
    description:
      "Whether you need a new website, a custom form, or a better way to manage client operations, we focus on solutions that address your actual business needs.",
  },
  {
    number: "02",
    title: "Tailored to Your Requirements",
    description:
      "We work around your goals, design references, workflows, and preferences to create websites and digital tools that fit the way your business operates.",
  },
  {
    number: "03",
    title: "Web and AI in One Place",
    description:
      "From website development and custom forms to AI-powered products and business operations tools, we bring practical digital services together under one roof.",
  },
  {
    number: "04",
    title: "Support Beyond Launch",
    description:
      "We can help you maintain and improve your website, make requested changes, and explore new digital solutions as your business needs evolve.",
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
              From building your online presence to simplifying customer
              interactions and client operations, we help you find practical
              digital solutions for your business.
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