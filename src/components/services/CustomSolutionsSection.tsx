const customSolutionFeatures = [
  {
    number: "01",
    title: "Built Around Your Business",
    description:
      "We start with your goals, challenges, and existing processes instead of forcing your business into a predefined solution.",
  },
  {
    number: "02",
    title: "Custom AI Systems",
    description:
      "Create tailored AI-powered tools and experiences designed around specific business requirements and workflows.",
  },
  {
    number: "03",
    title: "Connected Solutions",
    description:
      "Combine AI, automation, web experiences, and business integrations into one connected digital solution.",
  },
  {
    number: "04",
    title: "Designed to Grow",
    description:
      "Build with future expansion in mind so your solution can evolve as your operations, customers, and requirements change.",
  },
];

export default function CustomSolutionsSection() {
  return (
    <section
      id="custom-solutions"
      className="relative overflow-hidden border-t border-violet-100 bg-[#faf9ff]"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(124,58,237,0.08), transparent 42%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-700">
              Custom AI Solutions
            </span>
          </div>

          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
            Built for Unique Business Needs
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Your Business Is Unique.{" "}
            <span className="text-violet-600">
              Your Solution Can Be Too.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600">
            Not every business challenge fits into a standard service.
            Velquorin Labs can design custom AI and digital solutions around
            your specific goals, workflows, systems, and requirements.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {customSolutionFeatures.map((feature) => (
            <div
              key={feature.number}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_14px_35px_rgba(124,58,237,0.10)]"
            >
              <div className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-[10px] font-medium text-violet-600">
                  {feature.number}
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connected Solution */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-[0_12px_40px_rgba(124,58,237,0.06)]">
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-600">
                  One Connected Solution
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-950">
                Combine the Technology Your Business Needs.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                A custom solution can combine conversational AI, automation,
                forms, websites, integrations, and other digital capabilities
                into a system designed around the way your business operates.
              </p>

              {/* Technology Pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "AI Chatbots",
                  "AI Automation",
                  "Conversational Forms",
                  "Web Solutions",
                  "Business Integrations",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-600 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="lg:border-l lg:border-violet-100 lg:pl-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-xs font-medium text-white shadow-[0_10px_25px_rgba(124,58,237,0.18)] transition hover:bg-violet-700 hover:shadow-[0_12px_30px_rgba(124,58,237,0.25)]"
              >
                Discuss Your Idea
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Flow */}
        <div className="mt-8 flex justify-center">
          <div className="rounded-full border border-violet-100 bg-white px-5 py-3 shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] font-medium text-slate-500">
              <span>Business Need</span>

              <span className="text-violet-600">→</span>

              <span>Strategy</span>

              <span className="text-violet-600">→</span>

              <span>Custom Solution</span>

              <span className="text-violet-600">→</span>

              <span>Build</span>

              <span className="text-violet-600">→</span>

              <span>Grow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}