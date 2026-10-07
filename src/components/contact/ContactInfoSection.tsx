const contactSteps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share your idea, business challenge, or the process you want to improve, automate, or build.",
  },
  {
    number: "02",
    title: "We Review Your Project",
    description:
      "We review your requirements and identify where AI, automation, or modern web technology may be useful.",
  },
  {
    number: "03",
    title: "We Discuss the Solution",
    description:
      "We connect with you to better understand your goals, requirements, and the right direction for your project.",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="contact-info-steps-section">
      <div
        aria-hidden="true"
        className="contact-info-steps-glow"
      />

      <div className="contact-info-steps-container">
        <div className="contact-info-steps-heading">
          <p className="contact-info-steps-eyebrow">
            What Happens Next
          </p>

          <h2 className="contact-info-steps-title">
            From Your Message to a{" "}
            <span className="contact-info-steps-title-gradient">
              Clear Next Step.
            </span>
          </h2>

          <p className="contact-info-steps-description">
            Starting a project should be straightforward. We begin by
            understanding what your business needs before deciding what
            technology makes sense.
          </p>
        </div>

        <div className="contact-info-steps-grid">
          {contactSteps.map((step) => (
            <article
              key={step.number}
              className="contact-info-step-card"
            >
              <div className="contact-info-step-header">
                <div className="contact-info-step-number">
                  {step.number}
                </div>

                <span
                  aria-hidden="true"
                  className="contact-info-step-dot"
                />
              </div>

              <h3>{step.title}</h3>

              <p className="contact-info-step-description">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="contact-info-steps-bar">
          <div className="contact-info-steps-bar-content">
            <div>
              <p className="contact-info-steps-bar-title">
                Not sure which service you need?
              </p>

              <p className="contact-info-steps-bar-description">
                That&apos;s okay. Tell us about the problem or goal and we can
                discuss which solution fits your needs.
              </p>
            </div>

            <div className="contact-info-steps-tags">
              {["AI", "Automation", "Forms", "Web"].map((item) => (
                <span key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}