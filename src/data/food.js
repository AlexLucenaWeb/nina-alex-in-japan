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
    dishesTitle: "What to eat in Minami",
    meals: [
      {
        time: "13:15",
        place: "Kuromon Ichiba Market",
        type: "Market grazing",
        reserve: false,
        note: "Graze stall to stall (tabe-aruki). Many stalls grill and serve on the spot — pick dishes, not a restaurant.",
      },
      {
        time: "14:45",
        place: "Triangle Park, Amerika-mura",
        type: "Street snack",
        reserve: false,
        note: "Grab a takoyaki and sit for a bit. Just a snack, not a full meal.",
      },
      {
        time: "18:00",
        place: "Dotonbori",
        type: "Dinner",
        reserve: false,
        note: "Okonomiyaki at Ajinoya or Fugetsu — both a short walk from the canal.",
      },
    ],
    dishes: [
      {
        name: "Takoyaki",
        jp: "たこ焼き",
        desc: "Batter balls filled with octopus, topped with sweet sauce, mayo, bonito flakes and seaweed. Osaka's signature. Try Wanaka or Kukuru nearby.",
      },
      {
        name: "Okonomiyaki",
        jp: "お好み焼き",
        desc: "Savory griddle pancake with cabbage and your choice of fillings (pork, prawn, cheese), finished with sauce, mayo and bonito. 'Okonomi' = 'as you like'. Your dinner.",
      },
      {
        name: "Kushikatsu",
        jp: "串カツ",
        desc: "Battered, deep-fried skewers dipped in a shared sauce. Sacred rule: dip ONCE only — no double-dipping. Shinsekai is the mecca; Kushikatsu Daruma is the icon.",
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
      "No bookings needed today — it's all casual street food and market grazing, walk-in everywhere. Only caveat: the famous Dotonbori okonomiyaki spots (Ajinoya) fill up at peak dinner (roughly 19:30–20:30). Go before 18:30 or after 21:00, or put your name on the door's waiting list and take a stroll.",
  },
  4: {
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
      "Only one thing needs booking today, and it needs it early: the Aoniyoshi train (¥1,410 per person, sells out in November). The food is all walk-in — Nakatanidō and the kakinoha-zushi shops are counters you eat at standing up, and Naramachi's restaurants take you as you come. Worth knowing: most of Nara shuts early, so aim to be sitting down for dinner by 19:00 rather than 21:00, and carry cash — the smaller places often take nothing else.",
  },
};

export function hasFoodSection(day) {
  return day >= FOOD_FIRST_DAY && day <= FOOD_LAST_DAY;
}

export function getFood(day) {
  return foodByDay[day] ?? null;
}
