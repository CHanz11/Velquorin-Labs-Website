import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/70 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-violet-200/80 bg-white/90 px-6 py-14 text-center shadow-[0_20px_70px_rgba(76,29,149,0.08)] sm:px-10 lg:px-16 lg:py-16">
          {/* Inner subtle glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/80 blur-3xl" />
          </div>

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/70 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-600">
                Let&apos;s Build Something Useful
              </span>
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[#11162f] sm:text-4xl">
              Have an Idea? Let&apos;s Turn It Into a{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                Practical Solution.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              Whether you&apos;re exploring AI, automation, conversational
              experiences, or a better digital solution, start by telling us
              what your business needs.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-white"
              >
                Start Your Project
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>

              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-[#11162f] shadow-sm transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Service labels */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                "AI Chatbots",
                "AI Automation",
                "Conversational AI Forms",
                "Web Solutions",
              ].map((service) => (
                <span
                  key={service}
                  className="text-[10px] font-medium text-slate-500"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}