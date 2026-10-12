import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day14Stops } from "@/data/day14-stops";

// Same as Days 12 and 13: the route will live in a Google My Maps map. Until
// there is one the map section is left out entirely — DayMapEmbed has no empty
// state, and an iframe with no `mid` is a blank box.
const MY_MAPS_ID = null;

const BUSES = [
  {
    leg: "Kanazawa Stn West Exit (stop 4) → Shirakawa-go Bus Terminal",
    dep: "09:10",
    arr: "10:35",
  },
  {
    leg: "Shirakawa-go Bus Terminal → Kanazawa Stn West Exit",
    dep: "15:55",
    arr: "17:20",
  },
];

const GOOD_TO_KNOW = [
  "What to bring: yen in cash (the viewpoint shuttle is cash only and many village shops are too); warm layers, a rain jacket and shoes that can handle water — it can be cold and the first snow is possible; bus e-tickets on the phone, with a screenshot as backup.",
  "Pace: the whole village is walkable and flat except the climb to the viewpoint.",
  "Autumn leaves: Shirakawa-go peaks late Oct–early Nov, so by Nov 24 most leaves are down. Kanazawa (Days 12–13) was the momiji part of this stretch.",
  "Check a few days before: Minka-en winter hours and fee, and whether the viewpoint shuttle is running.",
  "Tonight: pack for tomorrow — Day 15 leaves Kanazawa on the 9:07 Kagayaki.",
];

export default function ShirakawaGoItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            A relaxed day trip to Ogimachi,
          </span>{" "}
          the largest gassho-zukuri village of Shirakawa-go (UNESCO World
          Heritage).
        </p>
        <p className="mt-2">
          Late November is past the autumn-leaf peak here (Oct–early Nov), so
          expect bare trees, cold air and maybe the first snow — atmospheric
          rather than colourful. Back in Kanazawa at 17:20 for a quiet evening
          before tomorrow&apos;s 9:07 Kagayaki.
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

      <section aria-label="Getting there" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Getting there</h2>

        <DataTable
          columns={["Leg", "Bus", "Dep.", "Arr.", "Fare"]}
          minWidth="640px"
        >
          {BUSES.map((row) => (
            <tr key={row.dep} className="border-b border-line/50 last:border-0">
              <td className="px-4 py-3 font-medium text-momiji">{row.leg}</td>
              <td className="px-4 py-3 text-ink/80">
                Nohi / Hokutetsu highway bus
              </td>
              <td className="px-4 py-3 text-ink/80">{row.dep}</td>
              <td className="px-4 py-3 text-ink/80">{row.arr}</td>
              <td className="whitespace-nowrap px-4 py-3 text-ink/80">
                ¥2,800 pp
              </td>
            </tr>
          ))}
        </DataTable>
        <BulletList
          items={[
            "Seat reservation required; each leg is a separate ticket (Japan Bus Online). Show the e-tickets on the phone.",
            "Backups if a bus is full: outbound 8:40 or 9:40; return 15:10.",
          ]}
        />
      </section>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

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
        <h2 className="font-display text-2xl font-semibold">Good to know</h2>
        <BulletList items={GOOD_TO_KNOW} />
      </section>
    </JapanRouteDayShell>
  );
}
