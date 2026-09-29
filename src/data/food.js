// Food notes per day, rendered by the Food section at the top of each day page.
//
// Every day from FOOD_FIRST_DAY to FOOD_LAST_DAY shows the section. Days with
// no entry here render as "nothing planned yet" instead of hiding the section,
// so the gaps stay visible while the trip is still being planned.
//
// Shape — every field is optional, so a day can have only `dishes`, only
// `meals`, or any mix:
//   [day]: {
//     // Where we actually eat, in the order the day runs. This is the only
//     // place a meal lives: don't repeat lunch or dinner under `dishes`.
//     meals: [{
//       time: "13:15",              // when it slots into the route
//       place: "Kuromon Ichiba",    // where
//       type: "Market grazing",     // subtitle: what kind of stop it is
//       reserve: false,             // false -> "Walk-in", true -> "Book ahead"
//       note: "Why, and what to do there",
//     }],
//     // What the area is known for — a reference list, not a plan. `jp` is the
//     // Japanese name, shown next to the romaji for pointing at menus.
//     dishes: [{ name: "Takoyaki", jp: "たこ焼き", desc: "What it is" }],
//     // One paragraph on what needs booking, rendered as a callout.
//     reservations: "...",
//   }
//
// `title` on the section is fixed, but `dishesTitle` lets a day name its own
// local food ("What to eat in Minami") instead of the generic heading.

export const FOOD_FIRST_DAY = 2;
export const FOOD_LAST_DAY = 20;

