"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What tools and platforms do you work with?",
    a: "We work across n8n, Make, and Zapier for no-code/low-code automation, plus custom Python when you need full control. We integrate with most CRMs, databases, spreadsheets, and any tool that exposes an API or webhook, and we plug in AI models like OpenAI where it adds value.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "Not at all. You bring the process and the pain points; we handle the technical design and build. We explain everything in plain language and hand over clear documentation so your team can run with it.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most first automations go live in a few weeks, not months. We start with a focused, high-impact workflow to deliver value fast, then expand from there.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the scope and complexity, but every project starts with a free automation audit so you know the expected ROI before committing. We scope to your budget and prioritize the automations that pay back fastest.",
  },
  {
    q: "What if my tools aren't natively supported?",
    a: "That's exactly where custom Python and API integrations come in. If a tool has any way to connect (API, webhook, export), we can almost always automate it.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Automations need monitoring and occasional tuning as your business changes. We offer maintenance and optimization so your systems keep running reliably.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-white/5 py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading mt-5">Questions, answered</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/5 rounded-2xl border border-white/10 bg-white/[0.02]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-sky-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden px-6 transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-slate-400">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
