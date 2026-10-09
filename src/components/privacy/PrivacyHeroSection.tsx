export default function PrivacyHeroSection() {
  return (
    <section className="privacy-hero-section">
      <div
        aria-hidden="true"
        className="privacy-hero-glow"
      />

      <div className="privacy-hero-container">
        <div className="privacy-hero-content">
          <div className="privacy-hero-eyebrow">
            <span className="privacy-hero-eyebrow-dot" />
            <span>Legal &amp; Privacy</span>
          </div>

          <h1 className="privacy-hero-title">
            Privacy Built Around{" "}
            <span className="privacy-hero-title-gradient">
              Transparency and Trust.
            </span>
          </h1>

          <p className="privacy-hero-description">
            This Privacy Policy explains how Velquorin Labs collects, uses,
            protects, and handles information when you visit our website,
            contact us, or use our services.
          </p>

          <div className="privacy-hero-metadata">
            <span>Velquorin Labs</span>

            <span
              aria-hidden="true"
              className="privacy-hero-metadata-dot"
            />

            <span>Privacy Policy</span>

            <span
              aria-hidden="true"
              className="privacy-hero-metadata-dot"
            />

            <span>Last updated: October 3, 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
