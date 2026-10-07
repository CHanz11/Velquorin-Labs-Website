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
              Have an Idea? Let&apos;s Turn It Into a{" "}
              <span className="contact-info-title-gradient">
                Practical Solution.
              </span>
            </h2>

            <p className="contact-info-description">
              Whether you&apos;re exploring AI, automation, conversational
              experiences, or a better digital solution, start by telling us
              what your business needs.
            </p>

            <div className="contact-info-actions">
              <a
                href="#contact-form"
                className="contact-info-primary-button"
              >
                Start Your Project
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
                "AI Chatbots",
                "AI Automation",
                "Conversational AI Forms",
                "Web Solutions",
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