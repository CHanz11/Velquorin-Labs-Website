const capabilities = [
  {
    number: "01",
    title: "Customer Support",
    description:
      "Answer common customer questions and provide helpful business information around the clock.",
  },
  {
    number: "02",
    title: "Lead Capture",
    description:
      "Collect visitor information and help turn conversations into organized business opportunities.",
  },
  {
    number: "03",
    title: "Business Knowledge",
    description:
      "Use your approved business information to provide more relevant and consistent responses.",
  },
  {
    number: "04",
    title: "Website Integration",
    description:
      "Embed intelligent conversational experiences directly into your existing business website.",
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

              <span>AI Customer Experience</span>
            </div>

            <p className="services-chatbots-service-number">
              Service 01
            </p>

            <h2 className="services-chatbots-title">
              Intelligent Conversations{" "}
              <span className="services-chatbots-title-gradient">
                Built for Business.
              </span>
            </h2>

            <p className="services-chatbots-description">
              Velquorin Labs builds AI chatbot experiences designed to help
              businesses communicate with customers, answer questions, capture
              leads, and make useful business information easier to access.
            </p>

            <p className="services-chatbots-description">
              Our goal is not simply to place a chatbot on your website. We
              design conversational systems around the way your business
              actually communicates and operates.
            </p>

            <div className="services-chatbots-buttons">
              <a
                href="/contact"
                className="services-chatbots-button-primary"
              >
                Discuss an AI Chatbot
              </a>

              <a
                href="#shasha"
                className="services-chatbots-button-secondary"
              >
                Meet SHASHA AI
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
                Powered by Velquorin Labs
              </p>

              <h3>
                Meet{" "}
                <span className="services-chatbots-shasha-title-gradient">
                  SHASHA AI.
                </span>
              </h3>

              <p className="services-chatbots-shasha-description">
                SHASHA AI is our conversational AI platform being built to help
                businesses communicate with customers, capture opportunities,
                and create more connected digital experiences.
              </p>

              <div className="services-chatbots-shasha-tags">
                {[
                  "Customer Conversations",
                  "Lead Capture",
                  "Business Knowledge",
                  "Website Integration",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="services-chatbots-shasha-action">
              <a href="/contact">
                Ask About SHASHA AI →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}