
const webFeatures = [
  {
    number: "01",
    title: "Prompt-Based Form Creation",
    description:
      "Describe the form you need in a prompt and let AI help generate a form structure tailored to your requirements.",
  },
  {
    number: "02",
    title: "Customized Business Forms",
    description:
      "Create forms designed around your business processes, customer needs, and the information you want to collect.",
  },
  {
    number: "03",
    title: "Simplified Information Collection",
    description:
      "Plan forms that make it easier to gather customer details, business data, inquiries, and other required information.",
  },
  {
    number: "04",
    title: "Flexible Form Requirements",
    description:
      "Describe your fields and form purpose so the planned AI Form Assistant can help shape the form around your needs.",
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
              <span>AI Form Creation · Service 04</span>
            </div>

            <p className="services-web-eyebrow">
              AI Form Assistant — Coming Soon
            </p>

            <h2 className="services-web-title">
              Create Forms With{" "}
              <span>the Power of AI.</span>
            </h2>

            <p className="services-web-description">
              AI Form Assistant is our upcoming tool designed to help you create
              customized forms by describing what you need in a prompt.
            </p>

            <p className="services-web-description">
              Use it to plan forms for collecting customer information, business
              data, inquiries, and other information your business needs.
            </p>

            <div className="services-web-buttons">
              <a
                href="/contact"
                className="services-web-button-primary"
              >
                Ask About AI Form Assistant
              </a>

              <a
                href="#services"
                className="services-web-button-secondary"
              >
                Explore Our Services
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
            <span>Describe Your Form</span>
            <span className="services-web-flow-arrow">→</span>
            <span>AI-Assisted Creation</span>
            <span className="services-web-flow-arrow">→</span>
            <span>Customize Fields</span>
            <span className="services-web-flow-arrow">→</span>
            <span>Collect Information</span>
          </div>

        </div>
      </div>
    </section>
  );
}