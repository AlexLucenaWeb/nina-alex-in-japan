import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { OSAKA_KITA_STOPS } from "@/data/osaka-kita-stops";

// Same as Day 3 and Day 4: this day's route lives in a Google My Maps map
// instead of the Leaflet component, so it can be edited from Google Maps
// without touching the stop data in the repo.
//
// TODO: paste the mid here once the My Maps layer exists. Until then the map
// section is skipped rather than embedding a broken iframe.
const MY_MAPS_ID = null;

export default function OsakaKitaItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            East to north, then south to finish:
          </span>{" "}
          the castle first thing, the river as transport across to Nakanoshima,
          Umeda for lunch and the view, and then back down to Nipponbashi to
          close the day. Architecture, a boat, a rooftop, a shrine and Magic —
          the most varied day of the trip.
        </p>
        <p className="mt-2">
          One thing fixes the whole schedule:{" "}
          <span className="font-semibold">
            the Umeda Sky Building is only free on the pass before 15:00
          </span>
          . That is why lunch is at 12:45 and the observatory at 13:30, and it
          is the one time on this day worth protecting.
        </p>
      </div>

      <section
        aria-label="Osaka Amazing Pass"
        className="flex flex-col gap-3 rounded-2xl border-2 border-ochre/60 bg-card px-4 py-4"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ochre">
            Buy this before you start
          </p>
          <h2 className="font-display text-2xl font-semibold">
            Osaka Amazing Pass · ¥3,300
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink/70">
            The one day of the trip where the pass clearly pays for itself. It
            is a digital pass now — bought online and shown from your phone,
            not a magnetic card picked up at a metro window — so sort it out
            the night before rather than at 09:00 on the way to the castle.
          </p>
        </div>

        <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-ink/80">
          <li className="flex justify-between gap-4 border-b border-line/60 pb-1.5">
            <span>Osaka Castle keep</span>
            <span className="shrink-0 font-medium">¥1,200</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-line/60 pb-1.5">
            <span>Aqua-liner river cruise</span>
            <span className="shrink-0 font-medium">¥1,700</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-line/60 pb-1.5">
            <span>
              Umeda Sky Building observatory{" "}
              <span className="text-ink/50">(before 15:00 only)</span>
            </span>
            <span className="shrink-0 font-medium">¥2,000</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-line/60 pb-1.5">
            <span>Unlimited metro all day</span>
            <span className="shrink-0 font-medium">¥820–1,060</span>
          </li>
          <li className="flex justify-between gap-4 pt-1 font-semibold text-momiji">
            <span>Saved per person</span>
            <span className="shrink-0">~¥2,400</span>
          </li>
        </ul>

        <p className="text-sm leading-relaxed text-ink/70">
          Paid separately, today comes to about ¥5,700 a head. After 15:00 the
          Sky Building drops from free to a 10% discount, which is most of the
          saving gone — so the pass and the running order stand or fall
          together.
        </p>
      </section>

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
          {OSAKA_KITA_STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < OSAKA_KITA_STOPS.length - 1 && (
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

      <section aria-label="Ending the day" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          Ending the day &amp; good to know
        </h2>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            No rush at Hareruya
          </h3>
          <p className="mt-2">
            It stays open until 23:00 at the weekend, so it is the one stop on
            this trip with no closing time pressing on it. Arriving at 16:15
            leaves the whole evening — stay as long as the singles boxes hold
            out.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Dinner is already next door
          </h3>
          <p className="mt-2">
            Walking out of Hareruya puts you in Nipponbashi, five minutes from
            Dotonbori — okonomiyaki at Ajinoya or Fugetsu, same as Day 3. If
            you would rather have another round of kushikatsu, Shinsekai is two
            stops down the Sakaisuji Line and open late.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-ochre/50 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-ochre">
            Going without the pass changes the day
          </h3>
          <p className="mt-2">
            The three paid stops come to ¥4,900 a head on their own, close to
            ¥5,700 once the metro is in. If you decide against the pass, it is
            worth dropping one of them rather than paying full price for all
            three — and the observatory is the one that stops being urgent,
            since without the pass there is no reason to be up there before
            15:00 rather than at sunset.
          </p>
        </div>
      </section>
    </JapanRouteDayShell>
  );
}
