export const TRIP_LENGTH = 21;

const overrides = {
  1: {
    title: "Flight to Tokyo",
    date: "November 11",
    location: "Madrid → Doha → Tokyo (in transit)",
    summary:
      "Travel day: two long-haul flights via Doha to reach Japan. No sightseeing today — just the journey from Madrid to Narita, landing the morning of Day 2.",
    recommendations: [
      "Check in online and pick seats in advance — long-haul widebodies like the 787-9 and 777-300 fill up fast.",
      "Get to Madrid–Barajas Terminal 4S at least 2.5–3 hours before the 8:05 departure.",
      "The 3h10 layover in Doha is comfortable — enough time for a walk around Hamad International, but keep an eye on the boarding time for the connection.",
      "Try to sleep on the Doha–Tokyo leg to start adjusting to Japan time before landing.",
      "Set your watch to Japan time (UTC+9) once you board the second flight.",
      "Keep any Japan arrival documents (customs form, Visit Japan Web QR, etc.) in your carry-on for a smooth arrival at Narita.",
    ],
  },
  2: {
    title: "Arrival in Osaka",
    date: "November 12",
    location: "Tokyo (NRT) → Shin-Osaka (in transit)",
    summary:
      "Landing at Narita and heading straight for Osaka: immigration with the Visit Japan Web QR, the Narita Express to Tokyo Station, then the Nozomi Shinkansen down to Shin-Osaka. Full airport process, train details, and a pre-flight checklist below.",
  },
  3: {
    title: "Osaka on Foot: South & Minami",
    date: "November 13",
    location: "Osaka",
    summary:
      "Osaka from south to north, on foot: the old temple at Shitenno-ji, kushikatsu under the Tsutenkaku tower in Shinsekai, then across into Minami for a quiet shrine, the Kuromon Ichiba food market, Shinsaibashi-suji and the lantern alley at Hozenji — finishing in Dotonbori as the neon comes on. See the interactive map and stop-by-stop itinerary below.",
  },
  4: {
    title: "Himeji & Kobe",
    date: "November 14",
    location: "Himeji & Kobe (from Osaka)",
    summary:
      "A day trip out of Osaka to two cities: the White Heron castle in Himeji in the morning — the finest original castle left in Japan — and the port city of Kobe in the afternoon, from the Western merchant houses of Kitano down to Chinatown and the harbour at dusk. Kobe beef for dinner.",
    recommendations: [
      "Leave Osaka around 08:00. The castle opens at 9:00, and arriving with it is the difference between walking in and queuing for tickets.",
      "Buy the combined castle + Koko-en ticket (¥2,600) at the castle gate rather than paying for each separately. Under-18s get into the castle free.",
      "Budget roughly ¥8,000 per person for the day including trains and entry — Kobe beef for dinner is on top of that.",
      "The castle keep is steep, with narrow wooden stairs and no shoes allowed inside: easy shoes to take off and put back on save a lot of fumbling.",
      "Book Kobe beef for dinner before you travel. The places worth going to fill up, weeknight or not.",
      "Nankinmachi is at its liveliest at weekends — but it's street food either way, so keep lunch on Miyuki-dori light.",
      "Sunset is around 17:00 in November and the route reaches Meriken Park at 16:45, which is when the port lights come on. Don't rush that last stretch.",
    ],
  },
  5: {
    title: "Osaka Kita: Castle, River & Umeda",
    date: "November 15",
    location: "Osaka",
    summary:
      "The other half of Osaka: a long morning at the castle and its park, the Ōkawa river by boat as far as OAP and a walk across to the red brick of Nakanoshima, the 173 m open-air observatory at Umeda with lunch underneath it, then back south for the shrine, Japan's longest shopping arcade and Magic: The Gathering to finish. The day the Osaka Amazing Pass earns its keep.",
    recommendations: [
      "Buy the Amazing Pass the night before. It's digital now, so there's nothing to queue for in the morning — and paying the day separately comes to about ¥4,300–4,500 a head against ¥3,300 for the pass.",
      "Be up the Umeda Sky Building before 15:00. After that the pass gives 10% off instead of free entry, which is most of the day's saving gone in one stop — which is why the observatory comes at 14:00 and lunch after it.",
      "The castle gets 2h30 rather than a quick look. The keep is a concrete reconstruction with a museum inside; the park, the moats and the walls are free and are the better part anyway.",
      "Take the 12:00 Aqua-liner and get off at OAP — not the full 55-minute loop. It sails on the hour, so missing it costs a full hour, and the OAP stop only runs at weekends.",
      "Tenjinbashisuji runs 2.6 km — nobody walks all of it. Drop in at the Tenmangu end and come out at whichever metro stop you've had enough at.",
      "Take your passports: Hareruya is tax-free, and it's the kind of shop where that adds up.",
    ],
  },
  6: {
    title: "Universal Studios Japan",
    date: "November 16",
    location: "Universal Studios Japan, Osaka",
    summary:
      "A full day inside USJ: Super Nintendo World first thing, Hogsmeade and the Forbidden Journey late morning, dinosaurs after lunch, and the Minion Park and Hollywood end of the park as the light goes. Dinner at CityWalk on the way out.",
    recommendations: [
      "Express Pass is the alternative to the 07:30 queue: it's expensive, sells out online well before the date, and the versions that include Super Nintendo World are the first to go. Decide which side of that trade-off you're on before booking anything.",
      "A day almost entirely on your feet and outdoors, with long stretches queuing without moving — comfortable shoes, and a warm layer for standing still in November.",
      "The app shows live waiting times for every ride. Checking it before walking across the park is the difference between three big attractions in an afternoon and one.",
      "Lockers by the entrance are worth the coins: the water rides in Jurassic Park mean carrying a wet coat around otherwise.",
      "Last trains from Universal City are around 23:30, so there's no pressure on dinner at CityWalk — the pressure is all in the morning.",
    ],
  },
  7: {
    title: "Osaka → Kyoto",
    date: "November 17",
    location: "Osaka → Kyoto",
    summary:
      "Moving base: an early check-out in Osaka and the short hop up to Kyoto, which is home for the rest of the trip. The rest of the day is still open.",
  },
  8: {
    title: "Day Trip to Nara",
    date: "November 18",
    location: "Nara (from Kyoto)",
    summary:
      "A day out of Kyoto, then everything on foot inside Nara Park: Kōfuku-ji, the Great Buddha at Tōdai-ji, the view from Nigatsu-dō, a long lunch, the Isuien and Yoshikien gardens, the lantern shrine at Kasuga Taisha, and the light going gold over the Ukimidō pavilion. Deer throughout. Dinner in Naramachi before the train back.",
    recommendations: [
      {
        text: "Still to settle: which train out. Kyoto–Kintetsu-Nara is ~35 min by limited express (¥1,280) or ~45 min on a regular express (¥760). The Aoniyoshi sightseeing train also runs this line, but its first departure from Kyoto is 10:55 — later than the 10:15 start below. If you want it, book as far ahead as you can (¥1,490, no service on Thursdays, seats on sale at 10:30 Japan time exactly one month before).",
        link: {
          href: "https://www.ticket.kintetsu.co.jp/vs/en/e-ticket/",
          label: "Book on Kintetsu (English) →",
        },
      },
      "Take your passport: it's what gets you into Yoshikien for free. Isuien next door is ¥1,200, and both close at 16:30 — the earliest closing time of the day.",
      "A day almost entirely outdoors — comfortable shoes, and layers for the morning.",
      "Between Tōdai-ji, Nigatsu-dō and Kasuga Taisha there's 20–25 minutes of walking through the park each time; budget the walking, not just the visits.",
      "The deer are wild animals: feed them the crackers straight away, and keep maps, tickets and food out of reach.",
      "Sunset is around 17:00 in November. The route reaches Ukimidō at 15:30, and Naramachi is five minutes away — it's worth walking back to the pond at dusk before dinner.",
      "Come back into Kintetsu-Nara rather than JR Nara: it's a short walk from the park, and the regular Kintetsu train back to Kyoto is cheap and frequent.",
    ],
  },
  14: {
    title: "Higashiyama & Gion",
    location: "Kyoto",
    summary:
      "A full day on foot through Kyoto's Higashiyama district and Gion: temples, stone-paved lanes, and the old teahouse streets. See the interactive map and stop-by-stop itinerary below.",
    recommendations: [
      "Start at Kiyomizu-dera right at opening (8:30) to beat the crowds and get the best light for photos.",
      "Carry cash — many small shops on Sannenzaka and Ninenzaka, and some temple entry fees, don't take cards.",
      "Kennin-ji closes at 16:30, earlier than the other stops — plan to reach it by mid-afternoon.",
      "Wear comfortable walking shoes: the route covers stone-paved slopes and lanes, with about 20–25 minutes of walking between stops.",
      "Respect the no-photo signs in residential areas like Ishibei-koji and in Gion's private alleys — fines apply.",
      "Visiting in November? Kōdai-ji and Kiyomizu-dera reopen at night for the autumn illuminations — worth a return visit after dark.",
      "For the best chance of spotting a maiko or geiko, be on Hanamikoji-dori around dusk (17:00–18:00).",
    ],
  },
};

export const days = Array.from({ length: TRIP_LENGTH }, (_, i) => {
  const day = i + 1;
  return {
    day,
    title: `Day ${day}`,
    date: null,
    location: "TBD",
    summary: "Itinerary details coming soon.",
    recommendations: [],
    ...overrides[day],
  };
});

export function getDay(day) {
  return days.find((d) => d.day === day);
}
