import BulletList from "@/components/BulletList";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day16Stops } from "@/data/day16-stops";

// No route map yet: the My Maps map for the loop comes later, and until then
// the section is left out rather than shown empty.
//
// The Gōra hotel is a surprise, so it is never named on this page — only
// "check-out in Gōra".
const TICKETS = [
  {
    text: "Everything is on EMot Online Tickets, each of us on our own iPhone: the 2-day Hakone Freepass (Odawara version, valid Nov 25–26) and the Romancecar seat.",
    link: {
      href: "https://emot-tickets.jp",
      label: "EMot Online Tickets →",
    },
  },
  "Freepass: show the animated pass screen at the manned gates, on the cable car, ropeway, pirate ship and buses. Screenshots don't work — keep the phone charged and bring the power bank.",
  "Covers: Gōra Park entry, cable car, ropeway, pirate ship, Hakone Tozan bus and the train Hakone-Yumoto → Odawara. Not covered: the Romancecar seat surcharge (bought separately on EMot).",
  "Romancecar Hakone-Yumoto → Shinjuku, departure around 17:30. The EMot ticket is only the seat surcharge; seats in the last row of a car, next to the luggage space.",
  "Odawara → Shinjuku is not covered by our Freepass (¥910 per person). Enter at Hakone-Yumoto with the Freepass and, at Shinjuku, pay the difference at the fare adjustment machine (精算機) or the window next to it before the gates. Don't tap the iPhone IC card at the exit gate — we didn't enter with it.",
  "Shinjuku → Akasaka-mitsuke on the Marunouchi Line: pay with the IC card (~¥210).",
];

const LUGGAGE = [
  "Ask the front desk about the Hakone Carry Service to Hakone-Yumoto Station: drop off by 10:00, pick up at the station 13:30–19:00. Booked at the front desk on the day.",
  "Plan B: Yamato delivery to Hotel SUI Akasaka (usually next day) — keep a daypack with overnight things.",
];

const PLAN_B = [
  "Ropeway closed (volcanic gas or wind): substitute buses run on the ropeway route; check status at hakonenavi.jp that morning.",
  "Fog or strong wind: the pirate ship may be cancelled → bus from Tōgendai to Moto-Hakone.",
  "Rain: skip the cedar avenue and take the bus straight from the shrine area.",
];

export default function HakoneLoopItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            The classic Hakone loop, all on the Freepass:
          </span>{" "}
          momiji at Gōra Park, the cable car and ropeway over the steaming
          crater at Ōwakudani, the pirate ship across Lake Ashi, and Hakone
          Shrine with its torii in the water.
        </p>
        <p className="mt-2">
          Check-out in Gōra by ~9:00, then down to Hakone-Yumoto for the
          Romancecar to Shinjuku — in Tokyo around 19:00.
        </p>
      </div>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {day16Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day16Stops.length - 1 && (
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

      <section aria-label="Tickets" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Tickets</h2>
        <BulletList items={TICKETS} />
      </section>

      <section aria-label="Luggage" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Luggage</h2>
        <BulletList items={LUGGAGE} />
      </section>

      <section aria-label="Plan B" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Plan B</h2>
        <BulletList items={PLAN_B} />
      </section>
    </JapanRouteDayShell>
  );
}
