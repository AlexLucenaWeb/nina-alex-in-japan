"use client";

import { useState } from "react";

/**
 * A route diagram shown inside a stop card, under the description.
 *
 * Unlike the stop photos this one is loaded straight from the operator's own
 * site rather than mirrored into /public/photos, so it can 404 on them at any
 * time — and it is not in the service worker's precache, so it is simply
 * missing offline. Either way the figure removes itself instead of leaving a
 * broken image in the middle of the card.
 */
export default function StopRouteImage({ src, caption }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return null;

  return (
    <figure className="mt-1 flex flex-col gap-1.5">
      {/* Plain <img>, not next/image: a remote host that is not in
          next.config.mjs, and nothing here needs resizing at request time. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={caption || "Route map"}
        loading="lazy"
        onError={() => setFailed(true)}
        className="w-full rounded-xl border border-line bg-paper"
      />
      {caption && (
        <figcaption className="text-xs leading-relaxed text-ink/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
