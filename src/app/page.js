import DayCard from "@/components/DayCard";
import { days, TRIP_LENGTH } from "@/data/days";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20">
      <header className="flex flex-col gap-4 text-center sm:text-left">
        <p className="text-sm font-medium uppercase tracking-widest text-rose-500">
          The trip
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Nina &amp; Alex in Japan
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-zinc-500 dark:text-zinc-400 sm:mx-0">
          {TRIP_LENGTH} days across Japan — follow along day by day.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {days.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </section>
    </div>
  );
}
