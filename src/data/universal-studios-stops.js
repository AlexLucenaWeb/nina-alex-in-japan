// Day 6 · Monday 16 November · Universal Studios Japan, as a day trip from the hotel
// in Nipponbashi.
//
// No map on this day, unlike every other route day: it all happens inside one
// place, and USJ's own app carries the park map. `lat`/`lng` are kept as the
// source data the stops came from — nothing reads them today, but they are
// what a map would need if this day ever gets one.
//
// The park is one place, so `maps` links are search queries rather than the
// place-id (cid) links the city days use: the areas inside USJ don't all have
// their own Google listing.

// Read before the day, not on the day: everything here has to be sorted out in
// advance or first thing in the morning, and each one can cost you the park.
export const UNIVERSAL_STUDIOS_NOTES = [
  "Studio Pass only — no Express Pass (decided). Buy it online in advance on the official site (usjticketing.com), never at the gate.",
  "Super Nintendo World needs the FREE Area Timed Entry Ticket from the official USJ app. Register the Studio Pass in the app beforehand: the ticket can only be requested once you are inside the park, and they run out — request it the moment you walk in.",
];

// Who rides what: Nina sits out the big drops and the motion simulators, so
// the thrill rides are Alex's, on the Single Rider lines.
export const UNIVERSAL_STUDIOS_RIDES = {
  together: [
    "Yoshi's Adventure",
    "Mario Kart: Koopa's Challenge",
    "JAWS",
    "WaterWorld (show)",
    "Universal Monsters Live Rock and Roll Show",
    "Hogsmeade shops & Ollivanders",
    "Optional: Flight of the Hippogriff, The Flying Snoopy",
  ],
  alexOnly: [
    "The Flying Dinosaur",
    "Hollywood Dream – The Ride",
    "Mine-Cart Madness",
    "Harry Potter and the Forbidden Journey",
    "Jurassic Park The Ride (ends with a big drop into water)",
  ],
  skip: [
    "Minion Mayhem and the Forbidden Journey are intense motion simulators — skip them together.",
  ],
};

export const UNIVERSAL_STUDIOS_TRANSPORT = [
  { leg: "Hotel → Nippombashi", line: "Sakaisuji Line, 1 stop (or ~15 min on foot)", time: "~5 min" },
  { leg: "Kintetsu-Nippombashi → Nishikujo", line: "Hanshin Namba Line through-service", time: "~10 min" },
  { leg: "Nishikujo → Universal City", line: "JR Yumesaki (Sakurajima) Line, 2 stops + walk through CityWalk", time: "~10 min" },
  { leg: "Universal City → Hotel", line: "Same route in reverse — last trains ~23:30", time: "~40 min" },
];

