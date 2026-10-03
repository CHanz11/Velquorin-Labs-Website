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
      className="border-t border-white/10 bg-[#080a18]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex rounded-full border border-violet-500/30 bg-violet-500/5 px-3 py-1">
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-300">
              Custom AI Solutions
            </span>
          </div>

          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
            Built for Unique Business Needs
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Your Business Is Unique.{" "}
            <span className="text-violet-500">
              Your Solution Can Be Too.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
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
              className="group rounded-xl border border-white/10 bg-[#0d1020] p-6 transition duration-300 hover:border-violet-500/30"
            >
              <div className="flex gap-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-[10px] text-violet-300">
                  {feature.number}
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connected Solution */}
        <div className="mt-10 rounded-xl border border-white/10 bg-[#0d1020] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-300">
                One Connected Solution
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Combine the Technology Your Business Needs.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                A custom solution can combine conversational AI, automation,
                forms, websites, integrations, and other digital capabilities
                into a system designed around the way your business operates.
              </p>

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
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <a
                href="/contact"
                className="inline-flex rounded-full bg-violet-600 px-6 py-3 text-xs font-medium text-white transition hover:bg-violet-500"
              >
                Discuss Your Idea
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-500">
            Business Need
            <span className="mx-3 text-violet-500">→</span>
            Strategy
            <span className="mx-3 text-violet-500">→</span>
            Custom Solution
            <span className="mx-3 text-violet-500">→</span>
            Build
            <span className="mx-3 text-violet-500">→</span>
            Grow
          </p>
        </div>
      </div>
    </section>
  );
}