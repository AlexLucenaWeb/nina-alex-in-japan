import DayMapEmbed from "@/components/DayMapEmbed";
import L from "@/components/L";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { OSAKA_MINAMI_STOPS as STOPS_EN } from "@/data/osaka-minami-stops";
import { OSAKA_MINAMI_STOPS_ES } from "@/data/es/osaka-minami-stops";
import { withSpanishByStop } from "@/lib/i18n";

// This day's route lives in a Google My Maps map instead of the Leaflet
// component the other route days use, so it can be edited from Google Maps
// without touching the stop coordinates in the repo.
const MY_MAPS_ID = "1iayqCvduuz6nUscoAieibPQung10m9E";

const OSAKA_MINAMI_STOPS = withSpanishByStop(STOPS_EN, OSAKA_MINAMI_STOPS_ES);

export default function OsakaMinamiItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Two districts in one day, south to north:
                </span>{" "}
                the temple and the old Shinsekai quarter around Tennoji in the
                morning, then Minami for the afternoon and evening. About 4 km
                on foot in total, plus one metro hop between stops 2 and 3 —
                everything else is walked, 5–15 minutes at a time.
              </p>
              <p className="mt-2">
                The order is flexible in the middle, but not at the two ends:{" "}
                <span className="font-semibold">
                  lunch is kushikatsu in Shinsekai
                </span>{" "}
                (the whole reason the route goes through there), and{" "}
                <span className="font-semibold">
                  Dotonbori has to be at night
                </span>{" "}
                — you arrive at 16:30, ahead of sunset (~16:55), and sit down
                to dinner at 18:30–19:00, not before.
              </p>
              <p className="mt-2">
                Feeling like electronics or anime shopping? Den Den Town sits
                right between stops 2 and 4 and slots in as a detour.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Dos barrios en un día, de sur a norte:
                </span>{" "}
                el templo y el viejo barrio de Shinsekai, junto a Tennoji, por
                la mañana, y Minami por la tarde y la noche. Unos 4 km a pie en
                total, más un trayecto en metro entre las paradas 2 y 3; todo
                lo demás se hace andando, de 5 a 15 minutos cada vez.
              </p>
              <p className="mt-2">
                El orden es flexible en el medio, pero no en los extremos:{" "}
                <span className="font-semibold">
                  la comida es kushikatsu en Shinsekai
                </span>{" "}
                (la razón de que la ruta pase por ahí), y{" "}
                <span className="font-semibold">
                  Dotonbori tiene que ser de noche
                </span>
                : llegamos a las 16:30, antes de la puesta de sol (~16:55), y
                nos sentamos a cenar a las 18:30–19:00, no antes.
              </p>
              <p className="mt-2">
                ¿Nos apetece mirar electrónica o anime? Den Den Town queda
                justo entre las paradas 2 y 4 y encaja como desvío.
              </p>
            </>
          }
        />
      </div>

      <section aria-label="Route map" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="The route" es="La ruta" />
        </h2>

        <div className="overflow-hidden rounded-2xl border-2 border-line bg-card shadow-sm">
          <DayMapEmbed mid={MY_MAPS_ID} />
        </div>

        <a
          href={`https://www.google.com/maps/d/viewer?mid=${MY_MAPS_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start text-sm text-momiji hover:underline"
        >
          <L en="Open in Google Maps" es="Abrir en Google Maps" />
        </a>
      </section>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Itinerary" es="Itinerario" />
        </h2>

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
