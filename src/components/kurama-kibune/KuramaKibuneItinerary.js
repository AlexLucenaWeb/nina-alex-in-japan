import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day11Stops } from "@/data/day11-stops";

// TODO: add My Maps mid — the "The route" section and its DayMapEmbed go here,
// between the intro and the Food section, the same as Days 3, 8 and 9.
// Nothing is rendered until the map exists: a placeholder mid only produces an
// iframe that fails to load.

export default function KuramaKibuneItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            One mountain, crossed on foot:
          </span>{" "}
          the Eizan line up to Kurama, the climb past Yuki-jinja to the temple,
          and then the ridge trail — cedar roots, forest halls — down into the
          Kibune valley on the other side. The walking is the day.
        </p>
        <p className="mt-2">
          It has to happen in the morning: the trail runs through Kurama-dera&apos;s
          grounds and closes at 16:15. Everything lit up comes at the end on
          purpose — the Kifune lanterns and the momiji tunnel are worth waiting
          for the dark, and the trail isn&apos;t.
        </p>
      </div>

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

        <div className="rounded-2xl border-2 border-ochre/50 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-ochre">
            The trail closes at 16:15
          </h3>
          <p className="mt-2">
            The crossing runs through Kurama-dera&apos;s grounds — the ¥500
            temple entry covers it — and the Kinone-michi section shuts at
            16:15. That is what fixes the shape of the day: the mountain in the
            morning, everything else after it. There is no afternoon version of
            this route.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-ochre/50 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-ochre">
            Do the crossing in daylight
          </h3>
          <p className="mt-2">
            The trail has no lighting at all, which is the other half of the
            same rule: walk it in the middle of the day, and save the
            illuminated parts — the Kifune lanterns, the momiji tunnel — for
            the end.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Kurama first, on purpose
          </h3>
          <p className="mt-2">
            About 1h–1h15 over forest trail and stone steps. Going in this
            direction puts you up the gentler side and down into Kibune, rather
            than the other way round. Moderate rather than hard, but it is a
            mountain crossing: comfortable walking shoes are required, not
            advisable.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Getting down to the station
          </h3>
          <p className="mt-2">
            Kifune-jinja to Kibuneguchi Station is 25–30 minutes on foot along
            the stream, downhill the whole way, or a short ride on Kyoto Bus
            33 if the legs have had enough by then.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-momiji">
            Confirm the 2026 illumination dates
          </h3>
          <p className="mt-2">
            The Eizan Railway momiji tunnel illumination and the Kifune Momiji
            Lantern festival both run roughly from early to late November, but
            the exact dates are set year by year. Check them before travelling
            — they are the reason this day ends after dark.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            The Kirara train needs no booking
          </h3>
          <p className="mt-2">
            No reservation, no seat to buy: tap in with an IC card (ICOCA,
            Suica or Pasmo) and board. The panorama carriages have seats facing
            the windows, and the driver dims the lights for the 250 m of lit
            maples between Ichihara and Ninose.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Kurama Onsen, at a price
          </h3>
          <p className="mt-2">
            An open-air rotenburo near Kurama station, looking into the
            mountains. It only fits if you drop or shorten something else —
            the trail has to be done before it closes, so the onsen competes
            with the mountain rather than following it.
          </p>
        </div>
      </section>
    </JapanRouteDayShell>
  );
}
