const solutions = [
  {
    number: "01",
    label: "WEBSITE SERVICES",
    title: "Websites Built Around Your Business",
    description:
      "We redesign existing websites, develop new websites, and provide requested updates and maintenance to keep your online presence modern and reliable.",
    items: [
      "Website Redesign",
      "Website Development",
      "Maintenance & Updates",
    ],
  },
  {
    number: "02",
    label: "CUSTOM FORMS",
    title: "Forms That Fit Your Workflow",
    description:
      "We develop customized forms that help businesses collect customer information, manage inquiries, and support everyday processes.",
    items: [
      "Booking Forms",
      "Contact & Inquiry Forms",
      "Registration & Submission Forms",
    ],
  },
  {
    number: "03",
    label: "AI PRODUCTS — COMING SOON",
    title: "Smarter Customer Interactions",
    description:
      "Our planned AI products will help businesses answer customer questions around the clock and simplify form creation through AI prompts.",
    items: [
      "SHASHA AI Chatbot",
      "AI Form Assistant",
      "Website Customer Support",
    ],
  },
  {
    number: "04",
    label: "BUSINESS OPERATIONS — COMING SOON",
    title: "Client Operations in One Place",
    description:
      "Our planned Business Operations & Client Portal will help businesses organize client work and manage everyday operations from one place.",
    items: [
      "Client & Project Management",
      "File Sharing & Information Collection",
      "Invoices & Appointments",
    ],
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
            Practical Solutions for{" "}
            <span className="about-build-title-gradient">
              Everyday Business Needs.
            </span>
          </h2>

          <p className="about-build-description">
            From website development and custom forms to planned AI products
            and client operations tools, we build digital solutions around
            your business needs.
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
              Websites + Custom Forms + AI Products + Business Operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}