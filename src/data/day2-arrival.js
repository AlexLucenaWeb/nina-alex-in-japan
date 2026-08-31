export const DAY2_TIMELINE = [
  { time: "11:55", event: "Landing at NRT (Doha–Tokyo flight)" },
  { time: "11:55–12:15", event: "Deplane and walk to immigration" },
  {
    time: "12:15–12:35",
    event:
      "Immigration (Visit Japan Web QR) — can stretch to 13:15 at peak times",
  },
  { time: "12:35–12:55", event: "Baggage claim" },
  { time: "12:55–13:05", event: "Customs (Visit Japan Web QR)" },
  { time: "~13:15–13:30", event: "Out into the arrivals hall" },
  {
    time: "13:30–13:50",
    event: "Buy N'EX ticket / top up Suica with Revolut",
  },
  { time: "~14:00", event: "Depart on the Narita Express to Tokyo Station" },
  { time: "~14:55–15:10", event: "Arrive at Tokyo Station" },
  { time: "15:10–15:25", event: "Walk to the Tokaido Shinkansen platform" },
  {
    time: "~15:30",
    event: "Depart on the Nozomi Shinkansen to Shin-Osaka",
  },
  {
    time: "~18:00",
    event: "Arrive in Shin-Osaka (realistic window: 17:30–18:30)",
    highlight: true,
  },
  {
    time: "18:00–18:25",
    event:
      "Shin-Osaka → Hotel Arashi Nippombashi 1 (Midosuji Line to Dobutsuen-mae, then Ebisucho)",
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
    leg: "Narita Airport → Tokyo Station",
    train: "Narita Express (N'EX), reserved seat",
    duration: "~55–70 min",
    price: "¥3,070/person",
    arrival: "Tokyo Station",
  },
  {
    leg: "Transfer on foot",
    train: "—",
    duration: "~10–15 min",
    price: "—",
    arrival: "Tokaido Shinkansen platform",
  },
  {
    leg: "Tokyo Station → Shin-Osaka",
    train: "Shinkansen Nozomi, reserved seat",
    duration: "~2h30",
    price: "¥14,720/person",
    arrival: "Shin-Osaka",
  },
];

export const DAY2_TRANSPORT_COST_NOTE =
  "Total transport cost: ~¥17,790/person (~€97) → ~¥35,580 for both (~€194), at an approximate rate of ¥183/€ (double-check on the day). Prices verified against official JR East / JR Central 2026 fare tables — JR East revised fares in March 2026, so expect the machine/counter price to differ by a few hundred yen either way.";

export const DAY2_TIPS = [
  "Capture the Visit Japan Web QR codes before landing (immigration and customs, for each traveler): screenshot them or save them offline in case there's no wifi right after landing.",
  "Have mobile data active the moment you land: set up an eSIM or pick up a pocket wifi before the trip so you have signal from minute one.",
  "Suica in Apple Wallet: activate and top it up with Revolut ideally before leaving Madrid, or right after landing (Apple Wallet lets you top up without a physical machine).",
  "Buy train tickets at the JR office/machines in Narita, paying with Revolut. The Nozomi can also be booked ahead via the smartEX app, but foreign cards sometimes fail 3D Secure there — the ticket counter doesn't have that problem.",
  "Oversized luggage (over 160 cm height + width + length combined): reserve the large-luggage seat on the Nozomi. It's free, but you have to ask for it explicitly.",
  "You arrive at SHIN-OSAKA, not Osaka Station — they're different stations. From Shin-Osaka the Midosuji subway line runs straight down to Dobutsuen-mae, the stop for the hotel, in about 16 minutes without changing trains.",
  "No rush: we land with the whole afternoon still ahead, so a slow immigration line doesn't put the rest of the day at risk.",
  "Seat E (right-hand side) on the Nozomi = Mt. Fuji views about 40–50 min after leaving Tokyo, weather permitting. Request it when booking.",
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
