"use client";

import { useEffect } from "react";

// Registers public/sw.js, which caches the whole itinerary for offline use.
export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    // Skipped in dev: a cached shell fights with hot reloading.
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    // A controller already in place means this is an update rather than a
    // first install, so a new worker claiming the page mid-session leaves it
    // running against caches it no longer owns — reload to catch up.
    const isUpdate = Boolean(navigator.serviceWorker.controller);

    const onControllerChange = () => {
      if (isUpdate) window.location.reload();
    };

    navigator.serviceWorker.addEventListener(
      "controllerchange",
      onControllerChange,
    );

    navigator.serviceWorker
      .register("/sw.js", { scope: "/", updateViaCache: "none" })
      .catch(() => {
        // Offline support is a bonus; a failed registration must not break the site.
      });

    return () => {
      navigator.serviceWorker.removeEventListener(
        "controllerchange",
        onControllerChange,
      );
    };
  }, []);

  return null;
}
