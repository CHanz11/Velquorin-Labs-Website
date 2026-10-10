
const services = [
  {
    number: "01",
    label: "WEBSITE SERVICES",
    title: "Website Design, Development & Maintenance",
    description:
      "Redesign your existing website, build a new website for your business, or request updates and ongoing maintenance based on your needs and design references.",
    features: [
      "Website redesign and modernization",
      "Custom website development and deployment",
      "Website updates and maintenance",
    ],
    href: "/contact",
    status: "Available",
  },
  {
    number: "02",
    label: "CUSTOM DEVELOPMENT",
    title: "Custom Forms Development",
    description:
      "Get modern, customized forms designed around your business workflows, customer requirements, and information collection needs.",
    features: [
      "Booking and appointment forms",
      "Contact and inquiry forms",
      "Registration and submission forms",
    ],
    href: "/contact",
    status: "Available",
  },
  {
    number: "03",
    label: "AI CUSTOMER SUPPORT",
    title: "SHASHA AI Chatbot",
    description:
      "Add an AI chatbot to your website to help answer common customer questions 24/7. A free version is planned.",
    features: [
      "Website-embedded AI chatbot",
      "Automated answers to customer questions",
      "Free version planned",
    ],
    href: "/contact",
    status: "Coming Soon",
  },
  {
    number: "04",
    label: "AI FORM CREATION",
    title: "AI Form Assistant",
    description:
      "Describe the form you need in a prompt and let AI help create a customized form for collecting customer information and business data.",
    features: [
      "Prompt-based form creation",
      "Customized business forms",
      "Simplified information collection",
    ],
    href: "/contact",
    status: "Coming Soon",
  },
  {
    number: "05",
    label: "BUSINESS OPERATIONS",
    title: "Business Operations & Client Portal",
    description:
      "Run your client operations from one place with a centralized portal for organizing projects, managing clients, and handling everyday business activities.",
    features: [
      "Manage clients and organize projects",
      "Share files and collect information",
      "Invoices, appointments, and communication",
    ],
    href: "/contact",
    status: "Coming Soon",
    poweredBy: "Powered by Velquorin Labs · Built on SuiteDash",
  },
  {
    number: "06",
    label: "CUSTOM PROJECTS",
    title: "Custom Web & AI Solutions",
    description:
      "Have a unique idea or business challenge? Tell us about your project so we can discuss your requirements and explore a solution tailored to your business.",
    features: [
      "Custom web applications",
      "Business-specific AI solutions",
      "Solutions based on your requirements",
    ],
    href: "/contact",
    status: "Project-Based",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="home-services-section">
      {/* Background effect */}
      <div
        aria-hidden="true"
        className="home-services-background-glow"
      />

      <div className="site-container home-services-container">
        {/* Section heading */}
        <div className="home-services-heading">
          <p className="home-services-eyebrow">
            Our Core Services
          </p>

          <h2 className="home-services-title">
            Digital Solutions
            <br />
            <span className="home-services-title-gradient">
              for Modern Businesses
            </span>
          </h2>       
          <p className="home-services-description">
            From website design and custom forms to AI-powered products and
            business operations, we provide digital solutions tailored to
            your business needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="home-services-grid">
          {services.map((service) => (
            <article
              key={service.number}
              className="home-service-card"
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="home-service-card-glow"
              />

              <div className="home-service-card-content">
                {/* Top metadata */}
                <div className="home-service-card-top">
                  <div>
                    <p className="home-service-label">
                      {service.label}
                    </p>
                    <span className="home-service-number-label">
                      {service.status}
                    </span>
                  </div>

                  <div className="home-service-number">
                    {service.number}
                  </div>
                </div>

                {/* Service content */}
                <h3 className="home-service-card-title">
                  {service.title}
                </h3>

                <p className="home-service-card-description">
                  {service.description}
                </p>

                {/* Features */}
                <div className="home-service-features">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="home-service-feature"
                    >
                      <span className="home-service-feature-icon">
                        <span className="home-service-feature-dot" />
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                
                <div className="home-service-link-wrapper">
                  <a
                    href={service.href}
                    className="home-service-link"
                  >
                    {service.status === "Coming Soon"
                      ? "Learn More"
                      : service.status === "Project-Based"
                        ? "Discuss Your Project"
                        : "Request Service"}

                    <span
                      aria-hidden="true"
                      className="home-service-link-arrow"
                    >
                      →
                    </span>
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Supporting CTA */}
        <div className="home-services-cta">
          <div className="home-services-cta-content">
            <h3 className="home-services-cta-title">
              Need something more specific?
            </h3>

            
            <p className="home-services-cta-description">
              Have a specific business need or project idea? Let&apos;s discuss
              your requirements and find the right solution for you.
            </p>

          </div>

          <a
            href="/contact"
            className="home-services-cta-button"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}