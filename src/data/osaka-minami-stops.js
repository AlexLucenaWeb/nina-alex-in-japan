// Day 3 · 13 November · Osaka south to north: Tennoji/Shinsekai, then Minami.
//
// This day's map is a Google My Maps embed, so the stop positions live in that
// map rather than the repo. `lat`/`lng` are kept as the source data the stops
// came from — nothing on the page reads them today, but they are what a
// Leaflet fallback would need, and what the My Maps layer was built from.
//
// `maps` is a place-id (cid) link, which is what the stop cards link to — it
// opens the place's Google listing, not a bare pin.
export const OSAKA_MINAMI_STOPS = [
  {
    n: 1,
    time: "10:00",
    name: "Shitenno-ji",
    jp: "四天王寺",
    lat: 34.6544581,
    lng: 135.5165239,
    hours: "8:30–16:00 · grounds free · central garden ¥300",
    maps: "https://maps.google.com/?cid=13162475560152948781",
    photo: "/photos/day3-1-shitenno-ji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm4s4QT0hhGqzhXzsFUJklTB-l6BOi46c9LuKy4G7UuIUK1YIJxlho5sHIybg5GERysxLW4W9qcpVBjZKhGhJUb7v9aGswvXGxipN6KifSZTM44ZMxUL2BHTaRiDgBYmzldhjA=w408-h544-k-no",
    desc: "One of the oldest Buddhist temples in Japan, founded in 593 by Prince Shōtoku. A five-storey pagoda and a wide, quiet compound — the calm way to start the day, before any of the noise.",
  },
  {
    n: 2,
    time: "11:00",
    name: "Shinsekai & Tsutenkaku",
    jp: "新世界・通天閣",
    lat: 34.6524992,
    lng: 135.5063058,
    hours: "streets always open · tower 9:00–21:45",
    maps: "https://maps.google.com/?cid=16558556426972448087",
    photo: "/photos/day3-2-shinsekai-tsutenkaku.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkzVX60DM-0oaeMjVOmQ4dJqTQZ1HDMvx4qet0yXkfd9t2MhkKHs9ewPs5TKBjiUf4q3s4flit719ZbH1yYCikfpt0As-5yBhBvX2KG2izWlGrzlih_SVHvdAlzwzu9SCqp4AD0=w408-h544-k-no",
    desc: "A retro-futurist quarter frozen somewhere in the 1950s: neon, coloured lanterns and the Tsutenkaku tower standing over all of it. This is the home of kushikatsu, and it's where lunch happens — Daruma or Yaekatsu. About 15 minutes on foot from Shitenno-ji.",
  },
  {
    n: 3,
    time: "13:00",
    name: "Namba Yasaka Jinja",
    jp: "難波八阪神社",
    lat: 34.6615592,
    lng: 135.4967039,
    hours: "6:30–17:00 · free",
    maps: "https://maps.google.com/?cid=9278387310004857503",
    photo: "/photos/day3-3-namba-yasaka-jinja.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjB0VZr2nT3H60fBD0GWOBK2pV09_MvVwMQCqSFd6seyHKtSXZj0ZorYMHtl0f0i9jwy6kFajj11O0nAabozilOuudd6lC4WhC4MtR_DRVe-kR8eqJhut7JW1kmQ4_KDZUWbdFW6Do-oIl_BBD8=s1200-w800-h600",
    desc: "The shrine with the giant lion-head stage that swallows bad spirits. Small, quiet, and very photogenic. Getting here is the one leg that isn't walked: Midosuji Line from Dobutsuen-mae to Namba, then five minutes on foot.",
  },
  {
    n: 4,
    time: "13:30",
    name: "Kuromon Ichiba Market",
    jp: "黒門市場",
    lat: 34.6653511,
    lng: 135.5062417,
    hours: "9:00–18:00",
    maps: "https://maps.google.com/?cid=12402117845945925953",
    photo: "/photos/day3-4-kuromon-ichiba-market.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjBZ3iYXSxv1HPVDDQ7ni6M_UTEUeWv6yhIOZR9Oo4qXE28tzGSHBOzB58JVvaMC0Kp4Hz-LCzMVmL7wtvZETltWPtsjqPfrctKGzSZmlb3J2fLwFIyAUf4jbKcDTLwYDno5mcKa0jvZup9G=s1200-w800-h600",
    desc: "Osaka's kitchen: a 600 m arcade of grilled seafood, otoro sashimi, oysters, crab and skewered wagyu. With kushikatsu already eaten, this is a graze rather than a meal — pick at a couple of stalls and walk the length of it.",
  },
  {
    n: 5,
    time: "15:00",
    name: "Shinsaibashi-suji",
    jp: "心斎橋筋",
    lat: 34.6725061,
    lng: 135.5013659,
    hours: "shops ~11:00–20:00",
    maps: "https://maps.google.com/?cid=7087755665176380195",
    photo: "/photos/day3-5-shinsaibashi-suji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjCoXIuRTWgOm6nznYL7AFOlhiy4dgL5-7jveO1gP2eLqjPXhgzce0m5srYypUlQ7d5cZLXXCqhym6HydVbXojyrdxaXo-tr4jsNYZO8C_IWXC8JgX52jAzzrA_2O_OSNuvspkmSnJ2GvQW5mQ=s1200-w800-h600",
    desc: "An endless covered shopping arcade (Uniqlo, GU, drugstores, souvenirs). Walk it south and it drops you straight into Dotonbori. Right alongside, Midosuji Avenue is Osaka's answer to Ginza.",
  },
  {
    n: 6,
    time: "16:00",
    name: "Hozenji Temple & Hozenji Yokocho",
    jp: "法善寺横丁",
    lat: 34.6679398,
    lng: 135.5024676,
    hours: "always open · free",
    maps: "https://maps.google.com/?cid=17670300510256525139",
    photo: "/photos/day3-6-hozenji-temple-hozenji-yokocho.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjDW-iNKLsGiumwHR9w1iNy29MFkPnPfCwf-ypS6-KJpbWZw4C2sAMu02Mzv1Io6KlsCSvuFghIAJ8gsGxWNyowfvVO4qDj6DMz7rys3-wwC_8NrasaeibB-FabSiQYEA1qvDOMnMenwTWpugg=s1200-w800-h600",
    desc: "A hidden gem 2 minutes from Dotonbori: a moss-covered statue of Fudō Myōō (ladle water over it and make a wish) and a lantern-lit alley behind it. Magical once the lights come on.",
  },
  {
    n: 7,
    time: "16:30",
    name: "Dotonbori · Glico Man · Ebisubashi",
    jp: "道頓堀",
    lat: 34.6689339,
    lng: 135.5010679,
    hours: "best at night · dinner ~18:30–19:00",
    maps: "https://maps.google.com/?cid=6582327784679221695",
    photo: "/photos/day3-7-dotonbori-glico-man-ebisubashi.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjCY53QWURl1ytVTeePp7rm_v3BVSmOYuNOV9jscM3C6xYicPcwBIQiCMIrp9w6qgy2X1ynhll8qIcI-qqnsd2CT53ZSNPe4f_oOEYQhk4L547991moVLxGuazXd1wK_l4ZWAiWSzwnL-xvxow=s1200-w800-h600",
    desc: "Osaka's grand finale and icon: the Glico Man reflected in the canal, the Ebisubashi bridge, giant crabs and a sea of neon. You arrive for sunset around 17:00, walk and photograph it while the neon comes on, and sit down to dinner at 18:30–19:00.",
  },
];
