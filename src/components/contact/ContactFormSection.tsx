export default function ContactFormSection() {
  const services = [
    {
      value: "website-development-maintenance",
      label: "Website Development & Maintenance",
    },
    {
      value: "custom-forms-development",
      label: "Custom Forms Development",
    },
    {
      value: "shasha-ai-chatbot",
      label: "SHASHA AI Chatbot — Coming Soon",
    },
    {
      value: "ai-form-assistant",
      label: "AI Form Assistant — Coming Soon",
    },
    {
      value: "business-operations-client-portal",
      label: "Business Operations & Client Portal — Coming Soon",
    },
    {
      value: "custom-web-ai-solutions",
      label: "Custom Web & AI-Based Solutions",
    },
    {
      value: "other",
      label: "Other / Not Sure Yet",
    },
  ];

  return (
    <section
      id="contact-form"
      className="contact-form-section"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="contact-form-background"
      >
        <div className="contact-form-glow contact-form-glow-left" />
        <div className="contact-form-glow contact-form-glow-right" />
      </div>

      <div className="contact-form-container">
        {/* Section heading */}
        <div className="contact-form-heading">
          <div className="contact-form-eyebrow">
            <span className="contact-form-eyebrow-dot" />

            <span>Start a Conversation</span>
          </div>

          <h2 className="contact-form-title">
            Tell Us About Your{" "}
            <span className="contact-form-title-gradient">
              Project or Idea.
            </span>
          </h2>

          <p className="contact-form-description">
            Tell us what you want to build, improve, or automate. Choose the
            service that best matches your needs and share a few details so
            we can better understand your project.
          </p>
        </div>

        {/* Form container */}
        <div className="contact-form-card">
          {/* Form top accent */}
          <div
            aria-hidden="true"
            className="contact-form-top-accent"
          />

          <form
            className="contact-form"
            action="mailto:velquorinlabs@gmail.com"
            method="post"
            encType="text/plain"
          >
            {/* Name + Email */}
            <div className="contact-form-row">
              <div className="contact-form-field">
                <label
                  htmlFor="name"
                  className="contact-form-label"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-field">
                <label
                  htmlFor="email"
                  className="contact-form-label"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                  className="contact-form-input"
                />
              </div>
            </div>

            {/* Company + Service */}
            <div className="contact-form-row">
              <div className="contact-form-field">
                <label
                  htmlFor="company"
                  className="contact-form-label"
                >
                  Company / Business
                  <span className="contact-form-optional">
                    (Optional)
                  </span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  autoComplete="organization"
                  className="contact-form-input"
                />
              </div>

              <div className="contact-form-field">
                <label
                  htmlFor="service"
                  className="contact-form-label"
                >
                  What Can We Help With?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                  className="contact-form-input contact-form-select"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service.value}
                      value={service.value}
                    >
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="contact-form-field">
              <label
                htmlFor="message"
                className="contact-form-label"
              >
                Tell Us About Your Project
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Describe your goals, requirements, challenges, or the solution you have in mind..."
                required
                className="contact-form-input contact-form-textarea"
              />
            </div>

            {/* Footer */}
            <div className="contact-form-footer">
              <div className="contact-form-note">
                <p>
                  By submitting this form, you agree that Velquorin Labs may
                  use the information you provide to respond to your inquiry.
                </p>

                <p>
                  Please review our{" "}
                  <a href="/privacy-policy">
                    Privacy Policy
                  </a>{" "}
                  to learn how your information is handled.
                </p>
              </div>

              <button
                type="submit"
                className="contact-form-submit"
              >
                Send Inquiry

                <span
                  aria-hidden="true"
                  className="contact-form-submit-arrow"
                >
                  →
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Supporting contact option */}
        <div className="contact-form-support">
          <p>Prefer email? You can contact us directly.</p>

          <a
            href="mailto:velquorinlabs@gmail.com"
            className="contact-form-email-link"
          >
            velquorinlabs@gmail.com →
          </a>
        </div>
      </div>
    </section>
  );
}
