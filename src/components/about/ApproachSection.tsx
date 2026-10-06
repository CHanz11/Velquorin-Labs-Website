const principles = [
  {
    number: "01",
    title: "Understand Before We Build",
    description:
      "We start by understanding the business, its challenges, existing workflows, customers, and the result the solution needs to achieve.",
  },
  {
    number: "02",
    title: "Keep Technology Practical",
    description:
      "We choose technology based on what the business actually needs, focusing on useful solutions instead of unnecessary complexity.",
  },
  {
    number: "03",
    title: "Connect the Right Systems",
    description:
      "We design solutions that can work with existing processes, tools, and digital experiences instead of operating in isolation.",
  },
  {
    number: "04",
    title: "Build for What Comes Next",
    description:
      "We create with growth in mind so solutions can be improved, expanded, and adapted as the business evolves.",
  },
];

export default function ApproachSection() {
  return (
    <section className="about-approach-section">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="about-approach-glow about-approach-glow-primary"
      />

      <div
        aria-hidden="true"
        className="about-approach-glow about-approach-glow-secondary"
      />

      <div className="about-approach-container">
        {/* Heading */}
        <div className="about-approach-heading">
          <p className="about-approach-eyebrow">
            Our Approach
          </p>

          <h2 className="about-approach-title">
            Business First.{" "}
            <span className="about-approach-title-gradient">
              Technology With Purpose.
            </span>
          </h2>

          <p className="about-approach-description">
            We believe effective technology starts with understanding what a
            business is trying to accomplish. Every solution should have a
            clear purpose and support the way the business works.
          </p>
        </div>

        {/* Approach cards */}
        <div className="about-approach-grid">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="about-approach-card"
            >
              <div className="about-approach-card-header">
                <span className="about-approach-card-number">
                  {principle.number}
                </span>

                <span className="about-approach-card-dot" />
              </div>

              <h3>{principle.title}</h3>

              <p className="about-approach-card-description">
                {principle.description}
              </p>

              {/* Bottom hover accent */}
              <div className="about-approach-card-accent">
                <div />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="about-approach-bottom">
          <p>
            The goal is not simply to add more technology — it is to build the{" "}
            <span>
              right technology for the right business problem.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}