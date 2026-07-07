import type { Metadata } from "next";
import {
  Plane,
  Zap,
  Map,
  Network,
  MessagesSquare,
  BarChart3,
  PenLine,
  ArrowRight,
  Clock,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Automation for Travel Agencies",
  description:
    "AI automations that help travel agencies and tour operators book more trips with less admin. Built by a team that scaled a travel platform to 50M+ visitors.",
  // Campaign landing page: reached via the cold-email link, not meant to be indexed.
  robots: { index: false, follow: false },
  alternates: { canonical: "/travel" },
};

export default function TravelLanding() {
  return (
    <>
      <CampaignHeader />
      <main>
        <Hero />
        <TrustBar />
        <Automations />
        <Results />
        <WhyUs />
        <HowItWorks />
        <Faq />
        <AuditForm />
      </main>
      <Footer />
    </>
  );
}

/* ---------- Header (minimal, one CTA) ---------- */
function CampaignHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="/" className="flex items-center" aria-label="Pixel Walk home">
          <Logo />
        </a>
        <a href="#audit" className="btn-primary">
          Book a free audit
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-page relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            <Plane size={13} />
            Built for travel agencies &amp; tour operators
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn travel busywork into{" "}
            <span className="text-gradient">booked trips.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            We build AI automations that answer inquiries in seconds, draft quotes
            and itineraries, sync your bookings, and follow up with travellers. So
            your team sells more and admins less. Built by people who scaled a
            travel platform to 50M+ visitors.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#audit" className="btn-primary">
              Book a free automation audit
              <ArrowRight size={18} />
            </a>
            <a href="#automations" className="btn-ghost">
              See what we automate
            </a>
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-slate-500">
            Deep roots in travel &amp; partnerships
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust bar ---------- */
function TrustBar() {
  const items = [
    { value: "50M+", label: "annual visitors scaled" },
    { value: "Travel-native", label: "we speak your business" },
    { value: "Done-for-you", label: "built and maintained" },
    { value: "n8n · Python · AI", label: "the right tool per job" },
  ];
  return (
    <section className="border-y border-white/5 bg-ink-900/40 py-10">
      <div className="container-page grid grid-cols-2 gap-6 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="text-center">
            <p className="text-xl font-bold text-gradient sm:text-2xl">{i.value}</p>
            <p className="mt-1 text-xs text-slate-400">{i.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Automations ---------- */
type Auto = { icon: LucideIcon; title: string; desc: string; result: string };

const automations: Auto[] = [
  {
    icon: Zap,
    title: "Instant inquiry response",
    desc: "Every trip request from your site, ads, or inbox is qualified and answered by AI in under two minutes, 24/7.",
    result: "Up to 3× more bookings from the same leads",
  },
  {
    icon: Map,
    title: "AI quotes & itineraries",
    desc: "Turn a traveller's request into a personalized, on-brand quote or day-by-day itinerary draft in minutes, not hours.",
    result: "From ~45 min to ~5 min per quote",
  },
  {
    icon: Network,
    title: "Booking & supplier sync",
    desc: "Connect your booking tools, spreadsheets, CRM, and supplier feeds so data flows on its own instead of being retyped.",
    result: "No more copy-paste, far fewer errors",
  },
  {
    icon: MessagesSquare,
    title: "Traveller comms on autopilot",
    desc: "Pre-trip info, reminders, upsells, and post-trip review requests sent automatically at the right moment.",
    result: "Better experience, more reviews, more repeats",
  },
  {
    icon: BarChart3,
    title: "Partner & commission tracking",
    desc: "Automate partner reporting, reconciliation, and payouts. No more month-end spreadsheet marathons.",
    result: "Hours saved, nothing slips through",
  },
  {
    icon: PenLine,
    title: "Content & SEO at scale",
    desc: "AI-generated destination guides, tour descriptions, and social posts, drafted on-brand and ready to publish.",
    result: "Compounding organic traffic month after month",
  },
];

function Automations() {
  return (
    <section id="automations" className="py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What we automate</span>
          <h2 className="heading mt-5">
            The repetitive work that eats your team&apos;s day
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A few of the automations we build for travel agencies. If your team
            does it on repeat, we can probably automate it.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {automations.map((a) => (
            <article key={a.title} className="card flex flex-col">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-sky-400 ring-1 ring-inset ring-white/10">
                <a.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {a.desc}
              </p>
              <p className="mt-4 flex items-start gap-2 border-t border-white/10 pt-4 text-sm font-medium text-sky-400">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                {a.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Results ---------- */
function Results() {
  return (
    <section className="border-y border-white/5 bg-ink-900/40 py-16">
      <div className="container-page">
        <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-sky-400/[0.07] to-blue-600/[0.04] p-6 sm:p-8">
          <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-inset ring-white/10 sm:inline-flex">
            <Wallet size={22} />
          </span>
          <div>
            <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">
              <span className="font-semibold text-white">
                Every slow reply is a booking lost to a faster competitor.
              </span>{" "}
              Travellers book the agency that answers first. Automating inquiries,
              quotes, and follow-ups typically hands a small team back{" "}
              <span className="font-semibold text-sky-400">
                15+ hours a week
              </span>{" "}
              and lifts booking rates, without adding headcount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why us ---------- */
function WhyUs() {
  const points = [
    {
      icon: Plane,
      title: "We come from travel",
      desc: "We scaled a travel platform to 50M+ annual visitors and ran partnerships with major travel brands. We know your workflows, your seasonality, and your margins.",
    },
    {
      icon: Wrench,
      title: "Done-for-you, built to last",
      desc: "We design, build, test, and maintain your automations. Documented and monitored systems, not fragile hacks that break in peak season.",
    },
    {
      icon: ShieldCheck,
      title: "Fast and low-risk",
      desc: "It starts with a free audit that shows the ROI before you commit. First automations go live in weeks, not months.",
    },
  ];
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why travel agencies pick us</span>
          <h2 className="heading mt-5">Automation partners who actually know travel</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {points.map((p) => (
            <article key={p.title} className="card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-sky-400 ring-1 ring-inset ring-white/10">
                <p.icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Free audit",
      desc: "We map your workflows and pinpoint the highest-impact automations, with the time and money each one saves.",
    },
    {
      n: "02",
      title: "We build",
      desc: "We implement, test, and connect everything to your existing tools, with monitoring built in from day one.",
    },
    {
      n: "03",
      title: "It runs",
      desc: "Your automations run quietly in the background while your team focuses on selling and serving travellers.",
    },
  ];
  return (
    <section className="border-y border-white/5 bg-ink-900/40 py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="heading mt-5">Live in weeks, not months</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="card">
              <span className="font-mono text-3xl font-bold text-gradient">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const faqs = [
    {
      q: "Which tools do you work with?",
      a: "Most booking systems, CRMs, spreadsheets, and inboxes, plus anything with an API or webhook. We build in n8n, Make, and custom Python, and plug in AI where it adds value.",
    },
    {
      q: "Do I need to be technical?",
      a: "No. You bring the workflows and the pain points, we handle the build and hand over clear documentation.",
    },
    {
      q: "How long until something is live?",
      a: "Most first automations ship in a few weeks. We start with one high-impact workflow to deliver value fast.",
    },
    {
      q: "What does it cost?",
      a: "It depends on scope, but every project starts with a free audit so you see the expected ROI before committing.",
    },
  ];
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading mt-5">Questions, answered</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="font-medium text-white">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Audit form ---------- */
function AuditForm() {
  return (
    <section id="audit" className="relative overflow-hidden py-24">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <Plane size={13} />
              Free automation audit
            </span>
            <h2 className="heading mt-5">See what your agency could automate</h2>
            <p className="mt-4 text-lg text-slate-400">
              Tell us where your team loses time. We come back with concrete
              automation ideas for your agency and the hours they would save. No
              cost, no pressure.
            </p>
            <ul className="mt-8 space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-sky-400" />
                Reply within one business day
              </li>
              <li className="flex items-center gap-3">
                <Plane size={18} className="text-sky-400" />
                Ideas tailored to travel workflows
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-sky-400" />
                No commitment, just a clear plan
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6 backdrop-blur sm:p-8">
            <ContactForm source="Travel agencies landing" />
          </div>
        </div>
      </div>
    </section>
  );
}
