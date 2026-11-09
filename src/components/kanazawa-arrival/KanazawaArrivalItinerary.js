import L from "@/components/L";
import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { day12Stops as STOPS_EN } from "@/data/day12-stops";
import { DAY12_STOPS_ES } from "@/data/es/day12-stops";
import { enText, withSpanish, withSpanishByStop } from "@/lib/i18n";

const day12Stops = withSpanishByStop(STOPS_EN, DAY12_STOPS_ES);

// Same as Days 3, 7, 8 and 9: this day's route lives in a Google My Maps map
// instead of the Leaflet component, so it can be edited from Google Maps
// without touching the stop data in the repo. Set it to null to hide the map
// section — DayMapEmbed has no empty state.
const MY_MAPS_ID = "1alodWM4d0v2rPVRTsCdFjT9cXpuqfWY";

const CONNECTIONS_EN = [
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

const CONNECTIONS_ES = [
  {
    "thunderbird": "13 (reservado)",
    "note": "Transbordo de 15 min, tren rápido"
  },
  {
    "note": "Transbordo justo de 9 min; el Tsurugi para en todas las estaciones"
  },
  {
    "thunderbird": "17 (mejor plan B)",
    "note": "Transbordo cómodo de 14 min, tren rápido"
  }
];

const CONNECTIONS = withSpanish(CONNECTIONS_EN, CONNECTIONS_ES);

const GOOD_TO_KNOW_EN = [
  "Collect the tickets before boarding, at a JR West (JR西日本) reserved-ticket machine — the ones marked 'e5489' / 予約したきっぷの受取 — in the JR concourse at Kyoto Station. Don't use the JR Central (JR東海) machines in the Tokaido Shinkansen area: they can't issue JR-WEST ONLINE bookings. Switch to English → 'Pick up reserved tickets' → insert the physical card used to pay (Revolut Metal) → enter the reservation number and the 4-digit PIN → check it shows Thunderbird 13 (car 5, 9C & 9D) and Tsurugi 14 for 2 adults → print. Allow ~10 min; be at the station by ~9:40.",
  "You'll get several tickets each (basic fare + limited express tickets). Split them into one set per person and insert all of them together at every gate — at Kyoto, and again when changing to the shinkansen at Tsuruga. The gate keeps them at Kanazawa; ask staff for a stamp ('souvenir, please') if you want to keep them.",
  "If the machine fails: go to the JR ticket office (Midori-no-madoguchi, みどりの窓口) with passports, the payment card and the booking email. Keep the reservation number, PIN and confirmation email saved offline on the phone.",
  "On arrival at Kanazawa Station, collect the tickets for Day 15 (Wed Nov 25): Kagayaki 506, Kanazawa 09:07 → Ōmiya 11:11, car 9, seats 3A & 3B. Use a JR West reserved-ticket machine ('e5489' / 予約したきっぷの受取) in the station, same as in Kyoto: English → 'Pick up reserved tickets' → insert the payment card (Revolut Metal) → reservation number + 4-digit PIN → check Kagayaki 506 for 2 adults → print. Doing it today saves a rush on the morning of the 25th.",
  "Nov 23 is a public holiday (Labour Thanksgiving Day): the 22nd is a busy holiday weekend — expect crowds and queues.",
  "Omicho on a Sunday: many stalls closed, restaurants open. Tomorrow is a holiday too (about half the stalls open), so make today's lunch count.",
  "Shima's hours vary between sources (9:00–18:00 vs 9:30–17:30) — plan to arrive before 17:00.",
  "The Kanazawa Light-up Bus only runs on Saturdays and special dates, so walk to the castle instead (5 min from the hotel via Oyama Shrine).",
  "Hokutetsu buses (including the Loop Bus) don't accept Suica/ICOCA: tap a contactless card or Apple Pay on boarding and on getting off.",
  "Thunderbird has no onboard food or drink sales.",
  "It gets dark around 16:40 — do Higashi Chaya in the early afternoon.",
  "Castle park and Kenroku-en light-up tonight: free, 18:00–21:00 (last entry 20:45).",
];

const GOOD_TO_KNOW_ES = [
  "Recoged los billetes antes de subir, en una máquina de billetes reservados de JR West (JR西日本), las que ponen 'e5489' / 予約したきっぷの受取, en el vestíbulo de JR de la estación de Kioto. No uséis las máquinas de JR Central (JR東海) de la zona del Tokaido Shinkansen: no pueden emitir reservas de JR-WEST ONLINE. Cambiad a inglés → 'Pick up reserved tickets' → meted la tarjeta física con la que se pagó (Revolut Metal) → introducid el número de reserva y el PIN de 4 cifras → comprobad que salen el Thunderbird 13 (coche 5, 9C y 9D) y el Tsurugi 14 para 2 adultos → imprimir. Contad ~10 min; estad en la estación a las ~9:40.",
  "Os darán varios billetes a cada uno (tarifa básica + billetes de expreso limitado). Separadlos en un juego por persona y meted todos juntos en cada torno: en Kioto, y otra vez al cambiar al shinkansen en Tsuruga. En Kanazawa el torno se los queda; si queréis guardarlos, pedid al personal que los sellen ('souvenir, please').",
  "Si la máquina falla: id a la oficina de billetes de JR (Midori-no-madoguchi, みどりの窓口) con los pasaportes, la tarjeta de pago y el email de la reserva. Tened el número de reserva, el PIN y el email de confirmación guardados sin conexión en el móvil.",
  "Al llegar a la estación de Kanazawa, recoged los billetes del Día 15 (miércoles 25 de noviembre): Kagayaki 506, Kanazawa 09:07 → Ōmiya 11:11, coche 9, asientos 3A y 3B. En una máquina de billetes reservados de JR West ('e5489' / 予約したきっぷの受取) de la estación, igual que en Kioto: inglés → 'Pick up reserved tickets' → la tarjeta de pago (Revolut Metal) → número de reserva + PIN de 4 cifras → comprobad el Kagayaki 506 para 2 adultos → imprimir. Hacerlo hoy evita prisas la mañana del 25.",
  "El 23 de noviembre es festivo (Día de Acción de Gracias por el Trabajo): el 22 es un fin de semana largo con mucho movimiento, así que contad con gente y colas.",
  "Omicho en domingo: muchos puestos cerrados y los restaurantes abiertos. Mañana también es festivo (abre más o menos la mitad de los puestos), así que aprovechad la comida de hoy.",
  "El horario de Shima varía según la fuente (9:00–18:00 o 9:30–17:30): mejor llegar antes de las 17:00.",
  "El Kanazawa Light-up Bus solo funciona los sábados y fechas especiales, así que al castillo se va andando (5 min desde el hotel pasando por el santuario Oyama).",
  "Los buses de Hokutetsu (incluido el Loop Bus) no aceptan Suica/ICOCA: pasad una tarjeta contactless o Apple Pay al subir y al bajar.",
  "En el Thunderbird no venden comida ni bebida a bordo.",
  "Anochece hacia las 16:40: id a Higashi Chaya a primera hora de la tarde.",
  "Iluminación del parque del castillo y Kenroku-en esta noche: gratis, 18:00–21:00 (última entrada 20:45)."
];

const GOOD_TO_KNOW = withSpanish(GOOD_TO_KNOW_EN, GOOD_TO_KNOW_ES);

export default function KanazawaArrivalItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <L
          as="div"
          en={
            <>
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
            </>
          }
          es={
            <>
              <p>
                <span className="font-semibold text-momiji">
                  De Kioto al mar de Japón a la hora de comer.
                </span>{" "}
                El Thunderbird por la orilla del lago Biwa, un transbordo rápido en Tsuruga
                al Hokuriku Shinkansen y Kanazawa a mediodía: maletas en el hotel, comida
                en Omicho y la tarde en los antiguos barrios de casas de té.
              </p>
              <p className="mt-2">
                La noche es la razón de venir hoy: el parque del castillo y Kenroku-en
                están iluminados por el otoño, con entrada gratis y a cinco minutos a pie
                del hotel.
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

      <section aria-label="Getting there" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Getting there" es="Cómo llegar" />
        </h2>

        <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <p>
            <span className="font-semibold text-momiji">Thunderbird 13</span>{" "}
            Kyoto 10:09 → Tsuruga 11:02
          </p>
          <p className="mt-1">
            <span className="font-semibold text-momiji">Tsurugi 14</span>{" "}
            Tsuruga 11:17 → Kanazawa 12:02
          </p>
          <L
            as="p"
            en={
              <>
                <span className="font-semibold text-pine">Booked:</span>{" "}
                Thunderbird 13, car 5, seats 9C &amp; 9D (the Lake Biwa side).
                Tsurugi 14 booked together with it. Basic fare Kyoto City Zone
                → Kanazawa, valid Nov 22–24.
              </>
            }
            es={
              <>
                <span className="font-semibold text-pine">Reservado:</span>{" "}
                Thunderbird 13, coche 5, asientos 9C y 9D (lado del lago
                Biwa). El Tsurugi 14, reservado junto con él. Tarifa básica
                Kyoto City Zone → Kanazawa, válida del 22 al 24 de noviembre.
              </>
            }
          />
          <p className="mt-2 text-ink/60">
            <L
              en={"The fast Tsurugi, stopping only at Fukui. No luggage space reservation needed on this route."}
              es={"El Tsurugi rápido, que solo para en Fukui. En esta ruta no hace falta reservar espacio para el equipaje."}
            />
          </p>
        </div>

        <h3 className="mt-2 font-display text-lg font-semibold text-pine">
          <L en="If you miss it" es="Si se escapa el tren" />
        </h3>
        <DataTable
          columns={[
            "Thunderbird",
            <L key="Kyoto dep." en="Kyoto dep." es="Salida Kyoto" />,
            <L key="Tsuruga arr." en="Tsuruga arr." es="Llegada Tsuruga" />,
            "Tsurugi",
            <L key="Tsuruga dep." en="Tsuruga dep." es="Salida Tsuruga" />,
            <L key="Kanazawa arr." en="Kanazawa arr." es="Llegada Kanazawa" />,
            <L key="Note" en="Note" es="Nota" />,
          ]}
          minWidth="720px"
        >
          {CONNECTIONS.map((row) => (
            <tr
              key={enText(row.thunderbird)}
              className="border-b border-line/50 last:border-0"
            >
              <td className="whitespace-nowrap px-4 py-3 font-medium text-momiji">
                <L v={row.thunderbird} />
              </td>
              <td className="px-4 py-3 text-ink/80">{row.kyotoDep}</td>
              <td className="px-4 py-3 text-ink/80">{row.tsurugaArr}</td>
              <td className="px-4 py-3 text-ink/80">{row.tsurugi}</td>
              <td className="px-4 py-3 text-ink/80">{row.tsurugaDep}</td>
              <td className="px-4 py-3 text-ink/80">{row.kanazawaArr}</td>
              <td className="px-4 py-3 text-ink/80">
                <L v={row.note} />
              </td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm leading-relaxed text-ink/80">
          <L
            en={"If you miss your train: the tickets were bought as regular fares on JR-WEST ONLINE TRAIN RESERVATION — change the reservation at a JR ticket office or machine before boarding another train. It's a holiday weekend and seats sell out."}
            es={"Si se escapa el tren: los billetes se compraron como tarifas normales en JR-WEST ONLINE TRAIN RESERVATION; cambiad la reserva en una oficina o máquina de JR antes de subir a otro tren. Es fin de semana largo y los asientos se agotan."}
          />
        </p>
      </section>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">
          <L en="Itinerary" es="Itinerario" />
        </h2>

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
        <h2 className="font-display text-2xl font-semibold">
          <L en="Good to know" es="A tener en cuenta" />
        </h2>
        <BulletList items={GOOD_TO_KNOW} />
      </section>
    </JapanRouteDayShell>
  );
}
