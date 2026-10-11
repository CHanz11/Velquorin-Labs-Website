
const contactSteps = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    description:
      "Share your goals, challenges, or project idea. Whether you need a website, custom forms, automation, or an AI-based solution, tell us what you want to achieve.",
  },
  {
    number: "02",
    title: "We Review Your Requirements",
    description:
      "We learn about your needs and review which available service or custom web and AI-based solution may be suitable for your business.",
  },
  {
    number: "03",
    title: "Plan Your Next Step",
    description:
      "We discuss your project, clarify the requirements, and identify a practical way forward. If you're interested in an upcoming service, we can discuss your needs as well.",
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
            Getting started with Velquorin Labs is straightforward. We first
            understand your business needs, then discuss the services or
            custom solutions that align with your goals.
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
                Not Sure Which Service You Need?
              </p>

              <p className="contact-info-steps-bar-description">
                Tell us about your business challenge or goal. We can discuss
                your options, including our available services and upcoming
                solutions.
              </p>
            </div>

            <div className="contact-info-steps-tags">
              {[
                "Web Development",
                "Custom Forms",
                "AI & Automation",
                "Client Portal",
              ].map((item) => (
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
