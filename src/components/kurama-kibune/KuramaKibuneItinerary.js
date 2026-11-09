import L from "@/components/L";
import DayMapEmbed from "@/components/DayMapEmbed";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day11Stops as STOPS_EN } from "@/data/day11-stops";
import { DAY11_STOPS_ES } from "@/data/es/day11-stops";
import { withSpanish, withSpanishByStop } from "@/lib/i18n";

const day11Stops = withSpanishByStop(STOPS_EN, DAY11_STOPS_ES);

// Same as Days 3, 8 and 9: this day's route lives in a Google My Maps map
// instead of the Leaflet component, so it can be edited from Google Maps
// without touching the stop data in the repo.
const MY_MAPS_ID = "1Cgsu9Pi-tnyYAvaJJYKWXfjKP2XW4LY";

const GOOD_TO_KNOW_EN = [
  "Getting there: leave M's Hotel Gojo Odawara at ~8:05. Walk ~10 min to Keihan Kiyomizu-Gojō, Keihan Main Line to Demachiyanagi (~12 min), then the Eizan Railway to Kibuneguchi and Kyoto Bus 33 to Kibune. IC card all the way.",
  "Route direction is Kibune → Kurama on purpose: the steep root-step section is climbed, not descended, which is safer if the ground is damp.",
  "The trail goes through Kurama-dera's grounds: it can only be walked while the temple is open (9:00–16:15). Start the crossing by 14:00 at the latest. The temple entry fee is paid at the West Gate, in cash.",
  "Allow 1.5–2 h for the crossing with photos (~6.3 km and 373 m elevation gain for the whole day). Shoes with good grip; keep hands free on the root sections.",
  "No vending machines on the trail: buy water in Kibune.",
  "The momiji tunnel illumination dates change every year: confirm 2026 dates before travelling.",
  "Heavy rain: switch to the rainy-day plan below or swap the day for Ohara (flat, ~1 h by Kyoto Bus). Don't combine Ohara with Kurama/Kibune on the same day.",
];

const GOOD_TO_KNOW_ES = [
  "Cómo llegar: salimos de M's Hotel Gojo Odawara a las ~8:05. A pie ~10 min hasta Keihan Kiyomizu-Gojō, Keihan Main Line hasta Demachiyanagi (~12 min), después el Eizan Railway hasta Kibuneguchi y el bus 33 de Kyoto Bus hasta Kibune. Tarjeta IC para todo.",
  "La dirección Kibune → Kurama es a propósito: el tramo empinado de escalones de raíces se sube en vez de bajarse, que es más seguro si el suelo está húmedo.",
  "El sendero atraviesa el recinto de Kurama-dera: solo se puede recorrer mientras el templo está abierto (9:00–16:15). Hay que empezar la travesía como tarde a las 14:00. La entrada al templo se paga en la puerta oeste, en efectivo.",
  "Contad 1,5–2 h para la travesía con fotos (~6,3 km y 373 m de desnivel en todo el día). Calzado con buen agarre, y las manos libres en los tramos de raíces.",
  "En el sendero no hay máquinas expendedoras: comprad agua en Kibune.",
  "Las fechas de la iluminación del túnel de momiji cambian cada año: confirmad las de 2026 antes de viajar.",
  "Lluvia fuerte: cambiad al plan de lluvia de abajo o cambiad el día por Ohara (llano, ~1 h en Kyoto Bus). No combinéis Ohara con Kurama/Kibune el mismo día."
];

const GOOD_TO_KNOW = withSpanish(GOOD_TO_KNOW_EN, GOOD_TO_KNOW_ES);

const RAIN_PLAN_EN = [
  { time: "09:00", what: "Eizan Railway from Demachiyanagi straight to Kurama Station (end of the line, ~30 min)." },
  { time: "09:40", what: "Niōmon gate → Kurama funicular up (about 2 min; small fare on top of the temple entry, runs until ~16:00)." },
  { time: "10:00", what: "Kurama-dera main hall: a few flights of stone steps from the top station; views over the valley." },
  { time: "11:00", what: "Funicular back down." },
  { time: "11:30", what: "Lunch at Yōshūji." },
  { time: "13:00", what: "Kurama Onsen." },
  { time: "15:15", what: "Train one stop to Kibuneguchi → Kyoto Bus 33 to Kibune." },
  { time: "15:45", what: "Kifune-jinja; stay until dusk for the lantern-lit stairs." },
  { time: "~17:00", what: "Bus + train back through the illuminated momiji tunnel. On Saturday expect queues at Kibuneguchi at this hour." },
];

