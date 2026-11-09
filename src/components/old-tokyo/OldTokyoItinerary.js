import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day17Stops } from "@/data/day17-stops";

// Same as Days 13, 14 and 16: this day's route lives in a Google My Maps map,
// so it can be edited from Google Maps without touching the stop data in the
// repo. Set it to null to hide the map section — DayMapEmbed has no empty state.
const MY_MAPS_ID = "1qos6cySEC1jhlvfyvSivXMX6ewAn_fw";

const TRANSPORT = [
  { leg: "Hotel → Asakusa", line: "Tokyo Metro Ginza Line (Tameike-sanno → Asakusa)", time: "~20 min" },
  { leg: "Asakusa → Nippori", line: "Ginza Line to Ueno + JR Yamanote to Nippori", time: "~15 min" },
  { leg: "Yanaka Ginza → Kamachiku → Nezu Shrine", line: "Walk", time: "~25 min" },
  { leg: "Nezu → Komagome", line: "Walk to Todaimae + Namboku Line", time: "~20 min" },
  { leg: "Komagome → Hotel", line: "Namboku Line direct (Komagome → Tameike-sanno)", time: "~20 min" },
  { leg: "Hotel → Yomiuriland (optional)", line: "Marunouchi Line to Shinjuku + Keio Line (change at Chofu) + Sky Shuttle gondola", time: "~1 h" },
  { leg: "Yomiuriland → Hotel (optional)", line: "Gondola + Keio Line to Shinjuku + Marunouchi Line to Kokkai-gijidomae", time: "~1 h 10 min" },
];

const GOOD_TO_KNOW = [
  "Kamachiku: last order 14:00, closed on Mondays, and there's usually a queue — arrive by 12:30. If the queue is too long, eat more snacks in Yanaka Ginza instead.",
  "Rikugien: last entry 16:30, sunset ~16:30 — don't linger in Yanaka.",
  "Long day: rest at the hotel after Rikugien before deciding on the evening.",
  "Yomiuriland (optional): check the official calendar for Nov 27 before going (irregular closed days). Admission ¥1,800 is enough; the gondola is paid separately.",
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
          at Rikugien in the late-afternoon light, then back to the hotel to
          rest. Yomiuriland&apos;s lights are an optional evening trip.
        </p>
      </div>

      {MY_MAPS_ID && (
        <section aria-label="Route map" className="flex flex-col gap-3">
          <h2 className="font-display text-2xl font-semibold">
            <L en="The route" es="La ruta" />
          </h2>

          <div className="overflow-hidden rounded-2xl border-2 border-line bg-card shadow-sm">
            <DayMapEmbed mid={MY_MAPS_ID} />
          </div>

          <a
            href={`https://www.google.com/maps/d/viewer?mid=${MY_MAPS_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start text-sm text-momiji hover:underline"
          >
            <L en="Open in Google Maps" es="Abrir en Google Maps" />
          </a>
        </section>
      )}

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Itinerary" es="Itinerario" />
        </h2>

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
        <h2 className="font-display text-2xl font-semibold">
          <L en="Transport" es="Transporte" />
        </h2>
        <DataTable
          columns={[
            <L key="Leg" en="Leg" es="Tramo" />,
            <L key="Line" en="Line" es="Línea" />,
            <L key="Time" en="Time" es="Tiempo" />,
          ]}
        >
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
          All on the IC card, except the Yomiuriland gondola.
        </p>
      </section>

      <section aria-label="Good to know" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Good to know" es="A tener en cuenta" />
        </h2>
        <BulletList items={GOOD_TO_KNOW} />
      </section>
    </JapanRouteDayShell>
  );
}
