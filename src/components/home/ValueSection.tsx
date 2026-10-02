const values = [
  {
    number: "01",
    title: "Automate Repetitive Work",
    description:
      "Reduce manual tasks and repetitive processes with intelligent automation that helps your team save time and focus on higher-value work.",
  },
  {
    number: "02",
    title: "Improve Customer Experiences",
    description:
      "Create faster, more responsive customer interactions with AI-powered conversations and streamlined digital experiences.",
  },
  {
    number: "03",
    title: "Increase Revenue",
    description:
      "Capture more opportunities, organize leads, and improve business workflows with digital solutions designed around growth.",
  },
  {
    number: "04",
    title: "Build Stronger Digital Experiences",
    description:
      "Create modern websites and connected digital experiences that strengthen your online presence and support your business.",
  },
];

export default function ValueSection() {
  return (
    <section className="relative border-b border-border-default bg-site-deep">
      <div className="site-container site-section">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-brand-soft">
            Technology That Creates Real Business Value
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Practical AI and Web Solutions
            <br className="hidden sm:block" /> Built for Real Results
          </h2>

          <p className="mx-auto mb-0 mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
            Turn complex technology into practical solutions that help your
            business save time, improve customer experiences, capture more
            opportunities, and operate more efficiently.
          </p>
        </div>

        {/* Value cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.number}
              className="group relative overflow-hidden rounded-2xl border border-border-default bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:bg-surface-elevated"
            >
              {/* subtle card glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-primary/0 blur-3xl transition duration-300 group-hover:bg-brand-primary/10"
              />

              <div className="relative">
                {/* Icon / number */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-primary/20 bg-brand-primary/10 text-brand-soft">
                    {value.number}
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.16em] text-text-muted">
                    Value
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-text-primary">
                  {value.title}
                </h3>

                <p className="mb-0 text-sm leading-6 text-text-secondary">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom supporting statement */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-border-default bg-surface/60 px-5 py-2.5 text-xs text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            Built around practical business outcomes — not technology for its
            own sake.
          </div>
        </div>
      </div>
    </section>
  );
}