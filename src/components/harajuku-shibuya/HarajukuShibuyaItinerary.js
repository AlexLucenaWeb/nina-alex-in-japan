import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day18Stops } from "@/data/day18-stops";

// No route map yet: the My Maps map for the day comes later, and until then
// the section is left out rather than shown empty.
const TRANSPORT = [
  { leg: "Hotel → Meiji-jingumae", line: "Tokyo Metro Chiyoda Line (Akasaka → Meiji-jingumae)", time: "~10 min" },
  { leg: "Meiji Jingu → Takeshita → Omotesando → Gyoza Lou", line: "Walk", time: "~25 min total" },
  { leg: "Omotesando → Ginkgo Avenue", line: "Walk along Aoyama-dori (or Ginza Line to Gaienmae)", time: "~15 min" },
  { leg: "Gaienmae → Shibuya", line: "Tokyo Metro Ginza Line", time: "~5 min" },
  { leg: "Shibuya → Hotel", line: "Tokyo Metro Ginza Line to Tameike-sanno + 7 min walk", time: "~20 min" },
  { leg: "Hotel → Shinjuku", line: "Tokyo Metro Marunouchi Line from Kokkai-gijidomae", time: "~25 min" },
  { leg: "Shinjuku → Hotel", line: "Tokyo Metro Marunouchi Line to Kokkai-gijidomae + 7 min walk", time: "~25 min" },
];

const GOOD_TO_KNOW = [
  "Shibuya Sky: book the 15:20–15:40 entry slot as soon as the date opens (midnight Japan time = 16:00 in Madrid) — weekend sunset slots sell out. Web price after 15:00: ¥3,400. If the official site rejects the card, book on Klook (free cancellation up to 24 h before).",
  "Meiji Jingu closes at sunset (~16:10 in November) — that's why it's first.",
  "Harajuku Gyoza Lou is cash only; expect a queue on Saturdays.",
  "Shibuya Sky's open-air rooftop closes in rain or strong wind — see Plan B.",
];

const PLAN_B = [
  "Rain or strong wind: the rooftop may close, but Shibuya Sky's indoor 46th-floor gallery usually stays open. Free alternative with a view: the Tokyo Metropolitan Government Building observatory in Shinjuku (indoor), on the way to the evening.",
  "Ginkgo avenue in the rain: still beautiful — just keep it shorter and spend more time at the festival stalls under cover.",
];

export default function HarajukuShibuyaItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            West Tokyo from morning to night:
          </span>{" "}
          Meiji Jingu&apos;s forest at opening time, Harajuku and Omotesando,
          the golden ginkgo avenue, sunset from Shibuya Sky, then cats and
          yakitori in Shinjuku.
        </p>
        <p className="mt-2">
          Out of the hotel by ~8:00 to beat the Saturday crowds at the shrine,
          up on Shibuya Sky by 15:30 for daylight, sunset and the city lights
          in one go, then a rest at the hotel before cats and yakitori in
          Shinjuku.
        </p>
      </div>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {day18Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day18Stops.length - 1 && (
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

      <section aria-label="Good to know" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Good to know</h2>
        <BulletList items={GOOD_TO_KNOW} />
      </section>

      <section aria-label="Plan B" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Plan B</h2>
        <BulletList items={PLAN_B} />
      </section>
    </JapanRouteDayShell>
  );
}
