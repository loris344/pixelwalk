// PostHog client-side config.
// The `phc_` token is a public, client-side ingestion key (it ships in the
// browser bundle by design), so the hardcoded fallback is safe. It also means
// the GitHub Actions build works without configuring any CI secret.
// To override (e.g. on another host), set NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
// and NEXT_PUBLIC_POSTHOG_HOST as env vars at build time.
export const POSTHOG_KEY =
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ??
  "phc_CxEvBRrffc3zHpUngk4aBoTEzpaYoYepj5G55vJUiCPk";

export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";
