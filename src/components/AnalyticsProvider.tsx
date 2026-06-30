"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { POSTHOG_KEY, POSTHOG_HOST } from "@/lib/posthog";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Client-only init (this site is statically exported, no server).
    // Guard against re-initialization on fast refresh / re-renders.
    if (!POSTHOG_KEY || posthog.__loaded) return;

    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: true, // posthog tracks SPA navigations itself
      capture_pageleave: true,
    });
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
