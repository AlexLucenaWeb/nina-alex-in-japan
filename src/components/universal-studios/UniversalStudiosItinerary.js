import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import {
  UNIVERSAL_STUDIOS_NOTES as NOTES_EN,
  UNIVERSAL_STUDIOS_RIDES as RIDES_EN,
  UNIVERSAL_STUDIOS_STOPS as STOPS_EN,
  UNIVERSAL_STUDIOS_TRANSPORT as TRANSPORT_EN,
} from "@/data/universal-studios-stops";
import {
  UNIVERSAL_STUDIOS_NOTES_ES,
  UNIVERSAL_STUDIOS_RIDES_ES,
  UNIVERSAL_STUDIOS_STOPS_ES,
  UNIVERSAL_STUDIOS_TRANSPORT_ES,
} from "@/data/es/universal-studios-stops";
import { enText, withSpanish, withSpanishByStop } from "@/lib/i18n";

const UNIVERSAL_STUDIOS_NOTES = withSpanish(NOTES_EN, UNIVERSAL_STUDIOS_NOTES_ES);
const UNIVERSAL_STUDIOS_RIDES = withSpanish(RIDES_EN, UNIVERSAL_STUDIOS_RIDES_ES);
const UNIVERSAL_STUDIOS_STOPS = withSpanishByStop(STOPS_EN, UNIVERSAL_STUDIOS_STOPS_ES);
const UNIVERSAL_STUDIOS_TRANSPORT = withSpanish(
  TRANSPORT_EN,
  UNIVERSAL_STUDIOS_TRANSPORT_ES,
);

// No map on this day, unlike the other route days: everything happens inside
// one place, and USJ's own app has the park map with live waiting times on it.
export default function UniversalStudiosItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="p"
          en={
            <>
              <span className="font-semibold text-momiji">
                The only day that has to be organised in advance:
              </span>{" "}
              the park rewards being early and punishes improvising. The times
              below assume the gates open at 09:00 — check the actual opening
              time for 16 November in the app, because USJ moves it around by
              season and by day.
            </>
          }
          es={
            <>
              <span className="font-semibold text-momiji">
                El único día que hay que organizar con antelación:
              </span>{" "}
              el parque premia madrugar y castiga improvisar. Los horarios de
              abajo dan por hecho que las puertas abren a las 09:00; mirad en
              la app la hora real de apertura del 16 de noviembre, porque USJ
              la cambia según la temporada y el día.
            </>
          }
        />
      </div>

      <section aria-label="Tickets" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Tickets" es="Entradas" />
        </h2>
        <BulletList items={UNIVERSAL_STUDIOS_NOTES} />
      </section>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Itinerary" es="Itinerario" />
        </h2>

        <ol className="relative flex flex-col">
          {UNIVERSAL_STUDIOS_STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < UNIVERSAL_STUDIOS_STOPS.length - 1 && (
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

      <section aria-label="Who rides what" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Who rides what" es="Quién se sube a qué" />
        </h2>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L en="Together — gentle, no big drops" es="Juntos — suaves, sin grandes caídas" />
          </h3>
          <BulletList items={UNIVERSAL_STUDIOS_RIDES.together} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-semibold text-momiji">
            <L en="Alex only — Single Rider line" es="Solo Alex — fila de Single Rider" />
          </h3>
          <p className="text-sm leading-relaxed text-ink/70">
            <L
              en="Check in the app that single rider is running that day."
              es="Comprobad en la app que single rider funciona ese día."
            />
          </p>
          <BulletList items={UNIVERSAL_STUDIOS_RIDES.alexOnly} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-semibold text-ochre">
            <L en="Skip together" es="Mejor saltárselo" />
          </h3>
          <BulletList items={UNIVERSAL_STUDIOS_RIDES.skip} />
        </div>
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
          {UNIVERSAL_STUDIOS_TRANSPORT.map((row) => (
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
                {row.time}
              </td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm leading-relaxed text-ink/80">
          <L
            en="~40 min door to door, all on Suica (Apple Wallet)."
            es="~40 min de puerta a puerta, todo con Suica (Apple Wallet)."
          />
        </p>
      </section>
    </JapanRouteDayShell>
  );
}
