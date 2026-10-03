export default function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-[#070918]">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(124,58,237,0.15), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-violet-200">
              Our Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Intelligent Solutions Built to{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Move Your Business Forward.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Velquorin Labs builds practical AI and digital solutions that help
            businesses automate work, improve customer experiences, capture
            opportunities, and create stronger digital operations.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
            >
              Explore Our Services
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-6 py-3 text-sm font-medium text-white transition hover:border-violet-500/50 hover:bg-slate-900"
            >
              Discuss Your Project
            </a>
          </div>

          {/* Service labels */}
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-500">
            <span>AI Chatbots</span>
            <span>AI Automation</span>
            <span>Conversational AI Forms</span>
            <span>Web Solutions</span>
            <span>Custom AI Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}