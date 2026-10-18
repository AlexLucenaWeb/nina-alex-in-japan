import Link from "next/link";
import TrainCard from "@/components/trains/TrainCard";
import { formatDate } from "@/data/hotels";
import { trainsByDay } from "@/data/trains";

export const metadata = {
  title: "Trains · Nina & Alex in Japan",
  description:
    "Every train of the trip, in order: times, stations and what still needs booking.",
};

export default function TrainsPage() {
  const groups = trainsByDay();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium uppercase tracking-wide text-momiji">
          How we get around
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Trains
        </h1>
        <p className="text-lg leading-8 text-ink/70">
          Every train of the trip, in order.
        </p>
      </header>

      <div className="flex flex-col gap-10">
        {groups.map((group) => (
          <section
            key={group.day}
            aria-labelledby={`day-${group.day}`}
            className="flex flex-col gap-4"
          >
            <h2
              id={`day-${group.day}`}
              className="text-sm font-semibold uppercase tracking-wide text-ink/60"
            >
              <Link
                href={`/day/${group.day}`}
                className="transition-colors hover:text-momiji"
              >
                Day {group.day} · {formatDate(group.date)}
              </Link>
            </h2>
            {group.trains.map((train) => (
              <TrainCard key={train.id} train={train} />
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
