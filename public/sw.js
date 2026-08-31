/**
 * Offline support for the trip itinerary.
 *
 * Written by hand on purpose: next-pwa and Serwist both need webpack config,
 * and this project builds with Turbopack. Registered from
 * src/components/ServiceWorkerRegistrar.js.
 *
 * Bump VERSION on any change here — old caches are dropped on activate.
 */

const VERSION = "v4";
const DOCUMENTS = `documents-${VERSION}`;
const ASSETS = `assets-${VERSION}`;
const CURRENT_CACHES = [DOCUMENTS, ASSETS];

const OFFLINE_URL = "/offline";
const TRIP_LENGTH = 21; // keep in sync with TRIP_LENGTH in src/data/days.js

// Every page of the trip, cached up front: the itinerary has to be readable
// on a plane or with no signal in Japan, not just on pages visited beforehand.
const PRECACHE_URLS = [
  "/",
  "/preparation",
  OFFLINE_URL,
  "/manifest.webmanifest",
  ...Array.from({ length: TRIP_LENGTH }, (_, i) => `/day/${i + 1}`),
];

// The stop photos, listed by scripts/photos.mjs. Fetched at install time
// rather than hard-coded here so adding a day's photos needs no edit to this
// file — running `npm run photos` is enough.
const PHOTO_MANIFEST = "/photos/manifest.json";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      await Promise.all([
        precache(DOCUMENTS, PRECACHE_URLS),
        precache(ASSETS, await photoUrls()),
      ]);
      await self.skipWaiting();
    })(),
  );
});

async function photoUrls() {
  try {
    const response = await fetch(PHOTO_MANIFEST, { cache: "reload" });
    if (!response.ok) return [];
    return [PHOTO_MANIFEST, ...(await response.json())];
  } catch {
    // No manifest, no photos precached — the pages still work, and the images
    // get cached individually as the fetch handler sees them.
    return [];
  }
}

async function precache(cacheName, urls) {
  const cache = await caches.open(cacheName);
  // Not cache.addAll(): one failed URL would abort the whole precache.
  await Promise.allSettled(
    urls.map(async (url) => {
      const response = await fetch(url, { cache: "reload" });
      if (response.ok) {
        await cache.put(url, response);
      }
    }),
  );
}

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => !CURRENT_CACHES.includes(key))
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Cross-origin requests (Leaflet map tiles, Google My Maps embeds) are left
  // alone: offline they just fail and the UI falls back to its placeholders.
  // The stop photos are no longer among them — they live in /photos.
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      networkFirst(request, {
        cacheName: DOCUMENTS,
        // Key on the path so ?utm=… style variants still hit the precache.
        cacheKey: url.pathname,
        fallbackUrl: OFFLINE_URL,
      }),
    );
    return;
  }

  // Build output under /_next/static is content-hashed, so a given URL never
  // changes: serve it from cache and only touch the network on a miss.
  if (url.pathname.startsWith("/_next/static/") || isStaticAsset(request)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Everything else, including the RSC payloads next/link prefetches.
  event.respondWith(networkFirst(request, { cacheName: ASSETS }));
});

function isStaticAsset(request) {
  return ["image", "font", "style", "script", "manifest"].includes(
    request.destination,
  );
}

async function networkFirst(request, { cacheName, cacheKey, fallbackUrl }) {
  const cache = await caches.open(cacheName);

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(cacheKey ?? request, response.clone());
    }
    return response;
  } catch {
    const cached = await cache.match(cacheKey ?? request);
    if (cached) return cached;

    if (fallbackUrl) {
      const fallback = await cache.match(fallbackUrl);
      if (fallback) return fallback;
    }

    // Deliberate network error: on a failed RSC fetch next/link falls back to
    // a full page load, which the precached document above can serve.
    return Response.error();
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(ASSETS);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return Response.error();
  }
}
