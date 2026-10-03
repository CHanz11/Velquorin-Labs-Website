export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]"
      />

      {/* Subtle secondary glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-indigo-400/5 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300 bg-purple-50 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-purple-700">
              About Velquorin Labs
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Building Practical Technology
            <br className="hidden sm:block" /> for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Modern Businesses.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Velquorin Labs builds AI and digital solutions designed to help
            businesses automate work, improve customer experiences, and create
            stronger digital operations.
          </p>

          {/* Supporting statement */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium text-slate-500">
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