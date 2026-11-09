"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Arrow from "@/components/Arrow";
import L from "@/components/L";
import LanguageToggle from "@/components/LanguageToggle";
import { getDay } from "@/data/days";

const BASE_CLASS =
  "inline-flex items-center gap-1.5 font-medium transition-colors";
const LINK_CLASS = `${BASE_CLASS} text-ink/60 hover:text-momiji`;
// Not LINK_CLASS plus text-momiji: both are colour utilities of the same
// specificity, so which one wins is down to their order in the compiled
// stylesheet, not the order they appear in the class attribute.
const ACTIVE_CLASS = `${BASE_CLASS} text-momiji`;

// Preparation is left out on purpose: it's reached from the home page, and the
// header has to fit a phone without wrapping.
const SECTIONS = [
  { href: "/hotels", label: "Hotels", labelEs: "Hoteles" },
  { href: "/trains", label: "Trains", labelEs: "Trenes" },
];

// Always two rows rather than one row that wraps when it runs out of room: the
// pages and the language switch on top, getting around the days underneath.
// On the home page the second row would only link back to itself, so it's left
// out there.
export default function SiteHeaderNav() {
  const pathname = usePathname();
  const match = pathname.match(/^\/day\/(\d+)/);
  const dayNumber = match ? Number(match[1]) : null;

  const prev = dayNumber ? getDay(dayNumber - 1) : null;
  const next = dayNumber ? getDay(dayNumber + 1) : null;

  return (
    <nav className="flex w-full flex-col gap-3 text-sm">
      <div className="flex items-center justify-end gap-x-4">
        {SECTIONS.map((section) => {
          const current = pathname === section.href;

          return (
            <Link
              key={section.href}
              href={section.href}
              aria-current={current ? "page" : undefined}
              className={current ? ACTIVE_CLASS : LINK_CLASS}
            >
              <L en={section.label} es={section.labelEs} />
            </Link>
          );
        })}
        <LanguageToggle />
      </div>

      {pathname !== "/" && (
        // Three fixed slots, so "All days" stays centred whether or not
        // there's a day before or after this one.
        <div className="grid grid-cols-3 items-center">
          <div>
            {prev && (
              <Link href={`/day/${prev.day}`} className={LINK_CLASS}>
                <Arrow direction="left" />
                <L en={`Day ${prev.day}`} es={`Día ${prev.day}`} />
              </Link>
            )}
          </div>
          <div className="text-center">
            <Link href="/" className={LINK_CLASS}>
              <L en="All days" es="Todos los días" />
            </Link>
          </div>
          <div className="text-right">
            {next && (
              <Link href={`/day/${next.day}`} className={LINK_CLASS}>
                <L en={`Day ${next.day}`} es={`Día ${next.day}`} />
                <Arrow />
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
