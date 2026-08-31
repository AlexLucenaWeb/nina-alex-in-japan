// Like Day 3, this day's route is a Google My Maps embed rather than the
// Leaflet component, so the stop positions live in that map and not here.
// `lat`/`lng` are kept as the source data the stops came from — nothing on the
// page reads them today, but they are what a Leaflet fallback would need.
//
// `maps` is a place link (cid or place_id), which is what the stop cards open:
// the place's Google listing rather than a bare pin.
//
// Every stop is within walking distance of the next one: no trains, no buses.
export const NARA_STOPS = [
  {
    n: 1,
    time: "10:15",
    name: "Kōfuku-ji",
    jp: "興福寺",
    lat: 34.6824704,
    lng: 135.8322415,
    hours: "grounds free · pagoda under wraps until 2034",
    maps: "https://maps.google.com/?cid=18105454219026852214",
    photo: "/photos/day8-1-kofuku-ji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjBiEkztIEEQhky1DiWOPZcAnXToVZZh06xyZRymRvJcobonuRCFKrPKHm-EwSs0bn9H62o2ijc612OlIcMjXQN9ncRx8rUa5r9dU-zuQmNmAOO7j0YBK5TVgBiyofEQ4fBm-16wWwn1Uin4KA=s1200-w800-h600",
    desc: "The temple of the powerful Fujiwara clan, a UNESCO World Heritage Site. The five-storey pagoda is wrapped in restoration work until 2034, but the Chūkondō and Tōkondō halls make a good quick walk through.",
  },
  {
    n: 2,
    time: "10:35",
    name: "Sarusawa Pond",
    jp: "猿沢池",
    lat: 34.6812949,
    lng: 135.8307914,
    hours: "always open · free",
    maps: "https://maps.google.com/?cid=13289603749641770198",
    photo: "/photos/day8-2-sarusawa-pond.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjAtVOpgPuRSNaLzHAfJrMhJVGet6oY-nlPs5I5BUco3LUv_l3lJl5cSFqbnvBlq9VXWiEtlxBoYxp1XCQ94wpJYtkqYdqszBPbU2-Cb1Hbscfx92KhRDBi8PzFauTWLDq7HRQ9-fvG-RjTqjg=s1200-w800-h600",
    desc: "A 1,200-year-old pond ringed by weeping willows, with the pagoda reflected in the water. A good breather on the way past.",
  },
  {
    n: 3,
    time: "10:50",
    name: "Tōdai-ji · Great Buddha",
    jp: "東大寺",
    lat: 34.6888653,
    lng: 135.839818,
    hours: "7:30–17:30 · ¥800",
    maps: "https://maps.google.com/?cid=2132977154054323495",
    photo: "/photos/day8-3-todai-ji-great-buddha.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjBEQn9EfmAsvdV3sNSgd8tbrF6qplPMtlUAeAvT3T-JQDaM4M6JJUVHXLZJTij1pwfRyhRN8F0Szgy5elg3lBkscg-Prl4wmCibDWi3f79MD1F4-oF0OKBej1opMvC4L-VJRfHRMgCDciS1Kw=s1200-w800-h600",
    desc: "The unmissable one. Walk through the Nandaimon gate and its 8 m guardians to reach the Daibutsuden and the 15 m bronze Great Buddha inside. Look for the pillar with the hole at its base — squeeze through it for good luck.",
  },
  {
    n: 4,
    time: "11:50",
    name: "Nigatsu-dō",
    jp: "二月堂",
    lat: 34.6892747,
    lng: 135.8442433,
    hours: "always open · free",
    maps: "https://maps.google.com/?cid=624402043149348090",
    photo: "/photos/day8-4-nigatsu-do.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjC0fIU79pLwvFK2Q_5Y8ucJKsEzEJf_d9d6E-mRSPOXvKQ22RFin01ENIZ4wefqxy1Lz_VFC4F14XJ4mWguDLX6QuEEtJ3EqrTg-5QQ7QXQdavGZiJAdYDEZHBV7U0npGfJJXKglvWrfE6_pax5d8EjLQ=s1200-w800-h600",
    desc: "A short climb up from Tōdai-ji to a hall built out over the hillside, with a panoramic view across the whole of Nara. Far quieter than the Great Buddha, free to enter, and they serve tea.",
  },
  {
    n: 5,
    time: "12:15",
    name: "Lunch",
    jp: "昼食",
    lat: 34.685,
    lng: 135.838,
    hours: "~1 h",
    maps: "https://maps.google.com/?q=Mizuya+Chaya+Nara",
    photo: "/photos/day8-5-lunch.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkyNBTDukfUNF0fsPoWIMzbiPmKiDgmvSbRwxWlzmb4WmpFLZZdQ7dEKTyIHFdR8lMyvUzCLfFq7eP2vsGR4iOzr3iZ5Z4RYQWpLbpGQgJdXZkvSR_2deRv31qGoEBWySBirskeklwOFi8=s1360-w1360-h1020-rw",
    desc: "No rush about it: Mizuya Chaya inside the park (udon and ice cream), Nakatanidō by the station (green yomogi mochi), or kakinoha-zushi — persimmon-leaf sushi, made to be eaten anywhere.",
  },
  {
    n: 6,
    time: "13:15",
    name: "Isuien & Yoshikien Gardens",
    jp: "依水園・吉城園",
    lat: 34.6878,
    lng: 135.839,
    hours: "9:30–16:30 · Isuien ¥1,200 · Yoshikien free with passport",
    maps: "https://maps.google.com/?q=Isuien+Garden+Nara",
    // Sourced from gaijinpot.com rather than Google Places like the rest.
    photo: "/photos/day8-6-isuien-yoshikien-gardens.webp",
    photoSource:
      "https://cdn.gaijinpot.com/app/uploads/sites/6/2018/08/isuien3.jpg",
    desc: "Five minutes from Tōdai-ji. Isuien is built on shakkei — 'borrowed scenery' — pulling the Nandaimon gate and the mountains behind it into the composition. Yoshikien, right next door, is free for foreign visitors on showing a passport. Pond gardens, moss, and a tea house.",
  },
  {
    n: 7,
    time: "14:30",
    name: "Kasuga Taisha",
    jp: "春日大社",
    lat: 34.6815454,
    lng: 135.8484719,
    hours: "7:00–17:00 · inner area ~¥500",
    maps: "https://maps.google.com/?cid=5519134420388517270",
    photo: "/photos/day8-7-kasuga-taisha.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjDVO3rIVipITn2L0Fu2n7GTd6oagBLtiVy84xMMojid3TaXG3HbTYaqTd6AjB4yvpyEqUmXwfj4Y8IumDy7ImOmkdPv1ZV7WEAkf9h1bOJJiXmXIOpblfOkuMcUiEVtlUj9vd7_5gXaDe6w1JGdNHMM1Q=s1200-w800-h600",
    desc: "The Shrine of the Lanterns, a UNESCO World Heritage Site. The approach runs through a sacred forest lined with thousands of stone lanterns, with bronze ones hanging along the shrine buildings and deer moving between the trees.",
  },
  {
    n: 8,
    time: "15:30",
    name: "Ukimidō Pavilion",
    jp: "浮見堂",
    lat: 34.6801167,
    lng: 135.8386398,
    hours: "always open · free",
    maps: "https://maps.google.com/?cid=16515498614679864934",
    photo: "/photos/day8-8-ukimido-pavilion.webp",
    photoSource:
      "https://lh3.googleusercontent.com/place-photos/AG9NLjAawTi13sZWk1KjvF9HK-IZpEUMAGKpbHTliyAi7i9j1JyG1rAwxGxztFg2RRRJhDXAbS5f447Z-ze0kpdkf8Ok_48CH62iNvwx0Mfdzykz9LfhxNWAPfXXdjvwcYGwm76Cy67RB0BPJQPc_7o3fsUeWg=s1200-w800-h600",
    desc: "A hexagonal wooden pavilion that looks like it is floating on Sagi Pond. At sunset — around 17:00 in November — with the momiji reflected in the water, it is one of the prettiest corners in Nara.",
  },
  {
    n: 9,
    time: "16:15",
    name: "Naramachi",
    jp: "ならまち",
    lat: 34.6771778,
    lng: 135.8304459,
    hours: "streets always open · dinner",
    maps: "https://maps.google.com/?cid=6443161016574091261",
    // Sourced from byfood.com rather than Google Places like the rest.
    photo: "/photos/day8-9-naramachi.webp",
    photoSource:
      "https://byfood.b-cdn.net/api/public/assets/10256/content",
    desc: "The close of the day: the old merchant quarter, all wooden machiya townhouses, hidden cafés and the Shika-Saru-Kitsune (deer–monkey–fox) complex. Have dinner here before heading back to Kyoto.",
  },
];
