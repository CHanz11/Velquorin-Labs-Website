import Link from "next/link";

export default function ServicesCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-violet-100 bg-white">
      {/* Section background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.06), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        {/* CTA Container */}
        <div className="relative overflow-hidden rounded-3xl border border-violet-200 bg-[#faf9ff] px-6 py-16 text-center shadow-[0_20px_60px_rgba(124,58,237,0.08)] sm:px-10 lg:px-16 lg:py-20">
          {/* Top glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/20 blur-3xl"
          />

          {/* Left glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 -translate-x-1/3 translate-y-1/3 rounded-full bg-purple-300/15 blur-3xl"
          />

          {/* Right glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-300/15 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-violet-700">
                Let&apos;s Build Something Useful
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Ready to Turn Your Idea Into a{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                Practical Digital Solution?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Tell us what you want to improve, automate, or build. Velquorin
              Labs can help you explore the right combination of AI,
              automation, conversational experiences, and web technology for
              your business.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 min-w-40 items-center justify-center gap-2 rounded-full bg-violet-600 px-7 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(124,58,237,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-[0_14px_35px_rgba(124,58,237,0.30)]"
              >
                Start a Project

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-11 min-w-40 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
              >
                Learn About Velquorin
              </Link>
            </div>

            {/* Service Tags */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-medium text-slate-500">
              <span>AI Chatbots</span>

              <span className="text-violet-500">•</span>

              <span>AI Automation</span>

              <span className="text-violet-500">•</span>

              <span>Conversational Forms</span>

              <span className="text-violet-500">•</span>

              <span>Web Solutions</span>

              <span className="text-violet-500">•</span>

              <span>Custom AI Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}