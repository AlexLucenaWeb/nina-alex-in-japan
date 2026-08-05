export const DAY1_FLIGHT_LEGS = [
  {
    type: "flight",
    legNumber: 1,
    aircraft: "Boeing 787-9",
    from: { code: "MAD", name: "Madrid–Barajas", terminal: "Terminal 4S" },
    to: { code: "DOH", name: "Doha Hamad Intl." },
    departure: { time: "8:05" },
    arrival: { time: "16:40" },
  },
  {
    type: "layover",
    airport: "DOH",
    duration: "3h 10m",
  },
  {
    type: "flight",
    legNumber: 2,
    aircraft: "Boeing 777-300",
    from: { code: "DOH", name: "Doha Hamad Intl." },
    to: { code: "NRT", name: "Tokyo Narita" },
    departure: { time: "19:50" },
    arrival: { time: "11:55", nextDay: true },
  },
];
