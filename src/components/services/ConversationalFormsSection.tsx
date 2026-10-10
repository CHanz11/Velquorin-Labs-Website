const formFeatures = [
  {
    number: "01",
    title: "24/7 Customer Support",
    description:
      "Help answer common customer questions and provide business information through an AI chatbot installed on your website.",
  },
  {
    number: "02",
    title: "Business Knowledge",
    description:
      "Configure the chatbot around your business information so visitors can get relevant answers about your services and offerings.",
  },
  {
    number: "03",
    title: "Website Integration",
    description:
      "Add SHASHA AI to your website to give visitors a convenient way to ask questions and learn about your business.",
  },
  {
    number: "04",
    title: "Free Version Planned",
    description:
      "A free version is planned to help businesses explore AI-powered customer support before choosing additional capabilities.",
  },
];
export default function ConversationalFormsSection() {
  return (
    <section
      id="conversational-forms"
      className="services-forms-section"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="services-forms-glow"
      />

      <div className="services-forms-container">
        <div className="services-forms-top">
          {/* Left Content */}
          <div className="services-forms-content">
            <div className="services-forms-label">
              <span className="services-forms-label-dot" />

              <span>AI Customer Support · Service 03</span>
            </div>

            <p className="services-forms-eyebrow">
              SHASHA AI Chatbot — Coming Soon
            </p>

            <h2 className="services-forms-title">
              Meet SHASHA AI{" "}
              <span className="services-forms-title-gradient">
                Your Website AI Assistant.
              </span>
            </h2>

            <p className="services-forms-description">
              SHASHA AI is our upcoming AI chatbot designed to help businesses answer common customer questions and provide useful business information directly on their websites, 24/7.
            </p>

            <p className="services-forms-description">
              We&apos;re developing SHASHA AI to make website-based customer support more accessible, with a free version planned for businesses that want to get started with AI.
            </p>

            <div className="services-forms-buttons">
              <a
                href="/contact"
                className="services-forms-button-primary"
              >
                Ask About SHASHA AI
              </a>

              <a
                href="#services"
                className="services-forms-button-secondary"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="services-forms-features">
            {formFeatures.map((feature) => (
              <div
                key={feature.number}
                className="services-forms-card"
              >
                <div className="services-forms-card-header">
                  <span className="services-forms-card-number">
                    {feature.number}
                  </span>

                  <span className="services-forms-card-dot" />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Flow */}
        <div className="services-forms-flow">
          <div className="services-forms-flow-content">
            <span>Visitor</span>
            <span className="services-forms-flow-arrow">→</span>

            <span>Ask a Question</span>
            <span className="services-forms-flow-arrow">→</span>

            <span>AI Response</span>
            <span className="services-forms-flow-arrow">→</span>

            <span>Customer Support</span>
            <span className="services-forms-flow-arrow">→</span>

            <span>Next Steps</span>
          </div>
        </div>
      </div>
    </section>
  );
}