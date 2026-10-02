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
    <section className="border-t border-[#20263d] bg-[#080b19] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#8d92a8]">
            Integrated Digital Solutions
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#f5f6ff] sm:text-4xl lg:text-5xl">
            One Connected{" "}
            <span className="bg-gradient-to-r from-[#a46cff] to-[#7457ff] bg-clip-text text-transparent">
              Digital Experience
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#9ba1b7] sm:text-base">
            Velquorin Labs can connect your website, AI, customer interactions,
            and business workflows into a more unified digital experience.
          </p>
        </div>

        {/* Connected system */}
        <div className="relative overflow-hidden rounded-3xl border border-[#262d49] bg-[#0d1121] p-5 sm:p-8 lg:p-10">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[100px]"
          />

          <div className="relative grid gap-4 md:grid-cols-5">
            {connectedServices.map((service, index) => (
              <div
                key={service.number}
                className="relative flex md:block"
              >
                {/* Card */}
                <article className="group relative z-10 flex min-h-[150px] w-full flex-col items-center justify-center rounded-2xl border border-[#29304d] bg-[#111527] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#6842bd]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#493080] bg-[#1a1239] text-xs font-medium text-[#b994ff]">
                    {service.number}
                  </div>

                  <h3 className="text-sm font-semibold text-[#f4f5ff]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#858ca3]">
                    {service.description}
                  </p>
                </article>

                {/* Desktop connector */}
                {index < connectedServices.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-full top-1/2 z-20 hidden w-4 -translate-y-1/2 items-center justify-center md:flex"
                  >
                    <span className="text-sm text-[#8b5cf6]">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Workflow */}
          <div className="relative mt-8 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#292f49] bg-[#090d1b] px-4 py-2 text-center text-[10px] text-[#9298ad] sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />
              Website
              <span className="text-[#6f4bd8]">→</span>
              Conversation
              <span className="text-[#6f4bd8]">→</span>
              Lead
              <span className="text-[#6f4bd8]">→</span>
              Automation
              <span className="text-[#6f4bd8]">→</span>
              Business
            </div>
          </div>
        </div>

        {/* Supporting statement */}
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-xs leading-6 text-[#777e94] sm:text-sm">
            Start with the solution your business needs today and expand into
            additional connected services as your requirements grow.
          </p>
        </div>
      </div>
    </section>
  );
}