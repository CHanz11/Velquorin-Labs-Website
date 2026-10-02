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
    <section className="border-t border-white/10 bg-[#080b1a]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-400">
            What We Build
          </p>

          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Digital Solutions Designed to{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Work Together.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
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
              className="group rounded-2xl border border-white/10 bg-[#0d1123] p-6 transition duration-300 hover:border-violet-500/30 sm:p-7"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500">
                    {solution.label}
                  </p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-xs text-violet-300">
                  {solution.number}
                </span>
              </div>

              <h3 className="text-lg font-medium text-white sm:text-xl">
                {solution.title}
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                {solution.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {solution.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] text-slate-400"
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
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0d1123]/70 px-5 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <p className="text-[11px] text-slate-400">
              AI + Automation + Digital Experiences + Web
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}