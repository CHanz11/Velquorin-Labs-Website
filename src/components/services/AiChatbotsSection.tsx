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
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 40%, rgba(124,58,237,0.07), transparent 38%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
        {/* Top content */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-violet-700">
                AI Customer Experience
              </span>
            </div>

            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.28em] text-slate-500">
              Service 01
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#15182f] sm:text-4xl">
              Intelligent Conversations{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Built for Business.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Velquorin Labs builds AI chatbot experiences designed to help
              businesses communicate with customers, answer questions, capture
              leads, and make useful business information easier to access.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Our goal is not simply to place a chatbot on your website. We
              design conversational systems around the way your business
              actually communicates and operates.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(124,58,237,0.18)] transition hover:bg-violet-500"
              >
                Discuss an AI Chatbot
              </a>

              <a
                href="#shasha"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
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
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_14px_35px_rgba(124,58,237,0.08)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-xs font-medium text-violet-600">
                  {capability.number}
                </div>

                <h3 className="mt-5 text-base font-semibold text-[#15182f]">
                  {capability.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-slate-600">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SHASHA strip */}
        <div
          id="shasha"
          className="mt-16 overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50/80 via-white to-indigo-50/70 shadow-[0_10px_35px_rgba(124,58,237,0.06)]"
        >
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-6 sm:p-8">
              <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-violet-600">
                Powered by Velquorin Labs
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#15182f]">
                Meet{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  SHASHA AI.
                </span>
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
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
                    className="rounded-full border border-violet-200 bg-white px-3 py-1.5 text-[10px] text-slate-600 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-violet-100 p-6 lg:border-l lg:border-t-0 lg:p-8">
              <a
                href="/contact"
                className="inline-flex whitespace-nowrap items-center justify-center rounded-full border border-violet-200 bg-white px-5 py-2.5 text-xs font-medium text-violet-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50"
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