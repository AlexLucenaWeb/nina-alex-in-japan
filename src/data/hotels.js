/**
 * Where we sleep, one entry per stay.
 *
 * `status` is "booked" or "pending" — pending means the dates are held in the
 * plan but the hotel itself is not chosen yet, so the card shows only the city,
 * the dates and the notes. Everything except `id`, `status` and `city` may be
 * null or missing entirely, and HotelCard hides whatever is absent. A date
 * nobody has picked yet renders as "TBD", and a field left as the string
 * "TODO" renders as an em dash rather than pretending the data is there.
 *
 * `photoFocusY` (0 = top, 1 = bottom) picks which band of a tall photo the
 * 16:10 crop keeps; leave it out for the centred crop scripts/photos.mjs does
 * by default.
 *
 * `websiteLabel` is what the link to `website` reads as — some of these point
 * at a booking listing rather than the hotel's own site, and the link should
 * say so. It falls back to "Official website".
 *
 * `linkedDays` are the day pages that lead here — the check-in day of each
 * stay, which is what puts the "Tonight: …" link on src/app/day/[day]/page.js.
 *
 * This site is public, so nothing private lives here: no confirmation numbers,
 * door codes or PINs. Those stay in email.
 */
export const HOTELS = [
  {
    id: "osaka-arashi-nipponbashi-1",
    status: "booked",
    city: "Osaka",
    name: "Hotel Arashi Nipponbashi 1",
    nameJp: "嵐 Arashi 日本橋1号店",
    addressEn: "5-13-18 Nipponbashi, Naniwa Ward, Osaka 556-0005",
    addressJp: "〒556-0005 大阪府大阪市浪速区日本橋5丁目13-18",
    phone: "+81 6-6585-9520",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hotel%20Arashi%20Nipponbashi%201&query_place_id=ChIJl5ZbK63nAGARf-XOOcAoHCw",
    website:
      "https://www.booking.com/hotel/jp/arashi-nihombashi1-no008.en-gb.html",
    websiteLabel: "Booking.com listing",
    nearestStation: "Ebisucho (Sakaisuji Line), ~2 min walk",
    checkIn: { date: "2026-11-12", time: "16:00–24:00" },
    checkOut: { date: "2026-11-17", time: "11:00" },
    nights: 5,
    linkedDays: [2],
    photo: "/photos/hotel-osaka-arashi-nipponbashi-1.webp",
    photoSource:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/886003964.jpg?k=64f8d9267f5a71371b242b62a4ff8fb1c94f7c1750e5c7813ce1c0f05818a751&o=",
    // Tall shot of the building: centred it would cut the entrance off, so
    // keep the lower band where the street-level frontage is.
    photoFocusY: 0.8,
    notes: [
      "Check-in closes at midnight — contact the hotel in advance if arriving later",
      "Kitchenette, balcony and in-room washing machine",
      "Free luggage storage",
    ],
  },
  {
    id: "kyoto-ms-gojo-odawara",
    status: "booked",
    city: "Kyoto",
    name: "M's Hotel Gojo Odawara",
    nameJp: "エムズホテル 五条ODAWARA",
    addressEn: "232 Odawaracho, Shimogyo Ward, Kyoto 600-8430",
    addressJp: "〒600-8430 京都府京都市下京区小田原町232番地",
    phone: "+81 75-320-4139",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=M's%20Hotel%20Gojo%20Odawara&query_place_id=ChIJEY3XPIEJAWAR290MEa6GIWo",
    website: "https://kyohotel.jp/en/hotel/mshotel-gojo-odawara-en/",
    websiteLabel: "Official website",
    nearestStation: "Gojo (Karasuma Line), ~5 min walk",
    checkIn: { date: "2026-11-17", time: "16:00" },
    checkOut: { date: "2026-11-22", time: "10:00" },
    nights: 5,
    linkedDays: [7],
    photo: "/photos/hotel-kyoto-ms-gojo-odawara.webp",
    photoSource:
      "https://kyohotel.jp/wp-content/uploads/2019/07/GOJO-ODAWARA1.jpg",
    notes: [
      "Self check-in — instructions arrive by email before arrival",
      "Free self-service luggage storage before check-in and after check-out (limited lock chains)",
      "Building entry uses a door code (see confirmation email)",
      "Paid washer-dryer on the ground floor; no restaurant on site",
      "Early check-out (10:00)",
    ],
  },
  {
    id: "kanazawa-four-points-flex",
    status: "booked",
    city: "Kanazawa",
    name: "Four Points Flex by Sheraton Kanazawa",
    nameJp: "フォーポイント フレックス by シェラトン 金沢",
    addressEn: "3-30 Oyamamachi, Kanazawa, Ishikawa 920-0918",
    addressJp: "〒920-0918 石川県金沢市尾山町3-30",
    phone: "+81 76-224-3489",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Four%20Points%20Flex%20by%20Sheraton%20Kanazawa&query_place_id=ChIJkzYfptsz-F8RB-Eu3PLDN-8",
    website:
      "https://www.marriott.com/en-us/hotels/kmqku-four-points-flex-kanazawa/overview/",
    websiteLabel: "Official website",
    nearestStation: "Kanazawa Station, ~15 min walk (bus stop 3 min)",
    checkIn: { date: "2026-11-22", time: "15:00" },
    checkOut: { date: "2026-11-25", time: "11:00" },
    nights: 3,
    linkedDays: [12],
    photo: "/photos/hotel-kanazawa-four-points-flex.webp",
    photoSource:
      "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TYqoCuUkPtg-YaAtuWTSHm_-VVhmIIp_smJBKHcOHoh-d5k6jBfc38d-zLH3-RihsjmB0UsoQV_acBTWeALpYhZw8OkeAzmnHP13azEKNQR8LyAPsC-U4OodtIU2SxdZyDeDECqlt_rBZ2=s1360-w1360-h1020-rw",
    notes: [
      "~5 min walk to Omicho Market and Kanazawa Castle Park",
      "Breakfast not included — buffet at on-site restaurant Craic, 7:00–10:30",
      "Coin laundry on site; housekeeping twice per week",
    ],
  },
  {
    id: "tokyo-tbd",
    status: "pending",
    city: "Tokyo",
    name: null,
    checkIn: { date: "2026-11-25", time: null },
    checkOut: { date: "2026-12-01", time: null },
    nights: 6,
    linkedDays: [15],
    photo: null,
    notes: [
      "One of these nights will be spent in Hakone",
      "Luggage stays in Tokyo during the Hakone trip",
    ],
  },
  {
    id: "hakone-ryokan-tbd",
    status: "pending",
    city: "Hakone",
    name: null,
    checkIn: { date: null, time: null },
    checkOut: { date: null, time: null },
    nights: 1,
    linkedDays: [],
    photo: null,
    notes: [
      "Ryokan with private in-room onsen",
      "Date within the Tokyo block, still to decide",
    ],
  },
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * "2026-11-12" -> "Thu 12 Nov". A field we still owe ("TODO") comes back as an
 * em dash, and a date nobody has picked yet (null) as "TBD".
 */
export function formatDate(value) {
  if (value === "TODO") return "—";
  if (!value) return "TBD";

  const match = ISO_DATE.exec(value);
  if (!match) return value;

  const [, year, month, day] = match;
  // Built and read back in UTC: a local-time Date would land on the previous
  // day for anyone west of Greenwich.
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

  return `${WEEKDAYS[date.getUTCDay()]} ${Number(day)} ${MONTHS[date.getUTCMonth()]}`;
}

/**
 * A field that may be missing or still owed: null when there is nothing to
 * show (the card leaves the block out), an em dash for a "TODO".
 */
export function formatField(value) {
  if (value === "TODO") return "—";
  return value ?? null;
}

function checkInKey(hotel) {
  const date = hotel.checkIn?.date;
  return ISO_DATE.test(date ?? "") ? date : null;
}

/**
 * Chronological by check-in. The stays with no date yet go last, in the order
 * they appear above — Array.sort is stable, so nothing shuffles between builds.
 */
export function hotelsInOrder() {
  return [...HOTELS].sort((a, b) => {
    const left = checkInKey(a);
    const right = checkInKey(b);

    if (left && right) return left.localeCompare(right);
    if (left) return -1;
    if (right) return 1;
    return 0;
  });
}

/** The hotel we check into on this day, if any — booked stays only. */
export function getHotelForDay(day) {
  return (
    HOTELS.find(
      (hotel) =>
        hotel.status === "booked" && (hotel.linkedDays ?? []).includes(day),
    ) ?? null
  );
}
