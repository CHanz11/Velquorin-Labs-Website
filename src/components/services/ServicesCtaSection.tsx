import Link from "next/link";

export default function ServicesCtaSection() {
  return (
    <section className="border-t border-white/10 bg-[#070916]">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-[#0d1020] px-6 py-16 text-center sm:px-10 lg:px-16">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Label */}
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-violet-300">
              Let&apos;s Build Something Useful
            </p>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to Turn Your Idea Into a{" "}
              <span className="text-violet-500">
                Practical Digital Solution?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
              Tell us what you want to improve, automate, or build. Velquorin
              Labs can help you explore the right combination of AI,
              automation, conversational experiences, and web technology for
              your business.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-w-40 items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-xs font-medium text-white transition hover:bg-violet-500"
              >
                Start a Project
              </Link>

              <Link
                href="/about"
                className="inline-flex min-w-40 items-center justify-center rounded-full border border-white/15 px-6 py-3 text-xs font-medium text-white transition hover:border-violet-500/50 hover:bg-white/[0.03]"
              >
                Learn About Velquorin
              </Link>
            </div>

            {/* Service Tags */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] text-slate-500">
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