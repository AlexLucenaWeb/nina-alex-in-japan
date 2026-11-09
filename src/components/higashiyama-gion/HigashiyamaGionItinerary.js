import L from "@/components/L";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { STOPS as STOPS_EN } from "@/data/day8-stops";
import { DAY8_STOPS_ES } from "@/data/es/day8-stops";
import { withSpanishByStop } from "@/lib/i18n";

const STOPS = withSpanishByStop(STOPS_EN, DAY8_STOPS_ES);

// Same as Day 3: this day's route lives in a Google My Maps map instead
// of the Leaflet component, so it can be edited from Google Maps without
// touching the stop data in the repo.
const MY_MAPS_ID = "1e9r1tAG6eYuex1dlQx0meW39IhRJUXM";

export default function HigashiyamaGionItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  The day starts at Maikoya at 9:00:
                </span>{" "}
                a ~10 min taxi from the hotel to be there by ~08:45, then into
                kimono for the tea ceremony, then up Matsubara-dori to
                Kiyomizu-dera in it, and from there all downhill through Sannenzaka
                and Ninenzaka to Gion — the route flows in one direction.
              </p>
              <p className="mt-2">
                After the taxi, everything is done on foot: short walks between
                stops, no trains and no buses. Besides the 9:00 booking, two things
                on the day are fixed:{" "}
                <span className="font-semibold">Kennin-ji</span>, whose last entry is
                16:00, and getting the kimono back to{" "}
                <span className="font-semibold">Maikoya</span> — be there at 17:45,
                the deadline is 18:00.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  El día empieza en Maikoya a las 9:00:
                </span>{" "}
                un taxi de ~10 min desde el hotel para estar allí a las ~08:45, después el
                kimono para la ceremonia del té, la subida por Matsubara-dori hasta
                Kiyomizu-dera con él puesto y, desde allí, todo cuesta abajo por Sannenzaka
                y Ninenzaka hasta Gion: la ruta va en una sola dirección.
              </p>
              <p className="mt-2">
                Después del taxi, todo se hace a pie: paseos cortos entre paradas, sin
                trenes ni buses. Aparte de la reserva de las 9:00, hay dos cosas fijas en
                el día:{" "}
                <span className="font-semibold">Kennin-ji</span>, cuya última entrada es a
                las 16:00, y devolver el kimono en{" "}
                <span className="font-semibold">Maikoya</span>: estad allí a las 17:45, el
                límite es a las 18:00.
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
          <L en="Autumn illuminations (November)" es="Iluminaciones de otoño (noviembre)" />
        </h2>
        <p className="mt-2">
          <L
            en={"Tonight only Kōdai-ji's autumn illumination applies: it reopens from dusk (~¥600) with the maples and the bamboo grove lit up. It's optional — after returning the kimono, or after dinner. Kiyomizu-dera's night viewing runs Nov 21–30 in 2026, so it isn't on yet."}
            es={"Esta noche solo cuenta la iluminación de otoño de Kōdai-ji: reabre desde el anochecer (~¥600) con los arces y el bosque de bambú iluminados. Es opcional, después de devolver el kimono o de cenar. La visita nocturna de Kiyomizu-dera es del 21 al 30 de noviembre en 2026, así que todavía no ha empezado."}
          />
        </p>
      </div>
    </JapanRouteDayShell>
  );
}
