const formFeatures = [
  {
    number: "01",
    title: "Conversational Data Collection",
    description:
      "Turn traditional forms into guided conversations that collect information naturally, one question at a time.",
  },
  {
    number: "02",
    title: "Structured Information",
    description:
      "Organize customer responses into useful structured data that businesses can review, manage, and act on.",
  },
  {
    number: "03",
    title: "Smart Validation",
    description:
      "Help users provide clearer and more complete information through intelligent validation and guided interactions.",
  },
  {
    number: "04",
    title: "Flexible Publishing",
    description:
      "Publish forms on dedicated links or embed them directly into websites so customers can access them where needed.",
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

              <span>Smart Lead Collection · Service 03</span>
            </div>

            <p className="services-forms-eyebrow">
              Conversational AI Forms
            </p>

            <h2 className="services-forms-title">
              Turn Forms Into{" "}
              <span className="services-forms-title-gradient">
                Better Conversations.
              </span>
            </h2>

            <p className="services-forms-description">
              Velquorin Labs creates conversational form experiences that help
              businesses collect customer information through a simpler,
              guided interaction instead of overwhelming users with long
              traditional forms.
            </p>

            <p className="services-forms-description">
              Responses can be understood, validated, and organized into
              structured information while keeping the customer in control
              before anything is submitted.
            </p>

            <div className="services-forms-buttons">
              <a
                href="/contact"
                className="services-forms-button-primary"
              >
                Discuss a Form Project
              </a>

              <a
                href="#custom-solutions"
                className="services-forms-button-secondary"
              >
                Explore Custom Solutions
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
            <span>Ask</span>
            <span className="services-forms-flow-arrow">→</span>

            <span>Understand</span>
            <span className="services-forms-flow-arrow">→</span>

            <span>Validate</span>
            <span className="services-forms-flow-arrow">→</span>

            <span>Review</span>
            <span className="services-forms-flow-arrow">→</span>

            <span>Submit</span>
          </div>
        </div>
      </div>
    </section>
  );
}