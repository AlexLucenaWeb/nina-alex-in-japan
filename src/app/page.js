import Link from "next/link";
import Arrow from "@/components/Arrow";
import DayCard from "@/components/DayCard";
import { days, TRIP_LENGTH } from "@/data/days";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20">
      <header className="flex flex-col gap-4 text-center sm:text-left">
        <p className="text-sm font-medium uppercase tracking-widest text-momiji">
          The trip
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Nina &amp; Alex in Japan
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-ink/70 sm:mx-0">
          {TRIP_LENGTH} days across Japan — follow along day by day.
        </p>
      </header>

      <Link
        href="/preparation"
        className="group flex items-center justify-between gap-4 rounded-xl border-2 border-momiji/40 bg-card p-4 transition-colors hover:border-momiji"
      >
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-momiji">
            Before you fly
          </span>
          <span className="font-display text-lg font-semibold group-hover:underline">
            Trip Preparation
          </span>
          <span className="text-sm text-ink/60">
            Documents, visa, money, SIM card, and apps to sort out first.
          </span>
        </div>
        <Arrow className="shrink-0 text-momiji transition-transform group-hover:translate-x-1" />
      </Link>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {days.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </section>
    </div>
  );
}
