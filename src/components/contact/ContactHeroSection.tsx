export default function ContactHeroSection() {
  const services = [
    "AI Chatbots",
    "AI Automation",
    "Conversational AI Forms",
    "Web Solutions",
    "Custom AI Solutions",
  ];

  return (
    <section className="relative overflow-hidden border-b border-violet-100 bg-white">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main soft purple glow */}
        <div className="absolute left-[20%] top-[-180px] h-[520px] w-[620px] rounded-full bg-violet-100/70 blur-[120px]" />

        {/* Secondary glow */}
        <div className="absolute right-[-100px] top-[80px] h-[360px] w-[460px] rounded-full bg-indigo-100/50 blur-[110px]" />

        {/* Very subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-violet-50/50 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-600">
              Contact Velquorin Labs
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#15172f] sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Smarter Together.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Have a project, business challenge, or idea in mind? Tell us what
            you&apos;re looking to improve, automate, or build, and we&apos;ll
            explore how Velquorin Labs can help.
          </p>

          {/* Service labels */}
          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-[10px] font-medium text-slate-600 shadow-sm transition duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Contact detail */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-violet-600">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m5 7 7 5 7-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Email Us
                </p>

                <a
                  href="mailto:velquorinlabs@gmail.com"
                  className="mt-0.5 block text-xs font-medium text-[#15172f] transition hover:text-violet-600 sm:text-sm"
                >
                  velquorinlabs@gmail.com
                </a>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-slate-200 sm:block" />

            <p className="max-w-sm text-xs leading-5 text-slate-500">
              Share your idea with us and we&apos;ll help identify a practical
              next step for your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}