// Central place to tweak site-wide values without hunting through components.
export const site = {
  name: "Pixel Walk",
  domain: "pixel-walk.com",
  url: "https://pixel-walk.com",
  description:
    "Pixel Walk is an AI & workflow automation agency. We connect your tools, eliminate manual work, and ship AI-powered automations with n8n, Python, and custom AI.",
  tagline: "AI & Workflow Automation Agency",
  email: "hello@pixel-walk.com",

  // --- Formspree ---
  // 1. Create a free account at https://formspree.io
  // 2. Create a new form, set the destination email (e.g. hello@pixel-walk.com)
  // 3. Copy the form's ID (the part after /f/ in your endpoint) and paste it below.
  formspreeId: "mbdvaadj",

  // Optional social links — leave empty to hide.
  social: {
    linkedin: "",
    x: "",
    github: "",
  },
} as const;

export const formspreeEndpoint = `https://formspree.io/f/${site.formspreeId}`;

// Anchor sections used by the nav.
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#examples" },
  { label: "How it works", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;
