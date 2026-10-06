const solutions = [
  {
    number: "01",
    label: "AI SYSTEMS",
    title: "Intelligent Customer Experiences",
    description:
      "We build AI-powered experiences that help businesses communicate with customers, answer questions, capture opportunities, and provide faster support.",
    items: ["AI Chatbots", "Conversational AI", "Lead Capture"],
  },
  {
    number: "02",
    label: "AUTOMATION",
    title: "Connected Business Workflows",
    description:
      "We create automation that connects repetitive processes and business tools so teams can reduce manual work and operate more efficiently.",
    items: ["Workflow Automation", "Business Integrations", "AI-Assisted Tasks"],
  },
  {
    number: "03",
    label: "DIGITAL EXPERIENCES",
    title: "Smarter Ways to Collect Information",
    description:
      "We design modern digital experiences that make it easier for businesses to collect, understand, and organize customer information.",
    items: ["Conversational Forms", "Lead Collection", "Smart Workflows"],
  },
  {
    number: "04",
    label: "WEB SOLUTIONS",
    title: "Modern Digital Foundations",
    description:
      "We build responsive websites and digital solutions designed to strengthen a company's online presence and support long-term growth.",
    items: ["Website Design", "Maintenance", "Custom Web Solutions"],
  },
];

export default function WhatWeBuildSection() {
  return (
    <section className="about-build-section">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="about-build-glow about-build-glow-primary"
      />

      <div
        aria-hidden="true"
        className="about-build-glow about-build-glow-secondary"
      />

      <div className="about-build-container">
        {/* Section heading */}
        <div className="about-build-heading">
          <p className="about-build-eyebrow">
            What We Build
          </p>

          <h2 className="about-build-title">
            Digital Solutions Designed to{" "}
            <span className="about-build-title-gradient">
              Work Together.
            </span>
          </h2>

          <p className="about-build-description">
            Our work combines artificial intelligence, automation, and modern
            web technology to create practical systems around the way a
            business actually operates.
          </p>
        </div>

        {/* Solution cards */}
        <div className="about-build-grid">
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="about-build-card"
            >
              <div className="about-build-card-header">
                <div>
                  <p className="about-build-card-label">
                    {solution.label}
                  </p>
                </div>

                <span className="about-build-card-number">
                  {solution.number}
                </span>
              </div>

              <h3>{solution.title}</h3>

              <p className="about-build-card-description">
                {solution.description}
              </p>

              <div className="about-build-items">
                {solution.items.map((item) => (
                  <span
                    key={item}
                    className="about-build-item"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="about-build-bottom">
          <div className="about-build-bottom-badge">
            <span className="about-build-bottom-dot" />

            <p>
              AI + Automation + Digital Experiences + Web
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}