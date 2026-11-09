import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day14Stops } from "@/data/day14-stops";

// Same as Days 12 and 13: this day's route lives in a Google My Maps map, so it
// can be edited from Google Maps without touching the stop data in the repo.
// Set it to null to hide the map section — DayMapEmbed has no empty state.
const MY_MAPS_ID = "1T3e-vInnrCIrLXUCNVik_BD0njTmi9A";

const TOUR = [
  { time: "07:50", what: "Meet at Kanazawa Station, West Exit group bus stop" },
  { time: "08:00", what: "Bus leaves Kanazawa" },
  { time: "~09:15", what: "Michi-no-Eki Shirakawago (15 min)" },
  { time: "~09:40", what: "Shirakawa-go (Ogimachi): about 2h50 free, lunch included" },
  { time: "~13:15", what: "Gokayama Ainokura: about 1 hour free" },
  { time: "~15:45", what: "Back at Kanazawa Station" },
];

const TOUR_NOTES = [
  "Booked on Viator for 2 adults — the booking is in the Viator app. English-speaking staff on the bus, who hand out walking maps.",
  "Included: the bus and lunch. Not included: Wada House (¥400), the viewpoint shuttle (¥300 each way) and Minka-en (¥800).",
  "Times inside the villages are approximate: the guide gives the meeting time back at the bus — set a phone alarm.",
];

const GOOD_TO_KNOW = [
  "What to bring: yen in cash (the shuttle, the houses and many shops are cash only); warm layers, a rain jacket and shoes that can handle water — it can be cold, and the first snow is possible.",
  "Meeting point: Kanazawa Port (West) Exit, Group Bus Stop — right of the taxi stand, Hyatt Centric side. Not the rotary side and not the East Exit. Be there by 07:50.",
  "Free cancellation until 08:00 on Mon Nov 23 (24 h before). The tour needs good weather: if it's cancelled for weather you get another date or a full refund.",
  "Autumn leaves: Shirakawa-go peaks late Oct–early Nov, so by Nov 24 most leaves are down. Kanazawa (Days 12–13) was the momiji part of this stretch.",
  "Before leaving this morning: ask the Four Points front desk when to send the big suitcases by takkyubin to HOTEL SUI AKASAKA — delivery date Nov 26 (our check-in day).",
  "Tonight: pack for tomorrow — Day 15 leaves Kanazawa on the 9:07 Kagayaki.",
];

export default function ShirakawaGoItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            A guided bus day trip from Kanazawa
          </span>{" "}
          to two UNESCO gassho villages: Ogimachi in Shirakawa-go, and the
          quieter Ainokura in Gokayama.
        </p>
        <p className="mt-2">
          Late November is past the autumn-leaf peak here (Oct–early Nov), so
          expect bare trees, cold air and maybe the first snow — atmospheric
          rather than colourful. Back in Kanazawa around 15:45 for a quiet
          evening before tomorrow&apos;s 9:07 Kagayaki.
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

      <section aria-label="The tour" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="The tour" es="La excursión" />
        </h2>

        <DataTable
          columns={[
            <L key="Time" en="Time" es="Hora" />,
            <L key="What" en="What" es="Qué" />,
          ]}
        >
          {TOUR.map((row) => (
            <tr key={row.time} className="border-b border-line/50 last:border-0">
              <td className="whitespace-nowrap px-4 py-3 font-medium text-momiji">
                {row.time}
              </td>
              <td className="px-4 py-3 text-ink/80">{row.what}</td>
            </tr>
          ))}
        </DataTable>
        <BulletList items={TOUR_NOTES} />
      </section>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Itinerary" es="Itinerario" />
        </h2>

        <ol className="relative flex flex-col">
          {day14Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day14Stops.length - 1 && (
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

      <section aria-label="Good to know" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Good to know" es="A tener en cuenta" />
        </h2>
        <BulletList items={GOOD_TO_KNOW} />
      </section>
    </JapanRouteDayShell>
  );
}
