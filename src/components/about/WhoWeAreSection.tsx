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
              Velquorin Labs is an AI and digital solutions company focused on
              helping businesses use technology in practical, meaningful ways.
            </p>

            <p>
              We design intelligent solutions that automate repetitive work,
              improve customer interactions, capture opportunities, and create
              more connected digital experiences.
            </p>

            <p>
              Our approach is simple: understand the business first, then build
              technology around the problems that actually need to be solved.
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
              We focus on technology that solves real problems and creates
              measurable value for businesses.
            </p>
          </div>

          <div className="about-who-card">
            <span className="about-who-card-number">
              02
            </span>

            <h3>Adaptable</h3>

            <p>
              Our solutions are designed around each business instead of
              forcing every company into the same system.
            </p>
          </div>

          <div className="about-who-card">
            <span className="about-who-card-number">
              03
            </span>

            <h3>Built to Grow</h3>

            <p>
              We build with the future in mind so solutions can evolve as
              business needs and opportunities change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
