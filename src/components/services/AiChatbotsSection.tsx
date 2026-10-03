const capabilities = [
  {
    number: "01",
    title: "Customer Support",
    description:
      "Answer common customer questions and provide helpful business information around the clock.",
  },
  {
    number: "02",
    title: "Lead Capture",
    description:
      "Collect visitor information and help turn conversations into organized business opportunities.",
  },
  {
    number: "03",
    title: "Business Knowledge",
    description:
      "Use your approved business information to provide more relevant and consistent responses.",
  },
  {
    number: "04",
    title: "Website Integration",
    description:
      "Embed intelligent conversational experiences directly into your existing business website.",
  },
];

export default function AiChatbotsSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-[#070918]">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 40%, rgba(124,58,237,0.10), transparent 38%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        {/* Top content */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-violet-200">
                AI Customer Experience
              </span>
            </div>

            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500">
              Service 01
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Intelligent Conversations{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                Built for Business.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Velquorin Labs builds AI chatbot experiences designed to help
              businesses communicate with customers, answer questions, capture
              leads, and make useful business information easier to access.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Our goal is not simply to place a chatbot on your website. We
              design conversational systems around the way your business
              actually communicates and operates.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
              >
                Discuss an AI Chatbot
              </a>

              <a
                href="#shasha"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-white transition hover:border-violet-500/50 hover:bg-violet-500/10"
              >
                Meet SHASHA AI
              </a>
            </div>
          </div>

          {/* Right capabilities */}
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability.number}
                className="rounded-2xl border border-slate-800 bg-[#0d1124] p-6 transition hover:border-violet-500/40"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-xs text-violet-300">
                  {capability.number}
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  {capability.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-slate-400">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SHASHA strip */}
        <div
          id="shasha"
          className="mt-16 overflow-hidden rounded-2xl border border-violet-500/20 bg-[#0d1124]"
        >
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-6 sm:p-8">
              <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-violet-300">
                Powered by Velquorin Labs
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                Meet{" "}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                  SHASHA AI.
                </span>
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                SHASHA AI is our conversational AI platform being built to help
                businesses communicate with customers, capture opportunities,
                and create more connected digital experiences.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Customer Conversations",
                  "Lead Capture",
                  "Business Knowledge",
                  "Website Integration",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900/40 px-3 py-1.5 text-[10px] text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 p-6 lg:border-l lg:border-t-0 lg:p-8">
              <a
                href="/contact"
                className="inline-flex whitespace-nowrap items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-2.5 text-xs font-medium text-violet-200 transition hover:bg-violet-500/20"
              >
                Ask About SHASHA AI →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}