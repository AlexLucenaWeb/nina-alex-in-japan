"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Arrow from "@/components/Arrow";
import { getDay } from "@/data/days";

const LINK_CLASS =
  "inline-flex items-center gap-1.5 font-medium text-ink/60 transition-colors hover:text-momiji";

export default function SiteHeaderNav() {
  const pathname = usePathname();
  const match = pathname.match(/^\/day\/(\d+)/);
  const dayNumber = match ? Number(match[1]) : null;

  const prev = dayNumber ? getDay(dayNumber - 1) : null;
  const next = dayNumber ? getDay(dayNumber + 1) : null;

  return (
    <nav className="flex items-center gap-4 text-sm">
      {prev && (
        <Link href={`/day/${prev.day}`} className={LINK_CLASS}>
          <Arrow direction="left" />
          Day {prev.day}
        </Link>
      )}
      <Link href="/" className={LINK_CLASS}>
        All days
      </Link>
      {next && (
        <Link href={`/day/${next.day}`} className={LINK_CLASS}>
          Day {next.day}
          <Arrow />
        </Link>
      )}
    </nav>
  );
}
