import {
  Zap,
  FileText,
  MessagesSquare,
  PenLine,
  Bot,
  UserPlus,
  ArrowRight,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";

type Example = {
  icon: LucideIcon;
  title: string;
  scenario: string;
  before: { label: string; value: string };
  after: { label: string; value: string };
  money: string; // headline financial gain
  math: string; // how we get there, builds credibility
};

const examples: Example[] = [
  {
    icon: Zap,
    title: "Instant AI lead response",
    scenario:
      "Every new lead is qualified, enriched, and answered by AI in under two minutes, before a competitor even calls back.",
    before: { label: "Before", value: "~6 h to first reply" },
    after: { label: "After", value: "Under 2 min, 24/7" },
    money: "+€6,000 / month",
    math: "≈ 20 leads/mo that used to go cold × 15% close × €2,000 deal. Replies under 5 min convert up to 3× more.",
  },
  {
    icon: Bot,
    title: "AI outreach agent",
    scenario:
      "An autonomous AI agent researches prospects, writes genuinely personalized messages, and books qualified meetings while you sleep.",
    before: { label: "Before", value: "~20 manual emails / day" },
    after: { label: "After", value: "200+ personalized / day" },
    money: "+€8,000 / month pipeline",
    math: "More qualified meetings booked without hiring an SDR. Outreach that scales itself.",
  },
  {
    icon: PenLine,
    title: "AI content engine",
    scenario:
      "AI writes on-brand SEO articles, product descriptions, and social posts at scale, drafted, formatted, and ready to publish.",
    before: { label: "Before", value: "~1 article / week" },
    after: { label: "After", value: "15-20 / month, on autopilot" },
    money: "~€3,000 / month saved",
    math: "Less spend on freelancers, plus compounding organic traffic month after month.",
  },
  {
    icon: FileText,
    title: "AI document processing",
    scenario:
      "AI reads invoices, contracts, and receipts, extracts the data, and files it straight into your tools. Your team just approves.",
    before: { label: "Before", value: "~15 min / doc, by hand" },
    after: { label: "After", value: "~30 sec, AI-automated" },
    money: "€1,800 / month saved",
    math: "≈ 300 docs/mo × 14 min saved × €25/h, with far fewer costly entry errors.",
  },
  {
    icon: MessagesSquare,
    title: "AI customer support",
    scenario:
      "An AI assistant answers common questions instantly and drafts replies for the rest, so your team only handles what truly needs a human.",
    before: { label: "Before", value: "Hours before first reply" },
    after: { label: "After", value: "70% handled instantly" },
    money: "€35,000 / year",
    math: "The support hire you don't need to make. 2× the volume, same team.",
  },
  {
    icon: UserPlus,
    title: "Client onboarding on autopilot",
    scenario:
      "One workflow creates accounts across your tools, sends the welcome sequence, collects documents, and chases what's missing, automatically.",
    before: { label: "Before", value: "2-3 days, steps forgotten" },
    after: { label: "After", value: "A few hours, nothing missed" },
    money: "€1,500 / month + faster cash-in",
    math: "Less admin per new client, and clients are set up (and paying) sooner.",
  },
];

export function Examples() {
  return (
    <section id="examples" className="py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <TrendingUp size={13} />
            Real results
          </span>
          <h2 className="heading mt-5">What automation puts back in your pocket</h2>
          <p className="mt-4 text-lg text-slate-400">
            Forget the buzzwords. Here&apos;s what a few of our AI automations do
            in practice (just a sample of what&apos;s possible) and what
            they&apos;re worth to your bottom line.
          </p>
        </div>

        {/* Owner-level framing of the stakes */}
        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-sky-400/[0.07] to-blue-600/[0.04] p-5 sm:p-6">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-inset ring-white/10">
            <Wallet size={20} />
          </span>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            <span className="font-semibold text-white">The hidden cost of manual work:</span>{" "}
            most teams burn 10-20 hours a week on tasks software could do. At ~€40
            an hour, that&apos;s{" "}
            <span className="font-semibold text-sky-400">€20,000-€40,000 a year</span>{" "}
            quietly walking out of your business. Here&apos;s how we win it back.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
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

              {/* Financial gain */}
              <div className="mt-4 rounded-xl border border-sky-400/20 bg-gradient-to-r from-sky-400/10 to-blue-600/[0.06] p-4">
                <div className="flex items-center gap-2">
                  <Wallet size={16} className="shrink-0 text-sky-400" />
                  <p className="text-xl font-bold text-gradient">{ex.money}</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {ex.math}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-slate-500">
          Illustrative figures based on typical automation outcomes. Your exact
          numbers depend on your processes and volumes. We measure the real ROI
          for your business during your free audit.
        </p>
      </div>
    </section>
  );
}
