const webFeatures = [
  {
    number: "01",
    title: "Modern Website Design",
    description:
      "Create clean, professional, and responsive websites designed around your business, customers, and goals.",
  },
  {
    number: "02",
    title: "Website Maintenance",
    description:
      "Keep your website updated, maintained, and working reliably as your business and digital presence grow.",
  },
  {
    number: "03",
    title: "Performance & Reliability",
    description:
      "Build fast, responsive digital experiences with a strong technical foundation across desktop and mobile devices.",
  },
  {
    number: "04",
    title: "Custom Web Solutions",
    description:
      "Develop tailored web functionality and digital experiences when your business needs more than a standard website.",
  },
];

export default function WebSolutionsSection() {
  return (
    <section
      id="web-solutions"
      className="border-t border-white/10 bg-[#070916]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Content */}
          <div>
            <div className="mb-3 inline-flex rounded-full border border-violet-500/30 bg-violet-500/5 px-3 py-1">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-300">
                Web Solutions · Service 04
              </span>
            </div>

            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
              Website Design &amp; Maintenance
            </p>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Modern Websites Built for{" "}
              <span className="text-violet-500">Real Businesses.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Velquorin Labs designs modern, responsive websites that help
              businesses establish a professional digital presence and create
              better experiences for their customers.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              From company websites to more customized web solutions, we focus
              on usability, performance, reliability, and technology that can
              grow alongside your business.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-violet-600 px-5 py-3 text-xs font-medium text-white transition hover:bg-violet-500"
              >
                Discuss Your Website
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
            {webFeatures.map((feature) => (
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

        {/* Bottom Web Flow */}
        <div className="mt-12 rounded-xl border border-white/10 bg-[#0d1020] px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-400">
            <span>Strategy</span>
            <span className="text-violet-500">→</span>
            <span>Design</span>
            <span className="text-violet-500">→</span>
            <span>Development</span>
            <span className="text-violet-500">→</span>
            <span>Launch</span>
            <span className="text-violet-500">→</span>
            <span>Maintain</span>
          </div>
        </div>
      </div>
    </section>
  );
}