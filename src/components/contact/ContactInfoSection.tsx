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
    <section className="relative overflow-hidden border-b border-violet-100 bg-white">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 25%, rgba(124,58,237,0.07), transparent 42%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-600">
            What Happens Next
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#11152f] sm:text-4xl">
            From Your Message to a{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              Clear Next Step.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
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
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_18px_45px_rgba(124,58,237,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-[11px] font-semibold text-violet-600">
                  {step.number}
                </div>

                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-violet-500"
                />
              </div>

              <h3 className="mt-8 text-base font-semibold text-[#11152f]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom information bar */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-violet-100 bg-[#faf9ff] px-6 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.03)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[#11152f]">
              Not sure which service you need?
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-600">
              That&apos;s okay. Tell us about the problem or goal and we can
              discuss which solution fits your needs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["AI", "Automation", "Forms", "Web"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-violet-200 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600"
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