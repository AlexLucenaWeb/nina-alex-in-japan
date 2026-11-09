"use client";

import { LANG_STORAGE_KEY } from "@/lib/i18n";

// The EN/ES switch. It never holds the language in React state: the label is
// two spans hidden by the same CSS rule as the content, so whatever the inline
// script in the layout set before paint is what the button shows too.
export default function LanguageToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.lang === "es" ? "en" : "es";

    if (next === "es") root.dataset.lang = "es";
    else delete root.dataset.lang;
    root.lang = next;

    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // Private mode or blocked storage: the switch still works for this page.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex cursor-pointer items-center rounded-full border border-line px-2.5 py-0.5 text-xs font-semibold tracking-wide text-ink/70 transition-colors hover:border-momiji hover:text-momiji"
    >
      <span data-lang-only="en">
        ES<span className="sr-only"> — ver en español</span>
      </span>
      <span data-lang-only="es">
        EN<span className="sr-only"> — view in English</span>
      </span>
    </button>
  );
}
