import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day14Stops as STOPS_EN } from "@/data/day14-stops";
import { DAY14_STOPS_ES } from "@/data/es/day14-stops";
import { withSpanish, withSpanishByStop } from "@/lib/i18n";

const day14Stops = withSpanishByStop(STOPS_EN, DAY14_STOPS_ES);

// Same as Days 12 and 13: this day's route lives in a Google My Maps map, so it
// can be edited from Google Maps without touching the stop data in the repo.
// Set it to null to hide the map section — DayMapEmbed has no empty state.
const MY_MAPS_ID = "1T3e-vInnrCIrLXUCNVik_BD0njTmi9A";

const TOUR_EN = [
  { time: "07:50", what: "Meet at Kanazawa Station, West Exit group bus stop" },
  { time: "08:00", what: "Bus leaves Kanazawa" },
  { time: "~09:15", what: "Michi-no-Eki Shirakawago (15 min)" },
  { time: "~09:40", what: "Shirakawa-go (Ogimachi): about 2h50 free, lunch included" },
  { time: "~13:15", what: "Gokayama Ainokura: about 1 hour free" },
  { time: "~15:45", what: "Back at Kanazawa Station" },
];

const TOUR_ES = [
  {
    "what": "Quedada en la estación de Kanazawa, parada de buses de grupos de la salida oeste"
  },
  {
    "what": "El bus sale de Kanazawa"
  },
  {
    "what": "Michi-no-Eki Shirakawago (15 min)"
  },
  {
    "what": "Shirakawa-go (Ogimachi): unas 2h50 libres, comida incluida"
  },
  {
    "what": "Gokayama Ainokura: aproximadamente 1 hora libre"
  },
  {
    "what": "De vuelta en la estación de Kanazawa"
  }
];

const TOUR = withSpanish(TOUR_EN, TOUR_ES);

const TOUR_NOTES_EN = [
  "Booked on Viator for 2 adults — the booking is in the Viator app. English-speaking staff on the bus, who hand out walking maps.",
  "Included: the bus and lunch. Not included: Wada House (¥400), the viewpoint shuttle (¥300 each way) and Minka-en (¥800).",
  "Times inside the villages are approximate: the guide gives the meeting time back at the bus — set a phone alarm.",
];

const TOUR_NOTES_ES = [
  "Reservado en Viator para 2 adultos: la reserva está en la app de Viator. En el bus hay personal que habla inglés y reparte mapas para pasear.",
  "Incluido: el bus y la comida. No incluido: la casa Wada (¥400), la lanzadera del mirador (¥300 por trayecto) y Minka-en (¥800).",
  "Los horarios dentro de los pueblos son aproximados: el guía da la hora de vuelta al bus; poned una alarma en el móvil."
];

const TOUR_NOTES = withSpanish(TOUR_NOTES_EN, TOUR_NOTES_ES);

const GOOD_TO_KNOW_EN = [
  "What to bring: yen in cash (the shuttle, the houses and many shops are cash only); warm layers, a rain jacket and shoes that can handle water — it can be cold, and the first snow is possible.",
  "Meeting point: Kanazawa Port (West) Exit, Group Bus Stop — right of the taxi stand, Hyatt Centric side. Not the rotary side and not the East Exit. Be there by 07:50.",
  "Free cancellation until 08:00 on Mon Nov 23 (24 h before). The tour needs good weather: if it's cancelled for weather you get another date or a full refund.",
  "Autumn leaves: Shirakawa-go peaks late Oct–early Nov, so by Nov 24 most leaves are down. Kanazawa (Days 12–13) was the momiji part of this stretch.",
  "Before leaving this morning: ask the Four Points front desk when to send the big suitcases by takkyubin to HOTEL SUI AKASAKA — delivery date Nov 26 (our check-in day).",
  "Tonight: pack for tomorrow — Day 15 leaves Kanazawa on the 9:07 Kagayaki.",
];

const GOOD_TO_KNOW_ES = [
  "Qué llevar: yenes en efectivo (la lanzadera, las casas y muchas tiendas solo aceptan efectivo); capas de abrigo, un chubasquero y calzado que aguante el agua: puede hacer frío y es posible la primera nieve.",
  "Punto de encuentro: salida Kanazawa Port (oeste), Group Bus Stop, a la derecha de la parada de taxis, en el lado del Hyatt Centric. No en el lado de la rotonda ni en la salida este. Estad allí a las 07:50.",
  "Cancelación gratuita hasta las 08:00 del lunes 23 de noviembre (24 h antes). La excursión depende del tiempo: si se cancela por el tiempo, os dan otra fecha o el reembolso completo.",
  "Hojas de otoño: Shirakawa-go está en su mejor momento de finales de octubre a principios de noviembre, así que el 24 de noviembre la mayoría de las hojas ya han caído. Kanazawa (días 12–13) era la parte de momiji de este tramo.",
  "Antes de salir por la mañana: preguntad en la recepción del Four Points cuándo mandar las maletas grandes por takkyubin al HOTEL SUI AKASAKA, con fecha de entrega el 26 de noviembre (nuestro día de check-in).",
  "Esta noche: hacer la maleta para mañana; el Día 15 sale de Kanazawa en el Kagayaki de las 9:07."
];

const GOOD_TO_KNOW = withSpanish(GOOD_TO_KNOW_EN, GOOD_TO_KNOW_ES);

export default function ShirakawaGoItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  A guided bus day trip from Kanazawa
                </span>{" "}
                to two UNESCO gassho villages: Ogimachi in Shirakawa-go, and the
                quieter Ainokura in Gokayama.
              </p>
              <p className="mt-2">
                Late November is past the autumn-leaf peak here (Oct–early Nov), so
                expect bare trees, cold air and maybe the first snow — atmospheric
                rather than colourful. Back in Kanazawa around 15:45 for a quiet
                evening before tomorrow&apos;s 9:07 Kagayaki.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Una excursión guiada en bus desde Kanazawa
                </span>{" "}
                a dos pueblos gassho de la UNESCO: Ogimachi, en Shirakawa-go, y Ainokura,
                en Gokayama, más tranquilo.
              </p>
              <p className="mt-2">
                A finales de noviembre ya ha pasado aquí el mejor momento del otoño
                (octubre–principios de noviembre), así que contad con árboles desnudos,
                aire frío y quizá la primera nieve: más ambiente que color. De vuelta en
                Kanazawa hacia las 15:45 para una tarde tranquila antes del Kagayaki de
                mañana a las 9:07.
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

      <section aria-label="The tour" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="The tour" es="La excursión" />
        </h2>

        <DataTable
          columns={[
            <L key="Time" en="Time" es="Hora" />,
            <L key="What" en="What" es="Qué" />,
          ]}
        >
          {TOUR.map((row) => (
            <tr key={row.time} className="border-b border-line/50 last:border-0">
              <td className="whitespace-nowrap px-4 py-3 font-medium text-momiji">
                {row.time}
              </td>
              <td className="px-4 py-3 text-ink/80">
                <L v={row.what} />
              </td>
            </tr>
          ))}
        </DataTable>
        <BulletList items={TOUR_NOTES} />
      </section>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Itinerary" es="Itinerario" />
        </h2>

        <ol className="relative flex flex-col">
          {day14Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day14Stops.length - 1 && (
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
        <BulletList items={GOOD_TO_KNOW} />
      </section>
    </JapanRouteDayShell>
  );
}
