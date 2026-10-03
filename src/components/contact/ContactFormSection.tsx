export default function ContactFormSection() {
  return (
    <section
        id="contact-form"
        className="relative scroll-mt-20 border-b border-slate-800/80 bg-[#060918]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Start a Conversation
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl">
            Tell Us About Your{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Project or Idea.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Share a few details about what you&apos;re looking to build,
            automate, or improve. This helps us understand your needs before we
            start the conversation.
          </p>
        </div>

        {/* Form container */}
        <div className="mt-12 max-w-4xl rounded-2xl border border-slate-800 bg-[#0b0f22]/80 p-6 sm:p-8 lg:p-10">
          <form className="space-y-6">
            {/* Name + Email */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-700 bg-[#070b19] px-4 py-3.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-700 bg-[#070b19] px-4 py-3.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>
            </div>

            {/* Company + Service */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  Company / Business
                  <span className="ml-1 text-slate-600">(Optional)</span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-xl border border-slate-700 bg-[#070b19] px-4 py-3.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  What Can We Help With?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-700 bg-[#070b19] px-4 py-3.5 text-sm text-slate-300 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
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
                className="mb-2 block text-xs font-medium text-slate-300"
              >
                Tell Us About Your Project
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us what you're trying to build, automate, improve, or solve..."
                className="w-full resize-none rounded-xl border border-slate-700 bg-[#070b19] px-4 py-3.5 text-sm leading-6 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-5 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-[11px] leading-5 text-slate-500">
                By submitting this form, you agree that Velquorin Labs may use
                the information you provide to respond to your inquiry.
              </p>

              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#0b0f22]"
              >
                Send Inquiry
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}