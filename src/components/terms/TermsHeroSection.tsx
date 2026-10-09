export default function TermsHeroSection() {
return (
<section className="terms-hero-section">
{/* Background glow */}
<div
     aria-hidden="true"
     className="terms-hero-background"
   >
<div className="terms-hero-glow" />
</div>

  <div className="terms-hero-container">
    <div className="terms-hero-content">
      {/* Eyebrow */}
      <div className="terms-hero-eyebrow">
        <span className="terms-hero-eyebrow-dot" />

        <span className="terms-hero-eyebrow-text">
          Legal &amp; Terms
        </span>
      </div>

      {/* Heading */}
      <h1 className="terms-hero-title">
        Clear Terms for Working{" "}
        <span className="terms-hero-title-gradient">
          Together.
        </span>
      </h1>

      {/* Description */}
      <p className="terms-hero-description">
        These Terms of Service explain the rules and conditions that apply
        when you access the Velquorin Labs website, communicate with us, or
        use services provided by Velquorin Labs.
      </p>

      {/* Metadata */}
      <div className="terms-hero-metadata">
        <span>Velquorin Labs</span>

        <span className="terms-hero-metadata-divider">•</span>

        <span>Terms of Service</span>

        <span className="terms-hero-metadata-divider">•</span>

        <span>Last updated: October 3, 2026</span>
      </div>
    </div>
  </div>
</section>

);
}