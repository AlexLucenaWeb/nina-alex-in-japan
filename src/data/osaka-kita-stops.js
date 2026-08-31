// Day 5 · 15 November · Osaka Kita: castle, river, Nakanoshima, Umeda — and
// south to Nipponbashi to finish.
//
// This day's map will be a Google My Maps embed like Day 3 and Day 4, so the
// stop positions live in that map rather than the repo. `lat`/`lng` are kept
// as the source data the stops came from — nothing on the page reads them
// today, but they are what the My Maps layer gets built from.
//
// `maps` is a place-id (cid) link, which is what the stop cards link to — it
// opens the place's Google listing, not a bare pin. Every cid below was
// checked against the listing it actually resolves to.
export const OSAKA_KITA_STOPS = [
  {
    n: 1,
    time: "09:30",
    name: "Osaka Castle",
    jp: "大阪城",
    lat: 34.6872571,
    lng: 135.5258546,
    hours: "9:00–18:00 · ¥600 · free with the pass",
    maps: "https://maps.google.com/?cid=1081374622389182017",
    photo: "/photos/day5-1-osaka-castle.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlyaKXyeX5i30SMvXLhRcj6VUWYkW8hue2TvhYMlWUItzrF9SRHjlXcIt1H1hPBkeTKDOfw3fzC7PCfUMAGNre7oODIbqva3N0kYUg_6Bjhl1dYGtLlz2Ni2JkL49vS3zMb1QAKku1cSfhY=w408-h306-k-no",
    desc: "Osaka's symbol. The keep is a modern reconstruction with a museum inside, but the park around it is enormous: imposing moats, cyclopean walls and trees just starting to turn in November. Give it 2h30 without rushing — the walk out to the tower and the view from the top included. Covered by the Amazing Pass.",
  },
  {
    n: 2,
    time: "12:00",
    name: "Aqua-liner Cruise: Castle → OAP",
    jp: "アクアライナー",
    lat: 34.6895858,
    lng: 135.5329992,
    hours: "hourly, on the hour · ~40 min to OAP · free with the pass",
    maps: "https://maps.google.com/?cid=14704441767393759651",
    photo: "/photos/day5-2-aqua-liner-cruise-castle-oap.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWney7cDY8XR-elj4kQp6kBeVgKwCdoXh7FJSlyT7bFFQh8unQegb9XSKMn2hKL-5bYHmEaYx-fN1a3207iZJIigkeISnxYW00MzkXYqis1HCKn5XYl1nKa7Hq7IUHbI0SOTH8sScw=w408-h306-k-no",
    desc: "A river cruise down the Ōkawa: it leaves from the pier below the castle, runs past Temmabashi and takes in Nakanoshima and the Public Hall from the water, and you get off at OAP Pier after about 40 minutes rather than riding the full loop round. Glass roof, English audio guide and beer on board. Covered by the Amazing Pass. The OAP stop only runs at weekends — today is Saturday, so it's fine.",
    // Not a stop photo: the operator's own route diagram, shown inside the
    // card so the OAP stop is obvious at a glance. Remote on purpose — it is
    // their image, and StopRouteImage hides it if the link ever dies.
    routeImage:
      "https://d.shutto-translation.com/sites/13884/images/d7iI2jCa4KmJMeeKHy6DKA/260302_aqualiner_map_english.png",
    routeImageCaption: "The Aqua-liner route — we get off at OAP Pier.",
  },
  {
    n: 3,
    time: "13:00",
    name: "Nakanoshima Island",
    jp: "中之島",
    lat: 34.6935485,
    lng: 135.5039123,
    hours: "outside always · museum 10:00–17:00",
    maps: "https://maps.google.com/?cid=3859666275680740249",
    photo: "/photos/day5-3-nakanoshima-island.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkooT52tXAZHxn_Jop6n9tnsPVtDgY_nF0wnHKUK9DRTfFt9JjcZoPvgZvu6dmtr9fLpJdNEja2oHQiVnvErSWtS_CuJ-VyiArXzoyHm3fUYlgmabooz-qhbCQVQwNNVb4Av5af7Cy4NG0j=w408-h306-k-no",
    desc: "Off the boat at OAP, it's a walk of about 20 minutes along the river to the island. The red-brick Central Public Hall (1918, neo-Renaissance) is the architectural jewel; the Prefectural Library sits beside it, and the National Museum of Art — thoroughly modern — at the far end. Plenty of travellers' favourite part of Osaka.",
  },
  {
    n: 4,
    time: "14:00",
    name: "Umeda Sky Building",
    jp: "梅田スカイビル",
    lat: 34.7052872,
    lng: 135.4896527,
    hours: "9:30–22:00 · ¥1,500 · free with the pass before 15:00",
    maps: "https://maps.google.com/?cid=6323866581023509245",
    photo: "/photos/day5-4-umeda-sky-building.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk1vdcbxCvlJnCRfxHbbFyuBUZwZG6XKoM9dRMVL0bByU4tGzviG9zM_n4zvAtOJNQrTtmJLc95bdOhzU_h4JLdgknfuEriG7sUGY5jvKbnA5-41ENNhou33NUOcScswfaXrcZaW-cIDuab=w408-h544-k-no",
    desc: "The Kuchu Teien floating observatory at 173 m: an open-air ring with a 360° view. The escalators bridging the gap between the two towers are the spectacle on the way up. GO UP BEFORE 15:00 for the Amazing Pass to cover it — arriving at 14:00 leaves plenty of room.",
  },
  {
    n: 5,
    time: "14:45",
    name: "Lunch at Takimi Koji",
    jp: "滝見小路",
    lat: 34.7047075,
    lng: 135.490637,
    hours: "11:30–21:30 · closed Thursdays (today is Saturday)",
    maps: "https://maps.google.com/?cid=17466600731205635584",
    photo: "/photos/day5-5-lunch-at-takimi-koji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkU67oP_nLGojYQaV4Nl-N4vRcLzaPkPT8TDly8G9Uz8yix_kFbGDFNUdyfspTyRm7Je8mBYNjHqqV252KNEzclsMgkZGgk5rDNvo1ks2nWRixicO5vGVJGNvhZUKi220UCG-wupo4t6eS9=w408-h306-k-no",
    desc: "Straight down from the observatory: you eat in the basement of the same building. A food alley dressed as a Taishō-era street (the 1920s), all paper lanterns and wooden shopfronts. Okonomiyaki, bento, yakitori. No hurry.",
  },
  {
    n: 6,
    time: "15:30",
    name: "Characters World (Lucua)",
    jp: "キャラクターズワールド",
    lat: 34.7028866,
    lng: 135.4953236,
    hours: "10:30–20:30",
    maps: "https://maps.google.com/?cid=7138839288115191113",
    photo: "/photos/day5-6-characters-world-lucua.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnaVBoFJ0CObQ3wnhwhtl61E5i_43dGS0jCfdOA6ZkbsxUvs1a7QNiEoFaAKdrLDg40mdCykoFYivT7ZTdQaam5vhWHEdNuqNryaoqXuvYJEwHLTnbAv_zlNgENodwWKP0j-ZYCpWJjBGVM=w426-h240-k-no",
    desc: "The official Pokémon, Nintendo, Sanrio and Square Enix stores, all together in the Lucua mall beside Osaka Station. Nerd-souvenir paradise.",
  },
  {
    n: 7,
    time: "16:00",
    name: "Osaka Tenmangu & Tenjinbashisuji",
    jp: "大阪天満宮・天神橋筋",
    lat: 34.6960576,
    lng: 135.5126556,
    hours: "9:00–17:00 · free",
    maps: "https://maps.google.com/?cid=11616453745992232626",
    photo: "/photos/day5-7-osaka-tenmangu-tenjinbashisuji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklgCUj7RvIdhmpfz1eXafL54aBqGLWxrGvB6Bs2MW-vpFwId84wpIznKxzzm947wl2UVVY6AZpXKuFQrbdGcoib75MDD4DedoUNWGVEDIUAU1RixppWnDMTwM_Xi6802NCJqwisg=w408-h313-k-no",
    desc: "A shrine founded in 949 and the origin of the Tenjin Matsuri. Heads-up: the main hall is under restoration and behind scaffolding. On the way out, Tenjinbashisuji — the longest covered shopping arcade in Japan, at 2.6 km. No need to walk all of it; do a stretch and move on.",
  },
  {
    n: 8,
    time: "17:00",
    name: "Hareruya Nipponbashi",
    jp: "晴れる屋 日本橋店",
    lat: 34.6630547,
    lng: 135.5032219,
    hours: "Sat 10:00–23:00",
    maps: "https://maps.google.com/?cid=11550278490123119391",
    photo: "/photos/day5-8-hareruya-nipponbashi.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWme2J0uKpcA83CzxwsdGa7Xr9s7xvqEHU5DStsawqReE4GNmT22xeUFUKlxBYgtl4TsnEuckFaT4hGN6BH53XA9JeUOuTpdFFSHZFgb9LOavyAetanmA3WI73FS7OzskjUX_AaeRuzUrZbp=w408-h306-k-no",
    desc: "THE Magic: The Gathering shop in Osaka. MTG and nothing else: singles (search by card on the in-store terminals), boosters, accessories and tournaments. Tax-free with a passport. About 15 minutes by metro from Tenjinbashi, on the Amazing Pass. It closes at 23:00 on Saturdays, so there is no rush.",
  },
];
