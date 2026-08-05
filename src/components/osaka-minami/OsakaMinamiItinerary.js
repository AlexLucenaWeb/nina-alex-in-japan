import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import RouteMapLoader from "@/components/route-itinerary/RouteMapLoader";
import StopCard from "@/components/route-itinerary/StopCard";
import { OSAKA_MINAMI_STOPS } from "@/data/osaka-minami-stops";

export default function OsakaMinamiItinerary() {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            Everything is done on foot:
          </span>{" "}
          about 2.5 km total, 5–15 minutes between stops. It&apos;s an
          easy-going day by design — a soft landing for the jet lag. The
          order is flexible, except for one thing:{" "}
          <span className="font-semibold">Dotonbori has to be at night</span>.
        </p>
        <p className="mt-2">
          Feeling like electronics or anime shopping? Den Den Town slots in
          neatly as a detour between stops 2 and 3.
        </p>
      </div>

      <section aria-label="Route map" className="flex flex-col gap-3">
        <RouteMapLoader stops={OSAKA_MINAMI_STOPS} />
      </section>

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {OSAKA_MINAMI_STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < OSAKA_MINAMI_STOPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-5 top-10 border-l border-dashed border-line"
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

      <div className="rounded-2xl border border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
        <h2 className="font-display text-lg font-semibold text-pine">
          Dinner in Dotonbori
        </h2>
        <p className="mt-2">
          Okonomiyaki at <span className="font-semibold">Ajinoya</span> or{" "}
          <span className="font-semibold">Fugetsu</span>, butaman (pork
          buns) from <span className="font-semibold">551 Horai</span>, and
          cheesecake from <span className="font-semibold">Rikuro</span> — all
          within a short walk of the canal.
        </p>
      </div>
    </JapanRouteDayShell>
  );
}
