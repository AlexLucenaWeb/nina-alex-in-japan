// Day 6 · 16 November (Sunday) · Himeji + Kobe as a day trip from Osaka.
//
// Two cities joined by train, so unlike Days 3 and 4 this one is not walkable
// end to end: HIMEJI_KOBE_TRAINS below carries the legs between them, and each
// city is then done on foot.
//
// No lat/lng here, as on Days 3 and 4 — the stop positions live in the Google
// My Maps map rather than in the repo.
export const HIMEJI_KOBE_STOPS = [
  {
    n: 1,
    time: "09:20",
    name: "Himeji Castle",
    jp: "姫路城",
    hours: "9:00–16:00 last entry · ¥2,500",
    maps: "https://maps.google.com/?cid=8813417131136418225",
    photo: "/photos/day6-1-himeji-castle.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjB6V0HgH4I3B8eOuhwBOgnvzt03btf0vau2pqxPYftqd9quuCaMmGFViMQvYeHndZKgb2vV62NJw5jf5Pbdu8BIfGhFclE9Gv3js4RAsE2sbAQAFYXzyEDJa_ugO9A2KZ0zSdpA7GDF8wkSMP2ol13R=s4800-w800-h600",
    desc: "Japan's finest surviving feudal castle and a UNESCO World Heritage Site, nicknamed the White Heron for its brilliant white plaster. One of only 12 original (non-reconstructed) castles left in Japan. Allow 1.5–2h to climb the keep and wander the maze-like defensive corridors. Buy the combined ticket with Koko-en (¥2,600) at the castle gate. Under-18s free.",
  },
  {
    n: 2,
    time: "11:15",
    name: "Koko-en Garden",
    jp: "好古園",
    hours: "9:00–17:00 · ¥2,600 combined ticket",
    maps: "https://maps.google.com/?cid=17401827629846230199",
    photo: "/photos/day6-2-koko-en-garden.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjCOnXmOhKRroX_gufSfpieTAnT32DDds7ggVncny6HnHAOda-WW8wAJznGaiqZqhIurFhcYgBCYR81TXh-Nqch69nJS9ryjMKIoEYomj8kRxzMHfodYUvdTxjjwRVThzkW0ag9L3q-z3NUyUllWjSDQTQ=s4800-w800-h600",
    desc: "A set of nine walled Edo-style gardens beside the castle, opened in 1992 on the former site of the feudal lord's west residence. Koi ponds, a tea house, stone bridges and maple trees that colour in autumn — a calm counterpoint to the keep. Best value with the combined castle ticket.",
  },
  {
    n: 3,
    time: "12:30",
    name: "Miyuki-dori Shopping Street",
    jp: "みゆき通り商店街",
    hours: "arcade ~10:00–20:00 · lunch",
    maps: "https://maps.google.com/?cid=12285567366261787812",
    photo: "/photos/day6-3-miyuki-dori-shopping-street.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjBf9pVypG7Rd_v4D717zFSfQuaysWXjG9LD2fMl1HmUjX2ni7TrDS3cNhBF9EXgx8kku6JhTkETPhw3-QM12MKimw_utsQn6gib2xkPwJGTv8SrZoYsrINkJcSqbEMDGnomZTq-Y9R6jiJnFWs=s4800-w800-h600",
    desc: "Himeji's longest covered shopping arcade, running from the station toward the castle with a retro Showa-era feel. A good spot for a quick lunch on the way back to the station — try Himeji oden (served in soy-ginger broth) or anago-don (conger eel rice bowl) — before heading to Kobe.",
  },
  {
    n: 4,
    time: "14:20",
    name: "Kitano Ijinkan District",
    jp: "北野異人館街",
    hours: "streets free · houses 9:00–17:00",
    maps: "https://maps.google.com/?cid=14802820810607101306",
    photo: "/photos/day6-4-kitano-ijinkan-district.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjCWbQ9mKL8wMpgs1rfZSGczYgZUb43sVIe2HjQ0KDRd2F0hJX_YX_ZWzqszzM9AC6Fxhm4gQa9bEfSJYmXTH7T4e_oNK48xaBdMIE1fkM3F2j2nzUvAsFonssjJP77H9e4l2nrizzaM8ac-2oBb0ON7=s4800-w800-h600",
    desc: "A hillside neighbourhood of ijinkan — the Western-style former homes of foreign merchants who settled after Kobe's port opened in 1868. Wandering the sloping lanes past the Weathervane House and the landmark Starbucks in a heritage building feels like a different era. Streets are free; entering individual houses costs extra.",
  },
  {
    n: 5,
    time: "15:30",
    name: "Ikuta Shrine",
    jp: "生田神社",
    hours: "7:00–17:00 · free",
    maps: "https://maps.google.com/?cid=2755195261077096520",
    photo: "/photos/day6-5-ikuta-shrine.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjDZtitZp-pPpjpKMT4RdkEraOShfDJTAjXb_6781mlNuRLhIJuCwVFPShAlrRksV4iADByKV8QannYp0uAMgnPSbY6ieMdkIbiUBe150lxWnY3VXN92N-QciLKVPQcBJAYvsDpkUf3AIPg1kA=s4800-w800-h600",
    desc: "One of Japan's oldest shrines, said to date to the year 201. Tucked right behind the Sannomiya shopping streets, its vermilion hall and small wooded grove make a quick, peaceful stop on the way down from Kitano. The city's name 'Kobe' comes from the households that once served this shrine.",
  },
  {
    n: 6,
    time: "15:50",
    name: "Nankinmachi Chinatown",
    jp: "南京町",
    hours: "stalls ~11:00–20:00",
    maps: "https://maps.google.com/?cid=2120940345687480577",
    photo: "/photos/day6-6-nankinmachi-chinatown.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjBL086JqeqiKNVNWCNlnHn6WCVJ7qqULQAwOisXXj7WYyEJUCbh5A3m80yU7QBGPxojxjT6UHw7Xw8Y70WmhElL5xUW6gN0tYt-8nnCerkF2-0L7D6TuFDXi21pyRs-P0oTwa-Qbxx4o5kaA2W94f1R_A=s4800-w800-h600",
    desc: "Kobe's compact, lantern-lit Chinatown, one of Japan's three biggest. Two streets of food stalls meet at the hexagonal Azumaya pavilion. Grab street snacks — butaman (steamed pork buns), Kobe-beef croquettes and skewers — and soak up the buzz. Liveliest at weekends.",
  },
  {
    n: 7,
    time: "16:45",
    name: "Meriken Park",
    jp: "メリケンパーク",
    hours: "always open · free",
    maps: "https://maps.google.com/?cid=9515080856934503895",
    photo: "/photos/day6-7-meriken-park.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjAkFzT_9x4XEeNRC9Y-88xbExYqfCIaS6zXK1YE7wEborhbRIhW7C6vuyYIy-D5yQgidBJKC2mwrFH21-JDKcQaKATFfhws7S1Rnt0H-PoWWPSTsrdFpLbKyKTQ2yp8X_S0u_59NN8SFVQCJQ=s4800-w800-h600",
    desc: "A waterfront park on Kobe's harbour, home to the red hyperboloid Kobe Port Tower, the net-like Maritime Museum, the 'BE KOBE' photo sign and the 1995 earthquake memorial. Lovely at dusk (~17:00 in November) when the port lights come on — a good place to end the day before Kobe beef for dinner.",
  },
];

// The three legs of the day, in the order they are travelled. Same shape as
// DAY2_TRAINS so both days can share the DataTable layout.
export const HIMEJI_KOBE_TRAINS = [
  {
    leg: "Osaka → Himeji",
    train: "JR Special Rapid (Osaka Station)",
    duration: "~1 h",
    price: "¥1,520",
    note: "Shinkansen from Shin-Osaka is ~30 min for ~¥3,280",
  },
  {
    leg: "Himeji → Kobe (Sannomiya)",
    train: "JR Special Rapid",
    duration: "~40 min",
    price: "~¥990",
    note: "Straight on to the Kitano district",
  },
  {
    leg: "Kobe (Sannomiya) → Osaka",
    train: "JR Special Rapid",
    duration: "~21 min",
    price: "~¥420",
    note: "Runs late into the evening",
  },
];

export const HIMEJI_KOBE_COST_NOTE =
  "Roughly ¥8,000 per person for the day, trains and entry tickets included — Kobe beef for dinner is on top of that.";
