const steps = [
  {
    n: "01",
    title: "Audit",
    desc: "We map your workflows and pinpoint the highest-impact tasks to automate, and the ROI behind each one.",
  },
  {
    n: "02",
    title: "Design",
    desc: "We architect the solution and show you exactly what we'll build, how it connects, and what it will save.",
  },
  {
    n: "03",
    title: "Build",
    desc: "We implement, test, and deploy your automations, with monitoring and error handling built in from day one.",
  },
  {
    n: "04",
    title: "Optimize",
    desc: "We monitor, refine, and scale your automations as your business grows, so they keep paying off over time.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-white/5 bg-ink-900/40 py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="heading mt-5">From manual mess to running on autopilot</h2>
          <p className="mt-4 text-lg text-slate-400">
            A clear, low-risk process. You stay in control at every step, and we
            handle the technical heavy lifting.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="relative">
              <div className="card h-full">
                <span className="font-mono text-3xl font-bold text-gradient">
                  {step.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
