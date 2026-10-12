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
  "Nov 23 is a public holiday (Labour Thanksgiving Day): expect crowds; book dinner and Myoryuji ahead.",
  "Myoryuji requires a phone reservation: +81 76-241-0888 (up to one month ahead; English-speaking staff available).",
  "Nomura-ke is cash only.",
  "Hokutetsu buses don't accept Suica/ICOCA — tap a contactless card or Apple Pay on boarding and on getting off.",
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
          The afternoon heads south-west: the samurai lanes of Nagamachi, the
          quiet street of Nishi Chaya, and the ninja temple to finish — the one
          stop today that has to be booked.
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
