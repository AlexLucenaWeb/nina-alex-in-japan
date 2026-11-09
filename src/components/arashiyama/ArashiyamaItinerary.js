import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day9Stops as STOPS_EN } from "@/data/day9-stops";
import { DAY9_STOPS_ES } from "@/data/es/day9-stops";
import { withSpanish, withSpanishByStop } from "@/lib/i18n";

const day9Stops = withSpanishByStop(STOPS_EN, DAY9_STOPS_ES);

// Same as Days 3 and 8: this day's route lives in a Google My Maps map
// instead of the Leaflet component, so it can be edited from Google Maps
// without touching the stop data in the repo.
const MY_MAPS_ID = "1UcddyqIGpQ24rgqWgO6gIm0xEL1Ouko";

// Eikandō's illumination only starts on 20 November, so tonight is a choice
// between these instead.
const EVENING_OPTIONS_EN = [
  "A) Tō-ji illumination: the lit five-storey pagoda and maples, ~15 min walk from Kyoto Station — the closest option to the hotel. Karasuma Line from Gojō to Kyoto Station, then walk. Check hours and price on the day.",
  "B) NAKED meets Nijo Castle 2026: projection mapping and illumination, 18:00–22:00 (last entry 21:00), running Oct 23–Dec 5. Advance online booking required; tickets from ~¥2,000. Karasuma Line from Gojō to Karasuma Oike, then the Tōzai Line to Nijōjō-mae.",
  "C) Pontochō dinner: the lantern-lit alley of restaurants by the Kamo River. Some places are tourist traps — check the menu and prices posted at the door. Back to the hotel: ~10 min by taxi, or the Karasuma Line from Shijō to Gojō.",
  "D) Rest: an early dinner near the hotel after a long walking day.",
];

const EVENING_OPTIONS_ES = [
  "A) Iluminación de Tō-ji: la pagoda de cinco pisos y los arces iluminados, a ~15 min a pie de la estación de Kioto: la opción más cercana al hotel. Karasuma Line de Gojō a la estación de Kioto y a pie. Mirad el horario y el precio ese día.",
  "B) NAKED meets Nijo Castle 2026: proyecciones e iluminación, 18:00–22:00 (última entrada 21:00), del 23 de octubre al 5 de diciembre. Hay que reservar online con antelación; entradas desde ~¥2,000. Karasuma Line de Gojō a Karasuma Oike y después la Tōzai Line hasta Nijōjō-mae.",
  "C) Cena en Pontochō: el callejón de restaurantes con farolillos junto al río Kamo. Algunos sitios son trampas para turistas: mirad la carta y los precios de la puerta. Vuelta al hotel: ~10 min en taxi, o la Karasuma Line de Shijō a Gojō.",
  "D) Descansar: una cena temprana cerca del hotel después de un día largo andando."
];

const EVENING_OPTIONS = withSpanish(EVENING_OPTIONS_EN, EVENING_OPTIONS_ES);

