export default function ContactHeroSection() {
  const services = [
    "AI Chatbots",
    "AI Automation",
    "Conversational AI Forms",
    "Web Solutions",
    "Custom AI Solutions",
  ];

  return (
    <section className="contact-hero-section">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="contact-hero-background"
      >
        <div className="contact-hero-glow contact-hero-glow-primary" />
        <div className="contact-hero-glow contact-hero-glow-secondary" />
        <div className="contact-hero-glow contact-hero-glow-bottom" />
      </div>

      <div className="contact-hero-container">
        <div className="contact-hero-content">
          {/* Eyebrow */}
          <div className="contact-hero-eyebrow">
            <span className="contact-hero-eyebrow-dot" />

            <span>
              Contact Velquorin Labs
            </span>
          </div>

          {/* Heading */}
          <h1 className="contact-hero-title">
            Let&apos;s Build Something{" "}
            <span className="contact-hero-title-gradient">
              Smarter Together.
            </span>
          </h1>

          {/* Description */}
          <p className="contact-hero-description">
            Have a project, business challenge, or idea in mind? Tell us what
            you&apos;re looking to improve, automate, or build, and we&apos;ll
            explore how Velquorin Labs can help.
          </p>

          {/* Service labels */}
          <div className="contact-hero-services">
            {services.map((service) => (
              <span
                key={service}
                className="contact-hero-service"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Contact detail */}
          <div className="contact-hero-contact">
            <div className="contact-hero-email">
              <div className="contact-hero-email-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="contact-hero-email-svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m5 7 7 5 7-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p className="contact-hero-email-label">
                  Email Us
                </p>

                <a
                  href="mailto:velquorinlabs@gmail.com"
                  className="contact-hero-email-link"
                >
                  velquorinlabs@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-hero-divider" />

            <p className="contact-hero-contact-description">
              Share your idea with us and we&apos;ll help identify a practical
              next step for your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}