"use client";

import { useId, useState } from "react";
import Arrow from "@/components/Arrow";

// The collapsed half of the Food section.
//
// This is the one client component in the section — FoodSection itself stays on
// the server and passes the already-rendered dishes and reservations as
// children, so none of that content ships as JS.
//
// The open/close animation is the grid 0fr -> 1fr trick rather than a native
// <details>: `height: auto` isn't animatable, and `::details-content` (the CSS
// way to animate a real <details>) isn't reliable on iOS Safari, which is the
// browser this trip actually gets read on.
export default function FoodDisclosure({ label, children }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setOpen((wasOpen) => !wasOpen)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full border border-line bg-paper px-4 py-2.5 text-sm font-medium text-ink/70 transition-colors hover:text-momiji"
      >
        {open ? "Show less" : label}
        <Arrow
          className={`transition-transform duration-300 ${
            open ? "-rotate-90" : "rotate-90"
          }`}
        />
      </button>

      <div
        id={panelId}
        // The grid row is what animates; the inner wrapper needs the
        // overflow-hidden so the content is clipped on the way through.
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {/* Padding, not margin: a margin here would collapse out of the
              clipped box and leave a gap while it's closed. */}
          <div className="flex flex-col gap-5 pt-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
