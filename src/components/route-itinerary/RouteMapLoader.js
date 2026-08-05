"use client";

import dynamic from "next/dynamic";

// `ssr: false` must be called from inside a Client Component in this Next.js
// version — calling it directly from a Server Component throws a build error.
const RouteMap = dynamic(() => import("./RouteMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[70vh] w-full items-center justify-center rounded-2xl border border-line bg-card text-sm text-ink/60">
      Loading map…
    </div>
  ),
});

export default function RouteMapLoader({ stops }) {
  return <RouteMap stops={stops} />;
}
