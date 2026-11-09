import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day20Stops as STOPS_EN } from "@/data/day20-stops";
import { DAY20_STOPS_ES } from "@/data/es/day20-stops";
import { enText, withSpanish, withSpanishByStop } from "@/lib/i18n";

const day20Stops = withSpanishByStop(STOPS_EN, DAY20_STOPS_ES);

// Same as Days 13, 14 and 16–19: this day's route lives in a Google My Maps
// map, so it can be edited from Google Maps without touching the stop data in
// the repo. Set it to null to hide the map section — DayMapEmbed has no empty
// state.
const MY_MAPS_ID = "1fmod3schfVgSHkzEIbVXxRgaPYgchHE";

const TRANSPORT_EN = [
  { leg: "Hotel → Tsukiji", line: "Chiyoda Line to Hibiya + Hibiya Line to Tsukiji", time: "~20 min" },
  { leg: "Tsukiji-shijo → Toshimaen", line: "Toei Oedo Line (direct, bound for Hikarigaoka)", time: "~40–45 min" },
  { leg: "Toshimaen → Takadanobaba", line: "Seibu Toshima + Seibu Ikebukuro Line to Ikebukuro, JR Yamanote to Takadanobaba", time: "~30 min" },
  { leg: "Takadanobaba → Hotel", line: "Tozai Line to Iidabashi + Namboku Line to Tameike-sanno", time: "~30 min" },
];

const TRANSPORT_ES = [
  {
    "line": "Chiyoda Line hasta Hibiya + Hibiya Line hasta Tsukiji"
  },
  {
    "line": "Toei Oedo Line (directa, con destino Hikarigaoka)"
  },
  {
    "line": "Seibu Toshima + Seibu Ikebukuro Line hasta Ikebukuro, JR Yamanote hasta Takadanobaba"
  },
  {
    "line": "Tozai Line hasta Iidabashi + Namboku Line hasta Tameike-sanno"
  }
];

const TRANSPORT = withSpanish(TRANSPORT_EN, TRANSPORT_ES);

const GOOD_TO_KNOW_EN = [
  "Harry Potter Studio Tour: timed tickets, online only and non-refundable. Book a 10:30–11:00 entry so Tsukiji fits before. Adult tickets ¥6,600–¥7,300 depending on the date.",
  "Tsukiji Outer Market closes on Sundays, holidays and some Wednesdays — Monday Nov 30 should be a normal trading day, but check the official calendar.",
  "Bring cash for Tsukiji: many stalls don't take cards.",
  "Tomorrow: flight from Narita at 16:55 — be at the airport by 13:25. Pack tonight.",
];

const GOOD_TO_KNOW_ES = [
  "Harry Potter Studio Tour: entradas con hora, solo online y sin reembolso. Reservad una entrada a las 10:30–11:00 para que Tsukiji quepa antes. La entrada de adulto cuesta ¥6,600–¥7,300 según el día.",
  "El mercado exterior de Tsukiji cierra los domingos, festivos y algunos miércoles: el lunes 30 de noviembre debería abrir con normalidad, pero mirad el calendario oficial.",
  "Llevad efectivo para Tsukiji: muchos puestos no aceptan tarjeta.",
  "Mañana: vuelo desde Narita a las 16:55; hay que estar en el aeropuerto a las 13:25. Haced las maletas esta noche."
];

const GOOD_TO_KNOW = withSpanish(GOOD_TO_KNOW_EN, GOOD_TO_KNOW_ES);

export default function HarryPotterDayItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  The last full day in Tokyo:
                </span>{" "}
                a seafood breakfast at Tsukiji Outer Market, a few hours inside the
                real sets of the Harry Potter films, and Magic cards at Hareruya.
              </p>
              <p className="mt-2">
                Out of the hotel by ~7:30 so Tsukiji fits before the Studio Tour
                entry, and back at the hotel around 18:30 for a quiet dinner and
                packing.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  El último día completo en Tokio:
                </span>{" "}
                un desayuno de marisco en el mercado exterior de Tsukiji, unas horas
                dentro de los decorados reales de las películas de Harry Potter y cartas
                de Magic en Hareruya.
              </p>
              <p className="mt-2">
                Salimos del hotel hacia las 7:30 para que Tsukiji quepa antes de la entrada
                al Studio Tour, y volvemos al hotel hacia las 18:30 para una cena tranquila
                y hacer las maletas.
              </p>
            </>
          }
        />
      </div>

      {MY_MAPS_ID && (
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
      )}

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Itinerary" es="Itinerario" />
        </h2>

        <ol className="relative flex flex-col">
          {day20Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day20Stops.length - 1 && (
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

      <section aria-label="Transport" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Transport" es="Transporte" />
        </h2>
        <DataTable
          columns={[
            <L key="Leg" en="Leg" es="Tramo" />,
            <L key="Line" en="Line" es="Línea" />,
            <L key="Time" en="Time" es="Tiempo" />,
          ]}
        >
          {TRANSPORT.map((row) => (
            <tr
              key={enText(row.leg)}
              className="border-b border-line/50 last:border-0"
            >
              <td className="px-4 py-3 font-medium text-momiji">
                <L v={row.leg} />
              </td>
              <td className="px-4 py-3 text-ink/80">
                <L v={row.line} />
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-ink/80">
                <L v={row.time} />
              </td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm leading-relaxed text-ink/80">
          <L
            en={"All on the IC card."}
            es={"Todo con la tarjeta IC."}
          />
        </p>
      </section>

      <section aria-label="Good to know" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Good to know" es="A tener en cuenta" />
        </h2>
        <BulletList items={GOOD_TO_KNOW} />
      </section>
    </JapanRouteDayShell>
  );
}
