const services = [
  {
    number: "01",
    label: "WEBSITE SERVICES",
    title: "Website Design, Development & Maintenance",
    description:
      "Redesign your existing website, request updates to your current site, or have us design and deploy a new website tailored to your business and references.",
    features: [
      "Website redesign and modernization",
      "Custom website development and deployment",
      "Website updates and ongoing maintenance",
    ],
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
  },
  {
    number: "03",
    label: "AI CUSTOMER SUPPORT — COMING SOON",
    title: "SHASHA AI Chatbot",
    description:
      "Add an AI chatbot to your website to help answer common customer questions 24/7. A free version is planned to help businesses get started.",
    features: [
      "Website-embedded AI chatbot",
      "Automated answers to customer questions",
      "Free version planned",
    ],
  },
  {
    number: "04",
    label: "AI FORM CREATION — COMING SOON",
    title: "AI Form Assistant",
    description:
      "Describe the form you need in a prompt and let AI help create a customized form for collecting customer information and business data.",
    features: [
      "Prompt-based form creation",
      "Customized business forms",
      "Simplified information collection",
    ],
  },
  {
    number: "05",
    label: "BUSINESS OPERATIONS — COMING SOON",
    title: "Business Operations & Client Portal",
    description:
      "Run your client operations from one place with a centralized portal for managing clients, projects, files, information, invoices, appointments, and communication.",
    features: [
      "Manage clients and organize projects",
      "Share files and collect information",
      "Send invoices and schedule appointments",
    ],
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
  },
];

export default function ServicesOverviewSection() {
  return (
    <section id="services" className="services-overview-section">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="services-overview-glow services-overview-glow-primary"
      />

      <div
        aria-hidden="true"
        className="services-overview-glow services-overview-glow-secondary"
      />

      <div className="services-overview-container">
        {/* Heading */}
        <div className="services-overview-heading">
          <p className="services-overview-eyebrow">
            Our Core Services
          </p>

          <h2 className="services-overview-title">
            Practical Solutions for{" "}
            <span className="services-overview-title-gradient">
              Modern Businesses.
            </span>
          </h2>

          <p className="services-overview-description">
            From website development and custom forms to planned AI products and business operations tools, Velquorin Labs builds practical digital solutions around your business needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="services-overview-grid">
          {services.map((service) => (
            <article
              key={service.number}
              className="services-overview-card"
            >
              <div className="services-overview-card-header">
                <div>
                  <p className="services-overview-card-label">
                    {service.label}
                  </p>

                  <p className="services-overview-card-service-number">
                    Service {service.number}
                  </p>
                </div>

                <div className="services-overview-card-number">
                  {service.number}
                </div>
              </div>

              <h3>{service.title}</h3>

              <p className="services-overview-card-description">
                {service.description}
              </p>

              <ul className="services-overview-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span className="services-overview-feature-icon">
                      <span />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <div className="services-overview-card-footer">
                <span>Explore Service →</span>
              </div>
            </article>
          ))}
        </div>

        {/* Custom solution strip */}
        <div className="services-overview-custom">
          <div className="services-overview-custom-content">
            <h3>Need a Solution Built for Your Business?</h3>

            <p>
              We&apos;ll discuss your needs and explore a practical custom web or AI solution.
            </p>
          </div>

          <a
            href="/contact"
            className="services-overview-custom-button"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}