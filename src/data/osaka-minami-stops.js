// No coordinates here, unlike the other route days: this day's map is a Google
// My Maps embed, so the stop positions live in that map rather than the repo.
// `maps` is a place-id (cid) link, which is what the stop cards link to — it
// opens the place's Google listing, not a bare pin, so it needs no lat/lng.
export const OSAKA_MINAMI_STOPS = [
  {
    n: 1,
    time: "12:30",
    name: "Namba Yasaka Jinja",
    jp: "難波八阪神社",
    hours: "6:30–17:00 · free",
    maps: "https://maps.google.com/?cid=9278387310004857503",
    photo:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjB0VZr2nT3H60fBD0GWOBK2pV09_MvVwMQCqSFd6seyHKtSXZj0ZorYMHtl0f0i9jwy6kFajj11O0nAabozilOuudd6lC4WhC4MtR_DRVe-kR8eqJhut7JW1kmQ4_KDZUWbdFW6Do-oIl_BBD8=s1200-w800-h600",
    desc: "The shrine with the giant lion-head stage that swallows bad spirits. Small, quiet, and very photogenic — a good breather before the crowds. Write a wish on an ema plaque.",
  },
  {
    n: 2,
    time: "13:15",
    name: "Kuromon Ichiba Market",
    jp: "黒門市場",
    hours: "9:00–18:00",
    maps: "https://maps.google.com/?cid=12402117845945925953",
    photo:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjBZ3iYXSxv1HPVDDQ7ni6M_UTEUeWv6yhIOZR9Oo4qXE28tzGSHBOzB58JVvaMC0Kp4Hz-LCzMVmL7wtvZETltWPtsjqPfrctKGzSZmlb3J2fLwFIyAUf4jbKcDTLwYDno5mcKa0jvZup9G=s1200-w800-h600",
    desc: "Osaka's kitchen: a 600 m arcade of grilled seafood, otoro sashimi, oysters, crab, and skewered wagyu. This is where you eat. The earlier you go, the fresher the food and the thinner the crowds.",
  },
  {
    n: 3,
    time: "14:45",
    name: "Amerika-mura (Triangle Park)",
    jp: "アメリカ村",
    hours: "shops ~11:00–20:00",
    maps: "https://maps.google.com/?cid=7984796630724712892",
    photo:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjAHcqtlDFRDl5T9X0LkgZE9UCn17NV1BV1MSAh07PoGIEldI6vhZ32ZrBfw3le2lBE1QaYDcpmyIz40GmcKBrAJx-ZB2JA2-04UI4ez-mtzW8q7Pcuthvntp9a8HhMlof77f7TeBwLcf-jblpnqRmnPMw=s1200-w800-h600",
    desc: "Osaka's young, alternative neighborhood: vintage fashion, streetwear, graffiti, and lamp posts shaped like people. Its heart is Triangle Park — a skater vibe, with takoyaki stalls to sit down and rest.",
  },
  {
    n: 4,
    time: "15:45",
    name: "Shinsaibashi-suji",
    jp: "心斎橋筋",
    hours: "shops ~11:00–20:00",
    maps: "https://maps.google.com/?cid=7087755665176380195",
    photo:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjCoXIuRTWgOm6nznYL7AFOlhiy4dgL5-7jveO1gP2eLqjPXhgzce0m5srYypUlQ7d5cZLXXCqhym6HydVbXojyrdxaXo-tr4jsNYZO8C_IWXC8JgX52jAzzrA_2O_OSNuvspkmSnJ2GvQW5mQ=s1200-w800-h600",
    desc: "An endless covered shopping arcade (Uniqlo, GU, drugstores, souvenirs). Walk it south and it drops you straight into Dotonbori. Right alongside, Midosuji Avenue is Osaka's answer to Ginza.",
  },
  {
    n: 5,
    time: "17:00",
    name: "Hozenji Temple & Hozenji Yokocho",
    jp: "法善寺横丁",
    hours: "always open · free",
    maps: "https://maps.google.com/?cid=17670300510256525139",
    photo:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjDW-iNKLsGiumwHR9w1iNy29MFkPnPfCwf-ypS6-KJpbWZw4C2sAMu02Mzv1Io6KlsCSvuFghIAJ8gsGxWNyowfvVO4qDj6DMz7rys3-wwC_8NrasaeibB-FabSiQYEA1qvDOMnMenwTWpugg=s1200-w800-h600",
    desc: "A hidden gem 2 minutes from Dotonbori: a moss-covered statue of Fudō Myōō (ladle water over it and make a wish) and a lantern-lit alley behind it. Magical once the lights come on.",
  },
  {
    n: 6,
    time: "17:45",
    name: "Dotonbori · Glico Man · Ebisubashi",
    jp: "道頓堀",
    hours: "best at night · dinner here",
    maps: "https://maps.google.com/?cid=6582327784679221695",
    photo:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjCY53QWURl1ytVTeePp7rm_v3BVSmOYuNOV9jscM3C6xYicPcwBIQiCMIrp9w6qgy2X1ynhll8qIcI-qqnsd2CT53ZSNPe4f_oOEYQhk4L547991moVLxGuazXd1wK_l4ZWAiWSzwnL-xvxow=s1200-w800-h600",
    desc: "Osaka's grand finale and icon: the Glico Man reflected in the canal, the Ebisubashi bridge, giant crabs, and a sea of neon. This is where you have dinner (takoyaki, okonomiyaki, kushikatsu). Save it for dusk.",
  },
];
