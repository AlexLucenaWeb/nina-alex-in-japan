import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import {
  UNIVERSAL_STUDIOS_NOTES,
  UNIVERSAL_STUDIOS_RIDES,
  UNIVERSAL_STUDIOS_STOPS,
  UNIVERSAL_STUDIOS_TRANSPORT,
} from "@/data/universal-studios-stops";

// No map on this day, unlike the other route days: everything happens inside
// one place, and USJ's own app has the park map with live waiting times on it.
export default function UniversalStudiosItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            The only day that has to be organised in advance:
          </span>{" "}
          the park rewards being early and punishes improvising. The times below
          assume the gates open at 09:00 — check the actual opening time for 16
          November in the app, because USJ moves it around by season and by day.
        </p>
      </div>

      <section aria-label="Tickets" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Tickets</h2>
        <BulletList items={UNIVERSAL_STUDIOS_NOTES} />
      </section>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {UNIVERSAL_STUDIOS_STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < UNIVERSAL_STUDIOS_STOPS.length - 1 && (
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

      <section aria-label="Who rides what" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Who rides what</h2>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-semibold text-pine">
            Together — gentle, no big drops
          </h3>
          <BulletList items={UNIVERSAL_STUDIOS_RIDES.together} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-semibold text-momiji">
            Alex only — Single Rider line
          </h3>
          <p className="text-sm leading-relaxed text-ink/70">
            Check in the app that single rider is running that day.
          </p>
          <BulletList items={UNIVERSAL_STUDIOS_RIDES.alexOnly} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-semibold text-ochre">
            Skip together
          </h3>
          <BulletList items={UNIVERSAL_STUDIOS_RIDES.skip} />
        </div>
      </section>

      <section aria-label="Transport" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Transport</h2>
        <DataTable columns={["Leg", "Line", "Time"]}>
          {UNIVERSAL_STUDIOS_TRANSPORT.map((row) => (
            <tr key={row.leg} className="border-b border-line/50 last:border-0">
              <td className="px-4 py-3 font-medium text-momiji">{row.leg}</td>
              <td className="px-4 py-3 text-ink/80">{row.line}</td>
              <td className="whitespace-nowrap px-4 py-3 text-ink/80">
                {row.time}
              </td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm leading-relaxed text-ink/80">
          ~40 min door to door, all on Suica (Apple Wallet).
        </p>
      </section>
    </JapanRouteDayShell>
  );
}
