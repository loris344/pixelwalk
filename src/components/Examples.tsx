import {
  Zap,
  FileText,
  Headphones,
  UserPlus,
  ArrowRight,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type Example = {
  icon: LucideIcon;
  title: string;
  scenario: string;
  before: { label: string; value: string };
  after: { label: string; value: string };
  gain: string;
};

const examples: Example[] = [
  {
    icon: Zap,
    title: "Instant lead response",
    scenario:
      "New leads from your ads, website, or forms get qualified and replied to automatically — before a competitor even picks up the phone.",
    before: { label: "Before", value: "~6 h to first reply" },
    after: { label: "After", value: "Under 2 min, 24/7" },
    gain: "Up to 3× more leads converted — speed-to-lead is everything.",
  },
  {
    icon: FileText,
    title: "Invoice & document processing",
    scenario:
      "Invoices and receipts are read by AI, the data is extracted and pushed straight into your accounting tool. Your team just approves.",
    before: { label: "Before", value: "~15 min / invoice, by hand" },
    after: { label: "After", value: "~30 sec, fully automated" },
    gain: "~90% less time on data entry and ~90% fewer typos.",
  },
  {
    icon: Headphones,
    title: "Customer support triage",
    scenario:
      "Incoming tickets are sorted, prioritized, and the repetitive ones get instant AI-drafted answers — your team only handles what matters.",
    before: { label: "Before", value: "Hours before first reply" },
    after: { label: "After", value: "70% auto-handled instantly" },
    gain: "Faster replies, happier customers, same-size team.",
  },
  {
    icon: UserPlus,
    title: "Client onboarding",
    scenario:
      "One workflow creates accounts across your tools, sends the welcome sequence, collects documents, and chases what's missing — automatically.",
    before: { label: "Before", value: "2–3 days, steps forgotten" },
    after: { label: "After", value: "A few hours, nothing missed" },
    gain: "A flawless first impression, every single time.",
  },
];

export function Examples() {
  return (
    <section id="examples" className="border-t border-white/5 py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <TrendingUp size={13} />
            Real results
          </span>
          <h2 className="heading mt-5">
            What automation actually saves you
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Forget the buzzwords. Here&apos;s what a few of our automations do in
            practice — and the time and money they put back in your business.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {examples.map((ex) => (
            <article key={ex.title} className="card flex flex-col">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-sky-400 ring-1 ring-inset ring-white/10">
                  <ex.icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-white">{ex.title}</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {ex.scenario}
              </p>

              {/* Before -> After */}
              <div className="mt-5 flex items-stretch gap-3">
                <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    {ex.before.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-300">
                    {ex.before.value}
                  </p>
                </div>
                <div className="flex items-center text-sky-400">
                  <ArrowRight size={18} />
                </div>
                <div className="flex-1 rounded-xl border border-sky-400/30 bg-sky-400/[0.06] p-3">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-sky-400/80">
                    {ex.after.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {ex.after.value}
                  </p>
                </div>
              </div>

              {/* Gain */}
              <div className="mt-4 flex items-start gap-2 rounded-xl bg-gradient-to-r from-sky-400/10 to-blue-600/5 p-3">
                <TrendingUp size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <p className="text-sm font-medium text-slate-200">{ex.gain}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-500">
          Example scenarios based on typical automation outcomes. Your exact
          numbers depend on your processes — we measure them during your free audit.
        </p>
      </div>
    </section>
  );
}
