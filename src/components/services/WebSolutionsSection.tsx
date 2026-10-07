const webFeatures = [
  {
    number: "01",
    title: "Modern Website Design",
    description:
      "Create clean, professional, and responsive websites designed around your business, customers, and goals.",
  },
  {
    number: "02",
    title: "Website Maintenance",
    description:
      "Keep your website updated, maintained, and working reliably as your business and digital presence grow.",
  },
  {
    number: "03",
    title: "Performance & Reliability",
    description:
      "Build fast, responsive digital experiences with a strong technical foundation across desktop and mobile devices.",
  },
  {
    number: "04",
    title: "Custom Web Solutions",
    description:
      "Develop tailored web functionality and digital experiences when your business needs more than a standard website.",
  },
];

export default function WebSolutionsSection() {
  return (
    <section
      id="web-solutions"
      className="services-web-section"
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="services-web-glow"
      />

      <div className="services-web-container">
        <div className="services-web-top">
          {/* Left Content */}
          <div className="services-web-content">
            {/* Service Badge */}
            <div className="services-web-label">
              <span className="services-web-label-dot" />

              <span>Web Solutions · Service 04</span>
            </div>

            <p className="services-web-eyebrow">
              Website Design &amp; Maintenance
            </p>

            <h2 className="services-web-title">
              Modern Websites Built for{" "}
              <span>Real Businesses.</span>
            </h2>

            <p className="services-web-description">
              Velquorin Labs designs modern, responsive websites that help
              businesses establish a professional digital presence and create
              better experiences for their customers.
            </p>

            <p className="services-web-description">
              From company websites to more customized web solutions, we focus
              on usability, performance, reliability, and technology that can
              grow alongside your business.
            </p>

            {/* Buttons */}
            <div className="services-web-buttons">
              <a
                href="/contact"
                className="services-web-button-primary"
              >
                Discuss Your Website
              </a>

              <a
                href="#custom-solutions"
                className="services-web-button-secondary"
              >
                Explore Custom Solutions
              </a>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="services-web-features">
            {webFeatures.map((feature) => (
              <div
                key={feature.number}
                className="services-web-card"
              >
                <div className="services-web-card-header">
                  <span className="services-web-card-number">
                    {feature.number}
                  </span>

                  <span className="services-web-card-dot" />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Web Flow */}
        <div className="services-web-flow">
          <div className="services-web-flow-content">
            <span>Strategy</span>

            <span className="services-web-flow-arrow">→</span>

            <span>Design</span>

            <span className="services-web-flow-arrow">→</span>

            <span>Development</span>

            <span className="services-web-flow-arrow">→</span>

            <span>Launch</span>

            <span className="services-web-flow-arrow">→</span>

            <span>Maintain</span>
          </div>
        </div>
      </div>
    </section>
  );
}