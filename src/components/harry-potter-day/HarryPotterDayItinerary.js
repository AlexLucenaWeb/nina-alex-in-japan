import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day20Stops } from "@/data/day20-stops";

// No route map yet: the My Maps map for the day comes later, and until then
// the section is left out rather than shown empty.
const TRANSPORT = [
  { leg: "Hotel → Tsukiji", line: "Chiyoda Line to Hibiya + Hibiya Line to Tsukiji", time: "~20 min" },
  { leg: "Tsukiji-shijo → Toshimaen", line: "Toei Oedo Line (direct, bound for Hikarigaoka)", time: "~40–45 min" },
  { leg: "Toshimaen → Takadanobaba", line: "Seibu Toshima + Seibu Ikebukuro Line to Ikebukuro, JR Yamanote to Takadanobaba", time: "~30 min" },
  { leg: "Takadanobaba → Hotel", line: "Tozai Line to Iidabashi + Namboku Line to Tameike-sanno", time: "~30 min" },
];

export default function HarryPotterDayItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            The last full day in Tokyo:
          </span>{" "}
          a seafood breakfast at Tsukiji Outer Market, a few hours inside the
          real sets of the Harry Potter films, and Magic cards at Hareruya.
        </p>
        <p className="mt-2">
          Out of the hotel by ~7:30 so Tsukiji fits before the Studio Tour
          entry, and back at the hotel around 18:30 for a quiet dinner and
          packing.
        </p>
      </div>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {day20Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day20Stops.length - 1 && (
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
          All on the IC card.
        </p>
      </section>
    </JapanRouteDayShell>
  );
}
