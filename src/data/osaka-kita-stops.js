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
    hours: "9:00–18:00 (last entry 17:30) · ¥1,200 · free with the pass",
    maps: "https://maps.google.com/?cid=1081374622389182017",
    photo: "/photos/day5-1-osaka-castle.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlyaKXyeX5i30SMvXLhRcj6VUWYkW8hue2TvhYMlWUItzrF9SRHjlXcIt1H1hPBkeTKDOfw3fzC7PCfUMAGNre7oODIbqva3N0kYUg_6Bjhl1dYGtLlz2Ni2JkL49vS3zMb1QAKku1cSfhY=w408-h306-k-no",
    desc: "Osaka's symbol. The keep is a concrete reconstruction with a museum inside, so the real pleasure is outside it: an enormous park, moats and cyclopean stone walls. Mid-November is when the trees around it start to turn.",
  },
  {
    n: 2,
    time: "11:00",
    name: "Aqua-liner River Cruise",
    jp: "アクアライナー",
    lat: 34.6895858,
    lng: 135.5329992,
    hours: "hourly 10:00–16:00 · ~55 min · ¥1,700 · free with the pass",
    maps: "https://maps.google.com/?cid=14704441767393759651",
    photo: "/photos/day5-2-aqua-liner-river-cruise.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWney7cDY8XR-elj4kQp6kBeVgKwCdoXh7FJSlyT7bFFQh8unQegb9XSKMn2hKL-5bYHmEaYx-fN1a3207iZJIigkeISnxYW00MzkXYqis1HCKn5XYl1nKa7Hq7IUHbI0SOTH8sScw=w408-h306-k-no",
    desc: "Leaves from the pier below the castle and runs the Ōkawa river under a string of low bridges and around Nakanoshima. It doubles as the day's transport: stay on to Yodoyabashi pier and carry on from there on foot.",
  },
  {
    n: 3,
    time: "12:00",
    name: "Nakanoshima & Central Public Hall",
    jp: "中之島・大阪市中央公会堂",
    lat: 34.6935485,
    lng: 135.5039123,
    hours: "outside always · hall 9:30–21:30 · free to walk through",
    maps: "https://maps.google.com/?cid=3859666275680740249",
    photo: "/photos/day5-3-nakanoshima-central-public-hall.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkooT52tXAZHxn_Jop6n9tnsPVtDgY_nF0wnHKUK9DRTfFt9JjcZoPvgZvu6dmtr9fLpJdNEja2oHQiVnvErSWtS_CuJ-VyiArXzoyHm3fUYlgmabooz-qhbCQVQwNNVb4Av5af7Cy4NG0j=w408-h306-k-no",
    desc: "You step off the boat onto the thin island between the two rivers. The red-brick Central Public Hall (1918, neo-Renaissance) is the one to see; the Prefectural Nakanoshima Library sits beside it, and the National Museum of Art is at the far end.",
  },
  {
    n: 4,
    time: "12:45",
    name: "Takimi Koji",
    jp: "滝見小路",
    lat: 34.7047075,
    lng: 135.490637,
    hours: "11:30–21:30 · closed Thursdays",
    maps: "https://maps.google.com/?cid=17466600731205635584",
    photo: "/photos/day5-4-takimi-koji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkU67oP_nLGojYQaV4Nl-N4vRcLzaPkPT8TDly8G9Uz8yix_kFbGDFNUdyfspTyRm7Je8mBYNjHqqV252KNEzclsMgkZGgk5rDNvo1ks2nWRixicO5vGVJGNvhZUKi220UCG-wupo4t6eS9=w408-h306-k-no",
    desc: "Lunch, in the basement of the Umeda Sky Building: a food alley dressed as a 1920s Taishō-era street, all paper lanterns and wooden shopfronts. Okonomiyaki, yakitori, bento. You eat here and then go straight up.",
  },
  {
    n: 5,
    time: "13:30",
    name: "Umeda Sky Building",
    jp: "梅田スカイビル",
    lat: 34.7052872,
    lng: 135.4896527,
    hours: "9:30–22:30 · ¥2,000 · free with the pass ONLY before 15:00",
    maps: "https://maps.google.com/?cid=6323866581023509245",
    photo: "/photos/day5-5-umeda-sky-building.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk1vdcbxCvlJnCRfxHbbFyuBUZwZG6XKoM9dRMVL0bByU4tGzviG9zM_n4zvAtOJNQrTtmJLc95bdOhzU_h4JLdgknfuEriG7sUGY5jvKbnA5-41ENNhou33NUOcScswfaXrcZaW-cIDuab=w408-h544-k-no",
    desc: "Two towers joined at the top by the Kuchu Teien — a 173 m open-air ring you walk right around, with the escalator bridging the gap between the towers on the way up. The pass only covers it before 15:00, which is why lunch is early and this comes straight after.",
  },
  {
    n: 6,
    time: "14:30",
    name: "Characters World (Lucua 1100)",
    jp: "キャラクターズワールド",
    lat: 34.7028866,
    lng: 135.4953236,
    hours: "10:30–20:30",
    maps: "https://maps.google.com/?cid=7138839288115191113",
    photo: "/photos/day5-6-characters-world-lucua-1100.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnaVBoFJ0CObQ3wnhwhtl61E5i_43dGS0jCfdOA6ZkbsxUvs1a7QNiEoFaAKdrLDg40mdCykoFYivT7ZTdQaam5vhWHEdNuqNryaoqXuvYJEwHLTnbAv_zlNgENodwWKP0j-ZYCpWJjBGVM=w426-h240-k-no",
    desc: "The official Pokémon Center, Nintendo, Sanrio and Square Enix stores, all on one floor of the Lucua 1100 mall beside Osaka Station. Ten minutes on foot from the Sky Building, and the single best souvenir stop of the trip.",
  },
  {
    n: 7,
    time: "15:00",
    name: "Osaka Tenmangu & Tenjinbashisuji",
    jp: "大阪天満宮・天神橋筋",
    lat: 34.6960576,
    lng: 135.5126556,
    hours: "9:00–17:00 · free · main hall under restoration",
    maps: "https://maps.google.com/?cid=11616453745992232626",
    photo: "/photos/day5-7-osaka-tenmangu-tenjinbashisuji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklgCUj7RvIdhmpfz1eXafL54aBqGLWxrGvB6Bs2MW-vpFwId84wpIznKxzzm947wl2UVVY6AZpXKuFQrbdGcoib75MDD4DedoUNWGVEDIUAU1RixppWnDMTwM_Xi6802NCJqwisg=w408-h313-k-no",
    desc: "A shrine founded in 949 and the home of the Tenjin Matsuri. Fair warning: the main hall is being re-roofed ahead of a 2027 festival and has been behind screens through 2026, so come for the gate and the atmosphere rather than the building. Walk out into Tenjinbashisuji, the longest covered shopping street in Japan at 2.6 km.",
  },
  {
    n: 8,
    time: "16:15",
    name: "Hareruya Nipponbashi",
    jp: "晴れる屋 日本橋店",
    lat: 34.6630547,
    lng: 135.5032219,
    hours: "weekends 10:00–23:00 · weekdays from 12:00",
    maps: "https://maps.google.com/?cid=11550278490123119391",
    photo: "/photos/day5-8-hareruya-nipponbashi.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWme2J0uKpcA83CzxwsdGa7Xr9s7xvqEHU5DStsawqReE4GNmT22xeUFUKlxBYgtl4TsnEuckFaT4hGN6BH53XA9JeUOuTpdFFSHZFgb9LOavyAetanmA3WI73FS7OzskjUX_AaeRuzUrZbp=w408-h306-k-no",
    desc: "The Magic: The Gathering shop in Osaka — singles, boosters, accessories and tournaments, with terminals for searching the singles stock. Tax-free with a passport. About 15 minutes by metro from Tenjinbashisuji, on the pass.",
  },
];
