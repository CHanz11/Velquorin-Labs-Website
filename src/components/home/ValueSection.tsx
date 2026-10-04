const values = [
  {
    number: "01",
    title: "Automate Repetitive Work",
    description:
      "Reduce manual tasks and repetitive processes with intelligent automation that helps your team save time and focus on higher-value work.",
  },
  {
    number: "02",
    title: "Improve Customer Experiences",
    description:
      "Create faster, more responsive customer interactions with AI-powered conversations and streamlined digital experiences.",
  },
  {
    number: "03",
    title: "Increase Revenue",
    description:
      "Capture more opportunities, organize leads, and improve business workflows with digital solutions designed around growth.",
  },
  {
    number: "04",
    title: "Build Stronger Digital Experiences",
    description:
      "Create modern websites and connected digital experiences that strengthen your online presence and support your business.",
  },
];

export default function ValueSection() {
  return (
    <section className="home-value-section">
      <div className="site-container home-value-container">
        {/* Section heading */}
        <div className="home-value-heading">
          <p className="home-value-eyebrow">
            Technology That Creates Real Business Value
          </p>

          <h2 className="home-value-title">
            Practical AI and Web Solutions
            <br className="home-value-title-break" />
            Built for Real Results
          </h2>

          <p className="home-value-description">
            Turn complex technology into practical solutions that help your
            business save time, improve customer experiences, capture more
            opportunities, and operate more efficiently.
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
              Built around practical business outcomes — not technology for its
              own sake.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}