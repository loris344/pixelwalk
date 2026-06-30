import { Clock, ShieldCheck, TrendingUp, Wrench, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Reclaim hundreds of hours",
    desc: "Stop paying skilled people to do repetitive manual work. Let automations handle it 24/7.",
  },
  {
    icon: ShieldCheck,
    title: "Fewer costly errors",
    desc: "Automations don't get tired, distracted, or make typos. Consistent results, every time.",
  },
  {
    icon: TrendingUp,
    title: "Scale without hiring",
    desc: "Handle more volume, leads, and customers without growing headcount at the same rate.",
  },
  {
    icon: Wrench,
    title: "Built to last",
    desc: "Documented, monitored, and maintainable systems — not fragile hacks that break next week.",
  },
];

const useCases = [
  "Lead generation & outreach",
  "Client onboarding",
  "Invoicing & finance ops",
  "Customer support triage",
  "Reporting & analytics",
  "Data entry & syncing",
];

export function Why() {
  return (
    <section id="why" className="py-24">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left: benefits */}
          <div>
            <span className="eyebrow">Why Pixel Walk</span>
            <h2 className="heading mt-5">
              Automation that pays for itself
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              We don&apos;t automate for the sake of it. Every workflow we build is
              tied to real time saved and real money recovered.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-sky-400 ring-1 ring-inset ring-white/10">
                    <b.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: use cases panel */}
          <div className="lg:pl-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-sky-400">
                What we automate
              </h3>
              <ul className="mt-6 space-y-4">
                {useCases.map((u) => (
                  <li key={u} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 size={18} className="shrink-0 text-sky-400" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                <Stat value="10+ hrs" label="saved per person / week" />
                <Stat value="90%" label="fewer manual errors" />
                <Stat value="Weeks" label="to launch, not months" />
                <Stat value="100%" label="built for your stack" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-gradient">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  );
}
