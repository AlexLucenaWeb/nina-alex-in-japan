// Spanish for ../universal-studios-stops.js. Stops are keyed by number, the
// lists matched by position. Ride, area and show names stay as they are in
// the park and the app.
export const UNIVERSAL_STUDIOS_NOTES_ES = [
  "Solo Studio Pass, sin Express Pass (decidido). Se compra online con antelación en la web oficial (usjticketing.com), nunca en la puerta.",
  "Super Nintendo World necesita la Area Timed Entry Ticket GRATUITA de la app oficial de USJ. Registrad el Studio Pass en la app antes: la entrada solo se puede pedir una vez dentro del parque, y se agotan, así que pedidla nada más entrar.",
];

export const UNIVERSAL_STUDIOS_RIDES_ES = {
  together: [
    "Yoshi's Adventure",
    "Mario Kart: Koopa's Challenge",
    "JAWS",
    "WaterWorld (espectáculo)",
    "Universal Monsters Live Rock and Roll Show",
    "Tiendas de Hogsmeade y Ollivanders",
    "Opcional: Flight of the Hippogriff, The Flying Snoopy",
  ],
  alexOnly: [
    "The Flying Dinosaur",
    "Hollywood Dream – The Ride",
    "Mine-Cart Madness",
    "Harry Potter and the Forbidden Journey",
    "Jurassic Park The Ride (acaba con una gran caída al agua)",
  ],
  skip: [
    "Minion Mayhem y el Forbidden Journey son simuladores de movimiento intensos: juntos, nos los saltamos.",
  ],
};

export const UNIVERSAL_STUDIOS_TRANSPORT_ES = [
  { line: "Sakaisuji Line, 1 parada (o ~15 min a pie)" },
  { line: "Hanshin Namba Line (tren directo)" },
  { line: "JR Yumesaki (Sakurajima) Line, 2 paradas + a pie por CityWalk" },
  { line: "La misma ruta a la inversa; últimos trenes hacia las 23:30" },
];

export const UNIVERSAL_STUDIOS_STOPS_ES = {
  1: {
    hours: "trenes desde ~05:00 · tarjeta IC",
    desc: "Salimos del hotel a las 07:00: Sakaisuji Line una parada hasta Nippombashi (o ~15 min a pie), un tren directo de la Hanshin Namba Line de Kintetsu-Nippombashi a Nishikujo y después la JR Yumesaki (Sakurajima) Line dos paradas hasta Universal City: ~40 min de puerta a puerta, todo con Suica. Un paseo corto por CityWalk nos deja en las puertas a las 07:45–08:00, 1–1,5 h antes de la apertura.",
  },
  2: {
    hours: "hace falta entrada con hora para la zona",
    desc: "Entramos a las 09:00 y pedimos enseguida en la app de USJ la Area Timed Entry Ticket gratuita, antes que nada, porque se agotan. Luego vamos a la hora que nos toque: el mundo de Mario a tamaño real. Mario Kart: Koopa's Challenge y Yoshi's Adventure, juntos; Mine-Cart Madness, en la ampliación de Donkey Kong Country, es solo para Alex, por la fila de single rider. La hora que nos den marca el resto del día.",
  },
  3: {
    hours: "entrada con hora los días de mucha gente",
    desc: "Hogsmeade reconstruido calle a calle bajo el castillo de Hogwarts. Juntos: las tiendas, Ollivanders y la Butterbeer en el Three Broomsticks, más Flight of the Hippogriff si apetece (una montaña rusa pequeña, para niños). Harry Potter and the Forbidden Journey es solo para Alex, por la fila de single rider. Los días de mucha gente esta zona también necesita su propia entrada con hora: miradlo en la app al pedir la de Nintendo. Comida hacia las 13:00, aquí o en Amity Village (ver Comida).",
  },
  4: {
    time: "Por la tarde",
    hours: "horarios de los espectáculos en la app",
    desc: "Juntos: JAWS, un paseo en barco con narración en directo (puede que nos salpique), y el espectáculo de especialistas de WaterWorld. Mirad los horarios en la app y organizad la tarde en torno a ellos.",
  },
  5: {
    time: "Por la tarde",
    hours: "horario del parque",
    desc: "El bloque de emociones fuertes, para Alex por las filas de single rider (comprobad en la app que single rider funciona ese día): The Flying Dinosaur, una montaña rusa voladora que te lleva boca abajo sobre la laguna; Jurassic Park The Ride, que acaba con una caída de 25 m al agua; y Hollywood Dream – The Ride de vuelta hacia la zona de Hollywood. Mientras, Nina: tiendas, algo de picar, el Universal Monsters Live Rock and Roll Show o The Flying Snoopy. En Jurassic Park uno acaba mojado: un chubasquero o una bolsa estanca para el móvil no es mala idea en noviembre.",
  },
  6: {
    hours: "horario del parque",
    desc: "Juntos: el Minion Park y la zona de Hollywood del parque, por donde pasa el desfile y donde están las tiendas: el sitio natural para terminar cuando cae la luz. Minion Mayhem es un simulador de movimiento intenso, así que nos lo saltamos.",
  },
  7: {
    hours: "restaurantes hasta ~22:00 · entrada libre",
    desc: "El centro comercial entre las puertas del parque y la estación: cinco plantas de restaurantes y tiendas, incluido el Osaka Takoyaki Museum. Cenar aquí es mejor que dentro del parque, y luego el andén está a dos minutos a pie.",
  },
};
