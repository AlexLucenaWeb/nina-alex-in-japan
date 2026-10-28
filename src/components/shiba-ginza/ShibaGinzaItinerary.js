import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day19Stops } from "@/data/day19-stops";

// No route map yet: the My Maps map for the day comes later, and until then
// the section is left out rather than shown empty.
const TRANSPORT = [
  { leg: "Hotel → Zojoji", line: "Walk via Toranomon & Azabudai (or taxi ~10 min)", time: "~30 min" },
  { leg: "Zojoji → Hamarikyu", line: "Walk via Hamamatsucho", time: "~25 min" },
  { leg: "Hamarikyu → Shimbashi → Ginza", line: "Walk", time: "~10 min + ~10 min" },
  { leg: "Ginza → Akihabara", line: "Tokyo Metro Ginza Line (Ginza → Suehirocho)", time: "~10 min" },
  { leg: "Akihabara → Tokyo Station", line: "JR Yamanote Line", time: "~4 min" },
  { leg: "Tokyo → Hotel", line: "Tokyo Metro Marunouchi Line to Kokkai-gijidomae + 7 min walk", time: "~15 min" },
];

export default function ShibaGinzaItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            A Sunday built around car-free streets:
          </span>{" "}
          Zojoji with Tokyo Tower behind it, matcha in the middle of
          Hamarikyu&apos;s pond, Ginza and Akihabara with the cars gone, and
          the golden lights of Marunouchi to finish.
        </p>
        <p className="mt-2">
          A relaxed start on foot from the hotel, Ginza from early afternoon
          and Akihabara before its street reopens at 17:00.
        </p>
      </div>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {day19Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day19Stops.length - 1 && (
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
          All on the IC card, except the optional taxi.
        </p>
      </section>
    </JapanRouteDayShell>
  );
}
