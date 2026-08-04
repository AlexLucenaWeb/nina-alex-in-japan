import Link from "next/link";

export default function DayCard({ day }) {
  return (
    <Link
      href={`/day/${day.day}`}
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
    >
      <span className="text-xs font-medium uppercase tracking-wide text-rose-500">
        Day {day.day}
      </span>
      <span className="text-lg font-semibold group-hover:underline">
        {day.title}
      </span>
      <span className="text-sm text-zinc-500 dark:text-zinc-400">
        {day.location}
      </span>
    </Link>
  );
}
