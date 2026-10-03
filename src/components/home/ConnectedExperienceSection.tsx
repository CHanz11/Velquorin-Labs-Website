const connectedServices = [
  {
    number: "01",
    title: "Website",
    description: "Your digital presence",
  },
  {
    number: "02",
    title: "AI Chatbot",
    description: "Customer conversations",
  },
  {
    number: "03",
    title: "Conversational Forms",
    description: "Smart lead collection",
  },
  {
    number: "04",
    title: "AI Automation",
    description: "Connected workflows",
  },
  {
    number: "05",
    title: "Business Tools",
    description: "Integrated operations",
  },
];

export default function ConnectedExperienceSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-[#f8f7ff] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      {/* Background design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-200/35 blur-[140px]" />

        <div className="absolute -bottom-40 -right-32 h-[400px] w-[400px] rounded-full bg-indigo-200/25 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500">
            Integrated Digital Solutions
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            One Connected{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Experience
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Velquorin Labs can connect your website, AI, customer interactions,
            and business workflows into a more unified digital experience.
          </p>
        </div>

        {/* Connected system */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:p-8 lg:p-10">
          {/* Inner background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/35 blur-[100px]"
          />

          <div className="relative grid gap-4 md:grid-cols-5">
            {connectedServices.map((service, index) => (
              <div
                key={service.number}
                className="relative flex md:block"
              >
                {/* Card */}
                <article className="group relative z-10 flex min-h-[150px] w-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg">
                  {/* Number */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-xs font-semibold text-violet-700">
                    {service.number}
                  </div>

                  <h3 className="text-sm font-semibold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {service.description}
                  </p>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-all duration-500 group-hover:w-3/4" />
                </article>

                {/* Desktop connector */}
                {index < connectedServices.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-full top-1/2 z-20 hidden w-4 -translate-y-1/2 items-center justify-center md:flex"
                  >
                    <span className="text-sm font-medium text-violet-500">
                      →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Workflow */}
          <div className="relative mt-8 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-center text-[10px] text-slate-600 shadow-sm sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

              Website

              <span className="text-violet-500">→</span>

              Conversation

              <span className="text-violet-500">→</span>

              Lead

              <span className="text-violet-500">→</span>

              Automation

              <span className="text-violet-500">→</span>

              Business
            </div>
          </div>
        </div>

        {/* Supporting statement */}
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-xs leading-6 text-slate-500 sm:text-sm">
            Start with the solution your business needs today and expand into
            additional connected services as your requirements grow.
          </p>
        </div>
      </div>
    </section>
  );
}