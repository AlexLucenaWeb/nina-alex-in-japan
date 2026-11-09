import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day18Stops as STOPS_EN } from "@/data/day18-stops";
import { DAY18_STOPS_ES } from "@/data/es/day18-stops";
import { enText, withSpanish, withSpanishByStop } from "@/lib/i18n";

const day18Stops = withSpanishByStop(STOPS_EN, DAY18_STOPS_ES);

// Same as Days 13, 14, 16 and 17: this day's route lives in a Google My Maps
// map, so it can be edited from Google Maps without touching the stop data in
// the repo. Set it to null to hide the map section — DayMapEmbed has no empty
// state.
const MY_MAPS_ID = "1ML6wmu5EOC6i7CtzNEanuqrVOANxo7k";

const TRANSPORT_EN = [
  { leg: "Hotel → Meiji-jingumae", line: "Tokyo Metro Chiyoda Line (Akasaka → Meiji-jingumae)", time: "~10 min" },
  { leg: "Meiji Jingu → Takeshita → Omotesando → Gyoza Lou", line: "Walk", time: "~25 min total" },
  { leg: "Omotesando → Ginkgo Avenue", line: "Walk along Aoyama-dori (or Ginza Line to Gaienmae)", time: "~15 min" },
  { leg: "Gaienmae → Shibuya", line: "Tokyo Metro Ginza Line", time: "~5 min" },
  { leg: "Shibuya → Hotel", line: "Tokyo Metro Ginza Line to Tameike-sanno + 7 min walk", time: "~20 min" },
  { leg: "Hotel → Shinjuku", line: "Tokyo Metro Marunouchi Line from Kokkai-gijidomae", time: "~25 min" },
  { leg: "Shinjuku → Hotel", line: "Tokyo Metro Marunouchi Line to Kokkai-gijidomae + 7 min walk", time: "~25 min" },
];

const TRANSPORT_ES = [
  {},
  {
    "line": "A pie",
    "time": "~25 min en total"
  },
  {
    "leg": "Omotesando → Avenida de ginkgos",
    "line": "A pie por Aoyama-dori (o Ginza Line hasta Gaienmae)"
  },
  {},
  {
    "line": "Tokyo Metro Ginza Line hasta Tameike-sanno + 7 min a pie"
  },
  {
    "line": "Tokyo Metro Marunouchi Line desde Kokkai-gijidomae"
  },
  {
    "line": "Tokyo Metro Marunouchi Line hasta Kokkai-gijidomae + 7 min a pie"
  }
];

const TRANSPORT = withSpanish(TRANSPORT_EN, TRANSPORT_ES);

const GOOD_TO_KNOW_EN = [
  "Shibuya Sky: book the 15:20–15:40 entry slot as soon as the date opens (midnight Japan time = 16:00 in Madrid) — weekend sunset slots sell out. Web price after 15:00: ¥3,400. If the official site rejects the card, book on Klook (free cancellation up to 24 h before).",
  "Meiji Jingu closes at sunset (~16:10 in November) — that's why it's first.",
  "Harajuku Gyoza Lou is cash only; expect a queue on Saturdays.",
  "Shibuya Sky's open-air rooftop closes in rain or strong wind — see Plan B.",
];

const GOOD_TO_KNOW_ES = [
  "Shibuya Sky: reservad la franja de entrada de 15:20–15:40 en cuanto se abra la fecha (medianoche en Japón = 16:00 en Madrid); las franjas del atardecer en fin de semana se agotan. Precio web después de las 15:00: ¥3,400. Si la web oficial rechaza la tarjeta, reservad en Klook (cancelación gratis hasta 24 h antes).",
  "Meiji Jingu cierra con la puesta de sol (~16:10 en noviembre): por eso va primero.",
  "Harajuku Gyoza Lou solo acepta efectivo; los sábados contad con cola.",
  "La azotea al aire libre de Shibuya Sky cierra con lluvia o viento fuerte: ver el Plan B."
];

const GOOD_TO_KNOW = withSpanish(GOOD_TO_KNOW_EN, GOOD_TO_KNOW_ES);

const PLAN_B_EN = [
  "Rain or strong wind: the rooftop may close, but Shibuya Sky's indoor 46th-floor gallery usually stays open. Free alternative with a view: the Tokyo Metropolitan Government Building observatory in Shinjuku (indoor), on the way to the evening.",
  "Ginkgo avenue in the rain: still beautiful — just keep it shorter and spend more time at the festival stalls under cover.",
];

const PLAN_B_ES = [
  "Lluvia o viento fuerte: puede que cierre la azotea, pero la galería interior de la planta 46 de Shibuya Sky suele seguir abierta. Alternativa gratis con vistas: el mirador del Edificio del Gobierno Metropolitano de Tokio, en Shinjuku (cubierto), de camino a la noche.",
  "La avenida de ginkgos con lluvia: sigue siendo preciosa; solo hay que acortar el paseo y pasar más rato en los puestos del festival, a cubierto."
];

const PLAN_B = withSpanish(PLAN_B_EN, PLAN_B_ES);

export default function HarajukuShibuyaItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  West Tokyo from morning to night:
                </span>{" "}
                Meiji Jingu&apos;s forest at opening time, Harajuku and Omotesando,
                the golden ginkgo avenue, sunset from Shibuya Sky, then cats and
                yakitori in Shinjuku.
              </p>
              <p className="mt-2">
                Out of the hotel by ~8:00 to beat the Saturday crowds at the shrine,
                up on Shibuya Sky by 15:30 for daylight, sunset and the city lights
                in one go, then a rest at the hotel before cats and yakitori in
                Shinjuku.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  El oeste de Tokio de la mañana a la noche:
                </span>{" "}
                el bosque de Meiji Jingu a primera hora, Harajuku y Omotesando, la avenida
                dorada de ginkgos, el atardecer desde Shibuya Sky, y después gatos y
                yakitori en Shinjuku.
              </p>
              <p className="mt-2">
                Salimos del hotel hacia las 8:00 para adelantarnos a la gente del sábado en
                el santuario, subimos a Shibuya Sky a las 15:30 para ver de una vez la luz
                del día, el atardecer y las luces de la ciudad, y descansamos en el hotel
                antes de los gatos y el yakitori de Shinjuku.
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
          {day18Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day18Stops.length - 1 && (
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

      <section aria-label="Plan B" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Plan B</h2>
        <BulletList items={PLAN_B} />
      </section>
    </JapanRouteDayShell>
  );
}
