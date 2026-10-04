export default function TermsHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-violet-100 bg-white">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[20%] top-[-180px] h-[520px] w-[520px] rounded-full bg-violet-200/40 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-violet-700">
              Legal &amp; Terms
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#11152f] sm:text-5xl lg:text-6xl">
            Clear Terms for Working{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              Together.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            These Terms of Service explain the rules and conditions that apply
            when you access the Velquorin Labs website, communicate with us, or
            use services provided by Velquorin Labs.
          </p>

          {/* Metadata */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <span>Velquorin Labs</span>

            <span className="text-violet-500">•</span>

            <span>Terms of Service</span>

            <span className="text-violet-500">•</span>

            <span>Last updated: October 3, 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}