export const foodByDay = {
  3: {
    dishesTitle: "What to eat in the South & Minami",
    meals: [
      {
        time: "11:30",
        place: "Shinsekai",
        type: "Lunch · kushikatsu",
        reserve: false,
        note: "The reason the route comes through here. Kushikatsu Daruma (the icon, with the angry chef on the sign) or Yaekatsu, quieter and just as good. Both are counters, both are walk-in, and both fill up at peak lunch — going at 11:30 is what keeps it a short wait.",
      },
      {
        time: "13:30",
        place: "Kuromon Ichiba Market",
        type: "Market grazing",
        reserve: false,
        note: "Not a second lunch: graze stall to stall (tabe-aruki), a skewer here and an oyster there. Many stalls grill and serve on the spot — pick dishes, not a restaurant.",
      },
      {
        time: "18:30",
        place: "Dotonbori",
        type: "Dinner",
        reserve: false,
        note: "Okonomiyaki at Ajinoya or Fugetsu, both a short walk from the canal. Around it: a 551 Horai butaman on the go, and Rikuro's warm cheesecake just off the water for dessert.",
      },
    ],
    dishes: [
      {
        name: "Takoyaki",
        jp: "たこ焼き",
        desc: "Batter balls filled with octopus, topped with sweet sauce, mayo, bonito flakes and seaweed. Osaka's signature. Wanaka and Kukuru both have counters around Dotonbori.",
      },
      {
        name: "Okonomiyaki",
        jp: "お好み焼き",
        desc: "Savory griddle pancake with cabbage and your choice of fillings (pork, prawn, cheese), finished with sauce, mayo and bonito. 'Okonomi' = 'as you like'. Your dinner.",
      },
      {
        name: "Kushikatsu",
        jp: "串カツ",
        desc: "Battered, deep-fried skewers dipped in a shared sauce. Sacred rule: dip ONCE only — the sauce pot is shared with the whole counter, and there's a cabbage leaf on the table for scooping more. Shinsekai is the mecca, and it's where you're eating lunch: Daruma is the icon, Yaekatsu the calmer alternative.",
      },
      {
        name: "Butaman",
        jp: "豚まん",
        desc: "Steamed pork bun, great hot on the go. 551 Horai, right by Dotonbori.",
      },
      {
        name: "Negiyaki",
        jp: "ねぎ焼き",
        desc: "A thinner cousin of okonomiyaki, loaded with green onion (negi). Less famous, very good.",
      },
      {
        name: "Ikayaki",
        jp: "いか焼き",
        desc: "Pressed grilled squid, like a savory crepe. Very street-food.",
      },
      {
        name: "Kitsune udon",
        jp: "きつねうどん",
        desc: "Udon in broth topped with sweet fried tofu — said to have been born in Osaka.",
      },
      {
        name: "Doteyaki",
        jp: "どて焼き",
        desc: "Beef tendon slow-simmered in sweet miso. Classic izakaya bite, great with beer.",
      },
      {
        name: "Kani (crab)",
        jp: "かに",
        desc: "Dotonbori is famous for crab (the giant mechanical crab at Kani Doraku is an icon). Tasty but pricey — more photo op than must-eat.",
      },
      {
        name: "Rikuro's cheesecake",
        jp: "りくろーおじさんの店",
        desc: "Jiggly baked cheesecake — a warm, wobbly dessert just off the canal.",
      },
    ],
    reservations:
      "No bookings needed today — kushikatsu counters, market stalls and okonomiyaki griddles are all walk-in. Two caveats, one at each end of the day: Kushikatsu Daruma's Shinsekai branches queue out of the door from about 12:00, which is why lunch is at 11:30; and the famous Dotonbori okonomiyaki spots (Ajinoya) fill up at peak dinner, roughly 19:30–20:30. Sitting down at 18:30 lands you ahead of both.",
  },
  5: {
    meals: [
      {
        time: "14:45",
        place: "Takimi Koji, under the Umeda Sky Building",
        type: "Lunch",
        reserve: false,
        note: "A food alley in the basement dressed as a 1920s street — okonomiyaki, yakitori, katsu, bento. All walk-in, and you come straight down to it from the observatory upstairs. Closed Thursdays, which this day isn't.",
      },
      {
        time: "19:00",
        place: "Dotonbori",
        type: "Dinner",
        reserve: false,
        note: "Hareruya leaves you in Namba, five minutes from the canal, so dinner is whenever you're done there. Okonomiyaki at Ajinoya or Fugetsu, or two stops down the Sakaisuji Line for another round of kushikatsu in Shinsekai.",
      },
    ],
    reservations:
      "Nothing to book today. The only thing worth knowing is that lunch is late on purpose — the Amazing Pass stops covering the Umeda Sky Building at 15:00, so the observatory goes first at 14:00 and you eat afterwards, at 14:45, in the basement of the same building. Dinner has no such constraint: Hareruya is open until 23:00 on Saturdays, so the evening runs as long as you want it to.",
  },
  7: {
    meals: [
      {
        time: "12:45",
        place: "Kyoto Station",
        type: "Lunch",
        reserve: false,
        note: "Ramen Koji on the 10th floor of the station building, the Porta underground mall, or the restaurant floors upstairs. You change trains here anyway, so lunch costs no extra travel.",
      },
      {
        time: "15:30",
        place: "Fushimi Inari approach",
        type: "Street snack",
        reserve: false,
        note: "Stalls and small shops along the approach to the shrine. This is the place for inari-zushi and kitsune udon: fried tofu is said to be the fox's favourite food, and the fox is Inari's messenger.",
      },
      {
        time: "19:00",
        place: "Around Gojō & Kyoto Station",
        type: "Dinner",
        reserve: false,
        note: "Nothing booked: eat near the hotel after the climb. For something local, the Takabashi ramen shops east of Kyoto Station (Honke Daiichi-Asahi, Shinpuku Saikan) are a Kyoto institution — expect a short queue.",
      },
    ],
    dishes: [
      {
        name: "Inari-zushi",
        jp: "いなり寿司",
        desc: "Sushi rice packed into pouches of sweet fried tofu. Named after Inari himself — eat it at the shrine it comes from.",
      },
      {
        name: "Kitsune udon",
        jp: "きつねうどん",
        desc: "Udon topped with a big slice of sweet simmered fried tofu. 'Kitsune' means fox, for the same reason as above.",
      },
      {
        name: "Kyoto ramen",
        jp: "京都ラーメン",
        desc: "Soy-based broth with pork, often rich and dark. Takabashi, by the station, is its historic home.",
      },
    ],
    reservations:
      "Nothing today needs booking. Carry cash: Kinkaku-ji only takes cash, and so do many of the stalls on the Fushimi Inari approach.",
  },
  8: {
    dishesTitle: "What to eat in Nara",
    meals: [
      {
        time: "13:15",
        place: "Mizuya Chaya, Nara Park",
        type: "Lunch",
        reserve: false,
        note: "A teahouse inside the park, between Tōdai-ji and Kasuga Taisha — udon, kudzu drinks, warabimochi and ice cream, at a table under the trees. The unhurried option, and the one that keeps you inside the park.",
      },
      {
        time: "13:15",
        place: "Kakinoha-zushi, wherever you like",
        type: "Lunch, the other option",
        reserve: false,
        note: "Persimmon-leaf sushi, sold boxed along Sanjo-dori and at the stations. The leaf preserves it, so it travels — buy it in the morning and eat it on a bench in the park.",
      },
      {
        time: "17:40",
        place: "Nakatanidō",
        type: "Street snack",
        reserve: false,
        note: "On Sanjo-dori, between Kōfuku-ji and Sarusawa Pond and the entrance to Naramachi — you walk past it at the end of the day. Time it well and you catch the famous high-speed mochi pounding out front; eat the yomogi mochi warm, standing there.",
      },
      {
        time: "18:30",
        place: "Naramachi",
        type: "Dinner",
        reserve: false,
        note: "Dinner in the old merchant quarter before the train back. Small places inside machiya houses, all walk-in — pick one that looks good on the way through.",
      },
    ],
    dishes: [
      {
        name: "Yomogi mochi",
        jp: "よもぎ餅",
        desc: "Mugwort mochi, green and grassy, filled with red bean paste. Nakatanidō's is the one people queue for — best eaten within minutes of the pounding.",
      },
      {
        name: "Kakinoha-zushi",
        jp: "柿の葉寿司",
        desc: "Pressed sushi of mackerel or salmon wrapped in a persimmon leaf. The leaf preserves it, so it keeps for hours — Nara's answer to a packed lunch.",
      },
      {
        name: "Miwa sōmen",
        jp: "三輪素麺",
        desc: "Very fine wheat noodles said to have been born in Nara. Cold with dipping sauce, or hot in broth (nyūmen) as the weather turns.",
      },
      {
        name: "Narazuke",
        jp: "奈良漬",
        desc: "Vegetables pickled in sake lees for months. Deep brown, sweet and boozy — an acquired taste, and a classic souvenir.",
      },
      {
        name: "Kuzumochi & kuzukiri",
        jp: "葛餅・葛切り",
        desc: "Nara is arrowroot (kudzu) country: translucent jellies and noodles served cold with black sugar syrup. Teahouse food.",
      },
      {
        name: "Chagayu",
        jp: "茶粥",
        desc: "Rice porridge simmered in roasted green tea. A thousand-year-old local breakfast, still served at old inns and temple restaurants.",
      },
      {
        name: "Yamato beef & Yamato pork",
        jp: "大和牛・大和ポーク",
        desc: "The prefecture's own beef and pork. Turns up on set menus in Naramachi if you want a proper sit-down dinner.",
      },
    ],
    reservations:
      "One thing does need booking, and it is not the food: the Aoniyoshi is the train out of Kyoto, at ¥1,490 per person. Seats go on sale at 10:30 Japan time exactly one month before — for this trip that is 18 October, which is 03:30 in Madrid — and they sell out in November. The food is all walk-in — Nakatanidō and the kakinoha-zushi shops are counters you eat at standing up, and Naramachi's restaurants take you as you come. Worth knowing: most of Nara shuts early, so aim to be sitting down for dinner by 19:00 rather than 21:00, and carry cash — the smaller places often take nothing else.",
  },
  9: {
    dishesTitle: "What to eat in Higashiyama & Gion",
    meals: [
      {
        time: "13:30",
        place: "Omen Kodai-ji, Higashiyama-ku",
        type: "Lunch",
        reserve: false,
        note: "Artisanal udon with fresh vegetables and tempura, right by Kodai-ji along Nene-no-michi street — a couple of minutes from the temple gate. One practical note: udon in a rented kimono is a splash risk, so ask for an apron or an extra napkin before you start.",
      },
      {
        time: "18:30",
        place: "Nishin Soba Matsuba, Gionmachi Minamigawa",
        type: "Dinner",
        reserve: false,
        note: "Two minutes from Hanamikoji-dori. A historic soba restaurant founded in the 19th century and the creators of nishin soba — buckwheat noodles with sweet simmered herring, Kyoto's classic winter dish. Casual, and walk-in friendly.",
      },
      {
        time: "18:30",
        place: "Gion Karyo, Gionmachi Minamigawa",
        type: "Dinner, the special-occasion option",
        reserve: true,
        note: "Kaiseki ryori in a machiya house, on a seasonal tasting menu. More formal than Matsuba, and it needs booking ahead if you want this instead.",
      },
    ],
    dishes: [
      {
        name: "Kaiseki ryori",
        jp: "懐石料理",
        desc: "Kyoto's haute cuisine: a procession of small seasonal dishes born in Zen temples and the tea ceremony. Gion is one of the best places in the city to try it.",
      },
      {
        name: "Yudofu",
        jp: "湯豆腐",
        desc: "Simmered tofu in a light kombu broth. Temple vegetarian cooking, especially associated with the area's Zen temples.",
      },
      {
        name: "Nishin soba",
        jp: "にしんそば",
        desc: "Buckwheat noodles topped with a whole piece of sweet simmered herring. Invented in Kyoto in the 19th century and a cold-weather classic — Matsuba, right in Gion, is the historic specialty restaurant.",
      },
      {
        name: "Obanzai",
        jp: "おばんざい",
        desc: "Kyoto home cooking: small seasonal vegetable and tofu dishes, found in the casual izakaya around Gion and Pontocho.",
      },
      {
        name: "Matcha sweets",
        jp: "抹茶スイーツ",
        desc: "Kyoto is matcha country — parfaits, soft-serve and dango at teahouses like Tsujiri Gion, on the way between Yasaka Jinja and Hanamikoji-dori.",
      },
      {
        name: "Yatsuhashi",
        jp: "八ツ橋",
        desc: "Kyoto's iconic cinnamon mochi sweet, sold all over Higashiyama. A souvenir, and a snack while walking Sannenzaka and Ninenzaka.",
      },
    ],
    reservations:
      "The booking this day depends on is not a meal: the kimono and tea ceremony at Maikoya Gion Kiyomizu, the 9:30 session for the two of you. Beyond that, only Gion Karyo needs reserving, and only if you choose the kaiseki option — book a few days ahead for that. Everything else is walk-in: Omen Kodai-ji, Nishin Soba Matsuba and the teahouses. Carry cash — several small shops and traditional restaurants in this area don't take cards.",
  },
  10: {
    dishesTitle: "What to eat in Kurama & Kibune",
    meals: [
      {
        time: "13:15",
        place: "Kibunesou or Kibune Kiraku, Kibune village",
        type: "Lunch",
        reserve: false,
        note: "Traditional Kyoto kaiseki at one, seafood and wagyu set menus at the other, both in the village at the end of the crossing. The kawadoko terraces built out over the river come down at the end of summer, so in November you eat indoors. Walk-in, but get there early in high season.",
      },
      {
        time: "18:00",
        place: "Central Kyoto",
        type: "Dinner",
        reserve: false,
        note: "The Kirara train drops you back in the city with the evening still open, and nothing about it needs planning — eat wherever you land coming off the Eizan line.",
      },
    ],
    dishes: [
      {
        name: "Yuba",
        jp: "湯葉",
        desc: "Tofu skin, lifted off the surface of simmering soymilk. Kyoto temple cooking at its most delicate — served rolled, in broth, or draped raw over rice.",
      },
      {
        name: "Soba",
        jp: "そば",
        desc: "Buckwheat noodles from the mountains north of Kyoto, where the cold and the water suit them. The obvious thing to eat coming off the trail.",
      },
      {
        name: "Seasonal sweets",
        jp: "季節の和菓子",
        desc: "Kibune's teahouses change their wagashi with the season — in November that means chestnut, persimmon and maple-leaf shapes, with matcha.",
      },
    ],
    reservations:
      "Kibunesou and Kibune Kiraku are both walk-in, but Kibune fills up through the autumn — arrive early or be ready to wait. One thing worth knowing: Hirobun's nagashi somen, the noodles you catch as they come down a bamboo pipe, is a summer-only affair; in November they serve a seasonal set menu instead. The Eizan Kirara train needs no reservation either — just tap in with an IC card.",
  },
};

export function hasFoodSection(day) {
  return day >= FOOD_FIRST_DAY && day <= FOOD_LAST_DAY;
}

export function getFood(day) {
  return foodByDay[day] ?? null;
}
