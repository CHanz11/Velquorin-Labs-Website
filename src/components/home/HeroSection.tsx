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
            Web, AI &amp; Business Solutions
          </div>

          <h1 className="home-hero-title">
            Build Smarter.
            <br />
            Work Better.
            <br />
            <span className="home-hero-gradient-text">
              Grow With Velquorin.
            </span>
          </h1>

          <p className="home-hero-description">
            Velquorin Labs helps businesses build modern websites, create
            custom forms, and explore AI-powered solutions that improve
            customer experiences and simplify everyday operations.
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
            <span>Website Services</span>
            <span>Custom Forms</span>
            <span>AI Solutions</span>
            <span>Client Portal</span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="home-hero-visual">
          <div
            className="home-hero-ai-glow"
            aria-hidden="true"
          />

          <div className="home-hero-ai-scene">
            {/* Decorative orbit rings */}
            <div className="home-hero-ai-ring home-hero-ai-ring-one" />
            <div className="home-hero-ai-ring home-hero-ai-ring-two" />
            <div className="home-hero-ai-ring home-hero-ai-ring-three" />

            {/* Connection lines */}
            <div className="home-hero-ai-line home-hero-ai-line-top" />
            <div className="home-hero-ai-line home-hero-ai-line-right" />
            <div className="home-hero-ai-line home-hero-ai-line-bottom" />
            <div className="home-hero-ai-line home-hero-ai-line-left" />

            {/* Center Core */}
            <div className="home-hero-ai-core">
              <div className="home-hero-ai-core-pulse" />

              <div className="home-hero-ai-core-inner">
                <span className="home-hero-ai-core-icon">
                  ✦
                </span>

                <span className="home-hero-ai-core-label">
                  VELQUORIN LABS
                </span>
              </div>
            </div>

            {/* SHASHA AI Chatbot */}
            <div className="home-hero-ai-node home-hero-ai-node-chat">
              <div className="home-hero-ai-node-icon">
                ◇
              </div>

              <div>
                <span className="home-hero-ai-node-title">
                  SHASHA AI
                </span>

                <span className="home-hero-ai-node-status">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Business Operations & Client Portal */}
            <div className="home-hero-ai-node home-hero-ai-node-automation">
              <div className="home-hero-ai-node-icon">
                ⚡
              </div>

              <div>
                <span className="home-hero-ai-node-title">
                  Client Portal
                </span>

                <span className="home-hero-ai-node-status">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* AI Form Assistant */}
            <div className="home-hero-ai-node home-hero-ai-node-forms">
              <div className="home-hero-ai-node-icon">
                ✦
              </div>

              <div>
                <span className="home-hero-ai-node-title">
                  AI Form Assistant
                </span>

                <span className="home-hero-ai-node-status">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Website Services */}
            <div className="home-hero-ai-node home-hero-ai-node-web">
              <div className="home-hero-ai-node-icon">
                ◎
              </div>

              <div>
                <span className="home-hero-ai-node-title">
                  Web Solutions
                </span>

                <span className="home-hero-ai-node-status">
                  Available
                </span>
              </div>
            </div>

            {/* Moving particles */}
            <span className="home-hero-ai-particle home-hero-ai-particle-one" />
            <span className="home-hero-ai-particle home-hero-ai-particle-two" />
            <span className="home-hero-ai-particle home-hero-ai-particle-three" />
            <span className="home-hero-ai-particle home-hero-ai-particle-four" />
          </div>
        </div>
      </div>
    </section>
  );
}
