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
    title: "Osaka on Foot: Minami",
    date: "November 13",
    location: "Osaka",
    summary:
      "An easy-going day on foot through Osaka's Minami district: a quiet shrine, the Kuromon Ichiba food market, Amerika-mura, Shinsaibashi-suji, Hozenji Yokocho, and Dotonbori after dark. See the interactive map and stop-by-stop itinerary below.",
  },
  4: {
    title: "Day Trip to Nara",
    date: "November 14",
    location: "Nara (from Osaka)",
    summary:
      "A day out of Osaka on the Aoniyoshi sightseeing train, then everything on foot inside Nara Park: Kōfuku-ji, the Great Buddha at Tōdai-ji, the view from Nigatsu-dō, a long lunch, the Isuien and Yoshikien gardens, the lantern shrine at Kasuga Taisha, and the light going gold over the Ukimidō pavilion. Deer throughout. Dinner in Naramachi before the train back.",
    recommendations: [
      {
        text: "Book the Aoniyoshi as far ahead as you can — November fills it up, and it doesn't run on Thursdays. Seats go on sale at 10:30 Japan time exactly one month before the date of travel.",
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
      "Come back into Kintetsu-Nara rather than JR Nara: it's a short walk from the park, and the regular Kintetsu train back is cheap and frequent.",
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
