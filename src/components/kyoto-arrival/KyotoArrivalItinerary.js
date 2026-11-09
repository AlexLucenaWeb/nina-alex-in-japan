import L from "@/components/L";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day7Stops as STOPS_EN } from "@/data/day7-stops";
import { DAY7_STOPS_ES } from "@/data/es/day7-stops";
import { withSpanishByStop } from "@/lib/i18n";

const day7Stops = withSpanishByStop(STOPS_EN, DAY7_STOPS_ES);

// Same as Days 3, 8 and 9: this day's route lives in a Google My Maps map
// instead of the Leaflet component, so it can be edited from Google Maps
// without touching the stop data in the repo.
const MY_MAPS_ID = "1b_R0BKBXn439B78Wmcs3G8NwWAj6wiI";

export default function KyotoArrivalItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Moving day, but not a lost one.
                </span>{" "}
                Check-out in Osaka and out of the door at ~08:40, bags dropped at
                the hotel in Kyoto by 10:00, and from 10:30 three of the city&apos;s
                essentials: the Golden Pavilion in the north, the maple valley at
                Tōfuku-ji, and the torii of Fushimi Inari climbed up to sunset.
              </p>
              <p className="mt-2">
                The day crosses the city from north to south, so the order matters:
                Kinkaku-ji first, lunch at the station on the way through, Tōfuku-ji
                before it closes at 16:00, and Fushimi Inari last, because it never
                closes and it&apos;s at its best in the dark.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Día de mudanza, pero no un día perdido.
                </span>{" "}
                Check-out en Osaka y en marcha a las ~08:40, maletas en el hotel de Kioto
                a las 10:00 y, desde las 10:30, tres imprescindibles de la ciudad: el
                Pabellón Dorado en el norte, el valle de arces de Tōfuku-ji y los torii de
                Fushimi Inari subiendo hasta la puesta de sol.
              </p>
              <p className="mt-2">
                El día cruza la ciudad de norte a sur, así que el orden importa: primero
                Kinkaku-ji, comida en la estación al pasar, Tōfuku-ji antes de que cierre a
                las 16:00, y Fushimi Inari al final, porque no cierra nunca y es mejor de
                noche.
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
          {day7Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day7Stops.length - 1 && (
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

      <section aria-label="Good to know" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Good to know" es="A tener en cuenta" />
        </h2>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"Getting from Osaka"}
              es={"Cómo llegar desde Osaka"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"Check out of Hotel Arashi Nippombashi 1 and leave at ~08:40 — allow 70–80 min door to door with luggage. Walk to Dobutsuen-mae (or take the Sakaisuji Line one stop from Ebisucho), then the Midosuji Line direct to Umeda. Walk to JR Osaka Station for the JR Special Rapid to Kyoto (~30 min), then one stop on the Karasuma Line to Gojō — only Exit 6 has a lift. Bags at M's Hotel Gojo Odawara by ~10:00, sightseeing from 10:30."}
              es={"Check-out en el Hotel Arashi Nippombashi 1 y salida a las ~08:40: contad 70–80 min de puerta a puerta con equipaje. A pie hasta Dobutsuen-mae (o una parada en la Sakaisuji Line desde Ebisucho) y después la Midosuji Line directa a Umeda. A pie hasta la estación JR de Osaka para el JR Special Rapid a Kioto (~30 min) y una parada en la Karasuma Line hasta Gojō: solo la salida 6 tiene ascensor. Maletas en M's Hotel Gojo Odawara hacia las ~10:00, y visitas desde las 10:30."}
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"North and back"}
              es={"Al norte y vuelta"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"Kinkaku-ji is the only stop today off the rail network. Going: Karasuma Line from Gojō to Kitaōji (~12 min), then bus 204, 205 or M1 to Kinkakuji-michi (~10–15 min). Coming back: the same bus to Kitaōji and the Karasuma Line down to Kyoto Station (~35 min), which is more reliable than the direct bus 205 (~40 min, standing room only in autumn). A taxi takes about 25 minutes each way and, split between two, is worth it if the buses are full. The ICOCA/Suica card works on both the subway and the buses: tap in when you board the bus at the back, tap out at the front when you get off."}
              es={"Kinkaku-ji es la única parada de hoy fuera de la red de trenes. Ida: Karasuma Line de Gojō a Kitaōji (~12 min) y después el bus 204, 205 o M1 hasta Kinkakuji-michi (~10–15 min). Vuelta: el mismo bus hasta Kitaōji y la Karasuma Line hasta la estación de Kioto (~35 min), más fiable que el bus directo 205 (~40 min, y en otoño solo de pie). Un taxi tarda unos 25 minutos por trayecto y, entre dos, merece la pena si los buses van llenos. La tarjeta ICOCA/Suica sirve en el metro y en los buses: se pasa al subir por detrás y al bajar por delante."}
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"Bags before check-in"}
              es={"Maletas antes del check-in"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"Check-in is at 16:00, but the hotel stores luggage from the morning. Ask about early check-in when you drop the bags."}
              es={"El check-in es a las 16:00, pero el hotel guarda el equipaje desde por la mañana. Preguntad por el check-in anticipado al dejar las maletas."}
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"Getting home from Fushimi Inari"}
              es={"Vuelta desde Fushimi Inari"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"JR Nara Line from Inari to Kyoto (5 min), then the Karasuma Line to Gojō."}
              es={"JR Nara Line de Inari a Kioto (5 min) y después la Karasuma Line hasta Gojō."}
            />
          </p>
        </div>
      </section>
    </JapanRouteDayShell>
  );
}
