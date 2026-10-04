export default function ContactFormSection() {
  return (
    <section
      id="contact-form"
      className="relative scroll-mt-20 overflow-hidden border-b border-violet-100 bg-[#f8f7ff]"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-violet-100/60 blur-[120px]" />
        <div className="absolute right-[-120px] bottom-[-80px] h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3.5 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-600">
              Start a Conversation
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#15172f] sm:text-4xl lg:text-5xl">
            Tell Us About Your{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Project or Idea.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Share a few details about what you&apos;re looking to build,
            automate, or improve. This helps us understand your needs before we
            start the conversation.
          </p>
        </div>

        {/* Form container */}
        <div className="relative mt-12 max-w-5xl overflow-hidden rounded-3xl border border-violet-100 bg-white p-6 shadow-[0_20px_60px_rgba(76,29,149,0.08)] sm:p-8 lg:p-10">
          {/* Form top accent */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"
          />

          <form className="relative space-y-7">
            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2.5 block text-xs font-semibold text-[#15172f]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 bg-[#fbfbfe] px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2.5 block text-xs font-semibold text-[#15172f]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-200 bg-[#fbfbfe] px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                />
              </div>
            </div>

            {/* Company + Service */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="mb-2.5 block text-xs font-semibold text-[#15172f]"
                >
                  Company / Business
                  <span className="ml-1 font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-xl border border-slate-200 bg-[#fbfbfe] px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2.5 block text-xs font-semibold text-[#15172f]"
                >
                  What Can We Help With?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full cursor-pointer rounded-xl border border-slate-200 bg-[#fbfbfe] px-4 py-3.5 text-sm text-slate-600 outline-none transition duration-200 hover:border-slate-300 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="ai-chatbots">AI Chatbots</option>
                  <option value="ai-automation">AI Automation</option>
                  <option value="conversational-forms">
                    Conversational AI Forms
                  </option>
                  <option value="web-solutions">
                    Website Design &amp; Maintenance
                  </option>
                  <option value="custom-ai">Custom AI Solutions</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2.5 block text-xs font-semibold text-[#15172f]"
              >
                Tell Us About Your Project
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us what you're trying to build, automate, improve, or solve..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-[#fbfbfe] px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-lg">
                <p className="text-[11px] leading-5 text-slate-500">
                  By submitting this form, you agree that Velquorin Labs may use
                  the information you provide to respond to your inquiry.
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  Your information will only be used to communicate with you
                  about your request.
                </p>
              </div>

              <button
                type="submit"
                className="group inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.22)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(124,58,237,0.3)] focus:outline-none focus:ring-4 focus:ring-violet-500/20"
              >
                Send Inquiry

                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Supporting contact option */}
        <div className="mt-6 flex max-w-5xl flex-col gap-2 px-1 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Prefer email? You can contact us directly.</p>

          <a
            href="mailto:velquorinlabs@gmail.com"
            className="font-medium text-violet-600 transition hover:text-violet-700"
          >
            velquorinlabs@gmail.com →
          </a>
        </div>
      </div>
    </section>
  );
}