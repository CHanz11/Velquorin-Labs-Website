export default function WhoWeAreSection() {
  return (
    <section className="border-t border-white/10 bg-[#050714]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          
          {/* Left */}
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-400">
              Who We Are
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Technology Built Around{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                Real Business Needs.
              </span>
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5 text-sm leading-7 text-slate-400 sm:text-base">
            <p>
              Velquorin Labs is an AI and digital solutions company focused on
              helping businesses use technology in practical, meaningful ways.
            </p>

            <p>
              We design intelligent solutions that automate repetitive work,
              improve customer interactions, capture opportunities, and create
              more connected digital experiences.
            </p>

            <p>
              Our approach is simple: understand the business first, then build
              technology around the problems that actually need to be solved.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:mt-20">
          <div className="rounded-2xl border border-white/10 bg-[#0d1123] p-6">
            <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-xs text-violet-300">
              01
            </span>

            <h3 className="mb-2 text-base font-medium text-white">
              Practical
            </h3>

            <p className="text-sm leading-6 text-slate-400">
              We focus on technology that solves real problems and creates
              measurable value for businesses.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1123] p-6">
            <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-xs text-violet-300">
              02
            </span>

            <h3 className="mb-2 text-base font-medium text-white">
              Adaptable
            </h3>

            <p className="text-sm leading-6 text-slate-400">
              Our solutions are designed around each business instead of
              forcing every company into the same system.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d1123] p-6">
            <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-xs text-violet-300">
              03
            </span>

            <h3 className="mb-2 text-base font-medium text-white">
              Built to Grow
            </h3>

            <p className="text-sm leading-6 text-slate-400">
              We build with the future in mind so solutions can evolve as
              business needs and opportunities change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}