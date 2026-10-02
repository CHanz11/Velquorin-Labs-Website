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
    <section className="border-t border-white/10 bg-[#050714]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-400">
            Our Approach
          </p>

          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Business First.{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              Technology With Purpose.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
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
              className="relative rounded-2xl border border-white/10 bg-[#0d1123] p-6 transition duration-300 hover:border-violet-500/30"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-xs text-violet-300">
                  {principle.number}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-violet-500/70" />
              </div>

              <h3 className="text-base font-medium leading-6 text-white">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-[#0d1123]/60 px-6 py-5 text-center">
          <p className="text-sm leading-6 text-slate-400">
            The goal is not simply to add more technology — it is to build the{" "}
            <span className="text-slate-200">
              right technology for the right business problem.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}