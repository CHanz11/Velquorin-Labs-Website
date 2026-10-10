
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
              Ready to Improve Your Business with{" "}
              <span>Web, AI, and Automation?</span>
            </h2>

            {/* Description */}
            <p className="services-cta-description">
              Whether you need a website, custom forms, or a tailored digital
              solution, Velquorin Labs can help you take the next step. We&apos;re
              also developing AI-powered tools and a business operations portal
              to support more of your business needs in the future.
            </p>

            {/* CTA Buttons */}
            <div className="services-cta-buttons">
              <Link
                href="/contact"
                className="services-cta-button-primary"
              >
                <span>Discuss Your Project</span>
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
              <span>Website Development &amp; Maintenance</span>
              <span className="services-cta-tag-dot">•</span>

              <span>Custom Forms Development</span>
              <span className="services-cta-tag-dot">•</span>

              <span>SHASHA AI Chatbot — Coming Soon</span>
              <span className="services-cta-tag-dot">•</span>

              <span>AI Form Assistant — Coming Soon</span>
              <span className="services-cta-tag-dot">•</span>

              <span>Business Operations &amp; Client Portal — Coming Soon</span>
              <span className="services-cta-tag-dot">•</span>

              <span>Custom Web &amp; AI-Based Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
