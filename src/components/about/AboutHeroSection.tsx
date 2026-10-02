export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#070816] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/5 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-purple-300">
              About Velquorin Labs
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building Practical Technology
            <br className="hidden sm:block" /> for{" "}
            <span className="text-purple-400">Modern Businesses.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Velquorin Labs builds AI and digital solutions designed to help
            businesses automate work, improve customer experiences, and create
            stronger digital operations.
          </p>

          {/* Supporting statement */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-slate-500">
            <span>AI Chatbots</span>
            <span>AI Automation</span>
            <span>Conversational AI Forms</span>
            <span>Web Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}