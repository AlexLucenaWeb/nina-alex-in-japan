import BulletList from "@/components/BulletList";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day13Stops } from "@/data/day13-stops";

// Same as Day 12: the route will live in a Google My Maps map. Until there is
// one the map section is left out entirely — DayMapEmbed has no empty state,
// and an iframe with no `mid` is a blank box.
const MY_MAPS_ID = null;

const GOOD_TO_KNOW = [
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

export default function KanazawaCityItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
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
      </div>

      {MY_MAPS_ID && (
        <section aria-label="Route map" className="flex flex-col gap-3">
          <h2 className="font-display text-2xl font-semibold">The route</h2>

          <div className="overflow-hidden rounded-2xl border-2 border-line bg-card shadow-sm">
            <DayMapEmbed mid={MY_MAPS_ID} />
          </div>

          <a
            href={`https://www.google.com/maps/d/viewer?mid=${MY_MAPS_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start text-sm text-momiji hover:underline"
          >
            Open in Google Maps
          </a>
        </section>
      )}

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

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
        <h2 className="font-display text-2xl font-semibold">Good to know</h2>
        <BulletList items={GOOD_TO_KNOW} />
      </section>
    </JapanRouteDayShell>
  );
}
