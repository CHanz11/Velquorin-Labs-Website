export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border-default">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[140px]"
      />

      <div className="site-container grid min-h-[680px] items-center gap-14 py-20 lg:grid-cols-2 lg:py-24">
        {/* LEFT */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-default bg-surface/60 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-brand-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            AI & Digital Solutions
          </div>

          <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Build Smarter.
            <br />
            Automate More.
            <br />
            <span className="brand-gradient-text">Grow With AI.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-text-secondary sm:text-lg">
            Velquorin Labs builds intelligent AI and digital solutions that
            help businesses automate work, improve customer experiences,
            capture leads, and create better digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-light"
            >
              Explore Our Services
            </a>

            <a
              href="/contact"
              className="rounded-full border border-border-default bg-surface/40 px-6 py-3 text-sm font-medium text-text-primary transition hover:border-[var(--color-border-hover)] hover:bg-surface"
            >
              Start a Project
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-muted">
            <span>AI Chatbots</span>
            <span>AI Automation</span>
            <span>Conversational AI Forms</span>
            <span>Web Solutions</span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 -z-10 rounded-full bg-brand-primary/10 blur-[90px]" />

          <div className="overflow-hidden rounded-2xl border border-border-default bg-surface/80 shadow-2xl backdrop-blur">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-border-default px-5 py-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-text-muted/40" />
              </div>

              <span className="text-[11px] uppercase tracking-[0.14em] text-text-muted">
                Connected Business Automation
              </span>
            </div>

            {/* Workflow */}
            <div className="space-y-3 p-5 sm:p-6">
              <div className="rounded-xl border border-border-default bg-site-background/70 p-4">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-text-primary">
                    AI Chatbot
                  </span>

                  <span className="rounded-full bg-brand-primary/15 px-2 py-1 text-[10px] text-brand-soft">
                    Customer
                  </span>
                </div>

                <p className="m-0 text-sm text-text-secondary">
                  &quot;I&apos;m interested in your website maintenance
                  service.&quot;
                </p>
              </div>

              <div className="flex justify-center text-brand-soft">↓</div>

              <div className="rounded-xl border border-border-default bg-site-background/70 p-4">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-text-primary">
                    AI Processing
                  </span>

                  <span className="rounded-full bg-brand-primary/15 px-2 py-1 text-[10px] text-brand-soft">
                    Automation
                  </span>
                </div>

                <p className="m-0 text-sm text-text-secondary">
                  Understand the request and prepare the next business action.
                </p>
              </div>

              <div className="flex justify-center text-brand-soft">↓</div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border-default bg-site-background/70 p-4">
                  <span className="text-sm font-medium text-text-primary">
                    Lead Captured
                  </span>

                  <p className="mb-0 mt-2 text-xs text-text-secondary">
                    Customer information organized for follow-up.
                  </p>
                </div>

                <div className="rounded-xl border border-border-default bg-site-background/70 p-4">
                  <span className="text-sm font-medium text-text-primary">
                    Team Notification
                  </span>

                  <p className="mb-0 mt-2 text-xs text-text-secondary">
                    The business team receives the new inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative floating card */}
          <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-border-default bg-surface-elevated px-4 py-3 shadow-xl sm:block">
            <p className="m-0 text-[10px] uppercase tracking-[0.14em] text-text-muted">
              Connected workflow
            </p>

            <p className="m-0 mt-1 text-sm font-medium text-text-primary">
              Chat → Automation → Business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}