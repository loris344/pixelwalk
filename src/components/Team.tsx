type Member = {
  name: string;
  role: string;
  bio: string;
  photo: string | null; // e.g. "/team/loris.jpg" once you upload the files
};

// To show real photos: drop the files in /public/team/ and set `photo` below
// (e.g. photo: "/team/loris.jpg"). Until then, a branded initial avatar shows.
const team: Member[] = [
  {
    name: "Loris",
    role: "Co-founder · Business & Growth",
    bio: "Drives partnerships and growth. Years closing deals and building commercial automations (Make, n8n, Python) for a 50M-visitor platform — he bridges business goals and what automation can actually deliver.",
    photo: "/team/loris.png",
  },
  {
    name: "Aymeric",
    role: "Co-founder · Automation Lead",
    bio: "Leads the technical build — n8n, Make, Python, and AI integrations. Turns messy manual processes into reliable, automated systems that run on their own.",
    photo: "/team/aymeric.png",
  },
  {
    name: "Paul",
    role: "AI Engineer",
    bio: "Builds the AI layer — LLM integrations, document processing, and autonomous agents with the right guardrails.",
    photo: "/team/paul.png",
  },
  {
    name: "Hugo",
    role: "Python & Data Engineer",
    bio: "Writes the custom Python when no-code hits its limits: scraping, data processing, and rock-solid API integrations.",
    photo: "/team/hugo.png",
  },
  {
    name: "Rym",
    role: "AI & Automation Consultant",
    bio: "Maps each client's processes and turns business problems into AI-powered workflows that actually ship.",
    photo: "/team/rym.png",
  },
  {
    name: "Maeva",
    role: "Client Success & Project Manager",
    bio: "Keeps projects on track and makes sure every automation delivers real, measured ROI for clients.",
    photo: "/team/maeva.png",
  },
];

export function Team() {
  return (
    <section id="team" className="border-t border-white/5 py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Team</span>
          <h2 className="heading mt-5">The people behind Pixel Walk</h2>
          <p className="mt-4 text-lg text-slate-400">
            A small, hands-on team of automation and AI builders based in France —
            equal parts engineers and business minds.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="card">
              <Avatar member={member} />
              <h3 className="mt-5 text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-sky-400">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Avatar({ member }: { member: Member }) {
  if (member.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={member.photo}
        alt={member.name}
        loading="lazy"
        className="aspect-square w-24 rounded-2xl object-cover ring-1 ring-white/10"
      />
    );
  }
  return (
    <div className="flex aspect-square w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-brand-navy text-3xl font-bold text-white ring-1 ring-white/10">
      {member.name.charAt(0)}
    </div>
  );
}
