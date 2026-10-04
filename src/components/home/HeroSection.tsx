export default function HeroSection() {
  return (
    <section className="home-hero">
      {/* Background glow */}
      <div className="home-hero-background-glow" aria-hidden="true" />

      <div className="home-hero-container">
        {/* LEFT */}
        <div className="home-hero-content">
          <div className="home-hero-eyebrow">
            <span className="home-hero-eyebrow-dot" />
            AI &amp; Digital Solutions
          </div>

          <h1 className="home-hero-title">
            Build Smarter.
            <br />
            Automate More.
            <br />
            <span className="home-hero-gradient-text">
              Grow With AI.
            </span>
          </h1>

          <p className="home-hero-description">
            Velquorin Labs builds intelligent AI and digital solutions that
            help businesses automate work, improve customer experiences,
            capture leads, and create better digital experiences.
          </p>

          <div className="home-hero-buttons">
            <a
              href="#services"
              className="home-hero-button home-hero-button-primary"
            >
              Explore Our Services
            </a>

            <a
              href="/contact"
              className="home-hero-button home-hero-button-secondary"
            >
              Start a Project
            </a>
          </div>

          <div className="home-hero-service-list">
            <span>AI Chatbots</span>
            <span>AI Automation</span>
            <span>Conversational AI Forms</span>
            <span>Web Solutions</span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="home-hero-visual">
          <div
            className="home-hero-visual-glow"
            aria-hidden="true"
          />

          <div className="home-hero-workflow-window">
            {/* Window Bar */}
            <div className="home-hero-window-bar">
              <div className="home-hero-window-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="home-hero-window-title">
                Connected Business Automation
              </span>
            </div>

            {/* Workflow */}
            <div className="home-hero-workflow">
              {/* Chatbot */}
              <div className="home-hero-workflow-card">
                <div className="home-hero-workflow-card-header">
                  <span className="home-hero-workflow-card-title">
                    AI Chatbot
                  </span>

                  <span className="home-hero-workflow-badge">
                    Customer
                  </span>
                </div>

                <p>
                  &quot;I&apos;m interested in your website maintenance
                  service.&quot;
                </p>
              </div>

              <div className="home-hero-workflow-arrow">
                ↓
              </div>

              {/* Processing */}
              <div className="home-hero-workflow-card">
                <div className="home-hero-workflow-card-header">
                  <span className="home-hero-workflow-card-title">
                    AI Processing
                  </span>

                  <span className="home-hero-workflow-badge">
                    Automation
                  </span>
                </div>

                <p>
                  Understand the request and prepare the next business action.
                </p>
              </div>

              <div className="home-hero-workflow-arrow">
                ↓
              </div>

              {/* Result cards */}
              <div className="home-hero-result-grid">
                <div className="home-hero-result-card">
                  <span className="home-hero-workflow-card-title">
                    Lead Captured
                  </span>

                  <p>
                    Customer information organized for follow-up.
                  </p>
                </div>

                <div className="home-hero-result-card">
                  <span className="home-hero-workflow-card-title">
                    Team Notification
                  </span>

                  <p>
                    The business team receives the new inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="home-hero-floating-card">
            <p className="home-hero-floating-label">
              Connected workflow
            </p>

            <p className="home-hero-floating-title">
              Chat → Automation → Business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}