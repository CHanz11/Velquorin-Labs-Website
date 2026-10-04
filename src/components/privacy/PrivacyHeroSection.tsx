export default function PrivacyHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-100/70 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/70 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-600">
              Legal &amp; Privacy
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#11162f] sm:text-5xl lg:text-6xl">
            Privacy Built Around{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              Transparency and Trust.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            This Privacy Policy explains how Velquorin Labs collects, uses,
            protects, and handles information when you visit our website,
            contact us, or use our services.
          </p>

          {/* Metadata */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
            <span>Velquorin Labs</span>

            <span
              aria-hidden="true"
              className="hidden h-1 w-1 rounded-full bg-violet-500 sm:block"
            />

            <span>Privacy Policy</span>

            <span
              aria-hidden="true"
              className="hidden h-1 w-1 rounded-full bg-violet-500 sm:block"
            />

            <span>Last updated: October 3, 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}