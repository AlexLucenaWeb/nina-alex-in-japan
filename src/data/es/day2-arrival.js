// Spanish for ../day2-arrival.js, export by export and matched by position.
// Times, prices, stations and train names stay as they are.
export const DAY2_TIMELINE_ES = [
  { event: "Aterrizamos en Narita Terminal 2 (QR808)" },
  {
    event:
      "Inmigración, recogida de equipaje y aduana: cada uno enseña su propio QR de Visit Japan Web. En horas punta puede alargarse hasta ~13:45.",
  },
  {
    time: "Vestíbulo de llegadas",
    event:
      "Activamos los datos de la eSIM de Ubigi y sacamos yenes en un cajero de 7-Eleven (Seven Bank).",
  },
  {
    time: "Planta B1",
    event:
      "Seguimos \"Railways → JR\" (no Keisei) hasta la estación Narita Airport Terminal 2·3. Compramos los billetes del Narita Express (N'EX) a Tokio en la oficina de JR o en las máquinas rojas de asientos reservados (en inglés): vagón normal, 2 adultos, pago con tarjeta.",
  },
  {
    time: "N'EX a Tokio",
    event:
      "Cogemos el primer tren que nos venga bien: cualquier N'EX que llegue a Tokio antes de las ~15:30 sirve, es decir, saliendo de Narita como tarde a las ~14:30. Hay trenes cada ~30 min y el trayecto dura ~55–60 min. Tokio es la primera parada y todo el tren va hasta allí. Guardad los billetes: hacen falta para salir.",
  },
  {
    event:
      "Estación de Tokio. El N'EX llega a los andenes subterráneos más profundos; contad 15–20 min con el equipaje.",
    steps: [
      "Comprar ekiben para la cena en Ekibenya Matsuri (Central Passage, dentro de los tornos de JR East).",
      "Salir por el torno de JR metiendo el billete del N'EX.",
      "En la entrada del Tokaido Shinkansen, recoger los billetes del Nozomi en una máquina de JR Central con el código de recogida de smartEX + contraseña.",
      "Entrar por los tornos del Shinkansen con los billetes en papel y recoger de vuelta los billetes y el resguardo de \"información de asiento\".",
    ],
    note: "¿Vamos tarde (con el N'EX llegando después de las ~15:15)? Nos saltamos Ekibenya Matsuri y compramos el bento en las tiendas de dentro de la zona del Shinkansen.",
  },
  {
    event: "Nozomi 267 a Shin-Osaka (asientos D/E). Cena de ekiben a bordo.",
  },
  {
    event:
      "Llegada a Shin-Osaka. Midosuji Line hasta Dobutsuen-mae y una parada en la Sakaisuji Line hasta Ebisucho (o ~10 min a pie).",
  },
  {
    event: "Check-in en el Hotel Arashi Nippombashi 1.",
  },
];

export const DAY2_AIRPORT_PROCESS_ES = [
  {
    step: "Bajar del avión + andar hasta inmigración",
    notes: "Depende de la puerta de llegada",
  },
  {
    step: "Inmigración (QR de Visit Japan Web)",
    notes:
      "En horas punta (varios vuelos largos aterrizando a la vez): 45–60 min",
  },
  {
    step: "Recogida de equipaje",
    notes: "Puede variar si el vuelo se retrasa o la cinta va cargada",
  },
  {
    step: "Aduana (QR de Visit Japan Web)",
    notes: "La fila del QR es bastante más rápida que la de la declaración en papel",
  },
];

export const DAY2_TRAINS_ES = [
  {
    leg: "Narita → Tokio",
    train: "Narita Express (N'EX), asiento reservado",
    price: "¥3,140/persona (tarifa de JR East, marzo de 2026)",
  },
  {
    leg: "Cambio de andén en Tokio",
    train: "A pie",
  },
  {
    leg: "Tokio → Shin-Osaka",
    train: "Nozomi 267 (16:00 → 18:30), asientos D/E",
    price: "Reservado (smartEX)",
  },
  {
    duration: "~25 min de puerta a puerta",
    price: "Tarjeta IC",
  },
];

export const DAY2_TIPS_ES = [
  "Guardad sin conexión el código de recogida y la contraseña de smartEX antes del viaje: hacen falta para imprimir los billetes del Nozomi.",
  "Si inmigración se alarga y no llegamos al de las 16:00, cambiad a un Nozomi posterior en smartEX ANTES de las 16:00 (gratis con la tarifa estándar de smartEX).",
  "Cada uno tiene su propio QR de Visit Japan Web: tened las capturas listas sin conexión.",
  "La Suica en Apple Wallet (con Express Transit activado) es para el transporte local: Osaka Metro, autobuses, konbini. NO se usa para el Nozomi.",
  "Si la recarga de la Suica falla en Apple Wallet, recargad en efectivo en cualquier máquina de estación o en un 7-Eleven.",
  "Monte Fuji: el asiento E (lado derecho) pasa junto al Fuji ~40–50 min después de salir de Tokio (~16:45). La puesta de sol a mediados de noviembre es hacia las 16:30, así que como mucho veremos su silueta contra el cielo del atardecer, y solo si está despejado.",
];

export const DAY2_HOTEL_ES = {
  station: "Ebisucho (Sakaisuji Line), 2 min a pie · Imamiyaebisu, 7 min",
  checkIn: "16:00–24:00 (recepción abierta 24 h)",
  checkOut: "Antes de las 11:00",
  directions:
    "Midosuji Line desde Shin-Osaka directa a Dobutsuen-mae (~16 min, ~¥290, sin transbordos) y después una parada en la Sakaisuji Line hasta Ebisucho, o 10 minutos a pie. Unos 25 minutos de puerta a puerta con equipaje.",
  note: "En Nipponbashi, a pocos minutos de Den-Den Town y Tsutenkaku, y a 15 minutos a pie al sur de Dotonbori: el mismo barrio de Minami que recorremos el Día 3.",
};
