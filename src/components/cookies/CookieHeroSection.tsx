export default function CookieHeroSection() {
  return (
    <section className="cookie-hero-section">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="cookie-hero-background"
      >
        <div className="cookie-hero-glow" />
      </div>

      <div className="cookie-hero-container">
        <div className="cookie-hero-content">
          {/* Eyebrow */}
          <div className="cookie-hero-eyebrow">
            <span className="cookie-hero-eyebrow-dot" />

            <span className="cookie-hero-eyebrow-text">
              Legal &amp; Cookies
            </span>
          </div>

          {/* Heading */}
          <h1 className="cookie-hero-heading">
            Clear Information About{" "}
            <span className="cookie-hero-heading-gradient">
              Cookies &amp; Tracking.
            </span>
          </h1>

          {/* Description */}
          <p className="cookie-hero-description">
            This Cookie Policy explains how Velquorin Labs may use cookies and
            similar technologies when you visit our website, why they may be
            used, and the choices available to you.
          </p>

          {/* Metadata */}
          <div className="cookie-hero-metadata">
            <span>Velquorin Labs</span>
            <span className="cookie-hero-metadata-dot">•</span>
            <span>Cookie Policy</span>
            <span className="cookie-hero-metadata-dot">•</span>
            <span>Last updated: October 3, 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}