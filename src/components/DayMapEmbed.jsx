"use client";

import { useSyncExternalStore } from "react";

// Kept here rather than on the caller so the iframe and the offline card can
// never end up different heights — swapping between them must not shift the
// page. Override with the `height` prop if a day needs a different map area.
const DEFAULT_HEIGHT = "h-[60vh] min-h-[380px] md:h-[480px]";

function subscribeToConnection(onChange) {
  window.addEventListener("online", onChange);
  window.addEventListener("offline", onChange);

  return () => {
    window.removeEventListener("online", onChange);
    window.removeEventListener("offline", onChange);
  };
}

// Online is the assumed state on the server: `navigator` does not exist there,
// and rendering the offline card into the HTML would both flash the wrong
// state and mismatch on hydration for the visitors who do have a connection.
function useIsOnline() {
  return useSyncExternalStore(
    subscribeToConnection,
    () => navigator.onLine,
    () => true,
  );
}

// Inline on purpose: an icon font, an SVG file or a remote image would all be
// unavailable in exactly the situation this card exists for.
function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-momiji"
    >
      <path d="M12 21.5s7-5.9 7-11.5a7 7 0 1 0-14 0c0 5.6 7 11.5 7 11.5Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/**
 * A Google My Maps embed that degrades to a deliberate-looking card offline.
 *
 * The iframe is another origin, so the service worker cannot cache it: with no
 * connection the browser leaves a blank hole. This swaps that hole for a card
 * whose every asset ships inside the precached app bundle.
 */
export default function DayMapEmbed({ mid, height = DEFAULT_HEIGHT }) {
  const isOnline = useIsOnline();

  return (
    <div className={`w-full ${height}`}>
      {isOnline ? (
        <iframe
          src={`https://www.google.com/maps/d/embed?mid=${mid}`}
          title="Map of the day"
          loading="lazy"
          className="block h-full w-full border-0"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-paper px-6 text-center">
          <MapPinIcon />
          <p className="font-display text-lg font-semibold">
            The map needs a connection
          </p>
          <p className="max-w-sm text-sm leading-6 text-ink/60">
            Get back online to see the route. The itinerary below works offline.
          </p>
        </div>
      )}
    </div>
  );
}
