"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { site, formspreeEndpoint } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ source }: { source?: string } = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const configured = (site.formspreeId as string) !== "YOUR_FORMSPREE_ID";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        setError(
          json?.errors?.[0]?.message ??
            "Something went wrong. Please try again or email us directly."
        );
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again or email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/5 p-10 text-center">
        <CheckCircle2 className="text-sky-400" size={40} />
        <h3 className="mt-4 text-xl font-semibold text-white">Message sent!</h3>
        <p className="mt-2 text-slate-400">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {source && <input type="hidden" name="source" value={source} />}
      {!configured && (
        <p className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-400">
          You can also reach us directly at{" "}
          <a href={`mailto:${site.email}`} className="text-sky-400 underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Jane Doe" required />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="jane@company.com"
          required
        />
      </div>
      <Field label="Company" name="company" placeholder="Acme Inc." />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
          What would you like to automate?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about the manual tasks eating your team's time…"
          className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/50"
        />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={16} /> {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label}
        {required && <span className="text-sky-400"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/50"
      />
    </div>
  );
}
