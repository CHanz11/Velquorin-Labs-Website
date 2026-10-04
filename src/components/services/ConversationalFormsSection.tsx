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
      className="relative overflow-hidden border-b border-slate-200 bg-white"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 45%, rgba(124,58,237,0.06), transparent 38%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          {/* Left Content */}
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-700">
                Smart Lead Collection · Service 03
              </span>
            </div>

            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
              Conversational AI Forms
            </p>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-[#15182f] sm:text-4xl">
              Turn Forms Into{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Better Conversations.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Velquorin Labs creates conversational form experiences that help
              businesses collect customer information through a simpler,
              guided interaction instead of overwhelming users with long
              traditional forms.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              Responses can be understood, validated, and organized into
              structured information while keeping the customer in control
              before anything is submitted.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-violet-600 px-5 py-3 text-xs font-medium text-white shadow-[0_8px_24px_rgba(124,58,237,0.18)] transition hover:bg-violet-500"
              >
                Discuss a Form Project
              </a>

              <a
                href="#custom-solutions"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-medium text-slate-700 shadow-sm transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
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
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_14px_35px_rgba(124,58,237,0.08)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-[10px] font-medium text-violet-600">
                    {feature.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                </div>

                <h3 className="text-sm font-semibold text-[#15182f]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form Flow */}
        <div className="mt-12 rounded-2xl border border-violet-100 bg-[#faf9ff] px-6 py-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)]">
          <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-medium text-slate-500">
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