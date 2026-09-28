import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day7Stops } from "@/data/day7-stops";

// TODO: add My Maps mid — the "The route" section and its DayMapEmbed go here,
// between the intro and the Food section, the same as Days 3, 8, 9 and 10.
// Nothing is rendered until the map exists: a placeholder mid only produces an
// iframe that fails to load.

export default function KyotoArrivalItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            Moving day, but not a lost one.
          </span>{" "}
          An early check-out in Osaka, bags dropped at the hotel in Kyoto by
          10:00, and from 10:30 three of the city&apos;s essentials: the Golden
          Pavilion in the north, the maple valley at Tōfuku-ji, and the torii of
          Fushimi Inari climbed up to sunset.
        </p>
        <p className="mt-2">
          The day crosses the city from north to south, so the order matters:
          Kinkaku-ji first, lunch at the station on the way through, Tōfuku-ji
          before it closes at 16:00, and Fushimi Inari last, because it never
          closes and it&apos;s at its best in the dark.
        </p>
      </div>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {day7Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day7Stops.length - 1 && (
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
            Getting from Osaka
          </h3>
          <p className="mt-2">
            Midōsuji Line from Namba to Umeda, JR Special Rapid from Osaka to
            Kyoto (about 30 min), then one stop on the Karasuma Line to Gojō.
            Leave around 9:00, after the worst of the rush hour. At Gojō, only
            Exit 6 has a lift — use it with the suitcases.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            North and back
          </h3>
          <p className="mt-2">
            Kinkaku-ji is the only stop today off the rail network. Going:
            Karasuma Line from Gojō to Kitaōji (~12 min), then bus 204, 205 or
            M1 to Kinkakuji-michi (~10–15 min). Coming back: the same bus to
            Kitaōji and the Karasuma Line down to Kyoto Station (~35 min), which
            is more reliable than the direct bus 205 (~40 min, standing room
            only in autumn). A taxi takes about 25 minutes each way and, split
            between two, is worth it if the buses are full. The ICOCA/Suica card
            works on both the subway and the buses: tap in when you board the
            bus at the back, tap out at the front when you get off.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Bags before check-in
          </h3>
          <p className="mt-2">
            Check-in is at 16:00, but the hotel stores luggage from the morning.
            Ask about early check-in when you drop the bags.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-ochre/50 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-ochre">
            Tōfuku-ji is the pinch point
          </h3>
          <p className="mt-2">
            The bridge closes at 16:00 and entry stops a little earlier. If
            you&apos;re still in the north at 13:30, drop it and go straight to
            Fushimi Inari — Tōfuku-ji is better on an early morning anyway, and
            can move to another day.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Fushimi Inari after dark
          </h3>
          <p className="mt-2">
            The main paths are lit, but carry a charged phone for the darker
            stretches. Coming home: JR Nara Line from Inari to Kyoto (5 min),
            then the Karasuma Line to Gojō.
          </p>
        </div>
      </section>
    </JapanRouteDayShell>
  );
}
