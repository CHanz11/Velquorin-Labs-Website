import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/80 bg-[#060918]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl rounded-2xl border border-violet-500/20 bg-[#0b0f22]/90 px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-16">
          {/* Eyebrow */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300">
            Let&apos;s Build Something Useful
          </p>

          {/* Heading */}
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl">
            Have an Idea? Let&apos;s Turn It Into a{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Practical Solution.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
            Whether you&apos;re exploring AI, automation, conversational
            experiences, or a better digital solution, start by telling us
            what your business needs.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact-form"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#0b0f22]"
            >
              Start Your Project
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>

            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-700 bg-transparent px-7 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-500/50 hover:bg-violet-500/5 hover:text-white"
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
                className="text-[10px] font-medium text-slate-600"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}