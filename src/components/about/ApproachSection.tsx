const principles = [
  {
    number: "01",
    title: "Understand Before We Build",
    description:
      "We start by understanding the business, its challenges, existing workflows, customers, and the result the solution needs to achieve.",
  },
  {
    number: "02",
    title: "Keep Technology Practical",
    description:
      "We choose technology based on what the business actually needs, focusing on useful solutions instead of unnecessary complexity.",
  },
  {
    number: "03",
    title: "Connect the Right Systems",
    description:
      "We design solutions that can work with existing processes, tools, and digital experiences instead of operating in isolation.",
  },
  {
    number: "04",
    title: "Build for What Comes Next",
    description:
      "We create with growth in mind so solutions can be improved, expanded, and adapted as the business evolves.",
  },
];

export default function ApproachSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-violet-400/7 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-indigo-400/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-600">
            Our Approach
          </p>

          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
            Business First.{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Technology With Purpose.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            We believe effective technology starts with understanding what a
            business is trying to accomplish. Every solution should have a
            clear purpose and support the way the business works.
          </p>
        </div>

        {/* Approach cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-md"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-xs font-medium text-violet-700">
                  {principle.number}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              </div>

              <h3 className="text-base font-semibold leading-6 text-slate-950">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {principle.description}
              </p>

              {/* Bottom hover accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-slate-100">
                <div className="h-px w-0 bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-[#fafaff] px-6 py-5 text-center shadow-sm">
          <p className="text-sm leading-6 text-slate-600">
            The goal is not simply to add more technology — it is to build the{" "}
            <span className="font-medium text-slate-900">
              right technology for the right business problem.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}