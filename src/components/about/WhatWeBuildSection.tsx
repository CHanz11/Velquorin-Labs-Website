const solutions = [
  {
    number: "01",
    label: "AI SYSTEMS",
    title: "Intelligent Customer Experiences",
    description:
      "We build AI-powered experiences that help businesses communicate with customers, answer questions, capture opportunities, and provide faster support.",
    items: ["AI Chatbots", "Conversational AI", "Lead Capture"],
  },
  {
    number: "02",
    label: "AUTOMATION",
    title: "Connected Business Workflows",
    description:
      "We create automation that connects repetitive processes and business tools so teams can reduce manual work and operate more efficiently.",
    items: ["Workflow Automation", "Business Integrations", "AI-Assisted Tasks"],
  },
  {
    number: "03",
    label: "DIGITAL EXPERIENCES",
    title: "Smarter Ways to Collect Information",
    description:
      "We design modern digital experiences that make it easier for businesses to collect, understand, and organize customer information.",
    items: ["Conversational Forms", "Lead Collection", "Smart Workflows"],
  },
  {
    number: "04",
    label: "WEB SOLUTIONS",
    title: "Modern Digital Foundations",
    description:
      "We build responsive websites and digital solutions designed to strengthen a company's online presence and support long-term growth.",
    items: ["Website Design", "Maintenance", "Custom Web Solutions"],
  },
];

export default function WhatWeBuildSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-[#f8f7ff]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-160px] top-20 h-96 w-96 rounded-full bg-violet-400/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-160px] left-[-120px] h-96 w-96 rounded-full bg-indigo-300/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-600">
            What We Build
          </p>

          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
            Digital Solutions Designed to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Work Together.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Our work combines artificial intelligence, automation, and modern
            web technology to create practical systems around the way a
            business actually operates.
          </p>
        </div>

        {/* Solution cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-16">
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-md sm:p-7"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-slate-500">
                    {solution.label}
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-xs font-medium text-violet-700">
                  {solution.number}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">
                {solution.title}
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                {solution.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {solution.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-600 transition group-hover:border-violet-200 group-hover:bg-violet-50/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <p className="text-[11px] text-slate-600">
              AI + Automation + Digital Experiences + Web
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}