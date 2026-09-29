// Like Days 3 and 8, this day's route is a Google My Maps embed rather than the
// Leaflet component, so the stop positions live in that map and not here.
// `lat`/`lng` are kept as the source data the stops came from — nothing on the
// page reads them today, but they are what the My Maps CSV import is built from.
//
// `maps` is a place link (cid or place_id), which is what the stop cards open:
// the place's Google listing rather than a bare pin.
//
// Every stop is within walking distance of the next one: no trains, no buses.
export const STOPS = [
  {
    n: 1,
    time: "8:00",
    name: "Kiyomizu-dera",
    jp: "清水寺",
    lat: 34.9946662,
    lng: 135.784661,
    hours: "6:00–18:00",
    maps: "https://maps.google.com/?cid=7111013964196361402",
    photo: "/photos/day9-1-kiyomizu-dera.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjAEl_1Iebrsv8V1Xg43KovPAkr4LyufUrSjad6Fs_U2MakthUJvsyMKA06FxzxOsWb_OXlWJENNQ-Y7xDc2dCwo_R5g0lJ1mngjIUnQWUdjCzKWJT24M__BAz3bLy8cp87QSjHbl9miG_9Ato3OX0XZ=s1200-w800-h600",
    desc: "Start early, before the crowds: a wooden terrace with views over the city, and in November red maples everywhere. You visit it in your own clothes — the kimono comes afterwards, on the way down.",
  },
  {
    n: 2,
    time: "9:30",
    name: "Kimono & Tea Ceremony · Maikoya Gion Kiyomizu",
    jp: "",
    lat: 34.9976626,
    lng: 135.774008,
    hours: "9:00–18:30 · booked",
    maps: "https://www.google.com/maps/place/?q=place_id:ChIJPdR0A7IJAWAR-lN3Dtj1Ofo",
    photo: "/photos/day9-2-kimono-tea-ceremony-maikoya-gion-kiyomizu.webp",
    photoSource:
      "https://d1s09xku4jkn9v.cloudfront.net/uploads/2023/11/tea-ceremony-gion-01.jpg",
    desc: "About 15 minutes' walk down from Kiyomizu-dera, on Matsubara-dori. The booking time is when kimono dressing starts: that happens in a separate building a few doors down, with no photos allowed inside, and then you walk back to the teahouse — a registered cultural property with a Japanese garden. The tea ceremony itself starts about 30 minutes after arrival: the host explains the ritual in English, you whisk your own matcha and have it with seasonal wagashi. About 90 minutes in total. You keep the kimono for the rest of the day and return it here at 17:45, since the rental has to be back by 18:00.",
  },
  {
    n: 3,
    time: "11:15",
    name: "Sannenzaka & Ninenzaka",
    jp: "三年坂・二年坂",
    lat: 34.9983989,
    lng: 135.7808431,
    hours: "Public street",
    maps: "https://maps.google.com/?cid=10971881891922379477",
    // Sourced from Wikimedia Commons rather than Google Places like the rest.
    photo: "/photos/day9-3-sannenzaka-ninenzaka.webp",
    photoSource:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ninenzaka_%2830613009603%29.jpg",
    desc: "Cobbled lanes lined with small shops, sweets, and wooden houses. Kyoto's postcard street — and now that you are in kimono, the classic photo street of the day. Stop for a snack and take your time.",
  },
  {
    n: 4,
    time: "12:00",
    name: "Yasaka Pagoda (Hōkan-ji)",
    jp: "法観寺",
    lat: 34.9985591,
    lng: 135.7791783,
    hours: "Exterior view: anytime",
    maps: "https://maps.google.com/?cid=12811373430337320265",
    photo: "/photos/day9-4-yasaka-pagoda-hokan-ji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjD1HNf85QmOVdYnZYAoZ6rzuXvoVwxqrhY4Q-rgFpsjmt1mZhsKDZpAwRwCwXqRipUO6i6Errgyu-nbUbPJZcvkcF4FVVq1BW0g7dQcmden-BE6DiMWZ47oM_F68tQWYboYkfKRPxOdIWcB0V0=s1200-w800-h600",
    desc: "Kyoto's most photographed five-story pagoda. Best shot from the street below — walk a little down the slope for the classic angle.",
  },
  {
    n: 5,
    time: "12:20",
    name: "Ishibei-koji",
    jp: "石塀小路",
    lat: 35.0000932,
    lng: 135.7794833,
    hours: "Public street",
    maps: "https://maps.google.com/?cid=1262656406215755316",
    photo: "/photos/day9-5-ishibei-koji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjAAFiSq3BBrZYD4dJjNkS9IqPtSsdKBNfB8D9eWThlN6u5FCQoc85BHZw-lVdYhuEoeuyUIr6t72RKllSXwShJmnyjEKKSP1ktpjJD9OfNn09RyYcFXoSgz61eLfC2gR-DAbkZJKGAriWmK=s1200-w800-h600",
    desc: "A hidden stone lane, almost always empty. It's a residential area — please respect the no-photo signs along some stretches.",
  },
  {
    n: 6,
    time: "12:40",
    name: "Kodai-ji",
    jp: "高台寺",
    lat: 35.0007687,
    lng: 135.7812718,
    hours: "9:00–17:00",
    maps: "https://maps.google.com/?cid=2616919559259342976",
    photo: "/photos/day9-6-kodai-ji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjBdjyQYw2UElKeqQaFftc8-Liove_tcE72cvpMH9r8wrC8JMqQ-VmnHpkwAfP-wiwFOQ7KbFEIeIziizGT8gjEHvnhHDATn7m_JySGUg2J-7Wqj2btwJqzut4AZCLpukalPNkIgaigqWmCFenDVzGC4=s1200-w800-h600",
    desc: "Beautiful gardens and a small bamboo grove. Lunch comes right after, at 13:30 on Nene-no-michi just outside the gate — see the Food section. Spectacular night illumination in autumn.",
  },
  {
    n: 7,
    time: "14:45",
    name: "Maruyama Park",
    jp: "円山公園",
    lat: 35.0035587,
    lng: 135.7805269,
    hours: "Open 24h",
    maps: "https://maps.google.com/?cid=16944245535046749515",
    photo: "/photos/day9-7-maruyama-park.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjAqLAXnAF_S7HBgfcsscjpZd9fzSL4C-Bqz1HyxXpe_21S77onaagW75uQp_neLI7ozcEhQ5sN7fw0XlOfjdVAr8VBCo0FQH7xDMfSBtjocd_ZYuGzq8AEEEfZSNkzmoo2BnuxNKgGIZEmyWyU=s1200-w800-h600",
    desc: "A quiet park with a pond, perfect for sitting down for a while on the way over to Yasaka Jinja. Great autumn colour in November.",
  },
  {
    n: 8,
    time: "15:10",
    name: "Yasaka Jinja",
    jp: "八坂神社",
    lat: 35.0036559,
    lng: 135.7785534,
    hours: "Open 24h · free",
    maps: "https://maps.google.com/?cid=14374021738854095593",
    photo: "/photos/day9-8-yasaka-jinja.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjAJZduV8TMnOlGfoEQrn-j4WGbdvhG7vvI_R0suP45EevdVCsLBDiPdvQKKDMCEiEPdr40maRD6FM_X4nO5hU7KJDKNuwds3afsMjaybMOHvUlzuA5cgopmXcDteVX6_WvriobZVcK7pFAXNA=s1200-w800-h600",
    desc: "A free shrine, the gateway into Gion. If you pass by again at dusk, the lit-up lanterns are magical.",
  },
  {
    n: 9,
    time: "15:40",
    name: "Kennin-ji",
    jp: "建仁寺",
    lat: 35.0000363,
    lng: 135.7735632,
    hours: "10:00–16:30",
    maps: "https://maps.google.com/?cid=9106435786341202770",
    photo: "/photos/day9-9-kennin-ji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjBI55JlBDR7wOHB0KpB9Cy4CA9bg3Apxmn3x10HCm2Ki9jXIZ6fp6dIvtJjEHfC_edBrIqFzKvsxVER8I1IFhmvLj4F0UTauqvrpAHjF4y_XApBJfzRdXuNdv6YGzJUoziGJuByIQineD-CGh9juhkIUw=s1200-w800-h600",
    desc: "Kyoto's oldest Zen temple: the twin dragons ceiling and the gods of wind and thunder. CLOSES 16:30 — head straight in when you arrive.",
  },
  {
    n: 10,
    time: "16:30",
    name: "Hanamikoji-dori (Gion)",
    jp: "花見小路通",
    lat: 35.0038355,
    lng: 135.7750189,
    hours: "Public street",
    maps: "https://maps.google.com/?q=%E8%8A%B1%E8%A6%8B%E5%B0%8F%E8%B7%AF%E9%80%9A",
    // Sourced from Wikimedia Commons rather than Google Places like the rest.
    photo: "/photos/day9-10-hanamikoji-dori-gion.webp",
    photoSource:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/150124_Gion_Kyoto_Japan01s3.jpg",
    desc: "The last sightseeing stop of the day: the street of the teahouses. At dusk (5–6pm) is when you're most likely to spot a maiko/geiko. NO photos in the private alleys (fines up to ¥10,000). Leave at 17:30 for Maikoya, 10–15 minutes' walk south.",
  },
  {
    n: 11,
    time: "17:45",
    name: "Return the kimono · Maikoya Gion Kiyomizu",
    jp: "",
    lat: 34.9976626,
    lng: 135.774008,
    hours: "Kimono back by 18:00",
    maps: "https://www.google.com/maps/place/?q=place_id:ChIJPdR0A7IJAWAR-lN3Dtj1Ofo",
    photo: "/photos/day9-11-return-the-kimono-maikoya-gion-kiyomizu.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q1OM8pDwHCqCAZYp3524X_GI1hr-hYTBiqDK5csZXMRrTMJwtgA80tHJrklyAzkv8gcwIBqcSJ1C_ja6Zfx0Az1ZCLa5POPGNb-UzyYfmNVUkl3r2DTypbaqBZlOnqO0gj9QgUXNA8Rf7v=s1360-w1360-h1020-rw",
    desc: "Back at Maikoya to change into your own clothes: the kimono rental has to be returned by 18:00. From here it is about 15 minutes' walk back up to dinner at 18:30.",
  },
];
