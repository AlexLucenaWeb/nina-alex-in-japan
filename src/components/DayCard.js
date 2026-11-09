import Link from "next/link";
import L from "@/components/L";

export default function DayCard({ day }) {
  return (
    <Link
      href={`/day/${day.day}`}
      className="group flex flex-col gap-3 rounded-xl border-2 border-line bg-card p-4 transition-colors hover:border-momiji"
    >
      <span className="text-xs font-medium uppercase tracking-wide text-momiji">
        <L en={`Day ${day.day}`} es={`Día ${day.day}`} />
      </span>
      <span className="font-display text-lg font-semibold group-hover:underline">
        <L v={day.title} />
      </span>
      <span className="text-sm text-ink/60">
        <L v={day.location} />
      </span>
    </Link>
  );
}
