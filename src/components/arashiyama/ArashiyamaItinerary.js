import BulletList from "@/components/BulletList";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day9Stops } from "@/data/day9-stops";

// Same as Days 3 and 8: this day's route lives in a Google My Maps map
// instead of the Leaflet component, so it can be edited from Google Maps
// without touching the stop data in the repo.
const MY_MAPS_ID = "1UcddyqIGpQ24rgqWgO6gIm0xEL1Ouko";

// Eikandō's illumination only starts on 20 November, so tonight is a choice
// between these instead.
const EVENING_OPTIONS = [
  "A) Tō-ji illumination: the lit five-storey pagoda and maples, ~15 min walk from Kyoto Station — the closest option to the hotel. Karasuma Line from Gojō to Kyoto Station, then walk. Check hours and price on the day.",
  "B) NAKED meets Nijo Castle 2026: projection mapping and illumination, 18:00–22:00 (last entry 21:00), running Oct 23–Dec 5. Advance online booking required; tickets from ~¥2,000. Karasuma Line from Gojō to Karasuma Oike, then the Tōzai Line to Nijōjō-mae.",
  "C) Pontochō dinner: the lantern-lit alley of restaurants by the Kamo River. Some places are tourist traps — check the menu and prices posted at the door. Back to the hotel: ~10 min by taxi, or the Karasuma Line from Shijō to Gojō.",
  "D) Rest: an early dinner near the hotel after a long walking day.",
];

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
          {day9Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day9Stops.length - 1 && (
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
            Sagano Line to Saga-Arashiyama (about 15 min), then a ~15 min walk.
            Leave the hotel at 7:15 to be in the bamboo grove by 8:00. The
            ICOCA/Suica card works all the way.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Sagano Romantic Train (optional)
          </h3>
          <p className="mt-2">
            A slow sightseeing train through the Hozu river gorge, about 25
            minutes one way from Torokko Saga (next to JR Saga-Arashiyama) to
            Kameoka. If you add it, it replaces the Monkey Park in the
            afternoon. It doesn&apos;t run on Wednesdays.
          </p>
          <p className="mt-2 font-semibold text-ochre">
            Seats for Nov 19 are currently sold out online. How to try:
          </p>
          <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
            <li>
              Check the official site (sagano-kanko.co.jp/en → &quot;Reserve
              tickets here&quot;) for cancellations. Cancellation is free until
              23:59 the day before, so seats free up late — check again on the
              evenings of Nov 17–18.
            </li>
            <li>
              Third-party sellers (Klook, Pelago) sometimes still have seats;
              some are non-refundable.
            </li>
            <li>
              Same-day tickets are sold first-come at Torokko Saga station even
              when online shows full — cash or IC card only. Ask first thing in
              the morning.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Hozugawa River Boat Ride (optional)
          </h3>
          <p className="mt-2">
            保津川下り — about 2 hours in a traditional wooden boat from Kameoka
            down the gorge to Arashiyama, ending near Togetsukyō. The classic
            combination is the Sagano train out to Kameoka and the boat back.
            An alternative to the train, or the second half of it. Not booked.
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

      </section>

      <section aria-label="Evening options" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          Evening options (choose one)
        </h2>
        <p className="text-sm leading-relaxed text-ink/70">
          After the Monkey Park, head back to the hotel to rest first.
          Eikandō&apos;s illumination only starts on Nov 20, so it isn&apos;t
          an option tonight.
        </p>
        <BulletList items={EVENING_OPTIONS} />
      </section>
    </JapanRouteDayShell>
  );
}
