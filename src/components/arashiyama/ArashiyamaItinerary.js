import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day10Stops } from "@/data/day10-stops";

// TODO: add My Maps mid — the "The route" section and its DayMapEmbed go here,
// between the intro and the Food section, the same as Days 3, 8 and 9.
// Nothing is rendered until the map exists: a placeholder mid only produces an
// iframe that fails to load.

export default function ArashiyamaItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            Kyoto&apos;s western edge,
          </span>{" "}
          where the city runs out against the mountains: the bamboo grove, a
          Zen garden that borrows the hills behind it, and the bridge over the
          Katsura River with the whole slope of maples above it. It&apos;s the
          most visited corner of Kyoto — which is exactly why the day starts at
          8:00.
        </p>
        <p className="mt-2">
          The plan is to see the famous part first and then climb away from it.
          The bamboo grove before the crowds, then up into the quiet gardens of
          Sagano, back down to Tenryū-ji, and the river in the afternoon, when
          the crowds are everywhere anyway.
        </p>
      </div>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {day10Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day10Stops.length - 1 && (
                <span
                  aria-hidden="true"
                  className="stop-connector absolute bottom-0 left-5 top-10 -translate-x-1/2"
                />
              )}
              <span
                className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-momiji bg-card font-display font-semibold text-momiji ${
                  stop.optional ? "border-dashed text-xs" : "text-sm"
                }`}
              >
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
            Getting there
          </h3>
          <p className="mt-2">
            Karasuma Line from Gojō to Kyoto Station (one stop), then the JR
            Sagano Line to Saga-Arashiyama (about 15 min). Leave the hotel
            around 7:30 to be in the bamboo grove by 8:00. The ICOCA/Suica card
            works all the way.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Why the order
          </h3>
          <p className="mt-2">
            The grove is only quiet before about 8:30. Ōkōchi Sansō and
            Jōjakkō-ji open at 9:00 and stay calm all day, because most people
            turn back at the end of the bamboo path. Tenryū-ji and the river
            come last, when the crowds are everywhere anyway.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Sagano Romantic Train (optional)
          </h3>
          <p className="mt-2">
            A slow sightseeing train through the Hozu river gorge, about 25
            minutes one way from Torokko Saga (next to JR Saga-Arashiyama) to
            Kameoka, and back to Kyoto on the JR line. Seats need booking and
            sell out in autumn. If you add it, it replaces the Monkey Park in
            the afternoon. It doesn&apos;t run on Wednesdays.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Saga-Toriimoto (optional)
          </h3>
          <p className="mt-2">
            A preserved street of old thatched and wooden houses about 20
            minutes&apos; walk north of Jōjakkō-ji. Quiet and pretty, and worth
            it only if you have energy to spare.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Getting home
          </h3>
          <p className="mt-2">
            JR Sagano Line from Saga-Arashiyama back to Kyoto Station, then the
            Karasuma Line to Gojō.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Evening extra
          </h3>
          <p className="mt-2">
            After the Monkey Park, head back to the hotel to rest. If you feel
            like going out again: Karasuma Line from Gojō to Karasuma Oike,
            then the Tōzai Line to Keage (about 20 min), and a 15-minute walk
            to Eikandō. The Philosopher&apos;s Path isn&apos;t lit, so don&apos;t
            plan to walk it in the dark. Getting back from Pontochō: about 10
            minutes by taxi to the hotel, or the Karasuma Line from Shijō to
            Gojō.
          </p>
        </div>
      </section>
    </JapanRouteDayShell>
  );
}
