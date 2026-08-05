import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import BulletList from "@/components/BulletList";
import HigashiyamaGionItinerary from "@/components/higashiyama-gion/HigashiyamaGionItinerary";
import FlightItinerary from "@/components/flight-itinerary/FlightItinerary";
import ArrivalOsakaItinerary from "@/components/arrival-osaka/ArrivalOsakaItinerary";
import OsakaMinamiItinerary from "@/components/osaka-minami/OsakaMinamiItinerary";
import { TRIP_LENGTH, days, getDay } from "@/data/days";
import { DAY1_FLIGHT_LEGS } from "@/data/day1-flight";

// Each entry renders the full content block for that day number.
// Days without an entry fall back to the placeholder photo below.
const DAY_CONTENT = {
  1: () => (
    <div className="mx-auto w-full max-w-3xl px-6">
      <FlightItinerary legs={DAY1_FLIGHT_LEGS} />
    </div>
  ),
  2: () => <ArrivalOsakaItinerary />,
  3: () => <OsakaMinamiItinerary />,
  14: () => <HigashiyamaGionItinerary />,
};

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

  const DayContent = DAY_CONTENT[dayNumber];

  return (
    <div className="flex w-full flex-col">
      <header className="w-full bg-zinc-100 dark:bg-zinc-900">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 py-10">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-rose-500">
              Day {current.day} of {TRIP_LENGTH}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight">
              {current.title}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400">
              {current.location}
            </p>
            {current.date && (
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                {current.date}
              </p>
            )}
          </div>
        </div>
      </header>

      <div className="flex w-full flex-col gap-8 py-16">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/40">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-rose-500">
              Summary
            </p>
            <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
              {current.summary}
            </p>
          </div>
        </div>

        {DayContent ? (
          <DayContent />
        ) : (
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6">
            <PlaceholderPhoto label={`Day ${current.day} photo`} />
          </div>
        )}

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight">
              Recommendations
            </h2>
            {current.recommendations.length > 0 ? (
              <BulletList items={current.recommendations} />
            ) : (
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                Recommendations coming soon.
              </p>
            )}
          </section>
        </div>

        <div className="mx-auto w-full max-w-3xl px-6">
          <nav className="flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800">
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
      </div>
    </div>
  );
}
