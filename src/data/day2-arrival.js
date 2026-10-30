// `steps` are the sub-steps of one timeline entry, in order — Tokyo Station is
// four separate things to do in a short window. `note` is a fallback shown
// under them.
export const DAY2_TIMELINE = [
  { time: "11:55", event: "Land at Narita Terminal 2 (QR808)" },
  {
    time: "~12:00–13:15",
    event:
      "Immigration, baggage claim and customs — each of us shows our own Visit Japan Web QR. At peak times this can stretch to ~13:45.",
  },
  {
    time: "Arrivals hall",
    event:
      "Turn on Ubigi eSIM data and withdraw yen at a 7-Eleven (Seven Bank) ATM.",
  },
  {
    time: "Basement B1",
    event:
      "Follow \"Railways → JR\" (not Keisei) to Narita Airport Terminal 2·3 Station. Buy Narita Express (N'EX) tickets to Tokyo at the JR ticket office or the red reserved-seat machines (English available): ordinary car, 2 adults, pay by card.",
  },
  {
    time: "N'EX to Tokyo",
    event:
      "Take the first convenient train: any N'EX arriving at Tokyo before ~15:30 works, i.e. leaving Narita by ~14:30. Trains run roughly every 30 min, ~55–60 min ride. Tokyo is the first stop and the whole train goes there. Keep the tickets — you need them to exit.",
  },
  {
    time: "~15:00–15:30",
    event:
      "Tokyo Station. The N'EX arrives at the deep underground platforms; allow 15–20 min with luggage.",
    steps: [
      "Buy ekiben for dinner at Ekibenya Matsuri (Central Passage, inside the JR East ticket gates).",
      "Exit through the JR gate, inserting the N'EX ticket.",
      "At the Tokaido Shinkansen entrance, collect the Nozomi tickets at a JR Central ticket machine with the smartEX pickup code + password.",
      "Enter the Shinkansen gates with the paper tickets and take the \"seat information\" slip/tickets back.",
    ],
    note: "Running late (N'EX arriving after ~15:15)? Skip Ekibenya Matsuri and buy bento at the shops inside the Shinkansen area.",
  },
  {
    time: "16:00",
    event: "Nozomi 267 to Shin-Osaka (seats D/E). Ekiben dinner on board.",
    highlight: true,
  },
  {
    time: "18:30",
    event:
      "Arrive at Shin-Osaka. Midosuji Line to Dobutsuen-mae, then one stop on the Sakaisuji Line to Ebisucho (or ~10 min walk).",
  },
  {
    time: "~19:00",
    event: "Check in at Hotel Arashi Nippombashi 1.",
  },
];

export const DAY2_AIRPORT_PROCESS = [
  {
    step: "Deplane + walk to immigration",
    duration: "~20 min",
    notes: "Depends on the arrival gate",
  },
  {
    step: "Immigration (Visit Japan Web QR)",
    duration: "10–20 min",
    notes:
      "At peak times (several long-haul flights landing together): 45–60 min",
  },
  {
    step: "Baggage claim",
    duration: "15–20 min",
    notes: "Can vary if the flight is delayed or the belt is busy",
  },
  {
    step: "Customs (Visit Japan Web QR)",
    duration: "5–10 min",
    notes: "The QR lane is noticeably faster than the paper declaration lane",
  },
];

export const DAY2_TRAINS = [
  {
    leg: "Narita → Tokyo",
    train: "Narita Express (N'EX), reserved seat",
    duration: "~55–60 min",
    price: "¥3,140/person (JR East fare, March 2026)",
  },
  {
    leg: "Tokyo platform transfer",
    train: "On foot",
    duration: "~15–20 min",
    price: "—",
  },
  {
    leg: "Tokyo → Shin-Osaka",
    train: "Nozomi 267 (16:00 → 18:30), seats D/E",
    duration: "~2h30",
    price: "Booked (smartEX)",
  },
  {
    leg: "Shin-Osaka → Ebisucho",
    train: "Osaka Metro (Midosuji + Sakaisuji)",
    duration: "~25 min door to door",
    price: "IC card",
  },
];

export const DAY2_TIPS = [
  "Save the smartEX pickup code + password offline before the trip — you need them to print the Nozomi tickets.",
  "If immigration runs long and you won't make the 16:00, change to a later Nozomi in smartEX BEFORE 16:00 (free with the standard smartEX fare).",
  "Each of you has your own Visit Japan Web QR — have screenshots ready offline.",
  "Suica in Apple Wallet (Express Transit on) is for local transport: Osaka Metro, buses, konbini. It is NOT used for the Nozomi.",
  "If the Suica top-up fails in Apple Wallet, top up with cash at any station machine or 7-Eleven.",
  "Mt. Fuji: seat E (right side) passes Fuji ~40–50 min after leaving Tokyo (~16:45). Sunset in mid-November is ~16:30, so at best you'll see its silhouette against the dusk sky, and only on a clear day.",
];

// Where we sleep for the Osaka half of the trip: nights 2 to 6, checking out
// on the morning of Day 7 to move up to Kyoto.
export const DAY2_HOTEL = {
  name: "Hotel Arashi Nippombashi 1",
  jp: "嵐 日本橋1号店",
  address: "5-13-18 Nipponbashi, Naniwa-ku, Osaka 556-0005",
  maps: "https://www.google.com/maps/search/?api=1&query=Hotel+Arashi+Nippombashi+1+5-13-18+Nipponbashi+Naniwa-ku+Osaka",
  station: "Ebisucho (Sakaisuji Line), 2 min on foot · Imamiyaebisu, 7 min",
  checkIn: "16:00–24:00 (front desk open 24 h)",
  checkOut: "Before 11:00",
  directions:
    "Midosuji Line from Shin-Osaka straight to Dobutsuen-mae (~16 min, ~¥290, no changes), then either one stop on the Sakaisuji Line to Ebisucho or a 10-minute walk. Roughly 25 minutes door to door with luggage.",
  note: "In Nipponbashi, a few minutes from Den-Den Town and Tsutenkaku, and a 15-minute walk south of Dotonbori — the same Minami district Day 3 walks through.",
};
