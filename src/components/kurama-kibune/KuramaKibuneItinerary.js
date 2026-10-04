import DayMapEmbed from "@/components/DayMapEmbed";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day11Stops } from "@/data/day11-stops";

// Same as Days 3, 8 and 9: this day's route lives in a Google My Maps map
// instead of the Leaflet component, so it can be edited from Google Maps
// without touching the stop data in the repo.
const MY_MAPS_ID = "1Cgsu9Pi-tnyYAvaJJYKWXfjKP2XW4LY";

const GOOD_TO_KNOW = [
  "Route direction is Kibune → Kurama on purpose: the steep root-step section is climbed, not descended, which is safer if the ground is damp.",
  "The trail goes through Kurama-dera's grounds: it can only be walked while the temple is open (9:00–16:15). Start the crossing by 14:00 at the latest.",
  "Allow 1.5–2 h for the crossing with photos (~6.3 km and 373 m elevation gain for the whole day). Shoes with good grip; keep hands free on the root sections.",
  "No vending machines on the trail: buy water in Kibune.",
  "The momiji tunnel illumination dates change every year: confirm 2026 dates before travelling.",
  "Heavy rain: switch to the rainy-day plan below or swap the day for Ohara (flat, ~1 h by Kyoto Bus). Don't combine Ohara with Kurama/Kibune on the same day.",
];

const RAIN_PLAN = [
  { time: "09:00", what: "Eizan Railway from Demachiyanagi straight to Kurama Station (end of the line, ~30 min)." },
  { time: "09:40", what: "Niōmon gate → Kurama funicular up (about 2 min; small fare on top of the temple entry, runs until ~16:00)." },
  { time: "10:00", what: "Kurama-dera main hall: a few flights of stone steps from the top station; views over the valley." },
  { time: "11:00", what: "Funicular back down." },
  { time: "11:30", what: "Lunch at Yōshūji." },
  { time: "13:00", what: "Kurama Onsen." },
  { time: "15:15", what: "Train one stop to Kibuneguchi → Kyoto Bus 33 to Kibune." },
  { time: "15:45", what: "Kifune-jinja; stay until dusk for the lantern-lit stairs." },
  { time: "~17:00", what: "Bus + train back through the illuminated momiji tunnel. On Saturday expect queues at Kibuneguchi at this hour." },
];

export default function KuramaKibuneItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            One mountain, crossed on foot:
          </span>{" "}
          the Eizan line up to Kibune and its water shrine first thing, then
          the ridge trail — cedar roots, forest halls — over to Kurama-dera and
          down into Kurama on the other side. Lunch, an onsen, and the train
          home from the end of the line.
        </p>
        <p className="mt-2">
          The direction is the point: the steep stretch of root steps is
          climbed, not descended. The trail runs through Kurama-dera&apos;s
          grounds and closes at 16:15, so the mountain happens in the morning,
          and the momiji tunnel comes at dusk on the way back.
        </p>
      </div>

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

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {day11Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day11Stops.length - 1 && (
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

      <section aria-label="If it has rained" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">If it has rained</h2>
        <p className="text-sm leading-relaxed text-ink/80">
          Wet cedar roots and fallen maple leaves make the trail slippery. If it
          rained the day before or that morning, skip the mountain crossing: go
          straight to Kurama, use the funicular for the climb and visit Kibune
          afterwards by train and bus.
        </p>
        <DataTable columns={["Time", "What"]}>
          {RAIN_PLAN.map((row) => (
            <tr key={row.time} className="border-b border-line/50 last:border-0">
              <td className="whitespace-nowrap px-4 py-3 font-medium text-momiji">
                {row.time}
              </td>
              <td className="px-4 py-3 text-ink/80">{row.what}</td>
            </tr>
          ))}
        </DataTable>
      </section>
    </JapanRouteDayShell>
  );
}
