"use client";

import { useEffect, useRef, useState } from "react";

// The one interactive piece of a hotel card, split out so HotelCard itself can
// stay a server component — same split as FoodSection / FoodDisclosure.
//
// Copying the Japanese address is the whole point of having it on the page:
// you hand the phone to a taxi driver, or paste it into a maps app.
export default function CopyAddress({ value }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // No clipboard permission, or an insecure origin. Nothing to say about
      // it — the address is right there on screen to read out instead.
      return;
    }

    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex w-fit items-center rounded-full border-2 border-line bg-paper px-3 py-1.5 text-xs font-semibold transition-colors hover:border-momiji active:scale-[0.98]"
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
