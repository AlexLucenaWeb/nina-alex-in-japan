import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import {
  DAY2_TIMELINE as TIMELINE_EN,
  DAY2_AIRPORT_PROCESS as AIRPORT_PROCESS_EN,
  DAY2_TRAINS as TRAINS_EN,
  DAY2_TIPS as TIPS_EN,
  DAY2_HOTEL as HOTEL_EN,
} from "@/data/day2-arrival";
import {
  DAY2_TIMELINE_ES,
  DAY2_AIRPORT_PROCESS_ES,
  DAY2_TRAINS_ES,
  DAY2_TIPS_ES,
  DAY2_HOTEL_ES,
} from "@/data/es/day2-arrival";
import { enText, withSpanish } from "@/lib/i18n";

const DAY2_TIMELINE = withSpanish(TIMELINE_EN, DAY2_TIMELINE_ES);
const DAY2_AIRPORT_PROCESS = withSpanish(AIRPORT_PROCESS_EN, DAY2_AIRPORT_PROCESS_ES);
const DAY2_TRAINS = withSpanish(TRAINS_EN, DAY2_TRAINS_ES);
const DAY2_TIPS = withSpanish(TIPS_EN, DAY2_TIPS_ES);
const DAY2_HOTEL = withSpanish(HOTEL_EN, DAY2_HOTEL_ES);

function SectionHeading({ children }) {
  return (
    <h2 className="font-display text-xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

export default function ArrivalOsakaItinerary({ food }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6">
      {/* No route map on a travel day, so the food section stays up top rather
          than after one, as it does on the walking days. */}
      {food}

      <section className="flex flex-col gap-3">
        <SectionHeading>
          <L en="Timeline" es="Horario" />
        </SectionHeading>
        <ol className="flex flex-col gap-2">
          {DAY2_TIMELINE.map((item, index) => (
            <li
              key={index}
              className={`flex gap-4 rounded-xl border-2 px-4 py-3 text-sm leading-6 ${
                item.highlight
                  ? "border-momiji/40 bg-momiji/5"
                  : "border-line bg-card"
              }`}
            >
              <span
                className={`w-24 shrink-0 font-medium ${
                  item.highlight ? "font-semibold text-momiji" : "text-momiji"
                }`}
              >
                <L v={item.time} />
              </span>
              <div className="flex flex-col gap-2 text-ink/80">
                <span>
                  <L v={item.event} />
                </span>
                {item.steps && (
                  <ol className="flex list-decimal flex-col gap-1 pl-5">
                    {item.steps.map((step) => (
                      <li key={enText(step)}>
                        <L v={step} />
                      </li>
                    ))}
                  </ol>
                )}
                {item.note && (
                  <span className="text-ink/60">
                    <L v={item.note} />
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>
          <L
            en="Airport arrival process (NRT)"
            es="Llegada al aeropuerto (NRT)"
          />
        </SectionHeading>
        <DataTable columns={[<L key="Step" en="Step" es="Paso" />, <L key="Duration" en="Duration" es="Duración" />, <L key="Notes" en="Notes" es="Notas" />]} minWidth={560}>
          {DAY2_AIRPORT_PROCESS.map((row, index) => (
            <tr key={index} className="border-b border-line/50 last:border-0">
              <td className="px-4 py-3 font-medium">
                <L v={row.step} />
              </td>
              <td className="px-4 py-3 text-momiji">{row.duration}</td>
              <td className="px-4 py-3 text-ink/70">
                <L v={row.notes} />
              </td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm text-ink/60">
          <L
            en="Each traveler shows their own Visit Japan Web QR at immigration and customs — it's noticeably faster than the paper forms."
            es="Cada uno enseña su propio QR de Visit Japan Web en inmigración y en aduana: es bastante más rápido que los formularios en papel."
          />
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>
          <L
            en="The two trains: NRT → Shin-Osaka"
            es="Los dos trenes: NRT → Shin-Osaka"
          />
        </SectionHeading>
        <DataTable
          columns={[
            <L key="Leg" en="Leg" es="Tramo" />,
            <L key="Train" en="Train" es="Tren" />,
            <L key="Duration" en="Duration" es="Duración" />,
            <L key="Cost" en="Cost" es="Coste" />,
          ]}
          minWidth={560}
        >
          {DAY2_TRAINS.map((row, index) => (
            <tr key={index} className="border-b border-line/50 last:border-0">
              <td className="px-4 py-3 font-medium">
                <L v={row.leg} />
              </td>
              <td className="px-4 py-3 text-ink/80">
                <L v={row.train} />
              </td>
              <td className="px-4 py-3 text-momiji">
                <L v={row.duration} />
              </td>
              <td className="px-4 py-3 text-ink/80">
                <L v={row.price} />
              </td>
            </tr>
          ))}
        </DataTable>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>
          <L en="Things to keep in mind" es="A tener en cuenta" />
        </SectionHeading>
        <BulletList items={DAY2_TIPS} />
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>
          <L en="Hotel in Osaka" es="Hotel en Osaka" />
        </SectionHeading>
        <div className="flex flex-col gap-3 rounded-xl border-2 border-line bg-card px-4 py-4 text-sm leading-6">
          <div>
            <p className="font-display text-lg font-semibold tracking-tight">
              {DAY2_HOTEL.name}
            </p>
            <p className="text-ink/60">{DAY2_HOTEL.jp}</p>
          </div>

          <dl className="flex flex-col gap-2">
            <div>
              <dt className="inline font-medium text-ink">
                <L en="Address:" es="Dirección:" />{" "}
              </dt>
              <dd className="inline text-ink/80">{DAY2_HOTEL.address}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-ink">
                <L en="Nearest station:" es="Estación más cercana:" />{" "}
              </dt>
              <dd className="inline text-ink/80">
                <L v={DAY2_HOTEL.station} />
              </dd>
            </div>
            <div>
              <dt className="inline font-medium text-ink">
                <L
                  en="Getting there from Shin-Osaka:"
                  es="Cómo llegar desde Shin-Osaka:"
                />{" "}
              </dt>
              <dd className="inline text-ink/80">
                <L v={DAY2_HOTEL.directions} />
              </dd>
            </div>
            <div>
              <dt className="inline font-medium text-ink">Check-in: </dt>
              <dd className="inline text-ink/80">
                <L v={DAY2_HOTEL.checkIn} /> · check-out{" "}
                <L v={DAY2_HOTEL.checkOut} />
              </dd>
            </div>
          </dl>

          <p className="text-ink/70">
            <L v={DAY2_HOTEL.note} />
          </p>

          <a
            href={DAY2_HOTEL.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start text-momiji hover:underline"
          >
            <L en="Open in Google Maps" es="Abrir en Google Maps" />
          </a>
        </div>
      </section>
    </div>
  );
}
