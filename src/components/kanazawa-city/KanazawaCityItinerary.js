import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day13Stops as STOPS_EN } from "@/data/day13-stops";
import { DAY13_STOPS_ES } from "@/data/es/day13-stops";
import { withSpanish, withSpanishByStop } from "@/lib/i18n";

const day13Stops = withSpanishByStop(STOPS_EN, DAY13_STOPS_ES);

// Same as Day 12: this day's route lives in a Google My Maps map, so it can be
// edited from Google Maps without touching the stop data in the repo. Set it
// to null to hide the map section — DayMapEmbed has no empty state.
const MY_MAPS_ID = "1Y6eyAQykyiBXSCFjNXkCVRdsfYylSf0";

const GOOD_TO_KNOW_EN = [
  "Nov 23 is a public holiday (Labour Thanksgiving Day): expect crowds everywhere, and only about half of Omicho's stalls open.",
  "Gold leaf workshop booked at Kinpakuya Sakuda main store (1-3-27 Higashiyama), 13:00–14:00. Arrive 5 minutes early. Phone +81 76-251-6777.",
  "Reach Gyokusen-an before 12:00 — the tea service stops 12:00–13:00.",
  "Hosho-ji Café closes at 16:00.",
  "Nomura-ke is cash only, if you go in.",
  "Hokutetsu buses don't accept Suica/ICOCA — tap a contactless card or Apple Pay on boarding and on getting off.",
  "Dinner isn't booked: the small izakaya in Katamachi and Chuo Mishokugai are walk-in, but they fill fast on a holiday — be there by ~17:30.",
  "Sunset is around 16:40.",
  "Tomorrow is the day trip — early night.",
];

const GOOD_TO_KNOW_ES = [
  "El 23 de noviembre es festivo (Día de Acción de Gracias por el Trabajo): contad con gente en todas partes, y en Omicho solo abre más o menos la mitad de los puestos.",
  "Taller de pan de oro reservado en la tienda principal de Kinpakuya Sakuda (1-3-27 Higashiyama), 13:00–14:00. Llegad 5 minutos antes. Teléfono +81 76-251-6777.",
  "Llegad a Gyokusen-an antes de las 12:00: el servicio de té para de 12:00 a 13:00.",
  "El café de Hosho-ji cierra a las 16:00.",
  "Nomura-ke solo acepta efectivo, si entráis.",
  "Los buses de Hokutetsu no aceptan Suica/ICOCA: pasad una tarjeta contactless o Apple Pay al subir y al bajar.",
  "La cena no está reservada: las pequeñas izakayas de Katamachi y Chuo Mishokugai son sin reserva, pero en festivo se llenan rápido; estad allí hacia las ~17:30.",
  "La puesta de sol es hacia las 16:40.",
  "Mañana es la excursión: a dormir pronto."
];

const GOOD_TO_KNOW = withSpanish(GOOD_TO_KNOW_EN, GOOD_TO_KNOW_ES);

export default function KanazawaCityItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Kanazawa by daylight, on foot.
                </span>{" "}
                Kenroku-en first thing, the castle park and a bowl of matcha above
                the Gyokusen-inmaru garden, then grazing lunch at Omicho.
              </p>
              <p className="mt-2">
                After lunch, a gold leaf workshop near Higashi Chaya — the one
                booking of the day — then the samurai lanes of Nagamachi, a tea
                break in a Teramachi temple and the quiet geisha street of Nishi
                Chaya at dusk.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Kanazawa de día, a pie.
                </span>{" "}
                Kenroku-en a primera hora, el parque del castillo y un bol de matcha sobre
                el jardín Gyokusen-inmaru, y después una comida de picoteo en Omicho.
              </p>
              <p className="mt-2">
                Después de comer, un taller de pan de oro cerca de Higashi Chaya (la única
                reserva del día) y luego los callejones samuráis de Nagamachi, un descanso
                con té en un templo de Teramachi y la tranquila calle de geishas de Nishi
                Chaya al anochecer.
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
          {day13Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day13Stops.length - 1 && (
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
