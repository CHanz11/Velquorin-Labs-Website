
import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <section className="contact-info-section">
      <div
        aria-hidden="true"
        className="contact-info-glow"
      />

      <div className="contact-info-container">
        <div className="contact-info-card">
          <div
            aria-hidden="true"
            className="contact-info-inner-glow"
          />

          <div className="contact-info-content">
            <div className="contact-info-eyebrow">
              <span className="contact-info-eyebrow-dot" />

              <span>
                Let&apos;s Build Something Useful
              </span>
            </div>

            <h2 className="contact-info-title">
              Ready to Take the Next Step With{" "}
              <span className="contact-info-title-gradient">
                Velquorin Labs?
              </span>
            </h2>

            <p className="contact-info-description">
              From website development and custom forms to tailored web and
              AI-based solutions, we help you explore practical ways to move
              your business forward. Our upcoming AI tools and business
              operations portal will expand those possibilities even further.
            </p>

            <div className="contact-info-actions">
              <a
                href="#contact-form"
                className="contact-info-primary-button"
              >
                Tell Us About Your Project
                <span aria-hidden="true">→</span>
              </a>

              <Link
                href="/services"
                className="contact-info-secondary-button"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="contact-info-services">
              {[
                "Website Development & Maintenance",
                "Custom Forms Development",
                "SHASHA AI Chatbot — Coming Soon",
                "AI Form Assistant — Coming Soon",
                "Business Operations & Client Portal — Coming Soon",
                "Custom Web & AI-Based Solutions",
              ].map((service) => (
                <span key={service}>
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
