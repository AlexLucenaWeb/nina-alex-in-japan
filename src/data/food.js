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
};

export function hasFoodSection(day) {
  return day >= FOOD_FIRST_DAY && day <= FOOD_LAST_DAY;
}

export function getFood(day) {
  return foodByDay[day] ?? null;
}
