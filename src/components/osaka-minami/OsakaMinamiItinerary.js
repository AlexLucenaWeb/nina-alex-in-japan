import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { OSAKA_MINAMI_STOPS } from "@/data/osaka-minami-stops";

// This day's route lives in a Google My Maps map instead of the Leaflet
// component the other route days use, so it can be edited from Google Maps
// without touching the stop coordinates in the repo.
const MY_MAPS_ID = "1iayqCvduuz6nUscoAieibPQung10m9E";

export default function OsakaMinamiItinerary() {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            Everything is done on foot:
          </span>{" "}
          about 2.5 km total, 5–15 minutes between stops. It&apos;s an
          easy-going day by design — a soft landing for the jet lag. The
          order is flexible, except for one thing:{" "}
          <span className="font-semibold">Dotonbori has to be at night</span>.
        </p>
        <p className="mt-2">
          Feeling like electronics or anime shopping? Den Den Town slots in
          neatly as a detour between stops 2 and 3.
        </p>
      </div>

      <section aria-label="Route map" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">El recorrido</h2>

        <div className="overflow-hidden rounded-2xl border-2 border-line bg-card shadow-sm">
          <DayMapEmbed mid={MY_MAPS_ID} />
        </div>

        <a
          href={`https://www.google.com/maps/d/viewer?mid=${MY_MAPS_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start text-sm text-momiji hover:underline"
        >
          Abrir en Google Maps
        </a>
      </section>

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {OSAKA_MINAMI_STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < OSAKA_MINAMI_STOPS.length - 1 && (
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
    </JapanRouteDayShell>
  );
}
