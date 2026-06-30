import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { site, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container-page py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {site.tagline}. We connect your tools, remove manual work, and ship
              AI-powered automations that scale with your business.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-sky-400"
            >
              <Mail size={16} />
              {site.email}
            </a>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-600">
            Automate everything.
          </p>
        </div>
      </div>
    </footer>
  );
}
