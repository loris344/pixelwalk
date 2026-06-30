const tools = [
  "n8n",
  "Python",
  "OpenAI",
  "Make",
  "Zapier",
  "Airtable",
  "Slack",
  "Notion",
  "HubSpot",
  "Google Workspace",
  "Supabase",
  "Webhooks",
];

export function Tools() {
  return (
    <section className="border-y border-white/5 bg-ink-900/40 py-10">
      <div className="container-page">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-slate-500">
          We automate across the tools you already use
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-base font-semibold text-slate-400 transition-colors hover:text-sky-400 sm:text-lg"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
