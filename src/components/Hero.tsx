import { ArrowRight, Sparkles, Workflow, Bot, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* grid texture */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="container-page relative pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <span className="eyebrow">
              <Sparkles size={13} />
              AI &amp; Workflow Automation
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Automate the work your team{" "}
              <span className="text-gradient">shouldn&apos;t be doing.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Pixel Walk builds AI-powered automations that connect your tools,
              eliminate manual tasks, and free your team to focus on what matters.
              n8n, Python, and custom AI — designed, built, and maintained for you.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Book a free automation audit
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-ghost">
                See what we automate
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <Zap size={15} className="text-sky-400" /> Save hundreds of hours
              </span>
              <span className="inline-flex items-center gap-2">
                <Bot size={15} className="text-sky-400" /> Built with AI
              </span>
              <span className="inline-flex items-center gap-2">
                <Workflow size={15} className="text-sky-400" /> Connects your stack
              </span>
            </div>
          </div>

          {/* Right: workflow visual */}
          <div className="animate-fade-up [animation-delay:150ms]">
            <WorkflowCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowCard() {
  const nodes = [
    { label: "Trigger", sub: "New lead in CRM" },
    { label: "AI Agent", sub: "Qualify & enrich" },
    { label: "Action", sub: "Notify + schedule" },
  ];
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-sky-500/20 to-blue-600/10 blur-2xl animate-pulse-glow" />
      <div className="rounded-2xl border border-white/10 bg-ink-900/80 p-5 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="font-mono text-xs text-slate-400">
            pixel-walk / workflow.json
          </span>
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
          </span>
        </div>

        <div className="space-y-3 pt-4">
          {nodes.map((node, i) => (
            <div key={node.label}>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 font-mono text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{node.label}</p>
                  <p className="text-xs text-slate-400">{node.sub}</p>
                </div>
              </div>
              {i < nodes.length - 1 && (
                <div className="ml-[26px] h-4 w-px bg-gradient-to-b from-sky-400/60 to-blue-600/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
