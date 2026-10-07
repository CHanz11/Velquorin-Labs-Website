import Link from "next/link";

export default function ServicesCtaSection() {
  return (
    <section className="services-cta-section">
      {/* Section background glow */}
      <div
        aria-hidden="true"
        className="services-cta-section-glow"
      />

      <div className="services-cta-container">
        {/* CTA Container */}
        <div className="services-cta-box">
          {/* Top glow */}
          <div
            aria-hidden="true"
            className="services-cta-glow services-cta-glow-top"
          />

          {/* Left glow */}
          <div
            aria-hidden="true"
            className="services-cta-glow services-cta-glow-left"
          />

          {/* Right glow */}
          <div
            aria-hidden="true"
            className="services-cta-glow services-cta-glow-right"
          />

          <div className="services-cta-content">
            {/* Label */}
            <div className="services-cta-label">
              <span className="services-cta-label-dot" />

              <span>Let&apos;s Build Something Useful</span>
            </div>

            {/* Heading */}
            <h2 className="services-cta-title">
              Ready to Turn Your Idea Into a{" "}
              <span>Practical Digital Solution?</span>
            </h2>

            {/* Description */}
            <p className="services-cta-description">
              Tell us what you want to improve, automate, or build. Velquorin
              Labs can help you explore the right combination of AI,
              automation, conversational experiences, and web technology for
              your business.
            </p>

            {/* CTA Buttons */}
            <div className="services-cta-buttons">
              <Link
                href="/contact"
                className="services-cta-button-primary"
              >
                <span>Start a Project</span>
                <span className="services-cta-button-arrow">→</span>
              </Link>

              <Link
                href="/about"
                className="services-cta-button-secondary"
              >
                Learn About Velquorin
              </Link>
            </div>

            {/* Service Tags */}
            <div className="services-cta-tags">
              <span>AI Chatbots</span>
              <span className="services-cta-tag-dot">•</span>

              <span>AI Automation</span>
              <span className="services-cta-tag-dot">•</span>

              <span>Conversational Forms</span>
              <span className="services-cta-tag-dot">•</span>

              <span>Web Solutions</span>
              <span className="services-cta-tag-dot">•</span>

              <span>Custom AI Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}