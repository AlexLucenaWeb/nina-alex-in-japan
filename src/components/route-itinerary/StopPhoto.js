"use client";

import { useState } from "react";

export default function StopPhoto({ src, label }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-pine/15 via-ochre/10 to-momiji/10">
        <span className="px-4 text-center font-display text-sm tracking-wide text-ink/50">
          {label}
        </span>
      </div>
    );
  }

  return (
    // Plain <img>, not next/image: scripts/photos.mjs already ships these at
    // exactly one size, cropped to this aspect ratio, so there is nothing left
    // to optimise at request time — and the files stay precacheable by the
    // service worker under their own URLs.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={label}
      width={1000}
      height={625}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-[16/10] w-full object-cover"
    />
  );
}
