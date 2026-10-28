import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day21Stops } from "@/data/day21-stops";

// No route map yet: the My Maps map for the day comes later, and until then
// the section is left out rather than shown empty.
const TRANSPORT = [
  { leg: "Hotel → Nishi-Nippori", line: "Tokyo Metro Chiyoda Line (Akasaka → Nishi-Nippori)", time: "~22 min" },
  { leg: "Nishi-Nippori → Nippori", line: "JR Yamanote Line (1 stop)", time: "~2 min" },
  { leg: "Nippori → Keisei-Narita", line: "Keisei Main Line, Limited Express", time: "~60 min" },
  { leg: "Keisei-Narita → Narita Airport", line: "Keisei Line", time: "~10 min" },
];

export default function FarewellNaritaItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            One last temple morning on the way to the airport:
          </span>{" "}
          Naritasan Shinsho-ji and its autumn park, and grilled eel on
          Narita&apos;s old shopping street, just 10 minutes from the
          terminals.
        </p>
        <p className="mt-2">
          Check out at 9:00 with the luggage, leave it in the lockers at
          Keisei-Narita, and be at the airport by 13:25 for the 16:55 flight
          home.
        </p>
      </div>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {day21Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day21Stops.length - 1 && (
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

      <section aria-label="Transport" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Transport</h2>
        <DataTable columns={["Leg", "Line", "Time"]}>
          {TRANSPORT.map((row) => (
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
          All on the IC card, including the Keisei Limited Express (no seat
          reservation needed).
        </p>
      </section>
    </JapanRouteDayShell>
  );
}
