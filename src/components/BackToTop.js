"use client";

import Arrow from "@/components/Arrow";

// Always on screen, bottom right: the day pages run long on a phone, and the
// way back to the header is otherwise a lot of swiping. The safe-area inset
// keeps it clear of the iPhone home indicator when installed as a PWA.
export default function BackToTop() {
  function scrollToTop() {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-line bg-card text-lg text-momiji shadow-sm transition-transform active:scale-95"
    >
      <Arrow className="-rotate-90" />
    </button>
  );
}
