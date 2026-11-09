// Day 5 · Sunday 15 November · Osaka Kita: castle, river, Nakanoshima and
// Umeda, finishing with dinner in Umeda.
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
    desc: "Osaka's symbol. The keep is a modern reconstruction with a museum inside, but the park around it is enormous: imposing moats, cyclopean walls and trees just starting to turn in November. Give it 2h30 without rushing — the walk out to the tower and the view from the top included. From the hotel: Sakaisuji Line from Ebisucho to Sakaisuji-Hommachi, then the Chuo Line to Tanimachi 4-chome (~20–25 min, on the pass). For a snack, MIRAIZA OSAKA-JO next to the tower has cafés (see Food). Leave the castle area by ~11:40: the Aqua-liner pier is a ~15 min walk and the boat leaves at 12:00.",
  },
  {
    n: 2,
    time: "12:00",
    name: "Aqua-liner Cruise, Castle → OAP",
    jp: "アクアライナー",
    lat: 34.6895858,
    lng: 135.5329992,
    hours: "hourly, on the hour · ~40 min to OAP Pier · free with the pass (exchange the pass QR for a ticket at the pier booth)",
    maps: "https://maps.google.com/?cid=14704441767393759651",
    photo: "/photos/day5-2-aqua-liner-cruise-castle-oap.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWney7cDY8XR-elj4kQp6kBeVgKwCdoXh7FJSlyT7bFFQh8unQegb9XSKMn2hKL-5bYHmEaYx-fN1a3207iZJIigkeISnxYW00MzkXYqis1HCKn5XYl1nKa7Hq7IUHbI0SOTH8sScw=w408-h306-k-no",
    desc: "Departs from Osaka Castle Pier (~15 min walk from the castle tower) and passes Temmabashi, Nakanoshima and the Central Public Hall. Get off at OAP Pier instead of doing the full 55-min loop — longer on the boat for the views. The OAP stop only runs on weekends (today is Sunday, so it's fine).",
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
    desc: "Off the boat at OAP, it's a walk of about 20 minutes along the river to the island. The red-brick Central Public Hall (1918, neo-Renaissance) is the architectural jewel; the Prefectural Library sits beside it, and the National Museum of Art — thoroughly modern — at the far end. Plenty of travellers' favourite part of Osaka. On to Umeda: ~30 min on foot, or the Midosuji Line from Yodoyabashi to Umeda and a ~10 min walk.",
  },
  {
    n: 4,
    time: "14:00",
    name: "Umeda Sky Building",
    jp: "梅田スカイビル",
    lat: 34.7052872,
    lng: 135.4896527,
    hours: "9:30–22:00 · ¥2,000 · free with the pass before 15:00, 10% off after",
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
    hours: "11:30–21:30 · closed Thursdays (today is Sunday)",
    maps: "https://maps.google.com/?cid=17466600731205635584",
    photo: "/photos/day5-5-lunch-at-takimi-koji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkU67oP_nLGojYQaV4Nl-N4vRcLzaPkPT8TDly8G9Uz8yix_kFbGDFNUdyfspTyRm7Je8mBYNjHqqV252KNEzclsMgkZGgk5rDNvo1ks2nWRixicO5vGVJGNvhZUKi220UCG-wupo4t6eS9=w408-h306-k-no",
    desc: "Straight down from the observatory: you eat in the basement of the same building. A food alley dressed as a Taishō-era street (the 1920s), all paper lanterns and wooden shopfronts. Okonomiyaki, bento, yakitori. No hurry.",
  },
  {
    n: 6,
    time: "~15:45",
    name: "Osaka Tenmangu & Tenjinbashisuji",
    jp: "大阪天満宮・天神橋筋",
    lat: 34.6960576,
    lng: 135.5126556,
    hours: "9:00–17:00 · free",
    maps: "https://maps.google.com/?cid=11616453745992232626",
    photo: "/photos/day5-6-osaka-tenmangu-tenjinbashisuji.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklgCUj7RvIdhmpfz1eXafL54aBqGLWxrGvB6Bs2MW-vpFwId84wpIznKxzzm947wl2UVVY6AZpXKuFQrbdGcoib75MDD4DedoUNWGVEDIUAU1RixppWnDMTwM_Xi6802NCJqwisg=w408-h313-k-no",
    desc: "A shrine founded in 949 and the origin of the Tenjin Matsuri. Heads-up: the main hall is under restoration and behind scaffolding. On the way out, Tenjinbashisuji — the longest covered shopping arcade in Japan, at 2.6 km. No need to walk all of it: do a stretch (~16:15–16:45) and move on. The shrine closes at 17:00, which is why it comes before Lucua. Getting here: Tanimachi Line from Higashi-Umeda to Minami-morimachi (2 stops), then a short walk.",
  },
  {
    n: 7,
    time: "~17:15",
    name: "Characters World (Lucua)",
    jp: "キャラクターズワールド",
    lat: 34.7028866,
    lng: 135.4953236,
    hours: "10:30–20:30",
    maps: "https://maps.google.com/?cid=7138839288115191113",
    photo: "/photos/day5-7-characters-world-lucua.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnaVBoFJ0CObQ3wnhwhtl61E5i_43dGS0jCfdOA6ZkbsxUvs1a7QNiEoFaAKdrLDg40mdCykoFYivT7ZTdQaam5vhWHEdNuqNryaoqXuvYJEwHLTnbAv_zlNgENodwWKP0j-ZYCpWJjBGVM=w426-h240-k-no",
    desc: "The official Pokémon, Nintendo, Sanrio and Square Enix stores, all together in the Lucua mall beside Osaka Station. Nerd-souvenir paradise, and open until 20:30, so no rush. Getting here: Tanimachi Line back from Minami-morimachi to Higashi-Umeda, then walk to Osaka Station.",
  },
  {
    n: 8,
    time: "~18:15",
    name: "Hareruya Tournament Center Osaka",
    jp: "晴れる屋 トーナメントセンター大阪",
    lat: 34.6998724,
    lng: 135.4988507,
    hours: "10:00–23:00",
    maps: "https://www.google.com/maps/search/?api=1&query=Hareruya%20Tournament%20Center%20Osaka%2C%201-11-4%20Umeda%2C%20Kita-ku%2C%20Osaka",
    photo: "/photos/day5-8-hareruya-tournament-center-osaka.webp",
    photoSource:
      "https://images.akihabara-cardmap.com/shops/a127efda-c290-4fb6-8ca3-9e00a88ba745/ChIJ2w8GD8uNGGAR_5PysntyJYs/g/0-1793556333.jpg",
    optional: true,
    desc: "2F Osaka Ekimae Daiyon Building, 1-11-4 Umeda — a few minutes' walk from Osaka/Umeda stations. A Magic: The Gathering specialist: singles, boosters and accessories. The main Hareruya visit is in Tokyo (Takadanobaba, Day 20), so this one is only if you feel like it. Bring your passport for tax-free."
  },
  {
    n: 9,
    time: "~19:00",
    name: "Dinner in Umeda",
    jp: "梅田",
    lat: 34.6991272,
    lng: 135.5008394,
    hours: "evenings",
    maps: "https://www.google.com/maps/search/?api=1&query=Ohatsu%20Tenjin%20Ura-sando",
    photo: "/photos/day5-9-dinner-in-umeda.webp",
    photoSource:
      "https://media.timeout.com/images/106266109/750/562/image.jpg",
    desc: "Dinner stays in Umeda rather than going back to Dotonbori, which Day 3 already covers: Shin-Umeda Shokudogai under the Hankyu tracks, or the lantern-lit izakaya lane of Ohatsu Tenjin Ura-sando (see Food). Back to the hotel: Midosuji Line from Umeda to Dobutsuen-mae, then one stop on the Sakaisuji Line to Ebisucho (or ~10 min walk)."
  },
];
