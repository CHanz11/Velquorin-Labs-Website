import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-white/10 bg-[#070816] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#101126] px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 translate-x-1/3 translate-y-1/3 rounded-full bg-violet-500/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-purple-300">
              Let&apos;s Build Something Smarter
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Build Smarter
              <span className="text-purple-400"> With AI?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Tell us what you&apos;re trying to improve, automate, or build.
              Velquorin Labs can help turn your business needs into practical AI
              and digital solutions.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-purple-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-purple-500"
              >
                Start a Project
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-7 py-3 text-sm font-medium text-white transition hover:border-purple-400/40 hover:bg-white/[0.05]"
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