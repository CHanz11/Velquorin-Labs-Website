import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      {/* Section background design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/25 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-white via-violet-50/70 to-indigo-50/80 px-6 py-14 text-center shadow-sm sm:px-10 lg:px-16 lg:py-20">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-300/25 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-purple-200/30 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-600">
              Let&apos;s Build Something Smarter
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Ready to Build Smarter
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                With AI?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Tell us what you&apos;re trying to improve, automate, or build.
              Velquorin Labs can help turn your business needs into practical AI
              and digital solutions.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-violet-600 px-7 py-3 text-sm font-medium text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-md"
              >
                Start a Project
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 py-3 text-sm font-medium text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
              >
                Explore Our Services
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Practical solutions • Built around your business • Designed to
              grow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}