"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDay } from "@/data/days";

export default function SiteHeaderNav() {
  const pathname = usePathname();
  const match = pathname.match(/^\/day\/(\d+)/);
  const dayNumber = match ? Number(match[1]) : null;

  const prev = dayNumber ? getDay(dayNumber - 1) : null;
  const next = dayNumber ? getDay(dayNumber + 1) : null;

  return (
    <nav className="flex items-center gap-4 text-sm">
      {prev && (
        <Link
          href={`/day/${prev.day}`}
          className="font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Day {prev.day}
        </Link>
      )}
      <Link
        href="/"
        className="font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        All days
      </Link>
      {next && (
        <Link
          href={`/day/${next.day}`}
          className="font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Day {next.day} →
        </Link>
      )}
    </nav>
  );
}
