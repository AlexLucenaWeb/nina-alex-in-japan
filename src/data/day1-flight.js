// No booking reference here: the site is public, and the PNR stays in email.
export const DAY1_FLIGHT_LEGS = [
  {
    type: "taxi",
    time: "~5:00",
    to: { code: "MAD", name: "Madrid–Barajas", terminal: "Terminal 4S" },
    note: "Booked in advance. The Madrid Metro opens at 6:00, too late for an 8:05 departure, so public transport isn't an option.",
  },
  {
    type: "flight",
    legNumber: 1,
    airline: "Qatar Airways",
    flightNumber: "QR148",
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
    airline: "Qatar Airways",
    flightNumber: "QR808",
    aircraft: "Boeing 777-300",
    from: { code: "DOH", name: "Doha Hamad Intl." },
    to: { code: "NRT", name: "Tokyo Narita" },
    departure: { time: "19:50" },
    arrival: { time: "11:55", nextDay: true, date: "Thu 12 Nov" },
  },
];
