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
              Have an Idea or Business Problem{" "}
              <span className="about-cta-title-gradient">
                We Can Help Solve?
              </span>
            </h2>

            <p className="about-cta-description">
              Tell us what you are trying to improve, automate, or build.
              Velquorin Labs can help turn the idea into a practical digital
              solution designed around your business.
            </p>

            {/* CTA buttons */}
            <div className="about-cta-buttons">
              <Link href="/contact" className="about-cta-button-primary">
                Start a Project
              </Link>

              <Link href="/services" className="about-cta-button-secondary">
                Explore Our Services
              </Link>
            </div>

            {/* Supporting text */}
            <div className="about-cta-supporting">
              <span>AI Solutions</span>

              <span className="about-cta-supporting-dot" />

              <span>Automation</span>

              <span className="about-cta-supporting-dot" />

              <span>Digital Experiences</span>

              <span className="about-cta-supporting-dot" />

              <span>Web Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}