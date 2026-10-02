const services = [
  {
    number: "01",
    label: "AI CUSTOMER EXPERIENCE",
    title: "AI Chatbots",
    description:
      "Intelligent AI chatbots designed to answer customer questions, provide business information, capture leads, and support visitors around the clock.",
    features: [
      "24/7 automated customer support",
      "Business knowledge integration",
      "Lead capture and qualification",
    ],
    href: "/services/ai-chatbots",
  },
  {
    number: "02",
    label: "BUSINESS AUTOMATION",
    title: "AI Automation",
    description:
      "Automate repetitive workflows and connect business processes with intelligent systems designed to save time and reduce manual work.",
    features: [
      "Workflow automation",
      "Business process integration",
      "AI-powered task automation",
    ],
    href: "/services/ai-automation",
  },
  {
    number: "03",
    label: "SMART LEAD COLLECTION",
    title: "Conversational AI Forms",
    description:
      "Transform traditional forms into conversational experiences that intelligently collect, understand, validate, and organize customer information.",
    features: [
      "Conversational data collection",
      "Structured lead information",
      "Smart validation and workflows",
    ],
    href: "/services/conversational-ai-forms",
  },
  {
    number: "04",
    label: "WEB SOLUTIONS",
    title: "Website Design & Maintenance",
    description:
      "Modern, responsive websites designed to strengthen your digital presence, support your business goals, and stay reliable as your company grows.",
    features: [
      "Modern responsive websites",
      "Website updates and maintenance",
      "Performance and reliability",
    ],
    href: "/services/website-design-maintenance",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-border-default"
    >
      {/* Background effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[140px]"
      />

      <div className="site-container site-section">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-brand-soft">
            Our Core Services
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Solutions Built for
            <br />
            <span className="brand-gradient-text">Modern Businesses</span>
          </h2>

          <p className="mb-0 mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            From intelligent conversations to automated workflows and modern
            websites, Velquorin Labs builds practical digital solutions
            designed around real business needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-border-default bg-surface p-6 transition duration-300 hover:border-[var(--color-border-hover)] hover:bg-surface-elevated sm:p-8"
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-brand-primary/0 blur-[80px] transition duration-300 group-hover:bg-brand-primary/10"
              />

              <div className="relative">
                {/* Top metadata */}
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-brand-soft">
                      {service.label}
                    </p>

                    <span className="text-xs text-text-muted">
                      Service {service.number}
                    </span>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-primary/20 bg-brand-primary/10 text-xs font-medium text-brand-soft">
                    {service.number}
                  </div>
                </div>

                {/* Service content */}
                <h3 className="mb-3 text-2xl font-semibold tracking-[-0.025em] text-text-primary">
                  {service.title}
                </h3>

                <p className="mb-0 max-w-xl text-sm leading-7 text-text-secondary">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-primary/30 bg-brand-primary/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-8 border-t border-border-default pt-5">
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition hover:text-brand-soft"
                  >
                    Explore Service
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
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
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border-default bg-surface/50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="mb-1 text-lg font-semibold">
              Need something more specific?
            </h3>

            <p className="mb-0 text-sm text-text-secondary">
              We can also build custom AI and digital solutions around your
              business requirements.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-border-default px-5 py-2.5 text-sm font-medium text-text-primary transition hover:border-brand-primary hover:bg-brand-primary/10"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}