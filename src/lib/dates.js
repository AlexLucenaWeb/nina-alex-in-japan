import { formatDate } from "@/data/hotels";
import { bi } from "@/lib/i18n";

const WEEKDAYS_ES = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const MONTHS_ES = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
];

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * formatDate in both languages: "Thu 12 Nov" / "jue 12 nov". The English side
 * is exactly what formatDate gives, so the "TBD" and "—" cases carry over.
 */
export function formatDateBi(value) {
  const en = formatDate(value);

  if (value === "TODO") return en;
  if (!value) return bi(en, "Por decidir");

  const match = ISO_DATE.exec(value);
  if (!match) return en;

  const [, year, month, day] = match;
  // UTC for the same reason as formatDate: a local-time Date lands on the
  // previous day west of Greenwich.
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

  return bi(
    en,
    `${WEEKDAYS_ES[date.getUTCDay()]} ${Number(day)} ${MONTHS_ES[date.getUTCMonth()]}`,
  );
}
