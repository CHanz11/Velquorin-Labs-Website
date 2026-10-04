export default function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(124,58,237,0.10), transparent 45%)",
        }}
      />

      {/* Secondary subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-indigo-100/40 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/70 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-violet-700">
              Our Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Intelligent Solutions Built to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Move Your Business Forward.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Velquorin Labs builds practical AI and digital solutions that help
            businesses automate work, improve customer experiences, capture
            opportunities, and create stronger digital operations.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(124,58,237,0.20)] transition duration-200 hover:bg-violet-500 hover:shadow-[0_10px_30px_rgba(124,58,237,0.28)]"
            >
              Explore Our Services
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
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