import {
  Workflow,
  BrainCircuit,
  Terminal,
  Bot,
  Network,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Connect your apps and let work flow on its own. We design and build robust pipelines in n8n, Make, and Zapier — from lead routing to invoicing.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    desc: "Plug LLMs into your business: smart assistants, document processing, classification, and content generation that ships to production.",
  },
  {
    icon: Terminal,
    title: "Custom Python Automation",
    desc: "When no-code hits its limit, we write custom Python — scraping, data processing, API integrations, and scheduled jobs that just run.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Autonomous agents that handle research, outreach, support, and multi-step tasks end to end, with the right guardrails in place.",
  },
  {
    icon: Network,
    title: "Systems Integration",
    desc: "Make your stack talk. We connect CRMs, databases, spreadsheets, and APIs into one seamless system — no more copy-paste between tools.",
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    desc: "Automated data pipelines and live dashboards so you always know what's happening — without anyone pulling reports by hand.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-white/5 py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">What we do</span>
          <h2 className="heading mt-5">
            Automations that do the busywork, so your team doesn&apos;t have to
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From simple time-savers to full AI-driven systems — we build the
            automation layer that runs your operations quietly in the background.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-sky-400 ring-1 ring-inset ring-white/10 transition-colors group-hover:text-sky-300">
                <service.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
