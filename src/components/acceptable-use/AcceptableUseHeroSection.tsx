
export default function AcceptableUseHeroSection() {
  return (
    <section className="acceptable-use-hero-section">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="acceptable-use-hero-background"
      >
        <div className="acceptable-use-hero-glow" />
      </div>

      <div className="acceptable-use-hero-container">
        <div className="acceptable-use-hero-content">
          {/* Eyebrow */}
          <div className="acceptable-use-hero-eyebrow">
            <span className="acceptable-use-hero-eyebrow-dot" />

            <span className="acceptable-use-hero-eyebrow-text">
              Legal &amp; Acceptable Use
            </span>
          </div>

          {/* Heading */}
          <h1 className="acceptable-use-hero-heading">
            Responsible Use of Our{" "}
            <span className="acceptable-use-hero-heading-gradient">
              Technology &amp; Services.
            </span>
          </h1>

          {/* Description */}
          <p className="acceptable-use-hero-description">
            This Acceptable Use Policy explains the rules for using Velquorin
            Labs websites, AI solutions, and digital services responsibly,
            safely, and lawfully.
          </p>

          {/* Metadata */}
          <div className="acceptable-use-hero-metadata">
            <span>Velquorin Labs</span>

            <span className="acceptable-use-hero-metadata-dot">
              •
            </span>

            <span>Acceptable Use Policy</span>

            <span className="acceptable-use-hero-metadata-dot">
              •
            </span>

            <span>Last updated: October 3, 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
