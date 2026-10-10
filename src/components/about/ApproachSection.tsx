const principles = [
  {
    number: "01",
    title: "Understand Your Business Needs",
    description:
      "We learn about your business goals, website requirements, customer needs, and daily processes before recommending the right service or solution.",
  },
  {
    number: "02",
    title: "Design Around Your Requirements",
    description:
      "Whether you need a website redesign, a new website, custom forms, or a tailored digital solution, we work around your preferences and references.",
  },
  {
    number: "03",
    title: "Build Useful Digital Solutions",
    description:
      "We develop websites and customized forms designed for your business. Our planned AI products and client portal will expand the solutions we can offer.",
  },
  {
    number: "04",
    title: "Support and Improve",
    description:
      "We provide website updates and maintenance based on your requests, and can discuss further improvements as your business needs evolve.",
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
            From website development and custom forms to planned AI products
            and business operations tools, our approach starts with your
            requirements and focuses on practical solutions for your business.
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