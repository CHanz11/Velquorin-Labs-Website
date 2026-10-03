const reasons = [
  {
    number: "01",
    title: "Business-Focused Solutions",
    description:
      "We design solutions around real business problems, workflows, and goals instead of adding technology without a clear purpose.",
  },
  {
    number: "02",
    title: "Customizable Solutions",
    description:
      "Every business works differently. Our solutions can be adapted around your processes, requirements, and customer experience.",
  },
  {
    number: "03",
    title: "Designed to Integrate",
    description:
      "Our solutions are built to work with your existing systems, tools, and digital processes wherever practical.",
  },
  {
    number: "04",
    title: "Built to Grow",
    description:
      "We create solutions with future improvements in mind, making it easier to expand capabilities as your business evolves.",
  },
];

export default function WhyVelquorinSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      {/* Background design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-violet-200/30 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-200/25 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 max-w-3xl sm:mb-14">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500">
            Why Velquorin Labs
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Built Around{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            We focus on practical, flexible solutions designed around your
            business instead of forcing your business around the technology.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid gap-4 md:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg sm:p-7"
            >
              {/* Subtle glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-200/35 blur-3xl transition duration-300 group-hover:bg-violet-300/45"
              />

              <div className="relative flex gap-5">
                {/* Number */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-xs font-semibold text-violet-700">
                  {reason.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-950">
                    {reason.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-center text-[11px] leading-5 text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
            Technology should support your business — not complicate it.
          </div>
        </div>
      </div>
    </section>
  );
}