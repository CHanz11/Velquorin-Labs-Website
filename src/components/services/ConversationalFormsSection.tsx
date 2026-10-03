const formFeatures = [
  {
    number: "01",
    title: "Conversational Data Collection",
    description:
      "Turn traditional forms into guided conversations that collect information naturally, one question at a time.",
  },
  {
    number: "02",
    title: "Structured Information",
    description:
      "Organize customer responses into useful structured data that businesses can review, manage, and act on.",
  },
  {
    number: "03",
    title: "Smart Validation",
    description:
      "Help users provide clearer and more complete information through intelligent validation and guided interactions.",
  },
  {
    number: "04",
    title: "Flexible Publishing",
    description:
      "Publish forms on dedicated links or embed them directly into websites so customers can access them where needed.",
  },
];

export default function ConversationalFormsSection() {
  return (
    <section
      id="conversational-forms"
      className="border-t border-white/10 bg-[#080a18]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Content */}
          <div>
            <div className="mb-3 inline-flex rounded-full border border-violet-500/30 bg-violet-500/5 px-3 py-1">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-300">
                Smart Lead Collection · Service 03
              </span>
            </div>

            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
              Conversational AI Forms
            </p>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Turn Forms Into{" "}
              <span className="text-violet-500">
                Better Conversations.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Velquorin Labs creates conversational form experiences that help
              businesses collect customer information through a simpler,
              guided interaction instead of overwhelming users with long
              traditional forms.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Responses can be understood, validated, and organized into
              structured information while keeping the customer in control
              before anything is submitted.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="rounded-full bg-violet-600 px-5 py-3 text-xs font-medium text-white transition hover:bg-violet-500"
              >
                Discuss a Form Project
              </a>

              <a
                href="#custom-solutions"
                className="rounded-full border border-white/15 px-5 py-3 text-xs font-medium text-white transition hover:border-violet-500/50 hover:bg-white/[0.03]"
              >
                Explore Custom Solutions
              </a>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {formFeatures.map((feature) => (
              <div
                key={feature.number}
                className="rounded-xl border border-white/10 bg-[#0d1020] p-6 transition duration-300 hover:border-violet-500/30"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-[10px] text-violet-300">
                    {feature.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                </div>

                <h3 className="text-sm font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Flow */}
        <div className="mt-12 rounded-xl border border-white/10 bg-[#0d1020] px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-slate-400">
            <span>Ask</span>
            <span className="text-violet-500">→</span>
            <span>Understand</span>
            <span className="text-violet-500">→</span>
            <span>Validate</span>
            <span className="text-violet-500">→</span>
            <span>Review</span>
            <span className="text-violet-500">→</span>
            <span>Submit</span>
          </div>
        </div>
      </div>
    </section>
  );
}