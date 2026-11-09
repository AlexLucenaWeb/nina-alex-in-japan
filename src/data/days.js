import { withSpanish } from "@/lib/i18n";
import { DAYS_ES } from "@/data/es/days";

export const TRIP_LENGTH = 21;

const overrides = {
  1: {
    title: "Flight to Tokyo",
    date: "Wednesday, 11 November",
    location: "Madrid → Doha → Tokyo (in transit)",
    summary:
      "Travel day: a taxi to Barajas before dawn, then two long-haul Qatar Airways flights via Doha to reach Japan. No sightseeing today — just the journey from Madrid to Narita. Arrival at Narita is around midday on Day 2 (Nov 12).",
    recommendations: [
      "Online check-in opens 48 hours before departure: Monday Nov 9 at 8:05 (Madrid time). Pick seats then if not chosen already.",
      "Be at T4S by 5:00 (taxi booked in advance).",
      "At the desk, confirm checked bags go straight through to Narita. Carry a change of clothes and essentials in hand luggage in case a bag is delayed.",
      "Install the Ubigi eSIM before leaving; activate it after landing at Narita so you have data straight away.",
      "Visit Japan Web: each of you has your own account and your own QR. Screenshot both QR codes before boarding as an offline backup.",
      "In Doha there's time to stretch your legs, but keep an eye on QR808's boarding time.",
      "Try to sleep on the Doha–Tokyo leg (it departs at 1:50 a.m. Japan time) and switch your watch to Japan time (UTC+9) when you board.",
    ],
  },
  2: {
    title: "Arrival in Osaka",
    date: "Thursday, 12 November",
    location: "Tokyo (NRT) → Shin-Osaka (in transit)",
    summary:
      "Land at Narita T2 at 11:55, N'EX to Tokyo Station, Nozomi 267 at 16:00 to Shin-Osaka (18:30), hotel ~19:00.",
  },
  3: {
    title: "Osaka on Foot: South & Minami",
    date: "Friday, 13 November",
    location: "Osaka",
    summary:
      "Osaka from south to north, on foot: the old temple at Shitenno-ji, kushikatsu under the Tsutenkaku tower in Shinsekai, then across into Minami for a quiet shrine, the Kuromon Ichiba food market, Shinsaibashi-suji and the lantern alley at Hozenji — finishing in Dotonbori as the neon comes on. See the interactive map and stop-by-stop itinerary below.",
    recommendations: [
      "Bring cash — many Kuromon stalls and some kushikatsu counters are cash only; carry small yen notes and coins.",
      "Glico Man photo — the best shot is from Ebisubashi bridge after dark, with the sign reflected in the canal. For calmer photos, walk down to the Tombori River Walk along the water.",
      "Hozenji Yokocho at dusk — with the lanterns lit it's the prettiest corner of the area, a quiet contrast to the noise of Dotonbori.",
      "Tax-free shopping (new from Nov 1, 2026) — you now pay the tax at the till and get it refunded at customs when leaving Japan. Bring your passport when shopping, keep the receipts, and don't use or open tax-free items until you're home.",
    ],
  },
  4: {
    title: "Himeji & Kobe",
    date: "Saturday, 14 November",
    location: "Himeji & Kobe (from Osaka)",
    summary:
      "A day trip out of Osaka to two cities: the White Heron castle in Himeji in the morning — the finest original castle left in Japan — and the port city of Kobe in the afternoon, from the Western merchant houses of Kitano down to Chinatown and the harbour at dusk. Kobe beef for dinner at Daichi.",
    recommendations: [
      "Leave Osaka around 08:00. The castle opens at 9:00, and arriving with it is the difference between walking in and queuing for tickets.",
      "Budget roughly ¥8,000 per person for the day including trains and entry — Kobe beef for dinner is on top of that.",
      "The castle keep is steep, with narrow wooden stairs and no shoes allowed inside: easy shoes to take off and put back on save a lot of fumbling.",
      "Going home, take the Hanshin line from Hanshin Kobe-Sannomiya, not JR: the Rapid Express runs straight through to Osaka-Namba without a change. Check you're on the Hanshin side of the station, not JR Sannomiya.",
    ],
  },
  5: {
    title: "Osaka Kita: Castle, River & Umeda",
    date: "Sunday, 15 November",
    location: "Osaka",
    summary:
      "The other half of Osaka: a long morning at the castle and its park, the Ōkawa river by boat as far as OAP and a walk across to the red brick of Nakanoshima, the 173 m open-air observatory at Umeda with lunch underneath it, then the shrine and Japan's longest shopping arcade, the character stores at Lucua and dinner in Umeda's old alleys. The day the Osaka Amazing Pass earns its keep.",
    recommendations: [
      "Buy the Amazing Pass (¥3,500) the night before.",
      "Take the 12:00 Aqua-liner and get off at OAP (weekend-only stop).",
      "Reach Umeda Sky Building before 15:00 (free with the pass only until then).",
      "Grab a konbini snack in the morning — lunch is late (14:45).",
      "Osaka Tenmangu closes at 17:00 — go there before Lucua.",
      "Walk only a stretch of Tenjinbashisuji.",
      "Bring your passport for tax-free shopping (refund at customs when leaving Japan).",
    ],
  },
  6: {
    title: "Universal Studios Japan",
    date: "Monday, 16 November",
    location: "Universal Studios Japan, Osaka",
    summary:
      "A full day inside USJ: Super Nintendo World first thing, Hogsmeade late morning, JAWS and WaterWorld after lunch while Alex takes the big coasters on the single rider lines, and the Minion Park and Hollywood end of the park as the light goes. Dinner at CityWalk on the way out.",
    recommendations: [
      "Register the Studio Pass in the USJ app before the day.",
      "Request the Super Nintendo World Area Timed Entry Ticket the moment you enter the park.",
      "A day almost entirely on your feet and outdoors, with long stretches queuing without moving — comfortable shoes, and a warm layer for standing still in November.",
      "The app shows live waiting times for every ride. Checking it before walking across the park is the difference between three big attractions in an afternoon and one.",
      "Lockers by the entrance are worth the coins: the water rides in Jurassic Park mean carrying a wet coat around otherwise.",
      "Last trains from Universal City are around 23:30, so there's no pressure on dinner at CityWalk — the pressure is all in the morning.",
    ],
  },
  7: {
    title: "Arrival in Kyoto",
    date: "Tuesday, 17 November",
    location: "Osaka → Kyoto",
    summary:
      "Moving base from Osaka to Kyoto, home for the next five nights. Out of the Osaka hotel at ~08:40, bags at the Kyoto hotel by 10:00, then the Golden Pavilion, the maples of Tōfuku-ji, and Fushimi Inari's torii climbed to sunset.",
    recommendations: [
      "Take a taxi to Kinkaku-ji (~25 min from Gojō) — worth it split between two; autumn buses to the northwest are packed.",
      "Bring cash: ¥1,000 for two Kinkaku-ji entries; many Fushimi Inari stalls are cash only too.",
      "Tōfuku-ji is the pinch point: be inside before 15:00. If you're still in the north at 13:30, skip it and go straight to Fushimi Inari — it can move to another day.",
      "Walk straight through the crowded first torii going up; photograph them on the way down, when they're lit and emptier.",
      "Time the Yotsutsuji climb (~40–45 min) to reach the west-facing viewpoint for sunset (~16:50).",
      "Some stretches of the mountain path are dark — carry a charged phone.",
    ],
  },
  8: {
    title: "Higashiyama & Gion",
    date: "Wednesday, 18 November",
    location: "Kyoto",
    summary:
      "Into kimono at Maikoya at 9:00 for a tea ceremony, then up to Kiyomizu-dera in it — and the rest of the day spent in it, downhill through Sannenzaka and Ninenzaka, the Yasaka Pagoda, Kodai-ji and Yasaka Jinja, ending in Gion at dusk. The route flows in one direction: up Matsubara-dori to Kiyomizu, then all downhill. See the interactive map and stop-by-stop itinerary below.",
    recommendations: [
      "Take a taxi to Maikoya and arrive ~08:45.",
      {
        text: "Booked — Maikoya Gion Kiyomizu, 18 Nov, 9:00, 2 adults. Keep the confirmation email at hand. Return the kimono by 18:00.",
        link: {
          href: "https://mai-ko.com/tour/kimono-tea-ceremony-gion-kiyomizu-at-the-registered-cultural-property/",
          label: "Booking details →",
        },
      },
      "In kimono and geta you walk slower than usual — budget extra time on the slopes of Sannenzaka and Ninenzaka.",
      "Carry cash — many small shops on Sannenzaka and Ninenzaka, and some temple entry fees, don't take cards.",
      "Kennin-ji's last entry is 16:00 (it closes at 16:30), earlier than the other stops — plan to reach it by mid-afternoon.",
      "The walks between stops are short, but the lanes are steep and stone-paved — which is worth remembering when you are doing them in geta.",
      "Respect the no-photo signs in residential areas like Ishibei-koji and in Gion's private alleys — fines apply.",
      "Kōdai-ji's autumn illumination is on tonight (from dusk, ~¥600) — an optional return after the kimono or dinner. Kiyomizu-dera's night viewing only starts on Nov 21.",
      "For the best chance of spotting a maiko or geiko, be on Hanamikoji-dori around dusk (17:00–18:00).",
    ],
  },
  9: {
    title: "Arashiyama",
    date: "Thursday, 19 November",
    location: "Arashiyama & Sagano, Kyoto",
    summary:
      "The bamboo grove at 8:00, before the crowds. Then up into Sagano's quiet gardens at Ōkōchi Sansō and Jōjakkō-ji, back down to Tenryū-ji, soba overlooking the river, and the maples over Togetsukyō Bridge.",
    recommendations: [
      "Be in the bamboo grove by 8:00. By 10:00 it's so packed you can barely see the bamboo.",
      "Keep walking to the end of the path. Ōkōchi Sansō and Jōjakkō-ji are just beyond it, and they're the best maples of the day with a fraction of the crowd.",
      "Enter Tenryū-ji by the north gate straight from the bamboo path — it saves walking round to the main entrance.",
      "Get to Yoshimura for lunch by 12:00 and ask for the second floor.",
      "Photograph Togetsukyō from the far bank, looking back towards the mountain.",
      "The Monkey Park is a 20–30 minute climb up steps. Worth it for the view and the macaques, but it's the first thing to drop if you're tired.",
    ],
  },
  10: {
    title: "Day Trip to Nara",
    date: "Friday, 20 November",
    location: "Nara (from Kyoto)",
    summary:
      "The Aoniyoshi sightseeing train out of Kyoto, then everything on foot inside Nara Park: the Great Buddha at Tōdai-ji, the view from Nigatsu-dō, a long lunch, the Isuien and Yoshikien gardens, the lantern shrine at Kasuga Taisha, sunset at the Ukimidō pavilion, and Kōfuku-ji and Sarusawa Pond at dusk on the way out. Deer throughout. Dinner in Naramachi before the train back.",
    recommendations: [
      {
        text: "The train out is booked: Ltd. Exp. Aoniyoshi, train no. 9007, Kintetsu Kyoto 10:55 → Kintetsu-Nara 11:30, twin seats. If staff ask, show the live Kintetsu e-ticket page on the phone — screenshots are not accepted — and go through the gates with the IC card.",
        link: {
          href: "https://www.ticket.kintetsu.co.jp/vs/en/e-ticket/",
          label: "Kintetsu e-ticket page →",
        },
      },
      "A day almost entirely outdoors — comfortable shoes, and layers for the morning.",
      "Between Tōdai-ji, Nigatsu-dō and Kasuga Taisha there's 20–25 minutes of walking through the park each time; budget the walking, not just the visits.",
      "Sunset is around 16:50 on 20 November, and the route is built around it: Ukimidō at 16:45 puts you at the pond just as the light goes.",
    ],
  },
  11: {
    title: "Kurama & Kibune",
    date: "Saturday, 21 November",
    location: "Kurama & Kibune, Kyoto",
    summary:
      "Out of the city and into the mountains north of Kyoto: the Eizan line up to Kibune and its water shrine first thing, then the ridge trail — the forest hall at Sōjō-ga-tani, the cedar roots of Kinone-michi — over to Kurama-dera and down into Kurama. Shōjin lunch, an onsen, and the train home at dusk through the Eizan railway's illuminated momiji tunnel.",
    recommendations: [
      "Leave Demachiyanagi around 8:30: it's a Saturday, and Kibune fills up fast once the morning trains start arriving.",
      "Board the train home at Kurama, the end of the line, rather than at Kibuneguchi — the Saturday queues build up there at dusk.",
      "At Kifune-jinja, buy a mizu-ura fortune slip and lay it flat on the water — the text appears.",
      "Kurama Onsen is the perfect end to the hike; weekend prices apply on a Saturday.",
      "Eikandō's night illumination is an option tonight — only if your legs agree.",
    ],
  },
  12: {
    title: "Kyoto → Kanazawa",
    date: "Sunday, 22 November",
    location: "Kyoto → Kanazawa",
    summary:
      "Thunderbird + Hokuriku Shinkansen · Higashi Chaya · castle & Kenroku-en light-up. The Thunderbird up Lake Biwa and the shinkansen from Tsuruga put us in Kanazawa by noon: bags at the hotel, crab-season lunch at Omicho, the teahouses of Higashi Chaya and Kazuemachi before dark, then the castle park and Kenroku-en lit up for autumn.",
    recommendations: [
      "Photo at the Tsuzumi-mon drum gate outside Kanazawa Station's East Exit — look for the water clock fountain that spells out the time.",
      "Gold-leaf soft serve at Hakuichi in Higashi Chaya (~¥900): Kanazawa makes almost all of Japan's gold leaf.",
      "If you like sake, Higashiyama Shuraku in Higashi Chaya pours ~120 local labels.",
    ],
  },
  13: {
    title: "Kanazawa",
    date: "Monday, 23 November (public holiday)",
    location: "Kanazawa",
    summary:
      "Kenroku-en · gold leaf · samurai lanes. A full day in Kanazawa: Kenroku-en in the morning, the castle park and matcha over the Gyokusen-inmaru garden, a quick lunch at Omicho, a gold leaf workshop, then the samurai lanes of Nagamachi, a temple café in Teramachi and the geisha street of Nishi Chaya at dusk.",
    recommendations: [
      "Use the 10% coupon from the workshop if you want gold leaf souvenirs.",
      "Ishiura's torii are small but photogenic — go early, before the tour groups.",
      "Ask for kōbako-gani at the izakaya: the female snow crab is only in season from November to December.",
    ],
  },
  14: {
    title: "Shirakawa-go",
    date: "Tuesday, 24 November",
    location: "Shirakawa-go & Gokayama (bus tour from Kanazawa)",
    summary:
      "Shirakawa-go & Gokayama bus tour from Kanazawa. A guided day trip, with lunch included, to two UNESCO gassho villages: Ogimachi in Shirakawa-go — the postcard view from Shiroyama and the inside of Wada House — and the smaller, quieter Ainokura in Gokayama. Back in Kanazawa around 15:45.",
    recommendations: [
      "Go straight to the viewpoint shuttle when you arrive — the queue grows as more tour buses come in.",
      "In Ainokura, take the short path up to the viewpoint above the village.",
      "Pick up a gassho-shaped sweet as a souvenir — they travel well.",
    ],
  },
  15: {
    title: "Kanazawa → Gōra",
    date: "Wednesday, 25 November",
    location: "Kanazawa → Gōra, Hakone (in transit)",
    summary:
      "Travel day from the Sea of Japan to the Hakone hills: the Kagayaki shinkansen to Ōmiya, the Shōnan-Shinjuku Line in the Green Car down to Odawara, and bus J03 up to Gōra. Big luggage goes ahead to Tokyo, so it's day packs (and maybe one small suitcase). About 5 hours of transit, and the afternoon free in Gōra.",
    recommendations: [
      "Send the big luggage to Tokyo by takkyubin the day before, so the morning is just day packs (and maybe one small suitcase) and the 9:07 train.",
      "Buy the shinkansen ticket only as far as Ōmiya, with a reserved seat — it's a paper ticket, not Suica.",
      "At Ōmiya, check the Shōnan-Shinjuku train is bound for Odawara (小田原): some go to Zushi/Kamakura instead.",
      "Freepass already on EMot (each on our own iPhone) — no need to queue at the Odawara ticket office; go straight to the bus to Gōra and show the pass to the driver. It covers today's bus and tomorrow's loop. Bus J03 runs infrequently; the Hakone Tozan Railway to Gōra is the backup, also on the pass.",
    ],
  },
  16: {
    title: "Hakone Loop → Tokyo",
    date: "Thursday, 26 November",
    location: "Gōra → Lake Ashi → Tokyo",
    summary:
      "Gōra Park momiji, cable car and ropeway over Ōwakudani, pirate ship across Lake Ashi, Hakone Shrine, then the 17:46 Romancecar to Shinjuku and on to the hotel in Akasaka (Tokyo).",
    recommendations: [
      "Mount Fuji: clouds usually roll in after midday, so prioritise the view at Ōwakudani over the black-egg queue.",
      "Dress in layers: Ōwakudani is ~1,000 m up and cold and windy in late November, even if Gōra is mild.",
      "Carry cash: black eggs and several small stalls are cash only.",
      "Torii from the boat: approaching Moto-Hakone, the pirate ship passes the lake torii — stand on the port (left) deck, camera ready. Good backup if the photo queue at the shrine is too long.",
      "Built-in buffers: ~1 h covers ropeway and torii queues. In November the ropeway runs until 17:00 and the last ship leaves around 16:00, so even with delays the loop can be completed.",
      "If time allows, have matcha at Hakuun-dō tea house in Gōra Park.",
      "Comfortable shoes: stone steps at the shrine and uneven ground on the cedar avenue.",
      "Shinjuku at 19:26 is still busy. If it's too packed, a taxi from the west exit to the hotel takes ~20 min (≈ ¥3,000–3,500).",
    ],
  },
  17: {
    title: "Old Tokyo & Jewellumination",
    date: "Friday, 27 November",
    location: "Tokyo",
    summary:
      "Senso-ji before the crowds, Nakamise street snacks, the old-town lanes of Yanaka, Nezu Shrine's torii tunnel and autumn leaves at Rikugien, then a rest at the hotel and, optionally, an evening among millions of jewel-coloured lights at Yomiuriland.",
    recommendations: [
      "Start early: Senso-ji is calm before 9:00 and packed by 10:30.",
      "Nakamise and Yanaka Ginza shops open around 10:00–11:00, which is why we see the temple first and the shops after.",
      "On a clear day, Fujimizaka slope near Nishi-Nippori station is one of the few spots in central Tokyo with a view of Mt Fuji — a 5 min detour from Yanaka Ginza.",
      "Rikugien usually has a night autumn light-up from late November (in 2025: Nov 28 – Dec 9, 18:00–20:30, advance tickets required). If the 2026 dates include Sun Nov 29, it's an easy add-on that evening: Namboku Line direct from the hotel area.",
    ],
  },
  18: {
    title: "Harajuku, Shibuya & Shinjuku Nights",
    date: "Saturday, 28 November",
    location: "Tokyo",
    summary:
      "Meiji Jingu's forest at opening time, Harajuku and Omotesando, the golden ginkgo avenue, sunset from Shibuya Sky, a rest at the hotel, then cats and yakitori in Shinjuku.",
    recommendations: [
      "Saturday = crowds. Meiji Jingu early is calm; Takeshita Street and the ginkgo avenue will be busy by midday.",
      "Bring a warm layer for the open-air rooftop at sunset.",
      "At the cat café, the cats' dinner time (around 19:00) is the liveliest moment.",
      "Omoide Yokocho counters are tiny (often 6–10 seats). Two people usually find a spot after a short walk around.",
    ],
  },
  19: {
    title: "Shiba, Ginza & Akihabara",
    date: "Sunday, 29 November",
    location: "Tokyo",
    summary:
      "Zojoji with Tokyo Tower behind it, matcha in the middle of Hamarikyu's pond, then Sunday car-free streets in Ginza and Akihabara, ending under the golden lights of Marunouchi.",
    recommendations: [
      "A relaxed start: no need to set an alarm — Zojoji is best mid-morning with Tokyo Tower in the light.",
      "Bring a little cash for the matcha at Nakajima Tea House.",
      "Optional evening swap: if the Rikugien night autumn light-up is on (in 2025 it ran Nov 28 – Dec 9, 18:00–20:30, advance tickets required), you can go there instead of Marunouchi — Namboku Line from Komagome goes straight back to Tameike-sanno near the hotel.",
    ],
  },
  20: {
    title: "Tsukiji, Harry Potter & Hareruya",
    date: "Monday, 30 November",
    location: "Tokyo",
    summary:
      "A seafood breakfast at Tsukiji Outer Market, a few hours inside the real sets of the Harry Potter films, Magic cards at Hareruya, then a quiet last night in Tokyo to pack.",
    recommendations: [
      "Eat at the stall in Tsukiji — eating while walking is frowned upon.",
      "Leave room in your suitcase for Harry Potter and Hareruya shopping.",
      "Fun detail: Takadanobaba Station plays the Astro Boy theme as its departure melody.",
    ],
  },
  21: {
    title: "Narita-san & Flight Home",
    date: "Tuesday, 1 December",
    location: "Tokyo → Narita (in transit)",
    summary:
      "One last temple morning: Naritasan Shinsho-ji and its autumn park, grilled eel on Narita's old shopping street, then a 10-minute hop to the airport for the 16:55 flight home.",
    recommendations: [
      "Kawatoyo dine-in queues can reach 2–5 hours. The takeaway bento is the realistic option on a flight day.",
      "The temple involves a lot of stairs: wear comfortable shoes.",
      "Plan B (if you'd rather stay in Tokyo): Imperial Palace East Gardens (open Tue; Nov–Feb 9:00–16:00, last entry 15:30; closed Mondays and Fridays), a short walk from Tokyo Station. Leave the hotel with luggage ~11:15 and take the Narita Express from Tokyo Station around 12:00 (~1 h to the airport).",
    ],
  },
};

export const days = Array.from({ length: TRIP_LENGTH }, (_, i) => {
  const day = i + 1;
  return {
    day,
    title: `Day ${day}`,
    date: null,
    location: "TBD",
    summary: "Itinerary details coming soon.",
    recommendations: [],
    // Spanish text, where there is any, rides along in the same fields — see
    // src/lib/i18n.js. Nothing here changes for a day with no translation.
    ...withSpanish(overrides[day], DAYS_ES[day]),
  };
});

export function getDay(day) {
  return days.find((d) => d.day === day);
}
