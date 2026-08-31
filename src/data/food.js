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
        time: "12:45",
        place: "Takimi Koji, under the Umeda Sky Building",
        type: "Lunch",
        reserve: false,
        note: "A food alley in the basement dressed as a 1920s street — okonomiyaki, yakitori, katsu, bento. All walk-in, and you're already in the building you're about to go up. Closed Thursdays, which this day isn't.",
      },
      {
        time: "19:00",
        place: "Dotonbori",
        type: "Dinner",
        reserve: false,
        note: "Hareruya leaves you five minutes from the canal, so dinner is whenever you're done there. Okonomiyaki at Ajinoya or Fugetsu, or two stops down the Sakaisuji Line for another round of kushikatsu in Shinsekai.",
      },
    ],
    reservations:
      "Nothing to book today. The only thing worth knowing is that lunch is early on purpose — the Amazing Pass stops covering the Umeda Sky Building at 15:00, so eating at 12:45 is what gets you up there in time. Dinner has no such constraint: Hareruya is open until 23:00 at weekends, so the evening runs as long as you want it to.",
  },
  8: {
    dishesTitle: "What to eat in Nara",
    meals: [
      {
        time: "12:15",
        place: "Mizuya Chaya, Nara Park",
        type: "Lunch",
        reserve: false,
        note: "A teahouse inside the park, between Tōdai-ji and Kasuga Taisha — udon, kudzu drinks, warabimochi and ice cream, at a table under the trees. The unhurried option, and the one that keeps you inside the park.",
      },
      {
        time: "12:15",
        place: "Kakinoha-zushi, wherever you like",
        type: "Lunch, the other option",
        reserve: false,
        note: "Persimmon-leaf sushi, sold boxed along Sanjo-dori and at the stations. The leaf preserves it, so it travels — buy it in the morning and eat it on a bench in the park.",
      },
      {
        time: "16:30",
        place: "Nakatanidō",
        type: "Street snack",
        reserve: false,
        note: "On Sanjo-dori, on the way into Naramachi at the end of the day. Time it well and you catch the famous high-speed mochi pounding out front; eat the yomogi mochi warm, standing there.",
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
      "Nothing here needs booking — the only thing that might is the train out of Kyoto, if you end up taking the Aoniyoshi (¥1,490 per person, sells out in November). The food is all walk-in — Nakatanidō and the kakinoha-zushi shops are counters you eat at standing up, and Naramachi's restaurants take you as you come. Worth knowing: most of Nara shuts early, so aim to be sitting down for dinner by 19:00 rather than 21:00, and carry cash — the smaller places often take nothing else.",
  },
};

export function hasFoodSection(day) {
  return day >= FOOD_FIRST_DAY && day <= FOOD_LAST_DAY;
}

export function getFood(day) {
  return foodByDay[day] ?? null;
}
