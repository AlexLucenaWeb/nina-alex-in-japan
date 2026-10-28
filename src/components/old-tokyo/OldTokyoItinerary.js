import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day17Stops } from "@/data/day17-stops";

// No route map yet: the My Maps map for the day comes later, and until then
// the section is left out rather than shown empty.
const TRANSPORT = [
  { leg: "Hotel → Asakusa", line: "Tokyo Metro Ginza Line (Tameike-sanno → Asakusa)", time: "~20 min" },
  { leg: "Asakusa → Nippori", line: "Ginza Line to Ueno + JR Yamanote to Nippori", time: "~15 min" },
  { leg: "Yanaka Ginza → Kamachiku → Nezu Shrine", line: "Walk", time: "~25 min" },
  { leg: "Nezu → Komagome", line: "Walk to Todaimae + Namboku Line", time: "~20 min" },
  { leg: "Komagome → Shinjuku", line: "JR Yamanote Line", time: "~15 min" },
  { leg: "Shinjuku → Keio-yomiuri-land", line: "Keio Line + Keio Sagamihara Line (change at Chofu)", time: "~35–40 min" },
  { leg: "Station → Yomiuriland", line: "Sky Shuttle gondola", time: "~5–10 min" },
  { leg: "Yomiuriland → Hotel", line: "Gondola + Keio Line to Shinjuku + Marunouchi Line to Kokkai-gijidomae", time: "~1 h 10 min" },
];

export default function OldTokyoItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            The old side of Tokyo, then a night of lights:
          </span>{" "}
          Senso-ji before the crowds, street snacks on Nakamise, the
          wooden-house lanes of Yanaka, Nezu Shrine&apos;s torii tunnel, the
          momiji at Rikugien as the light goes, and the Jewellumination at
          Yomiuriland after dark.
        </p>
        <p className="mt-2">
          Out of the hotel by ~8:00 so the temple comes before the shops open,
          at Rikugien by 16:00 for the last of the daylight, and back at the
          hotel around 22:00.
        </p>
      </div>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {day17Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day17Stops.length - 1 && (
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