export default function ArashiyamaItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Kyoto&apos;s western edge,
                </span>{" "}
                where the city runs out against the mountains: the bamboo grove, a
                Zen garden that borrows the hills behind it, and the bridge over the
                Katsura River with the whole slope of maples above it. It&apos;s the
                most visited corner of Kyoto — which is exactly why the day starts at
                8:00.
              </p>
              <p className="mt-2">
                The plan is to see the famous part first and then climb away from it.
                The bamboo grove before the crowds, then up into the quiet gardens of
                Sagano, back down to Tenryū-ji, and the river in the afternoon, when
                the crowds are everywhere anyway.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">El borde oeste de Kioto,</span>{" "}
                donde la ciudad se acaba contra las montañas: el bosque de bambú, un jardín
                zen que toma prestadas las colinas de detrás y el puente sobre el río
                Katsura con toda la ladera de arces encima. Es el rincón más visitado de
                Kioto, y precisamente por eso el día empieza a las 8:00.
              </p>
              <p className="mt-2">
                La idea es ver primero lo famoso y luego alejarse subiendo. El bosque de
                bambú antes que la gente, después la subida a los jardines tranquilos de
                Sagano, la bajada a Tenryū-ji y el río por la tarde, cuando de todas formas
                hay gente en todas partes.
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
          {day9Stops.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < day9Stops.length - 1 && (
                <span
                  aria-hidden="true"
                  className="stop-connector absolute bottom-0 left-5 top-10 -translate-x-1/2"
                />
              )}
              <span
                className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-momiji bg-card font-display font-semibold text-momiji ${
                  stop.optional ? "border-dashed text-xs" : "text-sm"
                }`}
              >
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

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L en="Getting there" es="Cómo llegar" />
          </h3>
          <p className="mt-2">
            <L
              en={"Karasuma Line from Gojō to Kyoto Station (one stop), then the JR Sagano Line to Saga-Arashiyama (about 15 min), then a ~15 min walk. Leave the hotel at 7:15 to be in the bamboo grove by 8:00. The ICOCA/Suica card works all the way."}
              es={"Karasuma Line de Gojō a la estación de Kioto (una parada), después la JR Sagano Line hasta Saga-Arashiyama (unos 15 min) y ~15 min a pie. Salimos del hotel a las 7:15 para estar en el bosque de bambú a las 8:00. La tarjeta ICOCA/Suica sirve para todo el trayecto."}
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"Sagano Romantic Train (optional)"}
              es={"Sagano Romantic Train (opcional)"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"A slow sightseeing train through the Hozu river gorge, about 25 minutes one way from Torokko Saga (next to JR Saga-Arashiyama) to Kameoka. If you add it, it replaces the Monkey Park in the afternoon. It doesn't run on Wednesdays."}
              es={"Un tren turístico lento por la garganta del río Hozu, unos 25 minutos por trayecto de Torokko Saga (junto a JR Saga-Arashiyama) a Kameoka. Si lo añadimos, sustituye al Monkey Park por la tarde. No funciona los miércoles."}
            />
          </p>
          <p className="mt-2 font-semibold text-ochre">
            <L
              en={"Seats for Nov 19 are currently sold out online. How to try:"}
              es={"Los asientos del 19 de noviembre están agotados online por ahora. Cómo intentarlo:"}
            />
          </p>
          <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
            <li>
              <L
                en={"Check the official site (sagano-kanko.co.jp/en → \"Reserve tickets here\") for cancellations. Cancellation is free until 23:59 the day before, so seats free up late — check again on the evenings of Nov 17–18."}
                es={"Mirad la web oficial (sagano-kanko.co.jp/en → \"Reserve tickets here\") por si hay cancelaciones. Cancelar es gratis hasta las 23:59 del día anterior, así que se liberan asientos tarde: volved a mirar las noches del 17 y 18 de noviembre."}
              />
            </li>
            <li>
              <L
                en={"Third-party sellers (Klook, Pelago) sometimes still have seats; some are non-refundable."}
                es={"Los vendedores externos (Klook, Pelago) a veces todavía tienen asientos; algunos no son reembolsables."}
              />
            </li>
            <li>
              <L
                en={"Same-day tickets are sold first-come at Torokko Saga station even when online shows full — cash or IC card only. Ask first thing in the morning."}
                es={"En la estación de Torokko Saga venden billetes para el mismo día por orden de llegada aunque online salga completo; solo efectivo o tarjeta IC. Preguntad a primera hora de la mañana."}
              />
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"Hozugawa River Boat Ride (optional)"}
              es={"Descenso del río Hozu en barca (opcional)"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"保津川下り — about 2 hours in a traditional wooden boat from Kameoka down the gorge to Arashiyama, ending near Togetsukyō. The classic combination is the Sagano train out to Kameoka and the boat back. An alternative to the train, or the second half of it. Not booked."}
              es={"保津川下り: unas 2 horas en una barca tradicional de madera desde Kameoka, bajando por la garganta hasta Arashiyama, para terminar cerca de Togetsukyō. La combinación clásica es el tren de Sagano hasta Kameoka y la barca de vuelta. Una alternativa al tren, o su segunda mitad. Sin reservar."}
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"Saga-Toriimoto (optional)"}
              es={"Saga-Toriimoto (opcional)"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"A preserved street of old thatched and wooden houses about 20 minutes' walk north of Jōjakkō-ji. Quiet and pretty, and worth it only if you have energy to spare."}
              es={"Una calle conservada de antiguas casas de madera y techo de paja, a unos 20 minutos a pie al norte de Jōjakkō-ji. Tranquila y bonita, y solo merece la pena si sobran fuerzas."}
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"Getting home"}
              es={"Vuelta"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"JR Sagano Line from Saga-Arashiyama back to Kyoto Station, then the Karasuma Line to Gojō."}
              es={"JR Sagano Line de Saga-Arashiyama a la estación de Kioto y después la Karasuma Line hasta Gojō."}
            />
          </p>
        </div>

      </section>

      <section aria-label="Evening options" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Evening options (choose one)" es="Opciones para la noche (elegid una)" />
        </h2>
        <p className="text-sm leading-relaxed text-ink/70">
          <L
            en={"After the Monkey Park, head back to the hotel to rest first. Eikandō's illumination only starts on Nov 20, so it isn't an option tonight."}
            es={"Después del Monkey Park, primero volvemos al hotel a descansar. La iluminación de Eikandō no empieza hasta el 20 de noviembre, así que esta noche no es una opción."}
          />
        </p>
        <BulletList items={EVENING_OPTIONS} />
      </section>
    </JapanRouteDayShell>
  );
}
