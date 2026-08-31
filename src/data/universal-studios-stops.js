// Day 6 · 16 November · Universal Studios Japan, as a day trip from the hotel
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
  "Buy the Studio Pass online before the trip, never at the gate. USJ sells out on peak days, and the ticket window queue is time you don't get back.",
  "Install the official USJ app before you go and register the Studio Pass in it. Since 5 January 2026 the app is the only way to get Area Timed Entry Tickets — the in-park kiosks are gone — and you can't request one until the pass is registered.",
  "Be at the gate 1–1.5 h before the official opening time. Super Nintendo World's free timed-entry tickets are released when the park opens and can be gone within minutes, so the queue outside is what decides whether you get in at all.",
  "Pay for the train with the IC card (Suica in Apple Wallet): no ticket machines at either end of the transfer, and the Hanshin → JR change at Nishikujo is quicker through the gates.",
];

export const UNIVERSAL_STUDIOS_STOPS = [
  {
    n: 1,
    time: "07:30",
    name: "Universal City Station",
    jp: "ユニバーサルシティ駅",
    lat: 34.6657,
    lng: 135.433100,
    hours: "trains from ~05:00 · IC card",
    maps: "https://maps.google.com/?q=Universal+City+Station+Osaka",
    photo: "/photos/day6-1-universal-city-station.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk-GbocAptIBetE1tFTobAseaIAnhpmr0kUnkMdId7yzqqXOSBNGSLf0YVt-6_HoI3Clom9GPEfet5VdkQ9WqmKowiE5FwN4U0DSHJNzUnyos0zrSBFV56Tl-32wIJj8D6xV-uvxDqgF1bw=w397-h298-k-no",
    desc: "The way in: from Nipponbashi take a Hanshin Namba Line through-service to Nishikujo, then change to the JR Yumesaki (Sakurajima) Line for two stops to Universal City — about 30 minutes door to door. The station exit puts you on the walkway to the park gates, a couple of minutes away.",
  },
  {
    n: 2,
    time: "08:30",
    name: "Super Nintendo World",
    jp: "スーパー・ニンテンドー・ワールド",
    lat: 34.6679,
    lng: 135.430500,
    hours: "area timed-entry ticket required",
    maps: "https://maps.google.com/?cid=12324856396924448677",
    photo: "/photos/day6-2-super-nintendo-world.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFxTMuVXkupA--H9s7ePdBLeNhD_HYE5czimIS69jSbjmH5l5SFk_dVG1Qx6Pn__vvjmxEV-GfSqflxPEJDBy9J4iWIRqlbC2lbVK6TwoqGO-WTlN0VhGrPc4g9Jv8NQHJITOb=w408-h306-k-no",
    desc: "Mario's world built at full scale, with Mario Kart: Koopa's Challenge, Yoshi's Adventure and the Donkey Kong Country expansion. Entry is by free Area Timed Entry Ticket, requested in the USJ app the moment the park opens — do this before anything else, because they run out. The slot you get sets the shape of the rest of the day.",
  },
  {
    n: 3,
    time: "11:00",
    name: "The Wizarding World of Harry Potter",
    jp: "ウィザーディング・ワールド・オブ・ハリー・ポッター",
    lat: 34.6634,
    lng: 135.430500,
    hours: "timed entry on busy days",
    maps: "https://maps.google.com/?q=The+Wizarding+World+of+Harry+Potter+Universal+Studios+Japan",
    photo: "/photos/day6-3-the-wizarding-world-of-harry-potter.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnWGDhfwuem1JjUHNZeBfCKLMZJlTq3GWAzdcQ1KNpZf8Kj8mmQ32HveN3i3uwM0l8eS5KpvsDmpoU7o9anByaR2WIrmSyB8YEYMtB56vjRR_p66pfPdQ6BC2xRODlDM7WCRmmZ=w408-h544-k-no",
    desc: "Hogsmeade rebuilt street by street under the Hogwarts castle, with Harry Potter and the Forbidden Journey inside it and Flight of the Hippogriff outside. Butterbeer at the Three Broomsticks, and wand shopping at Ollivanders. On busy days this area needs its own timed-entry ticket too — check the app when you pick up the Nintendo one.",
  },
  {
    n: 4,
    time: "13:30",
    name: "Jurassic Park",
    jp: "ジュラシック・パーク",
    lat: 34.6634,
    lng: 135.430500,
    hours: "park hours",
    maps: "https://maps.google.com/?q=Jurassic+Park+The+Ride+Universal+Studios+Japan",
    photo: "/photos/day6-4-jurassic-park.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkDo9O2aq5TyJCiDKVJJVzDab_u7XnZJ_gXCGv8FHjo1ifA3aoP_tPOGpb9Ms8ZWyMnuBzpq8LPIhZQ6O-t2auKR2QqwQNjtQvYUAum6bKa95Nr_YdEVahZR36rBLo5Hcd4A2_H=w447-h298-k-no",
    desc: "The dinosaur half of the park: The Flying Dinosaur, a prone flying coaster that hangs you face-down over the lagoon, and the original Jurassic Park The Ride, which ends in an 25 m drop into the water. You will get wet on the second one — a poncho or a dry bag for the phone is not a bad idea in November.",
  },
  {
    n: 5,
    time: "15:30",
    name: "Minion Park / Hollywood Area",
    jp: "ミニオン・パーク／ハリウッド・エリア",
    lat: 34.6665,
    lng: 135.433800,
    hours: "park hours",
    maps: "https://maps.google.com/?q=Minion+Park+Universal+Studios+Japan",
    photo: "/photos/day6-5-minion-park-hollywood-area.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl8se_LyuEmkVzl3Zc84fpFx43HrFbJ3uP_RX2HF1sbZ3e5S4UIVaiUrRBz2EEPjXywhOOKdh_9vrct2qZ0EjRX3-iW_SVtUz4RLkoD0GlRQXjVrCLLHC_-ZqnpqhIwTqEt0I-E_7zcvxcT=w408-h544-k-no",
    desc: "Despicable Me Minion Mayhem in the Minion Park, and Hollywood Dream – The Ride next door, which you can also take backwards on the Backdrop version. The Hollywood end of the park is where the parade passes and where the shops are, so it's the natural place to end up as the light goes.",
  },
  {
    n: 6,
    time: "19:00",
    name: "Universal CityWalk Osaka",
    jp: "ユニバーサル・シティウォーク大阪",
    lat: 34.6657,
    lng: 135.432500,
    hours: "restaurants until ~22:00 · free to enter",
    maps: "https://maps.google.com/?q=Universal+CityWalk+Osaka",
    photo: "/photos/day6-6-universal-citywalk-osaka.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFoTOy0W2AjohNWWcbKz3en6P_ahCX-2y49BvePXgbbYn-J8erfypfOlOO3GOL9zDHh5UaBD92ARynJMmA1LnpfcHXdPX8j3LinVTnTAHO9KWI2FpHUuQZdzKg_2OOW6CsEVnuHmk-UqN2=w408-h307-k-no",
    desc: "The mall between the park gates and the station: five floors of restaurants and shops, including the Osaka Takoyaki Museum. Dinner here beats eating inside the park, and it's a two-minute walk to the platform afterwards.",
  },
];
