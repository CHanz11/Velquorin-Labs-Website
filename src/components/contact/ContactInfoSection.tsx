const contactSteps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share your idea, business challenge, or the process you want to improve, automate, or build.",
  },
  {
    number: "02",
    title: "We Review Your Project",
    description:
      "We review your requirements and identify where AI, automation, or modern web technology may be useful.",
  },
  {
    number: "03",
    title: "We Discuss the Solution",
    description:
      "We connect with you to better understand your goals, requirements, and the right direction for your project.",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="relative border-b border-slate-800/80 bg-[#050817]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            What Happens Next
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl">
            From Your Message to a{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Clear Next Step.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Starting a project should be straightforward. We begin by
            understanding what your business needs before deciding what
            technology makes sense.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {contactSteps.map((step) => (
            <article
              key={step.number}
              className="group rounded-2xl border border-slate-800 bg-[#0b0f22]/70 p-6 transition duration-300 hover:border-violet-500/30 hover:bg-[#0d1127]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-[11px] font-semibold text-violet-300">
                  {step.number}
                </div>

                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-violet-500/70"
                />
              </div>

              <h3 className="mt-8 text-base font-semibold text-slate-100">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom information bar */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-[#0b0f22]/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-200">
              Not sure which service you need?
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              That&apos;s okay. Tell us about the problem or goal and we can
              discuss which solution fits your needs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["AI", "Automation", "Forms", "Web"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 px-3 py-1.5 text-[10px] font-medium text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}