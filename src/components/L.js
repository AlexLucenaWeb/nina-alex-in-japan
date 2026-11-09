import { isBilingual } from "@/lib/i18n";

// One piece of text in both languages. Both are rendered; globals.css hides
// whichever one doesn't match `data-lang` on <html>, so switching language is
// a CSS change with nothing to re-render — and nothing to hydrate wrongly.
//
// Pass `en` and `es` directly for interface text, or `v` with a data field
// that may or may not have a translation (a plain string renders as is).
// `as` sets the wrapper: the default span is for inline text, use a block
// element when the content itself has paragraphs in it.
export default function L({ en, es, v, as: Tag = "span" }) {
  if (v !== undefined) {
    if (!isBilingual(v)) return v ?? null;
    ({ en, es } = v);
  }

  if (es === undefined || es === null) return en ?? null;

  return (
    <>
      <Tag lang="en" data-lang-only="en">
        {en}
      </Tag>
      <Tag lang="es" data-lang-only="es">
        {es}
      </Tag>
    </>
  );
}
