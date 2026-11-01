import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { OSAKA_KITA_STOPS } from "@/data/osaka-kita-stops";

// Same as Day 3 and Day 4: this day's route lives in a Google My Maps map
// instead of the Leaflet component, so it can be edited from Google Maps
// without touching the stop data in the repo.
const MY_MAPS_ID = "12hCMy2AWKi0KCxbBwTQ4fwouzRqWSSo";

const TRANSPORT = [
  { leg: "Hotel → Osaka Castle", line: "Sakaisuji Line (Ebisucho → Sakaisuji-Hommachi) + Chuo Line to Tanimachi 4-chome", time: "~20–25 min" },
  { leg: "Castle → OAP", line: "Aqua-liner (12:00), covered by the pass", time: "~40 min" },
  { leg: "OAP → Nakanoshima", line: "Walk along the river", time: "~20 min" },
  { leg: "Nakanoshima → Umeda Sky Building", line: "Walk, or Midosuji Line (Yodoyabashi → Umeda) + ~10 min walk", time: "~30 min" },
  { leg: "Umeda → Osaka Tenmangu", line: "Tanimachi Line (Higashi-Umeda → Minami-morimachi, 2 stops) + short walk", time: "~15 min" },
  { leg: "Tenjinbashisuji → Lucua", line: "Tanimachi Line (Minami-morimachi → Higashi-Umeda) + walk to Osaka Station", time: "~15 min" },
  { leg: "Lucua → Hareruya (optional)", line: "Walk", time: "a few min" },
  { leg: "Umeda → Hotel", line: "Midosuji Line to Dobutsuen-mae + Sakaisuji Line 1 stop to Ebisucho (or ~10 min walk)", time: "~25 min" },
];

export default function OsakaKitaItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            East to north, all on one pass:
          </span>{" "}
          a long morning at the castle, the river as transport across to
          Nakanoshima, the view and then lunch at Umeda, the shrine and the
          arcade at Tenjinbashi, and the evening back in Umeda. Architecture,
          a boat, a rooftop, a shrine and characters — the most varied day of
          the trip.
        </p>
        <p className="mt-2">
          One thing fixes the whole schedule:{" "}
          <span className="font-semibold">
            the Umeda Sky Building is only free on the pass before 15:00
          </span>
          . That is why the observatory is at 14:00 and lunch comes after it, at
          14:45, in the basement of the same building — it is the one time on
          this day worth protecting.
        </p>
      </div>

      <section
        aria-label="Osaka Amazing Pass"
        className="flex flex-col gap-3 rounded-2xl border-2 border-ochre/60 bg-card px-4 py-4"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ochre">
            Buy this before you start
          </p>
          <h2 className="font-display text-2xl font-semibold">
            Osaka Amazing Pass · ¥3,500
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink/70">
            The one day of the trip where the pass clearly pays for itself. It
            is a digital pass now — bought online and shown from your phone,
            not a magnetic card picked up at a metro window — so sort it out
            the night before rather than at 09:00 on the way to the castle.
          </p>
        </div>

        <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-ink/80">
          <li className="flex justify-between gap-4 border-b border-line/60 pb-1.5">
            <span>Osaka Castle keep</span>
            <span className="shrink-0 font-medium">¥1,200</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-line/60 pb-1.5">
            <span>Aqua-liner river cruise</span>
            <span className="shrink-0 font-medium">¥1,700</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-line/60 pb-1.5">
            <span>
              Umeda Sky Building observatory{" "}
              <span className="text-ink/50">(before 15:00 only)</span>
            </span>
            <span className="shrink-0 font-medium">¥2,000</span>
          </li>
          <li className="flex justify-between gap-4 border-b border-line/60 pb-1.5">
            <span>Unlimited metro all day</span>
            <span className="shrink-0 font-medium">¥600–700</span>
          </li>
          <li className="flex justify-between gap-4 pt-1 font-semibold text-momiji">
            <span>Saved per person</span>
            <span className="shrink-0">~¥2,000+</span>
          </li>
        </ul>

        <p className="text-sm leading-relaxed text-ink/70">
          Paid separately, today comes to about ¥5,500–5,600 a head, so the
          ¥3,500 pass is worth it comfortably. After 15:00 the Sky Building
          drops from free to a 10% discount, which is most of the saving gone —
          so the pass and the running order stand or fall together.
        </p>
      </section>

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
          {OSAKA_KITA_STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < OSAKA_KITA_STOPS.length - 1 && (
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
          All metro legs are covered by the Amazing Pass.
        </p>
      </section>

      <section aria-label="Good to know" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Good to know</h2>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            The cruise is not the full loop
          </h3>
          <p className="mt-2">
            We are not doing the 55-minute round trip. We get off at OAP Pier
            after about 40 minutes from the castle, which is the prettiest
            stretch of the river and puts us a 20-minute walk from Nakanoshima
            instead of back where we started. Covered by the Amazing Pass either
            way — and the OAP stop only runs at weekends, which this Sunday
            is.
          </p>
        </div>
      </section>
    </JapanRouteDayShell>
  );
}
