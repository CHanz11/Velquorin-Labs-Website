export default function ShashaSection() {
  return (
    <section
      id="shasha"
      className="relative overflow-hidden border-t border-border-default bg-site-background"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[140px]"
      />

      <div className="site-container relative py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-default bg-surface/50 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-soft">
                AI Customer Experience
              </span>
            </div>

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
              Powered by Velquorin Labs
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-6xl">
              Meet{" "}
              <span className="brand-gradient-text">
                SHASHA AI.
              </span>
            </h2>

            <h3 className="mt-3 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-text-primary sm:text-3xl">
              Conversational Intelligence for Modern Businesses
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
              SHASHA AI helps businesses communicate with customers,
              answer questions, capture leads, and provide intelligent
              assistance through a modern conversational experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-light"
              >
                Discover SHASHA AI
              </a>

              <a
                href="#services"
                className="rounded-full border border-border-default bg-surface/40 px-6 py-3 text-sm font-medium text-text-primary transition hover:border-[var(--color-border-hover)] hover:bg-surface"
              >
                Explore AI Chatbots
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-text-muted">
              <span>24/7 Conversations</span>
              <span>Lead Capture</span>
              <span>Business Knowledge</span>
            </div>
          </div>

          {/* RIGHT — SHASHA CHAT PREVIEW */}
          <div className="relative">
            <div className="overflow-hidden rounded-[1.5rem] border border-border-default bg-surface shadow-2xl">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-border-default px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-text-muted/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-text-muted/50" />
                  <span className="h-2.5 w-2.5 rounded-full bg-text-muted/50" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.18em] text-text-muted">
                  SHASHA AI
                </span>

                <span className="rounded-full border border-brand-primary/30 bg-brand-primary/10 px-2.5 py-1 text-[9px] text-brand-soft">
                  Online
                </span>
              </div>

              {/* Chat */}
              <div className="space-y-5 p-5 sm:p-7">
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-border-default bg-site-background px-4 py-3">
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted">
                      Visitor
                    </p>

                    <p className="m-0 text-sm leading-6 text-text-primary">
                      Hi! I&apos;m interested in improving customer support
                      on my website.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[88%] rounded-2xl rounded-tr-md border border-brand-primary/30 bg-brand-primary/10 px-4 py-3">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-[10px] font-semibold text-white">
                        S
                      </span>

                      <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-brand-soft">
                        SHASHA AI
                      </span>
                    </div>

                    <p className="m-0 text-sm leading-6 text-text-primary">
                      I can help with that. SHASHA can answer customer
                      questions, capture leads, and use your business
                      knowledge to provide helpful responses.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-border-default bg-site-background/70 p-3">
                    <p className="m-0 text-xs font-medium text-text-primary">
                      Customer Support
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-text-muted">
                      Answer common questions.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border-default bg-site-background/70 p-3">
                    <p className="m-0 text-xs font-medium text-text-primary">
                      Lead Capture
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-text-muted">
                      Collect qualified inquiries.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border-default bg-site-background/70 p-3">
                    <p className="m-0 text-xs font-medium text-text-primary">
                      Knowledge
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-text-muted">
                      Use business information.
                    </p>
                  </div>
                </div>

                {/* Input */}
                <div className="flex items-center gap-3 rounded-xl border border-border-default bg-site-background px-4 py-3">
                  <span className="flex-1 text-xs text-text-muted">
                    Ask SHASHA AI a question...
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-sm text-white">
                    ↑
                  </span>
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 left-5 rounded-xl border border-border-default bg-surface-elevated px-4 py-3 shadow-xl sm:left-8">
              <p className="m-0 text-[9px] uppercase tracking-[0.15em] text-text-muted">
                Intelligent Conversations
              </p>

              <p className="mt-1 text-xs font-medium text-text-primary">
                Chat → Understand → Assist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}