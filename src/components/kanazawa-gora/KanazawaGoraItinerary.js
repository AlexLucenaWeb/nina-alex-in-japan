import L from "@/components/L";
import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day15Stops as STOPS_EN } from "@/data/day15-stops";
import { DAY15_STOPS_ES } from "@/data/es/day15-stops";
import { withSpanish, withSpanishByStop } from "@/lib/i18n";

const day15Stops = withSpanishByStop(STOPS_EN, DAY15_STOPS_ES);

// A transit day: no route map yet (there is no My Maps map for it), just the
// legs as stops and the tickets each one needs.
const TICKETS_EN = [
  { leg: "Kanazawa → Ōmiya", ticket: "Hokuriku Shinkansen Kagayaki, reserved seat — paper ticket, not Suica." },
  { leg: "Ōmiya → Odawara", ticket: "Shōnan-Shinjuku Line on Suica, plus the Green Car supplement." },
  { leg: "Odawara → Gōra", ticket: "2-day Hakone Freepass, already on EMot (each on our own iPhone) — no need to queue at the Odawara ticket office; go straight to the bus to Gōra and show the pass to the driver. Covers bus J03 and the Tozan Railway backup." },
];

const TICKETS_ES = [
  {
    "ticket": "Hokuriku Shinkansen Kagayaki, asiento reservado: billete en papel, no Suica."
  },
  {
    "ticket": "Shōnan-Shinjuku Line con Suica, más el suplemento de Green Car."
  },
  {
    "ticket": "Hakone Freepass de 2 días, ya en EMot (cada uno en su iPhone): no hace falta hacer cola en la taquilla de Odawara; directos al bus a Gōra, enseñando el pase al conductor. Cubre el bus J03 y el plan B del Tozan Railway."
  }
];

const TICKETS = withSpanish(TICKETS_EN, TICKETS_ES);

export default function KanazawaGoraItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Across Honshu in three legs:
                </span>{" "}
                the Kagayaki shinkansen from Kanazawa to Ōmiya, the Shōnan-Shinjuku
                Line in the Green Car down to Odawara, and the bus up into the
                Hakone hills to Gōra.
              </p>
              <p className="mt-2">
                Big luggage goes ahead to Tokyo, so the whole day is done with day
                packs (and maybe one small suitcase). Around 5 hours of transit, at the bus stop by 14:00.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Cruzando Honshu en tres tramos:
                </span>{" "}
                el shinkansen Kagayaki de Kanazawa a Ōmiya, la Shōnan-Shinjuku Line en
                Green Car hasta Odawara y el bus que sube a las colinas de Hakone, hasta
                Gōra.
              </p>
              <p className="mt-2">
                El equipaje grande va por delante a Tokio, así que todo el día se hace con
                mochilas (y quizá una maleta pequeña). Unas 5 horas de viaje, y en la
                parada del bus a las 14:00.
              </p>
            </>
          }
        />
      </div>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Itinerary" es="Itinerario" />
        </h2>

        <ol className="relative flex flex-col">
          {day15Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day15Stops.length - 1 && (
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
        <h2 className="font-display text-2xl font-semibold">
          <L en="Tickets" es="Billetes" />
        </h2>
        <DataTable
          columns={[
            <L key="Leg" en="Leg" es="Tramo" />,
            <L key="Ticket" en="Ticket" es="Billete" />,
          ]}
        >
          {TICKETS.map((row) => (
            <tr key={row.leg} className="border-b border-line/50 last:border-0">
              <td className="whitespace-nowrap px-4 py-3 font-medium text-momiji">
                {row.leg}
              </td>
              <td className="px-4 py-3 text-ink/80">
                <L v={row.ticket} />
              </td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm leading-relaxed text-ink/80">
          <L
            en={"Total transit ≈ 5 h, about ¥16,500 per person."}
            es={"Viaje total ≈ 5 h, unos ¥16,500 por persona."}
          />
        </p>
      </section>
    </JapanRouteDayShell>
  );
}
