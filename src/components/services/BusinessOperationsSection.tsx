
export default function BusinessOperationsSection() {
  const features = [
    "Manage clients",
    "Organize projects",
    "Share files",
    "Collect information",
    "Send invoices",
    "Schedule appointments",
    "Communicate with customers",
  ];

  return (
    <section className="business-operations-section" id="business-operations">
      <div className="business-operations-container">
        <div className="business-operations-content">
          <div className="business-operations-label">
            <span className="business-operations-label-dot" />
            <span>SuiteDash · Service 05</span>
          </div>

          <p className="business-operations-eyebrow">
            Business Operations &amp; Client Portal — Coming Soon
          </p>

          <h2 className="business-operations-title">
            Run Your Client Operations{" "}
            <span>From One Place.</span>
          </h2>

          <p className="business-operations-description">
            Bring your everyday client operations together in one organized
            portal. Manage projects, share files, collect information, and
            communicate with your customers from one place.
          </p>

          <div className="business-operations-features">
            {features.map((feature) => (
              <div className="business-operations-feature" key={feature}>
                <span className="business-operations-check">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="business-operations-buttons">
            <a href="/contact" className="business-operations-button-primary">
              Request a Demo
            </a>
            <a
              href="#services"
              className="business-operations-button-secondary"
            >
              Explore Our Services
            </a>
          </div>

          <p className="business-operations-powered">
            Powered by <strong>Velquorin Labs</strong>
          </p>
        </div>

        <div className="business-operations-visual" aria-hidden="true">
          <div className="business-operations-visual-header">
            <span className="business-operations-visual-icon">V</span>
            <div>
              <strong>Client Portal</strong>
              <span>Business Operations</span>
            </div>
            <span className="business-operations-status">Coming Soon</span>
          </div>

          <div className="business-operations-visual-grid">
            {features.map((feature, index) => (
              <div className="business-operations-visual-card" key={feature}>
                <span className="business-operations-visual-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="business-operations-visual-footer">
            One portal. Organized operations.
          </div>
        </div>
      </div>
    </section>
  );
}
