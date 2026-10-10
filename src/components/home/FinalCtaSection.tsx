
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
              Let&apos;s Build Something for Your Business
            </p>

            <h2 className="final-cta-title">
              Have an Idea?
              <span className="final-cta-gradient-text">
                {" "}Let&apos;s Build It.
              </span>
            </h2>

            <p className="final-cta-description">
              Whether you need a new website, custom forms, help improving
              your online presence, or a digital solution tailored to your
              business, Velquorin Labs is ready to discuss your project.
            </p>

            <div className="final-cta-actions">
              <Link
                href="/contact"
                className="final-cta-button final-cta-button-primary"
              >
                Discuss Your Project
              </Link>

              <Link
                href="/services"
                className="final-cta-button final-cta-button-secondary"
              >
                Explore Our Services
              </Link>
            </div>

            <p className="final-cta-supporting-text">
              Websites • Custom Forms • AI Solutions • Business Operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
