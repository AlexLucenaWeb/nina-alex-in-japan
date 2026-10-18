// Every train leg of the trip, for the /trains page.
//
// `time: null` means not decided yet and renders as "TBD". `mapsQuery: null`
// means there is no station to point at yet, so the name is shown unlinked.
//
// Day 15 goes somewhere Nina doesn't know about yet: keep this file to the
// trains themselves — no hotel, ryokan or onsen.
export const TRAINS = [
  {
    id: "day2-narita-express",
    day: 2,
    date: "2026-11-12",
    type: "Limited Express",
    name: "Narita Express (N'EX)",
    departure: {
      city: "Narita",
      station: "Narita Airport Terminal 2·3 Station",
      time: "~14:00",
      mapsQuery: "Narita Airport Terminal 2·3 Station JR",
    },
    arrival: {
      city: "Tokyo",
      station: "Tokyo Station",
      time: "~15:00",
      mapsQuery: "Tokyo Station",
    },
    status: "no-reservation",
    note: "Buy at the JR counter/machines in arrivals. Approximate times — depends on immigration.",
  },
  {
    id: "day2-nozomi-267",
    day: 2,
    date: "2026-11-12",
    type: "Shinkansen",
    name: "Nozomi 267",
    departure: {
      city: "Tokyo",
      station: "Tokyo Station",
      time: "16:00",
      mapsQuery: "Tokyo Station Tokaido Shinkansen",
    },
    arrival: {
      city: "Osaka",
      station: "Shin-Osaka Station",
      time: "18:30",
      mapsQuery: "Shin-Osaka Station",
    },
    status: "booked",
    seats: "Car 6 · Seats 6-D, 6-E",
    note: "smartEX — free changes before departure. Right side = Mt. Fuji.",
  },
  // Day 4 — the three legs of HIMEJI_KOBE_TRAINS. Only the start has a time
  // on the day page ("Leave Osaka around 08:00").
  {
    id: "day4-osaka-himeji",
    day: 4,
    date: "2026-11-14",
    type: "Local / Rapid",
    name: "JR Special Rapid",
    departure: {
      city: "Osaka",
      station: "Osaka Station",
      time: "~08:00",
      mapsQuery: "Osaka Station JR",
    },
    arrival: {
      city: "Himeji",
      station: "Himeji Station",
      time: null,
      mapsQuery: "Himeji Station JR",
    },
    status: "no-reservation",
    note: "About 1 h, ¥1,520. Leave around 08:00 to be at the castle for the 9:00 opening.",
  },
  {
    id: "day4-himeji-sannomiya",
    day: 4,
    date: "2026-11-14",
    type: "Local / Rapid",
    name: "JR Special Rapid",
    departure: {
      city: "Himeji",
      station: "Himeji Station",
      time: null,
      mapsQuery: "Himeji Station JR",
    },
    arrival: {
      city: "Kobe",
      station: "Sannomiya Station",
      time: null,
      mapsQuery: "JR Sannomiya Station",
    },
    status: "no-reservation",
    note: "About 40 min, ~¥990. After lunch on Miyuki-dori.",
  },
  {
    id: "day4-sannomiya-osaka",
    day: 4,
    date: "2026-11-14",
    type: "Local / Rapid",
    name: "JR Special Rapid",
    departure: {
      city: "Kobe",
      station: "Sannomiya Station",
      time: null,
      mapsQuery: "JR Sannomiya Station",
    },
    arrival: {
      city: "Osaka",
      station: "Osaka Station",
      time: null,
      mapsQuery: "Osaka Station JR",
    },
    status: "no-reservation",
    note: "About 21 min, ~¥420. Runs late into the evening.",
  },
  {
    id: "day6-universal-city",
    day: 6,
    date: "2026-11-16",
    type: "Local / Rapid",
    name: "Hanshin Namba Line + JR Yumesaki Line",
    departure: {
      city: "Osaka",
      station: "Nipponbashi Station",
      time: null,
      mapsQuery: "Nipponbashi Station Kintetsu Hanshin",
    },
    arrival: {
      city: "Osaka",
      station: "Universal City Station",
      time: "07:30",
      mapsQuery: "Universal City Station Osaka",
    },
    status: "no-reservation",
    note: "Change at Nishikujo, about 30 min door to door. Pay with Suica.",
  },
  {
    id: "day7-osaka-kyoto",
    day: 7,
    date: "2026-11-17",
    type: "Local / Rapid",
    name: "JR Special Rapid",
    departure: {
      city: "Osaka",
      station: "Osaka Station",
      time: null,
      mapsQuery: "Osaka Station JR",
    },
    arrival: {
      city: "Kyoto",
      station: "Kyoto Station",
      time: null,
      mapsQuery: "Kyoto Station JR",
    },
    status: "no-reservation",
    note: "About 30 min. Leave around 9:00, with the suitcases.",
  },
  {
    id: "day8-aoniyoshi",
    day: 8,
    date: "2026-11-18",
    type: "Tourist train",
    name: "Aoniyoshi",
    departure: {
      city: "Kyoto",
      station: "Kintetsu Kyoto Station",
      time: "10:55",
      mapsQuery: "Kintetsu Kyoto Station",
    },
    arrival: {
      city: "Nara",
      station: "Kintetsu-Nara Station",
      time: "11:29",
      mapsQuery: "Kintetsu-Nara Station",
    },
    status: "to-book",
    note: "Kintetsu website. Sales open Oct 18. Does not run on Thursdays.",
  },
  {
    id: "day8-kintetsu-return",
    day: 8,
    date: "2026-11-18",
    type: "Local / Rapid",
    name: "Kintetsu Kyoto Line",
    departure: {
      city: "Nara",
      station: "Kintetsu-Nara Station",
      time: null,
      mapsQuery: "Kintetsu-Nara Station",
    },
    arrival: {
      city: "Kyoto",
      station: "Kintetsu Kyoto Station",
      time: null,
      mapsQuery: "Kintetsu Kyoto Station",
    },
    status: "no-reservation",
    note: "Return after dinner. Pay with Suica.",
  },
  // Day 10 — the page times leaving the hotel (~7:30), not the train itself.
  {
    id: "day10-sagano-out",
    day: 10,
    date: "2026-11-20",
    type: "Local / Rapid",
    name: "JR Sagano Line",
    departure: {
      city: "Kyoto",
      station: "Kyoto Station",
      time: null,
      mapsQuery: "Kyoto Station JR",
    },
    arrival: {
      city: "Arashiyama",
      station: "Saga-Arashiyama Station",
      time: null,
      mapsQuery: "Saga-Arashiyama Station",
    },
    status: "no-reservation",
    note: "About 15 min. Leave around 7:30 to be in the bamboo grove by 8:00. Pay with Suica.",
  },
  {
    id: "day10-sagano-back",
    day: 10,
    date: "2026-11-20",
    type: "Local / Rapid",
    name: "JR Sagano Line",
    departure: {
      city: "Arashiyama",
      station: "Saga-Arashiyama Station",
      time: null,
      mapsQuery: "Saga-Arashiyama Station",
    },
    arrival: {
      city: "Kyoto",
      station: "Kyoto Station",
      time: null,
      mapsQuery: "Kyoto Station JR",
    },
    status: "no-reservation",
    note: "Pay with Suica.",
  },
  {
    id: "day12-thunderbird-13",
    day: 12,
    date: "2026-11-22",
    type: "Limited Express",
    name: "Thunderbird 13",
    departure: {
      city: "Kyoto",
      station: "Kyoto Station",
      time: "10:09",
      mapsQuery: "Kyoto Station JR",
    },
    arrival: {
      city: "Tsuruga",
      station: "Tsuruga Station",
      time: null,
      mapsQuery: "Tsuruga Station",
    },
    status: "to-book",
    note: "JR-West Online. Sales open Oct 22, 10:00 JST. Saturday of a long weekend — book at opening.",
  },
  {
    id: "day12-tsurugi-14",
    day: 12,
    date: "2026-11-22",
    type: "Shinkansen",
    name: "Tsurugi 14",
    departure: {
      city: "Tsuruga",
      station: "Tsuruga Station",
      time: null,
      mapsQuery: "Tsuruga Station",
    },
    arrival: {
      city: "Kanazawa",
      station: "Kanazawa Station",
      time: "12:02",
      mapsQuery: "Kanazawa Station",
    },
    status: "to-book",
    note: "Booked together with Thunderbird 13.",
  },
  {
    id: "day15-kagayaki",
    day: 15,
    date: "2026-11-25",
    type: "Shinkansen",
    name: "Kagayaki",
    departure: {
      city: "Kanazawa",
      station: "Kanazawa Station",
      time: "09:07",
      mapsQuery: "Kanazawa Station",
    },
    arrival: {
      city: "Transfer station",
      station: "TBD",
      time: null,
      mapsQuery: null,
    },
    status: "to-book",
    note: "Sales open Oct 25, 10:00 JST. Then Shōnan-Shinjuku Line towards Hakone — transfer details TBD.",
  },
];

