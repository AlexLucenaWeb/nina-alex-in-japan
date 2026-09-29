import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { STOPS } from "@/data/day9-stops";

// Same as Days 3 and 8: this day's route lives in a Google My Maps map instead
// of the Leaflet component, so it can be edited from Google Maps without
// touching the stop data in the repo.
const MY_MAPS_ID = "1e9r1tAG6eYuex1dlQx0meW39IhRJUXM";

export default function HigashiyamaGionItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            Everything is done on foot:
          </span>{" "}
          short walks between stops, no trains and no buses. Only two things on
          the day are fixed:{" "}
          <span className="font-semibold">Kennin-ji</span>, which closes at
          16:30, and getting the kimono back to{" "}
          <span className="font-semibold">Maikoya</span> — be there at 17:45,
          the deadline is 18:00.
        </p>
      </div>

      <section aria-label="Route map" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">The route</h2>

        <div className="overflow-hidden rounded-2xl border-2 border-line bg-card shadow-sm">
          <DayMapEmbed mid={MY_MAPS_ID} />
        </div>

        <a
          href={`https://www.google.com/maps/d/viewer?mid=${MY_MAPS_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start text-sm text-momiji hover:underline"
        >
          Open in Google Maps
        </a>
      </section>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < STOPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="stop-connector absolute bottom-0 left-5 top-10 -translate-x-1/2"
                />
              )}
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-momiji bg-card font-display text-sm font-semibold text-momiji">
                {stop.n}
              </span>
              <StopCard stop={stop} />
            </li>
          ))}
        </ol>
      </section>

      <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
        <h2 className="font-display text-lg font-semibold text-pine">
          Autumn illuminations (November)
        </h2>
        <p className="mt-2">
          In November, Kōdai-ji and Kiyomizu-dera reopen at night for the
          autumn illuminations. If you&apos;re still around at dusk, it&apos;s
          worth going back to either one to see the maples lit up.
        </p>
      </div>
    </JapanRouteDayShell>
  );
}
