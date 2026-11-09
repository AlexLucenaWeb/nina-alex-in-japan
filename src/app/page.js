import Link from "next/link";
import Arrow from "@/components/Arrow";
import DayCard from "@/components/DayCard";
import L from "@/components/L";
import { days, TRIP_LENGTH } from "@/data/days";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-20">
      <header className="flex flex-col gap-4 text-center sm:text-left">
        <p className="text-sm font-medium uppercase tracking-widest text-momiji">
          <L en="The trip" es="El viaje" />
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Nina &amp; Alex in Japan
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-ink/70 sm:mx-0">
          <L
            en={`${TRIP_LENGTH} days across Japan — follow along day by day.`}
            es={`${TRIP_LENGTH} días por Japón, día a día.`}
          />
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href="/preparation"
          className="group flex items-center justify-between gap-4 rounded-xl border-2 border-momiji/40 bg-card p-4 transition-colors hover:border-momiji"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-wide text-momiji">
              <L en="Before you fly" es="Antes de volar" />
            </span>
            <span className="font-display text-lg font-semibold group-hover:underline">
              <L en="Trip Preparation" es="Preparación del viaje" />
            </span>
            <span className="text-sm text-ink/60">
              <L
                en="Documents, visa, money, SIM card, and apps to sort out first."
                es="Documentos, visado, dinero, SIM y apps que dejar listos antes."
              />
            </span>
          </div>
          <Arrow className="shrink-0 text-momiji transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="/hotels"
          className="group flex items-center justify-between gap-4 rounded-xl border-2 border-momiji/40 bg-card p-4 transition-colors hover:border-momiji"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-wide text-momiji">
              <L en="Where we sleep" es="Dónde dormimos" />
            </span>
            <span className="font-display text-lg font-semibold group-hover:underline">
              <L en="Hotels" es="Hoteles" />
            </span>
            <span className="text-sm text-ink/60">
              <L
                en="Addresses in Japanese, check-in times, and the nearest station."
                es="Direcciones en japonés, horarios de check-in y la estación más cercana."
              />
            </span>
          </div>
          <Arrow className="shrink-0 text-momiji transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {days.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </section>
    </div>
  );
}
