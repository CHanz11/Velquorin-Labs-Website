import Link from "next/link";

export default function AboutCtaSection() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        
        {/* CTA container */}
        <div className="relative overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/80 px-6 py-14 text-center shadow-sm sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          
          {/* Background glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-purple-200/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-600">
              Build With Velquorin Labs
            </p>

            <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Have an Idea or Business Problem{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                We Can Help Solve?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Tell us what you are trying to improve, automate, or build.
              Velquorin Labs can help turn the idea into a practical digital
              solution designed around your business.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-violet-500"
              >
                Start a Project
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Small supporting text */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-slate-500">
              <span>AI Solutions</span>

              <span className="hidden h-1 w-1 rounded-full bg-violet-500 sm:block" />

              <span>Automation</span>

              <span className="hidden h-1 w-1 rounded-full bg-violet-500 sm:block" />

              <span>Digital Experiences</span>

              <span className="hidden h-1 w-1 rounded-full bg-violet-500 sm:block" />

              <span>Web Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}