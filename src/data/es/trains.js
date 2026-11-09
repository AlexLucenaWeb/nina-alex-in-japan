import { withSpanish } from "@/lib/i18n";

// Spanish for ../trains.js, keyed by train id. Train names, cities and
// stations stay as they are on the departure boards; seats and notes are
// translated. The train types and statuses live in TrainCard, since they are
// shared by every train.
export const TRAINS_ES = {
  "day2-narita-express": {
    note: "Se compra en el mostrador o las máquinas de JR en llegadas. Horarios aproximados: depende de inmigración.",
  },
  "day2-nozomi-267": {
    seats: "Coche 6 · Asientos 6-D, 6-E",
    note: "smartEX: cambios gratis antes de la salida. Lado derecho = monte Fuji.",
  },
  "day4-osaka-himeji": {
    note: "Aprox. 1 h, ¥1,520. Salimos hacia las 08:00 para estar en el castillo cuando abre a las 9:00.",
  },
  "day4-himeji-sannomiya": {
    note: "Aprox. 40 min, ~¥990. Después de comer en Miyuki-dori.",
  },
  "day4-sannomiya-namba": {
    note: "Aprox. 45 min, ~¥420. Directo a Osaka-Namba, sin transbordo, después de cenar en Daichi. Se paga con Suica.",
  },
  "day6-universal-city": {
    note: "Transbordo en Nishikujo, unos 30 min de puerta a puerta. Se paga con Suica.",
  },
  "day7-osaka-kyoto": {
    note: "Aprox. 30 min. Salimos del hotel a las ~08:40, con las maletas.",
  },
  "day9-sagano-out": {
    note: "Aprox. 15 min. Salimos del hotel a las 7:15 para estar en el bosque de bambú a las 8:00. Se paga con Suica.",
  },
  "day9-sagano-back": {
    note: "Se paga con Suica.",
  },
  "day10-aoniyoshi": {
    seats: "Asientos dobles",
    note: "Si el personal lo pide, enseñad en el móvil la página de la e-ticket de Kintetsu en directo (no valen capturas). Se entra por los tornos con la tarjeta IC.",
  },
  "day10-kintetsu-return": {
    note: "Vuelta después de cenar, sin reserva. Se paga con Suica.",
  },
  "day12-thunderbird-13": {
    seats: "Coche 5 · Asientos 9C, 9D (lado del lago Biwa)",
    note: "Reservado en JR-WEST ONLINE TRAIN RESERVATION (tarifa normal). Tarifa básica Kyoto City Zone → Kanazawa, válida del 22 al 24 de noviembre. Se recoge en una máquina de JR West en la estación de Kioto: número de reserva + PIN de 4 cifras + tarjeta de pago.",
  },
  "day12-tsurugi-14": {
    note: "Reservado junto con el Thunderbird 13 (JR-WEST ONLINE).",
  },
  "day15-kagayaki": {
    seats: "Coche 9 · Asientos 3A, 3B (lado de los montes Tateyama)",
    note: "Reservado en JR-WEST ONLINE TRAIN RESERVATION (tarifa normal). Sin espacio para equipaje extragrande. Los billetes se recogen al llegar a Kanazawa el Día 12, en una máquina de JR West: número de reserva + PIN de 4 cifras + tarjeta de pago. En Ōmiya, transbordo a la JR Shōnan-Shinjuku Line hacia Hakone.",
  },
  "day16-romancecar": {
    seats: "Coche 1 · Asientos 3A, 3B (estándar)",
    note: "Suplemento de asiento en EMot Online Tickets. El Freepass cubre Hakone-Yumoto → Odawara; la diferencia Odawara → Shinjuku se paga en la máquina de ajuste de tarifa de Shinjuku.",
  },
};

export function localizeTrain(train) {
  return withSpanish(train, TRAINS_ES[train.id]);
}
