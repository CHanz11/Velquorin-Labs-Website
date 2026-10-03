const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, challenges, workflows, and goals before recommending the right solution.",
    label: "Discovery",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We plan the experience, workflow, integrations, and technology needed to turn the idea into a practical solution.",
    label: "Strategy",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, integrate, test, and refine your solution using modern technologies built around your business.",
    label: "Development",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "After launch, we maintain, optimize, and improve the solution as your business and requirements grow.",
    label: "Optimization",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-[#f8f7ff] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      {/* Background design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[130px]" />

        <div className="absolute bottom-[-220px] right-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-400/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500">
            Our Process
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Working Solution
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            A clear, collaborative approach to turn your business needs into
            practical AI and digital solutions.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[35px] hidden h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent lg:block"
          />

          {processSteps.map((step) => (
            <article
              key={step.number}
              className="group relative rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_10px_35px_rgba(15,23,42,0.045)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_18px_45px_rgba(124,58,237,0.10)]"
            >
              {/* Step number */}
              <div className="relative z-10 mb-7 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-sm font-medium text-violet-700 shadow-[0_8px_24px_rgba(124,58,237,0.10)]">
                  {step.number}
                </div>

                <span className="text-[9px] uppercase tracking-[0.24em] text-slate-400">
                  {step.label}
                </span>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-slate-600">
                {step.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-7 h-px w-full bg-slate-200">
                <div className="h-px w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-[11px] text-slate-600 shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Simple process. Practical solutions. Built around your business.
          </div>
        </div>
      </div>
    </section>
  );
}