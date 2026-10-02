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
    <section className="border-t border-[#20263d] bg-[#080b19] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#8d92a8]">
            Our Process
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#f5f6ff] sm:text-4xl lg:text-5xl">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-[#a46cff] to-[#7457ff] bg-clip-text text-transparent">
              Working Solution
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#9ba1b7] sm:text-base">
            A clear, collaborative approach to turn your business needs into
            practical AI and digital solutions.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[35px] hidden h-px bg-gradient-to-r from-transparent via-[#513493] to-transparent lg:block"
          />

          {processSteps.map((step) => (
            <article
              key={step.number}
              className="group relative rounded-2xl border border-[#262d49] bg-[#101426] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#6842bd]"
            >
              {/* Step number */}
              <div className="relative z-10 mb-7 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#493080] bg-[#1a1239] text-sm font-medium text-[#b994ff] shadow-[0_0_25px_rgba(124,58,237,0.12)]">
                  {step.number}
                </div>

                <span className="text-[9px] uppercase tracking-[0.24em] text-[#747b93]">
                  {step.label}
                </span>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-[#f4f5ff]">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-[#969db3]">
                {step.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-7 h-px w-full bg-[#252b43]">
                <div className="h-px w-0 bg-[#8b5cf6] transition-all duration-300 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#292f49] bg-[#0d1121] px-4 py-2 text-[11px] text-[#9298ad]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />
            Simple process. Practical solutions. Built around your business.
          </div>
        </div>
      </div>
    </section>
  );
}