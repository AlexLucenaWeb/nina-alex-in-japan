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

// The standalone pages, kept short: on a day page they sit next to the day
// stepper, and the header already wraps to a second row on a phone.
const SECTIONS = [
  { href: "/preparation", label: "Prep", labelEs: "Preparar" },
  { href: "/hotels", label: "Hotels", labelEs: "Hoteles" },
  { href: "/trains", label: "Trains", labelEs: "Trenes" },
];

export default function SiteHeaderNav() {
  const pathname = usePathname();
  const match = pathname.match(/^\/day\/(\d+)/);
  const dayNumber = match ? Number(match[1]) : null;

  const prev = dayNumber ? getDay(dayNumber - 1) : null;
  const next = dayNumber ? getDay(dayNumber + 1) : null;

  return (
    // Wraps rather than squeezing: on a day page the stepper plus both section
    // links overflow a phone, and a second right-aligned row reads better than
    // a cramped one.
    <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm">
      {prev && (
        <Link href={`/day/${prev.day}`} className={LINK_CLASS}>
          <Arrow direction="left" />
          <L en={`Day ${prev.day}`} es={`Día ${prev.day}`} />
        </Link>
      )}
      <Link href="/" className={LINK_CLASS}>
        <L en="All days" es="Todos los días" />
      </Link>
      {next && (
        <Link href={`/day/${next.day}`} className={LINK_CLASS}>
          <L en={`Day ${next.day}`} es={`Día ${next.day}`} />
          <Arrow />
        </Link>
      )}
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
    </nav>
  );
}