const RAIN_PLAN_ES = [
  {
    "what": "Eizan Railway desde Demachiyanagi directo a la estación de Kurama (final de la línea, ~30 min)."
  },
  {
    "what": "Puerta Niōmon → funicular de Kurama de subida (unos 2 min; un pequeño suplemento sobre la entrada al templo; funciona hasta las ~16:00)."
  },
  {
    "what": "Pabellón principal de Kurama-dera: unos tramos de escaleras de piedra desde la estación de arriba, con vistas sobre el valle."
  },
  {
    "what": "Funicular de bajada."
  },
  {
    "what": "Comida en Yōshūji."
  },
  {
    "what": "Kurama Onsen."
  },
  {
    "what": "Tren una parada hasta Kibuneguchi → bus 33 de Kyoto Bus hasta Kibune."
  },
  {
    "what": "Kifune-jinja; quedaos hasta el anochecer para ver las escaleras con los farolillos encendidos."
  },
  {
    "what": "Bus + tren de vuelta por el túnel de momiji iluminado. Un sábado a esta hora habrá colas en Kibuneguchi."
  }
];

const RAIN_PLAN = withSpanish(RAIN_PLAN_EN, RAIN_PLAN_ES);

export default function KuramaKibuneItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  One mountain, crossed on foot:
                </span>{" "}
                the Eizan line up to Kibune and its water shrine first thing, then
                the ridge trail — cedar roots, forest halls — over to Kurama-dera and
                down into Kurama on the other side. Lunch, an onsen, and the train
                home from the end of the line.
              </p>
              <p className="mt-2">
                The direction is the point: the steep stretch of root steps is
                climbed, not descended. The trail runs through Kurama-dera&apos;s
                grounds and closes at 16:15, so the mountain happens in the morning,
                and the momiji tunnel comes at dusk on the way back.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Una montaña, cruzada a pie:
                </span>{" "}
                la línea Eizan hasta Kibune y su santuario del agua a primera hora,
                después el sendero de la cresta (raíces de cedro, pabellones en el bosque)
                hasta Kurama-dera y la bajada a Kurama por el otro lado. Comida, un onsen y
                el tren de vuelta desde el final de la línea.
              </p>
              <p className="mt-2">
                La dirección es lo importante: el tramo empinado de escalones de raíces se
                sube, no se baja. El sendero pasa por el recinto de Kurama-dera y cierra a
                las 16:15, así que la montaña va por la mañana, y el túnel de momiji al
                anochecer, de vuelta.
              </p>
            </>
          }
        />
      </div>

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

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Itinerary" es="Itinerario" />
        </h2>

        <ol className="relative flex flex-col">
          {day11Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day11Stops.length - 1 && (
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

      <section aria-label="If it has rained" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="If it has rained" es="Si ha llovido" />
        </h2>
        <p className="text-sm leading-relaxed text-ink/80">
          <L
            en={"Wet cedar roots and fallen maple leaves make the trail slippery. If it rained the day before or that morning, skip the mountain crossing: go straight to Kurama, use the funicular for the climb and visit Kibune afterwards by train and bus."}
            es={"Las raíces de cedro mojadas y las hojas de arce caídas hacen que el sendero resbale. Si llovió el día anterior o esa mañana, nos saltamos la travesía de la montaña: directos a Kurama, el funicular para la subida y Kibune después, en tren y bus."}
          />
        </p>
        <DataTable
          columns={[
            <L key="Time" en="Time" es="Hora" />,
            <L key="What" en="What" es="Qué" />,
          ]}
        >
          {RAIN_PLAN.map((row) => (
            <tr key={row.time} className="border-b border-line/50 last:border-0">
              <td className="whitespace-nowrap px-4 py-3 font-medium text-momiji">
                {row.time}
              </td>
              <td className="px-4 py-3 text-ink/80">
                <L v={row.what} />
              </td>
            </tr>
          ))}
        </DataTable>
      </section>
    </JapanRouteDayShell>
  );
}
