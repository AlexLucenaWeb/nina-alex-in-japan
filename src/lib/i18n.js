/**
 * English / Spanish, without a second set of routes.
 *
 * The English data files stay the source of truth and stay plain strings.
 * Spanish lives next to them in src/data/es/, holding only the text fields,
 * and is merged in at render time: a field with a translation becomes
 * `{ [BILINGUAL]: true, en, es }`, one without stays the English string.
 *
 * Both languages then ship in the HTML (see <L>), and a `data-lang` attribute
 * on <html> decides which one shows — set before first paint by the inline
 * script in the root layout, so there is no flash of English and it all keeps
 * working offline from the precached pages.
 */

const BILINGUAL = "__bilingual";

export const LANG_STORAGE_KEY = "lang";

export function bi(en, es) {
  return es ? { [BILINGUAL]: true, en, es } : en;
}

export function isBilingual(value) {
  return Boolean(value) && typeof value === "object" && value[BILINGUAL] === true;
}

/** The English side of a field, for anything that needs a plain string. */
export function enText(value) {
  return isBilingual(value) ? value.en : value;
}

/**
 * Lays a Spanish overlay over English data of the same shape. Only strings
 * are translated; numbers, links and anything the overlay doesn't mention
 * pass through untouched, so a missing translation falls back to English.
 */
export function withSpanish(en, es) {
  if (es === undefined || es === null) return en;

  if (typeof en === "string") {
    return typeof es === "string" ? bi(en, es) : en;
  }

  if (Array.isArray(en)) {
    return en.map((item, index) =>
      withSpanish(item, Array.isArray(es) ? es[index] : undefined),
    );
  }

  if (en && typeof en === "object") {
    const merged = { ...en };
    for (const key of Object.keys(es)) {
      if (key in en) merged[key] = withSpanish(en[key], es[key]);
    }
    return merged;
  }

  return en;
}

/**
 * Same as withSpanish for a list of stops, matched by stop number rather than
 * by position — so reordering or inserting a stop can't shift a translation
 * onto the wrong card.
 */
export function withSpanishByStop(stops, overlay) {
  if (!overlay) return stops;
  return stops.map((stop) => withSpanish(stop, overlay[stop.n]));
}
