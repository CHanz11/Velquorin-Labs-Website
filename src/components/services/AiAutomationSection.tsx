const automationFeatures = [
  {
    number: "01",
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes and routine tasks so your team can spend more time on higher-value work.",
  },
  {
    number: "02",
    title: "Business Integrations",
    description:
      "Connect the tools your business already uses so information can move between systems with less manual work.",
  },
  {
    number: "03",
    title: "AI-Powered Tasks",
    description:
      "Use AI to understand information, organize data, generate responses, and assist with everyday business operations.",
  },
  {
    number: "04",
    title: "Custom Automation",
    description:
      "Build automation workflows around your specific processes, requirements, and business goals.",
  },
];

export default function AiAutomationSection() {
  return (
    <section className="border-t border-white/10 bg-[#070916]">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Content */}
          <div>
            <div className="mb-3 inline-flex rounded-full border border-violet-500/30 bg-violet-500/5 px-3 py-1">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-300">
                Business Automation · Service 02
              </span>
            </div>

            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
              AI Automation
            </p>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Smarter Workflows Built to{" "}
              <span className="text-violet-500">Save Time.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Velquorin Labs creates intelligent automation systems that connect
              business processes, reduce repetitive manual work, and help teams
              operate more efficiently.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              From simple task automation to connected AI-powered workflows, we
              design solutions around how your business actually operates.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-violet-600 px-5 py-3 text-xs font-medium text-white transition hover:bg-violet-500"
              >
                Discuss an Automation
              </a>

              <a
                href="#custom-solutions"
                className="rounded-full border border-white/15 px-5 py-3 text-xs font-medium text-white transition hover:border-violet-500/50 hover:bg-white/[0.03]"
              >
                Explore Custom Solutions
              </a>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {automationFeatures.map((feature) => (
              <div
                key={feature.number}
                className="rounded-xl border border-white/10 bg-[#0d1020] p-6 transition duration-300 hover:border-violet-500/30"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-[10px] text-violet-300">
                    {feature.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                </div>

                <h3 className="text-sm font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Automation Flow */}
        <div className="mt-12 rounded-xl border border-white/10 bg-[#0d1020] px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-400">
            <span>Business Process</span>
            <span className="text-violet-500">→</span>
            <span>Automation</span>
            <span className="text-violet-500">→</span>
            <span>AI Assistance</span>
            <span className="text-violet-500">→</span>
            <span>Connected Systems</span>
            <span className="text-violet-500">→</span>
            <span>Better Operations</span>
          </div>
        </div>
      </div>
    </section>
  );
}