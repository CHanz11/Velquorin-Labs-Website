
export default function WhoWeAreSection() {
  return (
    <section className="about-who-section">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="about-who-glow"
      />

      <div className="about-who-container">
        <div className="about-who-intro">
          {/* Left */}
          <div className="about-who-heading">
            <p className="about-who-eyebrow">
              Who We Are
            </p>

            <h2 className="about-who-title">
              Technology Built Around{" "}
              <span className="about-who-title-gradient">
                Real Business Needs.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="about-who-description">
            <p>
              Velquorin Labs is a digital solutions company helping businesses
              build a stronger online presence and work more efficiently through
              practical web and technology services.
            </p>

            <p>
              We design and develop websites, create customized business forms,
              and explore AI-powered solutions that can improve customer
              interactions and simplify information collection.
            </p>

            <p>
              We also plan to offer SHASHA AI Chatbot, AI Form Assistant, and a
              Business Operations &amp; Client Portal to help businesses manage
              customer interactions and everyday client operations more
              efficiently.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="about-who-principles">
          <div className="about-who-card">
            <span className="about-who-card-number">
              01
            </span>

            <h3>Practical</h3>

            <p>
              We focus on useful digital solutions that address real business
              needs, from website improvements to customized forms and tools.
            </p>
          </div>

          <div className="about-who-card">
            <span className="about-who-card-number">
              02
            </span>

            <h3>Adaptable</h3>

            <p>
              We tailor our website services and custom development to your
              requirements, preferences, workflows, and business goals.
            </p>
          </div>

          <div className="about-who-card">
            <span className="about-who-card-number">
              03
            </span>

            <h3>Built to Grow</h3>

            <p>
              We help businesses establish their digital foundations today and
              explore additional solutions as their needs and opportunities
              evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
