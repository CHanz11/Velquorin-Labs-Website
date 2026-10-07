export default function ContactFormSection() {
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

            <span>
              Start a Conversation
            </span>
          </div>

          <h2 className="contact-form-title">
            Tell Us About Your{" "}
            <span className="contact-form-title-gradient">
              Project or Idea.
            </span>
          </h2>

          <p className="contact-form-description">
            Share a few details about what you&apos;re looking to build,
            automate, or improve. This helps us understand your needs before we
            start the conversation.
          </p>
        </div>

        {/* Form container */}
        <div className="contact-form-card">
          {/* Form top accent */}
          <div
            aria-hidden="true"
            className="contact-form-top-accent"
          />

          <form className="contact-form">
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
                  className="contact-form-input contact-form-select"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="ai-chatbots">AI Chatbots</option>
                  <option value="ai-automation">AI Automation</option>
                  <option value="conversational-forms">
                    Conversational AI Forms
                  </option>
                  <option value="web-solutions">
                    Website Design &amp; Maintenance
                  </option>
                  <option value="custom-ai">Custom AI Solutions</option>
                  <option value="other">Other / Not Sure Yet</option>
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
                placeholder="Tell us what you're trying to build, automate, improve, or solve..."
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
                  Your information will only be used to communicate with you
                  about your request.
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
          <p>
            Prefer email? You can contact us directly.
          </p>

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