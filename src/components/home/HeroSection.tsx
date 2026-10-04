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

            {/* Center AI Core */}
            <div className="home-hero-ai-core">

              <div className="home-hero-ai-core-pulse" />

              <div className="home-hero-ai-core-inner">
                <span className="home-hero-ai-core-icon">
                  ✦
                </span>

                <span className="home-hero-ai-core-label">
                  VELQUORIN AI
                </span>
              </div>

            </div>

            {/* AI Chatbot */}
            <div className="home-hero-ai-node home-hero-ai-node-chat">
              <div className="home-hero-ai-node-icon">
                ◇
              </div>

              <div>
                <span className="home-hero-ai-node-title">
                  AI Chatbot
                </span>

                <span className="home-hero-ai-node-status">
                  Active
                </span>
              </div>
            </div>

            {/* Automation */}
            <div className="home-hero-ai-node home-hero-ai-node-automation">
              <div className="home-hero-ai-node-icon">
                ⚡
              </div>

              <div>
                <span className="home-hero-ai-node-title">
                  Automation
                </span>

                <span className="home-hero-ai-node-status">
                  Connected
                </span>
              </div>
            </div>

            {/* AI Forms */}
            <div className="home-hero-ai-node home-hero-ai-node-forms">
              <div className="home-hero-ai-node-icon">
                ✦
              </div>

              <div>
                <span className="home-hero-ai-node-title">
                  AI Forms
                </span>

                <span className="home-hero-ai-node-status">
                  Intelligent
                </span>
              </div>
            </div>

            {/* Web Solutions */}
            <div className="home-hero-ai-node home-hero-ai-node-web">
              <div className="home-hero-ai-node-icon">
                ◎
              </div>

              <div>
                <span className="home-hero-ai-node-title">
                  Web Solutions
                </span>

                <span className="home-hero-ai-node-status">
                  Online
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