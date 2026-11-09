import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day16Stops as STOPS_EN } from "@/data/day16-stops";
import { DAY16_STOPS_ES } from "@/data/es/day16-stops";
import { withSpanish, withSpanishByStop } from "@/lib/i18n";

const day16Stops = withSpanishByStop(STOPS_EN, DAY16_STOPS_ES);

// Same as Days 13 and 14: this day's route lives in a Google My Maps map, so it
// can be edited from Google Maps without touching the stop data in the repo.
// Set it to null to hide the map section — DayMapEmbed has no empty state.
//
// The Gōra hotel is a surprise, so it is never named on this page — only
// "check-out in Gōra".
const MY_MAPS_ID = "1SS_yaVXTxE9WGhvUeIM3DlI7IDuI134";

const TICKETS_EN = [
  {
    text: "Everything is on EMot Online Tickets, each of us on our own iPhone: the 2-day Hakone Freepass (Odawara version, valid Nov 25–26 — to be bought on Nov 22) and the Romancecar seat (booked).",
    link: {
      href: "https://emot-tickets.jp",
      label: "EMot Online Tickets →",
    },
  },
  "Freepass: show the animated pass screen at the manned gates, on the cable car, ropeway, pirate ship and buses. Screenshots don't work — keep the phone charged and bring the power bank.",
  "Covers: Gōra Park entry, cable car, ropeway, pirate ship, Hakone Tozan bus and the train Hakone-Yumoto → Odawara. Not covered: the Romancecar seat surcharge (bought separately on EMot).",
  "Romancecar Hakone 18: Hakone-Yumoto 17:46 → Shinjuku 19:26, car 1, seats 3A & 3B (booked). The EMot ticket is only the seat surcharge.",
  "Odawara → Shinjuku is not covered by our Freepass (¥910 per person). Enter at Hakone-Yumoto with the Freepass and, at Shinjuku, pay the difference at the fare adjustment machine (精算機) or the window next to it before the gates. Don't tap the iPhone IC card at the exit gate — we didn't enter with it.",
  "Shinjuku → Akasaka-mitsuke on the Marunouchi Line: pay with the IC card (~¥210).",
];

const TICKETS_ES = [
  {
    "text": "Todo está en EMot Online Tickets, cada uno en su iPhone: el Hakone Freepass de 2 días (versión de Odawara, válido del 25 al 26 de noviembre; se compra el 22) y el asiento del Romancecar (reservado)."
  },
  "Freepass: enseñad la pantalla animada del pase en los tornos con personal, en el funicular, el teleférico, el barco pirata y los buses. Las capturas no valen: llevad el móvil cargado y la batería externa.",
  "Incluye: la entrada al parque de Gōra, el funicular, el teleférico, el barco pirata, el bus Hakone Tozan y el tren Hakone-Yumoto → Odawara. No incluye: el suplemento del asiento del Romancecar (comprado aparte en EMot).",
  "Romancecar Hakone 18: Hakone-Yumoto 17:46 → Shinjuku 19:26, coche 1, asientos 3A y 3B (reservado). El billete de EMot es solo el suplemento del asiento.",
  "Odawara → Shinjuku no está incluido en nuestro Freepass (¥910 por persona). Se entra en Hakone-Yumoto con el Freepass y, en Shinjuku, se paga la diferencia en la máquina de ajuste de tarifa (精算機) o en la ventanilla de al lado, antes de los tornos. No paséis la tarjeta IC del iPhone en el torno de salida: no entramos con ella.",
  "Shinjuku → Akasaka-mitsuke en la Marunouchi Line: con la tarjeta IC (~¥210)."
];

const TICKETS = withSpanish(TICKETS_EN, TICKETS_ES);

const LUGGAGE_EN = [
  "Only if we bring a small suitcase to Hakone (with day packs only, skip this): ask the front desk about the Hakone Carry Service to Hakone-Yumoto Station — drop off by 10:00, pick up at the station 13:30–19:00.",
  "The big suitcases were sent from Kanazawa by takkyubin and arrive at Hotel SUI Akasaka today.",
];

const LUGGAGE_ES = [
  "Solo si llevamos una maleta pequeña a Hakone (si vamos solo con mochilas, saltad esto): preguntad en recepción por el Hakone Carry Service hasta la estación de Hakone-Yumoto; se deja antes de las 10:00 y se recoge en la estación de 13:30 a 19:00.",
  "Las maletas grandes se mandaron desde Kanazawa por takkyubin y llegan hoy al Hotel SUI Akasaka."
];

const LUGGAGE = withSpanish(LUGGAGE_EN, LUGGAGE_ES);

const PLAN_B_EN = [
  "Ropeway closed (volcanic gas or wind): substitute buses run on the ropeway route; check status at hakonenavi.jp that morning.",
  "Fog or strong wind: the pirate ship may be cancelled → bus from Tōgendai to Moto-Hakone.",
  "Rain: skip the cedar avenue and take the bus straight from the shrine area.",
];

const PLAN_B_ES = [
  "Teleférico cerrado (gases volcánicos o viento): hay buses que sustituyen la ruta del teleférico; mirad el estado en hakonenavi.jp esa mañana.",
  "Niebla o viento fuerte: puede que se cancele el barco pirata → bus de Tōgendai a Moto-Hakone.",
  "Lluvia: nos saltamos la avenida de cedros y cogemos el bus directamente desde la zona del santuario."
];

const PLAN_B = withSpanish(PLAN_B_EN, PLAN_B_ES);

export default function HakoneLoopItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  The classic Hakone loop, all on the Freepass:
                </span>{" "}
                momiji at Gōra Park, the cable car and ropeway over the steaming
                crater at Ōwakudani, the pirate ship across Lake Ashi, and Hakone
                Shrine with its torii in the water.
              </p>
              <p className="mt-2">
                Check-out in Gōra by ~8:45, then down to Hakone-Yumoto for the
                17:46 Romancecar to Shinjuku — at the hotel in Akasaka around 20:00.
              </p>
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  La vuelta clásica por Hakone, toda con el Freepass:
                </span>{" "}
                momiji en el parque de Gōra, el funicular y el teleférico sobre el cráter
                humeante de Ōwakudani, el barco pirata por el lago Ashi y el santuario de
                Hakone con su torii en el agua.
              </p>
              <p className="mt-2">
                Check-out en Gōra hacia las ~8:45 y bajada a Hakone-Yumoto para el
                Romancecar de las 17:46 a Shinjuku: en el hotel de Akasaka hacia las 20:00.
              </p>
            </>
          }
        />
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

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Itinerary" es="Itinerario" />
        </h2>

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
        <h2 className="font-display text-2xl font-semibold">
          <L en="Tickets" es="Billetes" />
        </h2>
        <BulletList items={TICKETS} />
      </section>

      <section aria-label="Luggage" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Luggage" es="Equipaje" />
        </h2>
        <BulletList items={LUGGAGE} />
      </section>

      <section aria-label="Plan B" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">Plan B</h2>
        <BulletList items={PLAN_B} />
      </section>
    </JapanRouteDayShell>
  );
}
