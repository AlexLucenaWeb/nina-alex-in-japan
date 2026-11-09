import L from "@/components/L";
import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import {
  HIMEJI_KOBE_STOPS as STOPS_EN,
  HIMEJI_KOBE_TRAINS as TRAINS_EN,
  HIMEJI_KOBE_COST_NOTE as COST_NOTE_EN,
} from "@/data/himeji-kobe-stops";
import {
  HIMEJI_KOBE_STOPS_ES,
  HIMEJI_KOBE_TRAINS_ES,
  HIMEJI_KOBE_COST_NOTE_ES,
} from "@/data/es/himeji-kobe-stops";
import { bi, enText, withSpanish, withSpanishByStop } from "@/lib/i18n";

// As on Days 3 and 4, the route lives in a Google My Maps map so it can be
// edited from Google Maps without touching the repo.
const MY_MAPS_ID = "1OlDXc-HMyxnRVYUN-GS37j44hfZ6s0A";

const HIMEJI_KOBE_STOPS = withSpanishByStop(STOPS_EN, HIMEJI_KOBE_STOPS_ES);
const HIMEJI_KOBE_TRAINS = withSpanish(TRAINS_EN, HIMEJI_KOBE_TRAINS_ES);
const HIMEJI_KOBE_COST_NOTE = bi(COST_NOTE_EN, HIMEJI_KOBE_COST_NOTE_ES);

export default function HimejiKobeItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Two cities in one day:
                </span>{" "}
                Himeji in the morning for the castle and its garden, then the
                train east to Kobe for the afternoon. Each half is walkable
                end to end — the only travelling is the three train legs
                below.
              </p>
              <p className="mt-2">
                The one time that matters is the start. Everything after the
                castle has slack in it.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Dos ciudades en un día:
                </span>{" "}
                Himeji por la mañana, para el castillo y su jardín, y después
                el tren hacia el este hasta Kobe para la tarde. Cada mitad se
                recorre a pie de punta a punta: lo único que hay que mover son
                los tres trenes de abajo.
              </p>
              <p className="mt-2">
                Lo único que importa es la hora de salida. Todo lo que viene
                después del castillo tiene margen.
              </p>
            </>
          }
        />
      </div>

      <section aria-label="Getting there and back" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="The trains" es="Los trenes" />
        </h2>

        <DataTable
          columns={[
            <L key="Leg" en="Leg" es="Tramo" />,
            <L key="Train" en="Train" es="Tren" />,
            <L key="Duration" en="Duration" es="Duración" />,
            <L key="Price/person" en="Price/person" es="Precio/persona" />,
            <L key="Notes" en="Notes" es="Notas" />,
          ]}
          minWidth={680}
        >
          {HIMEJI_KOBE_TRAINS.map((row) => (
            <tr key={enText(row.leg)} className="border-b border-line/50 last:border-0">
              <td className="px-4 py-3 font-medium">
                <L v={row.leg} />
              </td>
              <td className="px-4 py-3 text-ink/80">
                <L v={row.train} />
              </td>
              <td className="px-4 py-3 text-momiji">{row.duration}</td>
              <td className="px-4 py-3 text-ink/80">{row.price}</td>
              <td className="px-4 py-3 text-ink/70">
                <L v={row.note} />
              </td>
            </tr>
          ))}
        </DataTable>

        <p className="text-sm text-ink/60">
          <L v={HIMEJI_KOBE_COST_NOTE} />
        </p>

        <div className="rounded-2xl border-2 border-ochre/50 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-ochre">
            <L
              en="Leave Osaka around 08:00"
              es="Salir de Osaka hacia las 08:00"
            />
          </h3>
          <p className="mt-2">
            <L
              en="It puts you at the castle for the 9:00 opening, which is the difference between walking in and queuing for tickets. The keep is the one part of the day that gets genuinely busy, and it is the first thing you do."
              es="Así llegamos al castillo cuando abre a las 9:00, que es la diferencia entre entrar directamente y hacer cola para las entradas. La torre del castillo es lo único del día que se llena de verdad, y es lo primero que hacemos."
            />
          </p>
        </div>
      </section>

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
          {HIMEJI_KOBE_STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < HIMEJI_KOBE_STOPS.length - 1 && (
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
            <L en="Buy the combined ticket" es="Comprad la entrada combinada" />
          </h3>
          <p className="mt-2">
            <L
              en="At the castle gate, ¥2,600 covers both the keep and Koko-en next door — ¥500 less than paying separately, and Koko-en is a five minute walk from the exit. Under-18s get into the castle free."
              es="En la puerta del castillo, ¥2,600 cubren la torre y el jardín Koko-en, al lado: ¥500 menos que pagando por separado, y Koko-en está a cinco minutos a pie de la salida. Los menores de 18 entran gratis al castillo."
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L en="Eating along the way" es="Comer por el camino" />
          </h3>
          <p className="mt-2">
            <L
              en="Lunch is on Miyuki-dori before the train: Himeji oden in its soy-ginger broth, or anago-don. In Kobe, Nankinmachi is street food — butaman, Kobe-beef croquettes, skewers — and it's at its liveliest at weekends. Save room for dinner."
              es="Comemos en Miyuki-dori antes del tren: oden de Himeji en su caldo de soja y jengibre, o anago-don. En Kobe, Nankinmachi es comida callejera (butaman, croquetas de ternera de Kobe, brochetas) y tiene más ambiente los fines de semana. Hay que guardar hueco para la cena."
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-momiji">
            <L
              en="End at the water for sunset"
              es="Terminar junto al agua al atardecer"
            />
          </h3>
          <p className="mt-2">
            <L
              en="Sunset is around 17:00 in November and the route reaches Meriken Park at 16:45 — the port lights come on while you're there. Then it's a 10–15 minute walk to Kobe Beef Daichi for the 18:15 booking — the 9-dish Autumn menu to close the day."
              es="En noviembre la puesta de sol es hacia las 17:00 y la ruta llega al parque Meriken a las 16:45: las luces del puerto se encienden mientras estamos allí. Después, 10–15 minutos a pie hasta Kobe Beef Daichi para la reserva de las 18:15: el menú de otoño de 9 platos para cerrar el día."
            />
          </p>
        </div>
      </section>
    </JapanRouteDayShell>
  );
}
