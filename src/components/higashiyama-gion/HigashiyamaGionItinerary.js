import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import RouteMapLoader from "@/components/route-itinerary/RouteMapLoader";
import StopCard from "@/components/route-itinerary/StopCard";
import { HIGASHIYAMA_GION_STOPS } from "@/data/higashiyama-gion-stops";

export default function HigashiyamaGionItinerary() {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            Everything is done on foot:
          </span>{" "}
          about 20–25 minutes end to end, not counting stops. Only{" "}
          <span className="font-semibold">Kennin-ji</span> closes early
          (16:30) — prioritize it if you&apos;re short on time.
        </p>
      </div>

      <section aria-label="Route map" className="flex flex-col gap-3">
        <RouteMapLoader stops={HIGASHIYAMA_GION_STOPS} />
      </section>

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {HIGASHIYAMA_GION_STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < HIGASHIYAMA_GION_STOPS.length - 1 && (
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

      <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
        <h2 className="font-display text-lg font-semibold text-pine">
          Autumn illuminations (November)
        </h2>
        <p className="mt-2">
          In November, Kōdai-ji and Kiyomizu-dera reopen at night for the
          autumn illuminations. If you&apos;re still around at dusk, it&apos;s
          worth going back to either one to see the maples lit up.
        </p>
      </div>
    </JapanRouteDayShell>
  );
}
