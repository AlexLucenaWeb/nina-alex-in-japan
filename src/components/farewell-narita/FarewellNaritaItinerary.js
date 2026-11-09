import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day21Stops as STOPS_EN } from "@/data/day21-stops";
import { DAY21_STOPS_ES } from "@/data/es/day21-stops";
import { enText, withSpanish, withSpanishByStop } from "@/lib/i18n";

const day21Stops = withSpanishByStop(STOPS_EN, DAY21_STOPS_ES);

// No route map yet: the My Maps map for the day comes later, and until then
// the section is left out rather than shown empty.
const TRANSPORT_EN = [
  { leg: "Hotel → Nishi-Nippori", line: "Tokyo Metro Chiyoda Line (Akasaka → Nishi-Nippori)", time: "~22 min" },
  { leg: "Nishi-Nippori → Nippori", line: "JR Yamanote Line (1 stop)", time: "~2 min" },
  { leg: "Nippori → Keisei-Narita", line: "Keisei Main Line, Limited Express", time: "~60 min" },
  { leg: "Keisei-Narita → Airport Terminal 2·3", line: "Keisei Line (get off at 空港第2ビル, not at Narita Airport T1)", time: "~10 min" },
];

const TRANSPORT_ES = [
  {},
  {
    "line": "JR Yamanote Line (1 parada)"
  },
  {
    "line": "Keisei Main Line, Limited Express"
  },
  {
    "line": "Keisei Line (bajad en 空港第2ビル, no en Narita Airport T1)"
  }
];

const TRANSPORT = withSpanish(TRANSPORT_EN, TRANSPORT_ES);

const GOOD_TO_KNOW_EN = [
  "Our flight (Qatar Airways) leaves from Terminal 2: the station is Airport Terminal 2·3 (空港第2ビル).",
  "Tax refund (new system since Nov 1, 2026): before checking the suitcases, go to a customs tax refund kiosk in the departure lobby and scan your passport (or use Visit Japan Web on the dedicated airport Wi-Fi). Have ALL tax-free purchases at hand, including what's in the suitcase — customs may ask to see them. Items used or eaten in Japan don't qualify.",
  "The refund is paid by each shop (card, app, bank) or as yen cash at the Self Tax Refund points in the airport — depending on what you chose when buying. Keep the receipts.",
  "Kawatoyo is cash or PayPay only.",
  "Bring 100-yen coins for the Keisei-Narita lockers.",
  "Leave Narita town by 13:00 at the latest.",
];

const GOOD_TO_KNOW_ES = [
  "Nuestro vuelo (Qatar Airways) sale de la Terminal 2: la estación es Airport Terminal 2·3 (空港第2ビル).",
  "Devolución de impuestos (sistema nuevo desde el 1 de noviembre de 2026): antes de facturar las maletas, id a un quiosco de devolución de impuestos de aduanas en el vestíbulo de salidas y escanead el pasaporte (o usad Visit Japan Web con el Wi-Fi específico del aeropuerto). Tened a mano TODAS las compras tax-free, también lo que va en la maleta: puede que aduanas pida verlas. Lo que se haya usado o comido en Japón no cuenta.",
  "La devolución la paga cada tienda (tarjeta, app, banco) o en yenes en efectivo en los puntos Self Tax Refund del aeropuerto, según lo que se eligiera al comprar. Guardad los tickets.",
  "Kawatoyo solo acepta efectivo o PayPay.",
  "Llevad monedas de 100 yenes para las taquillas de Keisei-Narita.",
  "Hay que salir de Narita como tarde a las 13:00."
];

const GOOD_TO_KNOW = withSpanish(GOOD_TO_KNOW_EN, GOOD_TO_KNOW_ES);

export default function FarewellNaritaItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  One last temple morning on the way to the airport:
                </span>{" "}
                Naritasan Shinsho-ji and its autumn park, and grilled eel on
                Narita&apos;s old shopping street, just 10 minutes from the
                terminals.
              </p>
              <p className="mt-2">
                Check out at 9:00 with the luggage, leave it in the lockers at
                Keisei-Narita, and be at the airport by 13:25 for the 16:55 flight
                home.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Una última mañana de templos camino del aeropuerto:
                </span>{" "}
                Naritasan Shinsho-ji y su parque otoñal, y anguila a la brasa en la
                antigua calle comercial de Narita, a solo 10 minutos de las terminales.
              </p>
              <p className="mt-2">
                Check-out a las 9:00 con el equipaje, lo dejamos en las taquillas de
                Keisei-Narita y estamos en el aeropuerto a las 13:25 para el vuelo de
                vuelta de las 16:55.
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
          {day21Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day21Stops.length - 1 && (
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
            <tr
              key={enText(row.leg)}
              className="border-b border-line/50 last:border-0"
            >
              <td className="px-4 py-3 font-medium text-momiji">
                <L v={row.leg} />
              </td>
              <td className="px-4 py-3 text-ink/80">
                <L v={row.line} />
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-ink/80">
                <L v={row.time} />
              </td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm leading-relaxed text-ink/80">
          <L
            en={"All on the IC card, including the Keisei Limited Express (no seat reservation needed)."}
            es={"Todo con la tarjeta IC, también el Keisei Limited Express (no hace falta reservar asiento)."}
          />
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
