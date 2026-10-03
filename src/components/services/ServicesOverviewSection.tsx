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
  },
];

export default function ServicesOverviewSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-slate-800 bg-[#080b1b]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(124,58,237,0.08), transparent 42%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500">
            Our Core Services
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Practical Solutions for{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Modern Businesses.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            From intelligent conversations to automated workflows and modern
            websites, Velquorin Labs builds digital solutions designed around
            real business needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative rounded-2xl border border-slate-800 bg-[#0d1124] p-6 transition duration-300 hover:border-violet-500/40 sm:p-7"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-slate-500">
                    {service.label}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600">
                    Service {service.number}
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-xs text-violet-300">
                  {service.number}
                </div>
              </div>

              <h3 className="mt-7 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-xs text-slate-300"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-violet-500/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-slate-800 pt-5">
                <span className="text-xs font-medium text-white transition group-hover:text-violet-300">
                  Explore Service →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Custom solution strip */}
        <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-[#0d1124] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-medium text-white">
              Need something more specific?
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              We can also build custom AI and digital solutions around your
              business requirements.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-xs font-medium text-white transition hover:border-violet-500/50 hover:bg-violet-500/10"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}