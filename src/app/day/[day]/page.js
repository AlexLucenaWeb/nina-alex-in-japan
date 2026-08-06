import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import FoodSection from "@/components/FoodSection";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import BulletList from "@/components/BulletList";
import HigashiyamaGionItinerary from "@/components/higashiyama-gion/HigashiyamaGionItinerary";
import FlightItinerary from "@/components/flight-itinerary/FlightItinerary";
import ArrivalOsakaItinerary from "@/components/arrival-osaka/ArrivalOsakaItinerary";
import OsakaMinamiItinerary from "@/components/osaka-minami/OsakaMinamiItinerary";
import { TRIP_LENGTH, days, getDay } from "@/data/days";
import { DAY1_FLIGHT_LEGS } from "@/data/day1-flight";
import { hasFoodSection } from "@/data/food";

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
      <header className="w-full border-b border-line bg-band">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 py-10">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-momiji">
              Day {current.day} of {TRIP_LENGTH}
            </p>
            <h1 className="font-display text-4xl font-semibold tracking-tight">
              {current.title}
            </h1>
            <p className="text-ink/70">{current.location}</p>
            {current.date && (
              <p className="text-sm text-ink/50">{current.date}</p>
            )}
          </div>
        </div>
      </header>

      <div className="flex w-full flex-col gap-8 py-16">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6">
          <div className="rounded-2xl border-2 border-line bg-card px-5 py-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-momiji">
              Summary
            </p>
            <p className="text-base leading-7 text-ink/80">{current.summary}</p>
          </div>

          {hasFoodSection(dayNumber) && <FoodSection day={dayNumber} />}
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
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Recommendations
            </h2>
            {current.recommendations.length > 0 ? (
              <BulletList items={current.recommendations} />
            ) : (
              <p className="text-sm text-ink/50">Recommendations coming soon.</p>
            )}
          </section>
        </div>

        <div className="mx-auto w-full max-w-3xl px-6">
          <nav className="flex items-center justify-between border-t border-line pt-6">
            {prev ? (
              <Link
                href={`/day/${prev.day}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-momiji"
              >
                <Arrow direction="left" />
                Day {prev.day}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/day/${next.day}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-momiji"
              >
                Day {next.day}
                <Arrow />
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
