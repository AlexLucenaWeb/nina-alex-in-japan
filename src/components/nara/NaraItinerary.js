import L from "@/components/L";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { NARA_STOPS as STOPS_EN } from "@/data/nara-stops";
import { NARA_STOPS_ES } from "@/data/es/nara-stops";
import { withSpanishByStop } from "@/lib/i18n";

const NARA_STOPS = withSpanishByStop(STOPS_EN, NARA_STOPS_ES);

// Same as Day 3: this day's route lives in a Google My Maps map instead of the
// Leaflet component, so it can be edited from Google Maps without touching the
// stop data in the repo.
const MY_MAPS_ID = "1E9hNlm0Ds5LztbAYOH7KQVfhVaQMY9Q";

export default function NaraItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  Everything is done on foot:
                </span>{" "}
                the whole day fits inside Nara Park and the streets around it, no
                trains and no buses once you arrive. The Aoniyoshi gets in at 11:30,
                so it starts late morning: the Great Buddha first, a long lunch,
                gardens and the lantern shrine through the afternoon, and the light
                going gold over the pond by the end.
              </p>
              <p className="mt-2">
                It&apos;s a deliberately unhurried day — the times below are a rhythm,
                not a schedule. Falling an hour behind costs you nothing.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">Todo se hace a pie:</span>{" "}
                el día entero cabe dentro del parque de Nara y las calles de alrededor, sin
                trenes ni buses una vez allí. El Aoniyoshi llega a las 11:30, así que
                empezamos a media mañana: primero el Gran Buda, una comida larga, jardines y
                el santuario de los farolillos por la tarde, y al final la luz volviéndose
                dorada sobre el estanque.
              </p>
              <p className="mt-2">
                Es un día tranquilo a propósito: los horarios de abajo son un ritmo, no un
                plan cerrado. Ir una hora por detrás no cuesta nada.
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
          {NARA_STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < NARA_STOPS.length - 1 && (
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

      <section
        aria-label="Getting there, back & good to know"
        className="flex flex-col gap-3"
      >
        <h2 className="font-display text-2xl font-semibold">
          <L en="Getting there, back & good to know" es="Ida, vuelta y a tener en cuenta" />
        </h2>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"The way there"}
              es={"La ida"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"Leave M's Hotel Gojo Odawara at ~10:25. Karasuma Line from Gojō to Kyoto (one stop), then walk to the Kintetsu platforms inside Kyoto Station for the 10:55 Aoniyoshi. Show the live Kintetsu e-ticket page if asked and go through the gates with the IC card."}
              es={"Salimos de M's Hotel Gojo Odawara a las ~10:25. Karasuma Line de Gojō a Kioto (una parada) y a pie hasta los andenes de Kintetsu, dentro de la estación de Kioto, para el Aoniyoshi de las 10:55. Si lo piden, enseñad la página de la e-ticket de Kintetsu en directo y pasad los tornos con la tarjeta IC."}
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"The way home"}
              es={"La vuelta"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"Back to Kyoto from Kintetsu-Nara: a regular Kintetsu express (¥760, ~45 min) or a limited express (¥1,280, ~35 min), both frequent enough that there is no need to plan a train after dinner. Don't go looking for an Aoniyoshi back — the last one leaves Nara at 15:55, hours before you are done."}
              es={"De Kintetsu-Nara a Kioto: un expreso normal de Kintetsu (¥760, ~45 min) o un expreso limitado (¥1,280, ~35 min), los dos con frecuencia suficiente como para no tener que planear el tren después de cenar. No busquéis un Aoniyoshi de vuelta: el último sale de Nara a las 15:55, horas antes de que terminemos."}
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            <L
              en={"Eating in Nara"}
              es={"Comer en Nara"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"Nakatanidō for green yomogi mochi by the station, Mizuya Chaya inside the park for udon and a sit-down, and kakinoha-zushi (persimmon-leaf sushi) if you want lunch you can carry. Full details are in the Food section at the top of this page."}
              es={"Nakatanidō para el mochi verde de yomogi junto a la estación, Mizuya Chaya dentro del parque para un udon sentados, y kakinoha-zushi (sushi en hoja de caqui) si queremos una comida para llevar. Todos los detalles están arriba, en la sección Comida."}
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-ochre/50 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-ochre">
            <L
              en={"Take your passport to the gardens"}
              es={"Llevad el pasaporte a los jardines"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"Yoshikien is free for foreign visitors, but only if you can show a passport at the desk — no passport, no free entry. Isuien next door is ¥1,200 and worth it. Both close at 16:30, earlier than everything else on the route, so don't let lunch run long. Kasuga Taisha's inner area closes even earlier for what you'll see there, at 16:00 — keep the afternoon moving."}
              es={"Yoshikien es gratis para extranjeros, pero solo enseñando el pasaporte en la entrada: sin pasaporte, no hay entrada gratis. Isuien, al lado, cuesta ¥1,200 y merece la pena. Los dos cierran a las 16:30, antes que todo lo demás de la ruta, así que la comida no puede alargarse. La zona interior de Kasuga Taisha cierra aún antes para lo que se va a ver allí, a las 16:00: hay que mantener el ritmo por la tarde."}
            />
          </p>
        </div>

        <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-momiji">
            <L
              en={"About the deer"}
              es={"Sobre los ciervos"}
            />
          </h3>
          <p className="mt-2">
            <L
              en={"Buy the crackers (shika senbei) only at the moment you plan to feed them — hold a stack and you get mobbed. Keep maps, tickets, paper bags and food out of sight: they bite bags to get at what's inside."}
              es={"Comprad las galletas (shika senbei) solo en el momento de dárselas: con un montón en la mano, os rodean. Guardad mapas, entradas, bolsas de papel y comida: muerden las bolsas para llegar a lo que hay dentro."}
            />
          </p>
        </div>
      </section>
    </JapanRouteDayShell>
  );
}
