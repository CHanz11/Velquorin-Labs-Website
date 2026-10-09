const values = [
  {
    number: "01",
    title: "Build Your Online Presence",
    description:
      "Create a new website, redesign an existing one, or keep your website updated and running smoothly.",
  },
  {
    number: "02",
    title: "Simplify Information Collection",
    description:
      "Use customized booking, contact, registration, and submission forms to collect the information your business needs.",
  },
  {
    number: "03",
    title: "Improve Customer Support",
    description:
      "Explore AI-powered customer conversations with SHASHA AI, planned to answer common website questions 24/7.",
  },
  {
    number: "04",
    title: "Organize Client Operations",
    description:
      "Prepare to manage clients, projects, files, invoices, appointments, and communication in one portal.",
  },
];

export default function ValueSection() {
  return (
    <section className="home-value-section">
      <div className="site-container home-value-container">
        {/* Section heading */}
        <div className="home-value-heading">
          <p className="home-value-eyebrow">
            WHAT WE HELP YOU ACHIEVE
          </p>

          <h2 className="home-value-title">
            Practical Solutions
            <br className="home-value-title-break" />
            for Your Business
          </h2>

          <p className="home-value-description">
            From building your website to simplifying client operations, we help you create better ways to work and serve your customers.
          </p>
        </div>

        {/* Value cards */}
        <div className="home-value-grid">
          {values.map((value) => (
            <article key={value.number} className="home-value-card">
              <div
                aria-hidden="true"
                className="home-value-card-glow"
              />

              <div className="home-value-card-content">
                <div className="home-value-card-top">
                  <div className="home-value-number">
                    {value.number}
                  </div>

                  <span className="home-value-label">
                    Value
                  </span>
                </div>

                <h3 className="home-value-card-title">
                  {value.title}
                </h3>

                <p className="home-value-card-description">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom supporting statement */}
        <div className="home-value-support-wrapper">
          <div className="home-value-support">
            <span className="home-value-support-dot" />

            <span>
              AI products and the client portal are coming soon. Features will be confirmed at launch.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}