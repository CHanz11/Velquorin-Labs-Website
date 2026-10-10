
export default function AboutHeroSection() {
  return (
    <section className="about-hero-section">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="about-hero-glow about-hero-glow-primary"
      />

      {/* Subtle secondary glow */}
      <div
        aria-hidden="true"
        className="about-hero-glow about-hero-glow-secondary"
      />

      <div className="about-hero-container">
        <div className="about-hero-content">
          {/* Eyebrow */}
          <div className="about-hero-eyebrow">
            <span className="about-hero-eyebrow-dot" />

            <span>About Velquorin Labs</span>
          </div>

          {/* Heading */}
          <h1 className="about-hero-title">
            Building Practical Technology
            <br className="about-hero-title-break" /> for{" "}
            <span className="about-hero-title-gradient">
              Modern Businesses.
            </span>
          </h1>

          {/* Description */}
          <p className="about-hero-description">
            Velquorin Labs helps businesses build their online presence,
            simplify customer interactions, and improve client operations
            through websites, custom forms, and practical digital solutions.
          </p>

          {/* Supporting statement */}
          <div className="about-hero-services">
            <span>Website Services</span>
            <span>Custom Forms</span>
            <span>AI Solutions</span>
            <span>Business Operations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
