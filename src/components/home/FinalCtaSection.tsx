import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="final-cta-section">
      {/* Section background design */}
      <div aria-hidden="true" className="final-cta-background">
        <div className="final-cta-background-glow" />
      </div>

      <div className="final-cta-container">
        <div className="final-cta-card">
          {/* Background glows */}
          <div
            aria-hidden="true"
            className="final-cta-card-glow final-cta-card-glow-top"
          />

          <div
            aria-hidden="true"
            className="final-cta-card-glow final-cta-card-glow-right"
          />

          <div
            aria-hidden="true"
            className="final-cta-card-glow final-cta-card-glow-left"
          />

          <div className="final-cta-content">
            <p className="final-cta-eyebrow">
              Let&apos;s Build Something Smarter
            </p>

            <h2 className="final-cta-title">
              Ready to Build Smarter
              <span className="final-cta-gradient-text"> With AI?</span>
            </h2>

            <p className="final-cta-description">
              Tell us what you&apos;re trying to improve, automate, or build.
              Velquorin Labs can help turn your business needs into practical AI
              and digital solutions.
            </p>

            <div className="final-cta-actions">
              <Link
                href="/contact"
                className="final-cta-button final-cta-button-primary"
              >
                Start a Project
              </Link>

              <Link
                href="/services"
                className="final-cta-button final-cta-button-secondary"
              >
                Explore Our Services
              </Link>
            </div>

            <p className="final-cta-supporting-text">
              Practical solutions • Built around your business • Designed to
              grow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}