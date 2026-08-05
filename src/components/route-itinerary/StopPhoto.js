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
    // Remote Google Photos URLs expire; plain <img> avoids configuring next/image remote domains.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={label}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-[16/10] w-full object-cover"
    />
  );
}
