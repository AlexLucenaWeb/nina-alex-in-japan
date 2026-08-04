import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import { TRIP_LENGTH, days, getDay } from "@/data/days";

export function generateStaticParams() {
  return days.map((d) => ({ day: String(d.day) }));
}

export async function generateMetadata({ params }) {
  const { day } = await params;
  const current = getDay(Number(day));

  return {
    title: current
      ? `${current.title} · Nina & Alex in Japan`
      : "Day not found",
  };
}

export default async function DayPage({ params }) {
  const { day } = await params;
  const dayNumber = Number(day);
  const current = getDay(dayNumber);

  if (!current) {
    notFound();
  }

  const prev = getDay(dayNumber - 1);
  const next = getDay(dayNumber + 1);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <Link
        href="/"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← All days
      </Link>

      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium text-rose-500">
          Day {current.day} of {TRIP_LENGTH}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight">
          {current.title}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">{current.location}</p>
      </header>

      <PlaceholderPhoto label={`Day ${current.day} photo`} />

      <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
        {current.summary}
      </p>

      <nav className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800">
        {prev ? (
          <Link
            href={`/day/${prev.day}`}
            className="text-sm font-medium hover:underline"
          >
            ← Day {prev.day}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/day/${next.day}`}
            className="text-sm font-medium hover:underline"
          >
            Day {next.day} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
