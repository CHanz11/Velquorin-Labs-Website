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
      className="relative overflow-hidden border-t border-violet-100 bg-white"
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 75% 45%, rgba(124,58,237,0.08), transparent 38%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Content */}
          <div>
            {/* Service Badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/70 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-700">
                Web Solutions · Service 04
              </span>
            </div>

            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
              Website Design &amp; Maintenance
            </p>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Modern Websites Built for{" "}
              <span className="text-violet-600">Real Businesses.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Velquorin Labs designs modern, responsive websites that help
              businesses establish a professional digital presence and create
              better experiences for their customers.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              From company websites to more customized web solutions, we focus
              on usability, performance, reliability, and technology that can
              grow alongside your business.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-violet-600 px-5 py-3 text-xs font-medium text-white shadow-[0_10px_25px_rgba(124,58,237,0.18)] transition hover:bg-violet-700 hover:shadow-[0_12px_30px_rgba(124,58,237,0.25)]"
              >
                Discuss Your Website
              </a>

              <a
                href="#custom-solutions"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-medium text-slate-800 shadow-sm transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
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
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_14px_35px_rgba(124,58,237,0.10)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-[10px] font-medium text-violet-600">
                    {feature.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                </div>

                <h3 className="text-sm font-semibold text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Web Flow */}
        <div className="mt-12 rounded-2xl border border-violet-100 bg-violet-50/40 px-6 py-5 shadow-[0_8px_30px_rgba(15,23,42,0.025)]">
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-medium text-slate-600">
            <span>Strategy</span>

            <span className="text-violet-600">→</span>

            <span>Design</span>

            <span className="text-violet-600">→</span>

            <span>Development</span>

            <span className="text-violet-600">→</span>

            <span>Launch</span>

            <span className="text-violet-600">→</span>

            <span>Maintain</span>
          </div>
        </div>
      </div>
    </section>
  );
}