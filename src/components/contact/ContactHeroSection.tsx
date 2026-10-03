export default function ContactHeroSection() {
  const services = [
    "AI Chatbots",
    "AI Automation",
    "Conversational AI Forms",
    "Web Solutions",
    "Custom AI Solutions",
  ];

  return (
    <section className="relative overflow-hidden border-b border-slate-800/80 bg-[#050817]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/5 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-200">
              Contact Velquorin Labs
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Smarter Together.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project, business challenge, or idea in mind? Tell us what
            you&apos;re looking to improve, automate, or build, and we&apos;ll
            explore how Velquorin Labs can help.
          </p>

          {/* Service labels */}
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
            {services.map((service) => (
              <span
                key={service}
                className="text-[11px] font-medium text-slate-500 transition-colors duration-200 hover:text-violet-300"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}