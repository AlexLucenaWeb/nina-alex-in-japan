import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day19Stops as STOPS_EN } from "@/data/day19-stops";
import { DAY19_STOPS_ES } from "@/data/es/day19-stops";
import { enText, withSpanish, withSpanishByStop } from "@/lib/i18n";

const day19Stops = withSpanishByStop(STOPS_EN, DAY19_STOPS_ES);

// Same as Days 13, 14, 16, 17 and 18: this day's route lives in a Google My
// Maps map, so it can be edited from Google Maps without touching the stop data
// in the repo. Set it to null to hide the map section — DayMapEmbed has no
// empty state.
const MY_MAPS_ID = "1se5ctglA2BUSULcSUnOziuYY-e9m8iI";

const TRANSPORT_EN = [
  { leg: "Hotel → Zojoji", line: "Walk via Toranomon & Azabudai (or taxi ~10 min)", time: "~30 min" },
  { leg: "Zojoji → Hamarikyu", line: "Walk via Hamamatsucho", time: "~25 min" },
  { leg: "Hamarikyu → Shimbashi → Ginza", line: "Walk", time: "~10 min + ~10 min" },
  { leg: "Ginza → Akihabara", line: "Tokyo Metro Ginza Line (Ginza → Suehirocho)", time: "~10 min" },
  { leg: "Akihabara → Tokyo Station", line: "JR Yamanote Line", time: "~4 min" },
  { leg: "Tokyo → Hotel", line: "Tokyo Metro Marunouchi Line to Kokkai-gijidomae + 7 min walk", time: "~15 min" },
];

const TRANSPORT_ES = [
  {
    "line": "A pie por Toranomon y Azabudai (o taxi ~10 min)"
  },
  {
    "line": "A pie por Hamamatsucho"
  },
  {
    "line": "A pie"
  },
  {},
  {
    "leg": "Akihabara → Estación de Tokio"
  },
  {
    "leg": "Tokio → Hotel",
    "line": "Tokyo Metro Marunouchi Line hasta Kokkai-gijidomae + 7 min a pie"
  }
];

const TRANSPORT = withSpanish(TRANSPORT_EN, TRANSPORT_ES);

const GOOD_TO_KNOW_EN = [
  "Ginza's car-free avenue runs on weekend and holiday afternoons (12:00–17:00, Oct–Mar); Akihabara's only on Sundays (13:00–17:00, Oct–Mar). Both are cancelled in rain or strong wind — the shops stay open, the streets just have traffic again.",
  "Be in Akihabara before 17:00, when its street reopens to cars.",
  "Marunouchi illumination: the 2026 dates aren't announced yet (in 2025: Nov 13 – Feb 15, 16:00–23:00). Check closer to the trip.",
];

const GOOD_TO_KNOW_ES = [
  "La avenida sin coches de Ginza funciona las tardes de fin de semana y festivos (12:00–17:00, oct–mar); la de Akihabara, solo los domingos (13:00–17:00, oct–mar). Las dos se cancelan con lluvia o viento fuerte: las tiendas siguen abiertas, solo que las calles vuelven a tener tráfico.",
  "Hay que estar en Akihabara antes de las 17:00, cuando su calle vuelve a abrirse a los coches.",
  "Iluminación de Marunouchi: las fechas de 2026 aún no se han anunciado (en 2025: del 13 de noviembre al 15 de febrero, 16:00–23:00). Hay que mirarlo cuando se acerque el viaje."
];

const GOOD_TO_KNOW = withSpanish(GOOD_TO_KNOW_EN, GOOD_TO_KNOW_ES);

export default function ShibaGinzaItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  A Sunday built around car-free streets:
                </span>{" "}
                Zojoji with Tokyo Tower behind it, matcha in the middle of
                Hamarikyu&apos;s pond, Ginza and Akihabara with the cars gone, and
                the golden lights of Marunouchi to finish.
              </p>
              <p className="mt-2">
                A relaxed start on foot from the hotel, Ginza from early afternoon
                and Akihabara before its street reopens at 17:00.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Un domingo pensado alrededor de las calles sin coches:
                </span>{" "}
                Zojoji con la Torre de Tokio detrás, matcha en medio del estanque de
                Hamarikyu, Ginza y Akihabara sin coches y, para terminar, las luces
                doradas de Marunouchi.
              </p>
              <p className="mt-2">
                Un comienzo tranquilo a pie desde el hotel, Ginza desde primera hora de la
                tarde y Akihabara antes de que su calle vuelva a abrirse al tráfico a las
                17:00.
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
          {day19Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day19Stops.length - 1 && (
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
            en={"All on the IC card, except the optional taxi."}
            es={"Todo con la tarjeta IC, salvo el taxi opcional."}
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
