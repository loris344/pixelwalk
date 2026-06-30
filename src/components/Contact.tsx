import { Mail, Clock, Sparkles } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_70%)]" />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: pitch */}
          <div>
            <span className="eyebrow">
              <Sparkles size={13} />
              Free automation audit
            </span>
            <h2 className="heading mt-5">
              Let&apos;s find what to automate first
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Tell us about the manual work slowing your team down. We&apos;ll come
              back with concrete automation ideas and the time they&apos;d save — no
              cost, no pressure.
            </p>

            <ul className="mt-8 space-y-4 text-slate-300">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-sky-400" />
                Reply within one business day
              </li>
              <li className="flex items-center gap-3">
                <Sparkles size={18} className="text-sky-400" />
                Concrete ideas, tailored to your stack
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-sky-400" />
                Prefer email?{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-sky-400 underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-6 backdrop-blur sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