export const UNIVERSAL_STUDIOS_STOPS = [
  {
    n: 1,
    time: "07:00",
    name: "Universal City Station",
    jp: "ユニバーサルシティ駅",
    lat: 34.6657,
    lng: 135.433100,
    hours: "trains from ~05:00 · IC card",
    maps: "https://maps.google.com/?q=Universal+City+Station+Osaka",
    photo: "/photos/day6-1-universal-city-station.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk-GbocAptIBetE1tFTobAseaIAnhpmr0kUnkMdId7yzqqXOSBNGSLf0YVt-6_HoI3Clom9GPEfet5VdkQ9WqmKowiE5FwN4U0DSHJNzUnyos0zrSBFV56Tl-32wIJj8D6xV-uvxDqgF1bw=w397-h298-k-no",
    desc: "Leave the hotel at 07:00: Sakaisuji Line one stop to Nippombashi (or ~15 min on foot), a Hanshin Namba Line through-service from Kintetsu-Nippombashi to Nishikujo, then the JR Yumesaki (Sakurajima) Line for two stops to Universal City — ~40 min door to door, all on Suica. A short walk through CityWalk puts you at the gates by 07:45–08:00, 1–1.5 h before opening.",
  },
  {
    n: 2,
    time: "09:00",
    name: "Super Nintendo World",
    jp: "スーパー・ニンテンドー・ワールド",
    lat: 34.6679,
    lng: 135.430500,
    hours: "area timed-entry ticket required",
    maps: "https://maps.google.com/?cid=12324856396924448677",
    photo: "/photos/day6-2-super-nintendo-world.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFxTMuVXkupA--H9s7ePdBLeNhD_HYE5czimIS69jSbjmH5l5SFk_dVG1Qx6Pn__vvjmxEV-GfSqflxPEJDBy9J4iWIRqlbC2lbVK6TwoqGO-WTlN0VhGrPc4g9Jv8NQHJITOb=w408-h306-k-no",
    desc: "Enter at 09:00 and request the free Area Timed Entry Ticket in the USJ app immediately — before anything else, because they run out. Then go at your ticket time: Mario's world built at full scale. Mario Kart: Koopa's Challenge and Yoshi's Adventure together; Mine-Cart Madness in the Donkey Kong Country expansion is Alex only, on the single rider line. The slot you get sets the shape of the rest of the day.",
  },
  {
    n: 3,
    time: "~11:00",
    name: "The Wizarding World of Harry Potter",
    jp: "ウィザーディング・ワールド・オブ・ハリー・ポッター",
    lat: 34.6634,
    lng: 135.430500,
    hours: "timed entry on busy days",
    maps: "https://maps.google.com/?q=The+Wizarding+World+of+Harry+Potter+Universal+Studios+Japan",
    photo: "/photos/day6-3-the-wizarding-world-of-harry-potter.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnWGDhfwuem1JjUHNZeBfCKLMZJlTq3GWAzdcQ1KNpZf8Kj8mmQ32HveN3i3uwM0l8eS5KpvsDmpoU7o9anByaR2WIrmSyB8YEYMtB56vjRR_p66pfPdQ6BC2xRODlDM7WCRmmZ=w408-h544-k-no",
    desc: "Hogsmeade rebuilt street by street under the Hogwarts castle. Together: the shops, Ollivanders and Butterbeer at the Three Broomsticks, plus Flight of the Hippogriff if you fancy it (a small kids' coaster). Harry Potter and the Forbidden Journey is Alex only, on the single rider line. On busy days this area needs its own timed-entry ticket too — check the app when you pick up the Nintendo one. Lunch around 13:00 here or in Amity Village (see Food).",
  },
  {
    n: 4,
    time: "Afternoon",
    name: "Amity Village & WaterWorld",
    jp: "アミティ・ビレッジ・ウォーターワールド",
    lat: 34.6634,
    lng: 135.430500,
    hours: "show times in the app",
    maps: "https://maps.google.com/?q=JAWS+Universal+Studios+Japan",
    photo: null,
    desc: "Together: JAWS, a boat ride with live narration (you may get splashed), and the WaterWorld stunt show. Check the show times in the app and build the afternoon around them.",
  },
  {
    n: 5,
    time: "Afternoon",
    name: "Jurassic Park",
    jp: "ジュラシック・パーク",
    lat: 34.6634,
    lng: 135.430500,
    hours: "park hours",
    maps: "https://maps.google.com/?q=Jurassic+Park+The+Ride+Universal+Studios+Japan",
    photo: "/photos/day6-5-jurassic-park.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkDo9O2aq5TyJCiDKVJJVzDab_u7XnZJ_gXCGv8FHjo1ifA3aoP_tPOGpb9Ms8ZWyMnuBzpq8LPIhZQ6O-t2auKR2QqwQNjtQvYUAum6bKa95Nr_YdEVahZR36rBLo5Hcd4A2_H=w447-h298-k-no",
    desc: "The thrill block, for Alex on the single rider lines (check in the app that single rider is running that day): The Flying Dinosaur, a prone flying coaster that hangs you face-down over the lagoon, Jurassic Park The Ride, which ends in a 25 m drop into the water, and Hollywood Dream – The Ride on the way back towards the Hollywood Area. Meanwhile Nina: shops, snacks, the Universal Monsters Live Rock and Roll Show or The Flying Snoopy. You will get wet on Jurassic Park — a poncho or a dry bag for the phone is not a bad idea in November.",
  },
  {
    n: 6,
    time: "~17:00",
    name: "Minion Park / Hollywood Area",
    jp: "ミニオン・パーク／ハリウッド・エリア",
    lat: 34.6665,
    lng: 135.433800,
    hours: "park hours",
    maps: "https://maps.google.com/?q=Minion+Park+Universal+Studios+Japan",
    photo: "/photos/day6-6-minion-park-hollywood-area.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl8se_LyuEmkVzl3Zc84fpFx43HrFbJ3uP_RX2HF1sbZ3e5S4UIVaiUrRBz2EEPjXywhOOKdh_9vrct2qZ0EjRX3-iW_SVtUz4RLkoD0GlRQXjVrCLLHC_-ZqnpqhIwTqEt0I-E_7zcvxcT=w408-h544-k-no",
    desc: "Together: the Minion Park and the Hollywood end of the park, where the parade passes and where the shops are — the natural place to end up as the light goes. Minion Mayhem is an intense motion simulator, so it's a skip.",
  },
  {
    n: 7,
    time: "~19:00",
    name: "Universal CityWalk Osaka",
    jp: "ユニバーサル・シティウォーク大阪",
    lat: 34.6657,
    lng: 135.432500,
    hours: "restaurants until ~22:00 · free to enter",
    maps: "https://maps.google.com/?q=Universal+CityWalk+Osaka",
    photo: "/photos/day6-7-universal-citywalk-osaka.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFoTOy0W2AjohNWWcbKz3en6P_ahCX-2y49BvePXgbbYn-J8erfypfOlOO3GOL9zDHh5UaBD92ARynJMmA1LnpfcHXdPX8j3LinVTnTAHO9KWI2FpHUuQZdzKg_2OOW6CsEVnuHmk-UqN2=w408-h307-k-no",
    desc: "The mall between the park gates and the station: five floors of restaurants and shops, including the Osaka Takoyaki Museum. Dinner here beats eating inside the park, and it's a two-minute walk to the platform afterwards.",
  },
];
