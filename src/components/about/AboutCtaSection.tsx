import Link from "next/link";

export default function AboutCtaSection() {
  return (
    <section className="about-cta-section">
      <div className="about-cta-container">
        <div className="about-cta-box">
          {/* Background glows */}
          <div
            aria-hidden="true"
            className="about-cta-glow about-cta-glow-primary"
          />

          <div
            aria-hidden="true"
            className="about-cta-glow about-cta-glow-secondary"
          />

          <div
            aria-hidden="true"
            className="about-cta-glow about-cta-glow-tertiary"
          />

          <div className="about-cta-content">
            <p className="about-cta-eyebrow">
              Build With Velquorin Labs
            </p>

            <h2 className="about-cta-title">
              Have a Project in Mind?{" "}
              <span className="about-cta-title-gradient">
                Let&apos;s Build It.
              </span>
            </h2>

            <p className="about-cta-description">
              Whether you need a new website, website improvements, custom
              forms, or a tailored digital solution, tell us about your
              business needs and let&apos;s discuss how we can help.
            </p>

            {/* CTA buttons */}
            <div className="about-cta-buttons">
              <Link href="/contact" className="about-cta-button-primary">
                Discuss Your Project
              </Link>

              <Link href="/services" className="about-cta-button-secondary">
                Explore Our Services
              </Link>
            </div>

            {/* Supporting text */}
            <div className="about-cta-supporting">
              <span>Website Services</span>

              <span className="about-cta-supporting-dot" />

              <span>Custom Forms</span>

              <span className="about-cta-supporting-dot" />

              <span>AI Products</span>

              <span className="about-cta-supporting-dot" />

              <span>Business Operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}