export const TRAIN_STATUS = {
  booked: { label: "Booked", className: "border-pine/40 text-pine" },
  "to-book": { label: "To book", className: "border-momiji/40 text-momiji" },
  "no-reservation": {
    label: "No reservation needed",
    className: "border-ochre/40 text-ochre",
  },
};

export function mapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

// "~14:00" → 840. A leg with no departure time sorts after the timed ones of
// its day.
function minutes(time) {
  const match = /(\d{1,2}):(\d{2})/.exec(time ?? "");
  return match ? Number(match[1]) * 60 + Number(match[2]) : Infinity;
}

// Legs grouped by day, each day's legs in departure order. Sorting is stable,
// so untimed legs keep the order they are listed in above.
export function trainsByDay() {
  const sorted = [...TRAINS].sort((a, b) => {
    if (a.day !== b.day) return a.day - b.day;
    const [ma, mb] = [minutes(a.departure.time), minutes(b.departure.time)];
    // Not a plain ma - mb: two untimed legs would give Infinity - Infinity.
    return ma === mb ? 0 : ma < mb ? -1 : 1;
  });

  const groups = [];
  for (const train of sorted) {
    const last = groups.at(-1);
    if (last?.day === train.day) {
      last.trains.push(train);
    } else {
      groups.push({ day: train.day, date: train.date, trains: [train] });
    }
  }
  return groups;
}
