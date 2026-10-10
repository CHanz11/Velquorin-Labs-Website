const capabilities = [
  {
    number: "01",
    title: "Website Redesign",
    description:
      "Transform your existing website into a modern, professional design based on your preferences, references, and business goals.",
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Design and develop a new website tailored to your company's needs, brand identity, and desired functionality.",
  },
  {
    number: "03",
    title: "Website Maintenance",
    description:
      "Request website changes, content updates, and ongoing maintenance to keep your existing website current and reliable.",
  },
  {
    number: "04",
    title: "Responsive & Reliable Websites",
    description:
      "Create a consistent experience across desktop, tablet, and mobile devices while supporting your business's online presence.",
  },
];

export default function AiChatbotsSection() {
  return (
    <section className="services-chatbots-section">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="services-chatbots-glow"
      />

      <div className="services-chatbots-container">
        {/* Top content */}
        <div className="services-chatbots-top">
          {/* Left */}
          <div className="services-chatbots-content">
            <div className="services-chatbots-label">
              <span className="services-chatbots-label-dot" />

              <span>Website Services</span>
            </div>

            <p className="services-chatbots-service-number">
              Service 01
            </p>

            <h2 className="services-chatbots-title">
              Websites Built Around{" "}
              <span className="services-chatbots-title-gradient">
               Your Business.
              </span>
            </h2>

            <p className="services-chatbots-description">
              We redesign existing websites, develop new websites, and provide requested updates and maintenance to help your business maintain a modern, professional online presence.
            </p>

            <p className="services-chatbots-description">
              Whether you need a complete redesign based on your references, a new website built from scratch, or changes to your current site, we tailor our work to your requirements.
            </p>

            <div className="services-chatbots-buttons">
              <a
                href="/contact"
                className="services-chatbots-button-primary"
              >
                Request Website Service
              </a>

              <a
                href="/contact"
                className="services-chatbots-button-secondary"
              >
                Discuss Your Project
              </a>
            </div>
          </div>

          {/* Right capabilities */}
          <div className="services-chatbots-capabilities">
            {capabilities.map((capability) => (
              <div
                key={capability.number}
                className="services-chatbots-capability"
              >
                <div className="services-chatbots-capability-number">
                  {capability.number}
                </div>

                <h3>{capability.title}</h3>

                <p>{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SHASHA strip */}
        <div id="shasha" className="services-chatbots-shasha">
          <div className="services-chatbots-shasha-inner">
            <div className="services-chatbots-shasha-content">
              <p className="services-chatbots-shasha-eyebrow">
                Website Services
              </p>

              <h3>
                Your Website.{" "}
                <span className="services-chatbots-shasha-title-gradient">
                  Your Requirements.
                </span>
              </h3>

              <p className="services-chatbots-shasha-description">
                Tell us what you want to redesign, build, or improve. Velquorin Labs will discuss your requirements and help you determine the right approach for your website.
              </p>

              <div className="services-chatbots-shasha-tags">
                {[
                  "Website Redesign",
                  "New Website Development",
                  "Website Updates",
                  "Ongoing Maintenance",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="services-chatbots-shasha-action">
              <a href="/contact">
                Request a Website Consultation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}