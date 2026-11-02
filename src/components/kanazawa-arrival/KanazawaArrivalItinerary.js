import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day12Stops } from "@/data/day12-stops";

// Same as Days 3, 7, 8 and 9: this day's route lives in a Google My Maps map
// instead of the Leaflet component, so it can be edited from Google Maps
// without touching the stop data in the repo. Set it to null to hide the map
// section — DayMapEmbed has no empty state.
const MY_MAPS_ID = "1alodWM4d0v2rPVRTsCdFjT9cXpuqfWY";

const CONNECTIONS = [
  {
    thunderbird: "13 (booked)",
    kyotoDep: "10:09",
    tsurugaArr: "11:02",
    tsurugi: "14",
    tsurugaDep: "11:17",
    kanazawaArr: "12:02",
    note: "15-min transfer, fast train",
  },
  {
    thunderbird: "15",
    kyotoDep: "10:37",
    tsurugaArr: "11:30",
    tsurugi: "16",
    tsurugaDep: "11:39",
    kanazawaArr: "12:36",
    note: "Tight 9-min transfer; Tsurugi stops at every station",
  },
  {
    thunderbird: "17 (best backup)",
    kyotoDep: "11:10",
    tsurugaArr: "12:03",
    tsurugi: "18",
    tsurugaDep: "12:17",
    kanazawaArr: "13:01",
    note: "Comfortable 14-min transfer, fast train",
  },
];

const GOOD_TO_KNOW = [
  "Collect the tickets before boarding, at a JR West (JR西日本) reserved-ticket machine — the ones marked 'e5489' / 予約したきっぷの受取 — in the JR concourse at Kyoto Station. Don't use the JR Central (JR東海) machines in the Tokaido Shinkansen area: they can't issue JR-WEST ONLINE bookings. Switch to English → 'Pick up reserved tickets' → insert the physical card used to pay (Revolut Metal) → enter the reservation number and the 4-digit PIN → check it shows Thunderbird 13 (car 5, 9C & 9D) and Tsurugi 14 for 2 adults → print. Allow ~10 min; be at the station by ~9:40.",
  "You'll get several tickets each (basic fare + limited express tickets). Split them into one set per person and insert all of them together at every gate — at Kyoto, and again when changing to the shinkansen at Tsuruga. The gate keeps them at Kanazawa; ask staff for a stamp ('souvenir, please') if you want to keep them.",
  "If the machine fails: go to the JR ticket office (Midori-no-madoguchi, みどりの窓口) with passports, the payment card and the booking email. Keep the reservation number, PIN and confirmation email saved offline on the phone.",
  "On arrival at Kanazawa Station, collect the tickets for Day 15 (Wed Nov 25): Kagayaki 506, Kanazawa 09:07 → Ōmiya 11:11, car 9, seats 3A & 3B. Use a JR West reserved-ticket machine ('e5489' / 予約したきっぷの受取) in the station, same as in Kyoto: English → 'Pick up reserved tickets' → insert the payment card (Revolut Metal) → reservation number + 4-digit PIN → check Kagayaki 506 for 2 adults → print. Doing it today saves a rush on the morning of the 25th.",
  "Nov 23 is a public holiday (Labour Thanksgiving Day): the 22nd is a busy holiday weekend — expect crowds and queues.",
  "Omicho on a Sunday: many stalls closed, restaurants open. Browse the market properly on Day 13 or 14.",
  "Shima's hours vary between sources (9:00–18:00 vs 9:30–17:30) — plan to arrive before 17:00.",
  "The Kanazawa Light-up Bus only runs on Saturdays and special dates, so walk to the castle instead (5 min from the hotel via Oyama Shrine).",
  "Hokutetsu buses (including the Loop Bus) don't accept Suica/ICOCA: tap a contactless card or Apple Pay on boarding and on getting off.",
  "Thunderbird has no onboard food or drink sales.",
  "It gets dark around 16:40 — do Higashi Chaya in the early afternoon.",
  "Castle park and Kenroku-en light-up tonight: free, 18:00–21:00 (last entry 20:45).",
];

export default function KanazawaArrivalItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            Kyoto to the Sea of Japan by lunchtime.
          </span>{" "}
          The Thunderbird up the shore of Lake Biwa, a quick change at Tsuruga
          onto the Hokuriku Shinkansen, and Kanazawa by midday: bags at the
          hotel, lunch at Omicho, and the afternoon in the old teahouse
          districts.
        </p>
        <p className="mt-2">
          The evening is the reason for coming today: the castle park and
          Kenroku-en are lit up for autumn, free to enter, and five minutes on
          foot from the hotel.
        </p>
      </div>

      {MY_MAPS_ID && (
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
      )}

      <section aria-label="Getting there" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Getting there</h2>

        <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <p>
            <span className="font-semibold text-momiji">Thunderbird 13</span>{" "}
            Kyoto 10:09 → Tsuruga 11:02
          </p>
          <p className="mt-1">
            <span className="font-semibold text-momiji">Tsurugi 14</span>{" "}
            Tsuruga 11:17 → Kanazawa 12:02
          </p>
          <p className="mt-2">
            <span className="font-semibold text-pine">Booked:</span>{" "}
            Thunderbird 13, car 5, seats 9C &amp; 9D (the Lake Biwa side).
            Tsurugi 14 booked together with it. Basic fare Kyoto City Zone →
            Kanazawa, valid Nov 22–24.
          </p>
          <p className="mt-2 text-ink/60">
            The fast Tsurugi, stopping only at Fukui. No luggage space
            reservation needed on this route.
          </p>
        </div>

        <h3 className="mt-2 font-display text-lg font-semibold text-pine">
          If you miss it
        </h3>
        <DataTable
          columns={[
            "Thunderbird",
            "Kyoto dep.",
            "Tsuruga arr.",
            "Tsurugi",
            "Tsuruga dep.",
            "Kanazawa arr.",
            "Note",
          ]}
          minWidth="720px"
        >
          {CONNECTIONS.map((row) => (
            <tr
              key={row.thunderbird}
              className="border-b border-line/50 last:border-0"
            >
              <td className="whitespace-nowrap px-4 py-3 font-medium text-momiji">
                {row.thunderbird}
              </td>
              <td className="px-4 py-3 text-ink/80">{row.kyotoDep}</td>
              <td className="px-4 py-3 text-ink/80">{row.tsurugaArr}</td>
              <td className="px-4 py-3 text-ink/80">{row.tsurugi}</td>
              <td className="px-4 py-3 text-ink/80">{row.tsurugaDep}</td>
              <td className="px-4 py-3 text-ink/80">{row.kanazawaArr}</td>
              <td className="px-4 py-3 text-ink/80">{row.note}</td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm leading-relaxed text-ink/80">
          If you miss your train: the tickets were bought as regular fares on
          JR-WEST ONLINE TRAIN RESERVATION — change the reservation at a JR
          ticket office or machine before boarding another train. It&apos;s a
          holiday weekend and seats sell out.
        </p>
      </section>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {day12Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day12Stops.length - 1 && (
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
        <h2 className="font-display text-2xl font-semibold">Good to know</h2>
        <BulletList items={GOOD_TO_KNOW} />
      </section>
    </JapanRouteDayShell>
  );
}
