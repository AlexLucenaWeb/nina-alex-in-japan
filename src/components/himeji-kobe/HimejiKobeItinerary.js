import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import {
  HIMEJI_KOBE_STOPS,
  HIMEJI_KOBE_TRAINS,
  HIMEJI_KOBE_COST_NOTE,
} from "@/data/himeji-kobe-stops";

// As on Days 3 and 4, the route lives in a Google My Maps map so it can be
// edited from Google Maps without touching the repo.
const MY_MAPS_ID = "1OlDXc-HMyxnRVYUN-GS37j44hfZ6s0A";

export default function HimejiKobeItinerary() {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            Two cities in one day:
          </span>{" "}
          Himeji in the morning for the castle and its garden, then the train
          east to Kobe for the afternoon. Each half is walkable end to end —
          the only travelling is the three train legs below.
        </p>
        <p className="mt-2">
          The one time that matters is the start. Everything after the castle
          has slack in it.
        </p>
      </div>

      <section aria-label="Getting there and back" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">The trains</h2>

        <DataTable
          columns={["Leg", "Train", "Duration", "Price/person", "Notes"]}
          minWidth={680}
        >
          {HIMEJI_KOBE_TRAINS.map((row) => (
            <tr key={row.leg} className="border-b border-line/50 last:border-0">
              <td className="px-4 py-3 font-medium">{row.leg}</td>
              <td className="px-4 py-3 text-ink/80">{row.train}</td>
              <td className="px-4 py-3 text-momiji">{row.duration}</td>
              <td className="px-4 py-3 text-ink/80">{row.price}</td>
              <td className="px-4 py-3 text-ink/70">{row.note}</td>
            </tr>
          ))}
        </DataTable>

        <p className="text-sm text-ink/60">{HIMEJI_KOBE_COST_NOTE}</p>

        <div className="rounded-2xl border-2 border-ochre/50 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-ochre">
            Leave Osaka around 08:00
          </h3>
          <p className="mt-2">
            It puts you at the castle for the 9:00 opening, which is the
            difference between walking in and queuing for tickets. The keep is
            the one part of the day that gets genuinely busy, and it is the
            first thing you do.
          </p>
        </div>
      </section>

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

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

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
        <h2 className="font-display text-2xl font-semibold">Good to know</h2>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Buy the combined ticket
          </h3>
          <p className="mt-2">
            At the castle gate, ¥2,600 covers both the keep and Koko-en next
            door — ¥500 less than paying separately, and Koko-en is a five
            minute walk from the exit. Under-18s get into the castle free.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Eating along the way
          </h3>
          <p className="mt-2">
            Lunch is on Miyuki-dori before the train: Himeji oden in its
            soy-ginger broth, or anago-don. In Kobe, Nankinmachi is street food
            — butaman, Kobe-beef croquettes, skewers — and it&apos;s at its
            liveliest on a Sunday like this one. Save room for dinner.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-momiji">
            End at the water for sunset
          </h3>
          <p className="mt-2">
            Sunset is around 17:00 in November and the route reaches Meriken
            Park at 16:45 — the port lights come on while you&apos;re there.
            Kobe beef for dinner afterwards is the obvious close to the day;
            the good places take bookings, so make one before you travel.
          </p>
        </div>
      </section>
    </JapanRouteDayShell>
  );
}
