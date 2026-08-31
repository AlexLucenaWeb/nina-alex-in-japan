"use client";

import { useSyncExternalStore } from "react";

// State lives in localStorage rather than anywhere central: there is no
// backend, and this is a list you work through on your own phone. The
// consequence is that ticking something here does not tick it on the other
// person's phone.
const STORAGE_KEY = "preparation-checked-v1";

// Same pattern as DayMapEmbed: localStorage is an external store, so it is
// read through useSyncExternalStore rather than copied into state by an
// effect. The snapshot is the raw string on purpose — React compares
// snapshots by identity, and handing it a fresh Set every call would loop.
const listeners = new Set();

function subscribe(onChange) {
  listeners.add(onChange);
  // `storage` only fires in *other* tabs, so same-tab writes notify through
  // the listener set. Between the two, every tab stays in step.
  window.addEventListener("storage", onChange);

  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private mode or blocked site data: the list still works, it just
    // forgets on reload.
    return null;
  }
}

// Nothing is ticked in the prerendered HTML — there is no storage on the
// server to read. React swaps in the real snapshot right after hydration.
function getServerSnapshot() {
  return null;
}

function parse(raw) {
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(ids) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Nothing to do but let the tick apply for this session.
  }

  for (const listener of listeners) listener();
}

function itemText(item) {
  return typeof item === "string" ? item : item.text;
}

/**
 * Items are plain strings in the data file, so the id has to come from the
 * text itself — an array index would silently re-point every tick below an
 * inserted item. FNV-1a over the text: stable across builds, and short enough
 * to read in devtools. Editing an item's wording resets that one item, which
 * is the right outcome — the task changed.
 */
function itemId(category, text) {
  const source = `${category} ${text}`;
  let hash = 0x811c9dc5;

  for (let i = 0; i < source.length; i += 1) {
    hash ^= source.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }

  return (hash >>> 0).toString(36);
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
    >
      <path d="M4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}

export default function PreparationChecklist({ sections }) {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const checked = new Set(parse(raw));

  function toggle(id) {
    const next = new Set(parse(getSnapshot()));
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    write([...next]);
  }

  return (
    <div className="flex flex-col gap-8">
      {sections.map((section) => {
        const done = section.items.filter((item) =>
          checked.has(itemId(section.category, itemText(item))),
        ).length;

        return (
          <section key={section.category} className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {section.category}
              </h2>
              <span className="shrink-0 text-sm tabular-nums text-ink/50">
                {done}/{section.items.length}
              </span>
            </div>

            <ul className="flex flex-col gap-2">
              {section.items.map((item) => {
                const text = itemText(item);
                const link = typeof item === "string" ? null : item.link;
                const id = itemId(section.category, text);
                const isChecked = checked.has(id);

                return (
                  <li key={id}>
                    <label
                      className={`flex cursor-pointer gap-3 rounded-xl border-2 bg-card px-4 py-3 text-sm leading-6 transition-colors ${
                        isChecked
                          ? "border-pine/50 text-ink/40"
                          : "border-line text-ink/80"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggle(id)}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-momiji ${
                          isChecked
                            ? "border-pine bg-pine text-card"
                            : "border-line bg-paper text-transparent"
                        }`}
                      >
                        {isChecked && <CheckIcon />}
                      </span>
                      <span className={isChecked ? "line-through" : undefined}>
                        {text}
                        {link && (
                          <>
                            {" "}
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              // Inside a <label>, a click on the link would
                              // otherwise toggle the checkbox as well.
                              onClick={(event) => event.stopPropagation()}
                              className="font-medium text-momiji underline underline-offset-2"
                            >
                              {link.label}
                            </a>
                          </>
                        )}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
