export default function ShashaSection() {
  return (
    <section id="shasha" className="shasha-section">
      {/* Background glow */}
      <div aria-hidden="true" className="shasha-background-glow" />

      <div className="site-container shasha-container">
        <div className="shasha-layout">
          {/* LEFT */}
          <div className="shasha-content">
            <div className="shasha-badge">
              <span className="shasha-badge-dot" />

              <span className="shasha-badge-text">
                AI Customer Experience
              </span>
            </div>

            <p className="shasha-eyebrow">
              Powered by Velquorin Labs
            </p>

            <h2 className="shasha-title">
              Meet{" "}
              <span className="shasha-gradient-text">
                SHASHA AI.
              </span>
            </h2>

            <h3 className="shasha-subtitle">
              Conversational Intelligence for Modern Businesses
            </h3>

            <p className="shasha-description">
              SHASHA AI helps businesses communicate with customers,
              answer questions, capture leads, and provide intelligent
              assistance through a modern conversational experience.
            </p>

            <div className="shasha-actions">
              <a href="#contact" className="shasha-button shasha-button-primary">
                Discover SHASHA AI
              </a>

              <a
                href="#services"
                className="shasha-button shasha-button-secondary"
              >
                Explore AI Chatbots
              </a>
            </div>

            <div className="shasha-features">
              <span>24/7 Conversations</span>
              <span>Lead Capture</span>
              <span>Business Knowledge</span>
            </div>
          </div>

          {/* RIGHT — SHASHA CHAT PREVIEW */}
          <div className="shasha-preview-wrapper">
            <div className="shasha-preview">
              {/* Window header */}
              <div className="shasha-preview-header">
                <div className="shasha-window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span className="shasha-preview-name">
                  SHASHA AI
                </span>

                <span className="shasha-status">
                  Online
                </span>
              </div>

              {/* Chat */}
              <div className="shasha-chat">
                {/* Visitor */}
                <div className="shasha-message-row shasha-message-row-left">
                  <div className="shasha-message shasha-visitor-message">
                    <p className="shasha-message-label">
                      Visitor
                    </p>

                    <p className="shasha-message-text">
                      Hi! I&apos;m interested in improving customer support
                      on my website.
                    </p>
                  </div>
                </div>

                {/* SHASHA */}
                <div className="shasha-message-row shasha-message-row-right">
                  <div className="shasha-message shasha-ai-message">
                    <div className="shasha-ai-identity">
                      <span className="shasha-ai-avatar">
                        S
                      </span>

                      <span className="shasha-ai-name">
                        SHASHA AI
                      </span>
                    </div>

                    <p className="shasha-message-text">
                      I can help with that. SHASHA can answer customer
                      questions, capture leads, and use your business
                      knowledge to provide helpful responses.
                    </p>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="shasha-capabilities">
                  <div className="shasha-capability-card">
                    <p className="shasha-capability-title">
                      Customer Support
                    </p>

                    <p className="shasha-capability-description">
                      Answer common questions.
                    </p>
                  </div>

                  <div className="shasha-capability-card">
                    <p className="shasha-capability-title">
                      Lead Capture
                    </p>

                    <p className="shasha-capability-description">
                      Collect qualified inquiries.
                    </p>
                  </div>

                  <div className="shasha-capability-card">
                    <p className="shasha-capability-title">
                      Knowledge
                    </p>

                    <p className="shasha-capability-description">
                      Use business information.
                    </p>
                  </div>
                </div>

                {/* Input */}
                <div className="shasha-input">
                  <span className="shasha-input-placeholder">
                    Ask SHASHA AI a question...
                  </span>

                  <span className="shasha-send-button">
                    ↑
                  </span>
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div className="shasha-floating-label">
              <p className="shasha-floating-eyebrow">
                Intelligent Conversations
              </p>

              <p className="shasha-floating-text">
                Chat → Understand → Assist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}