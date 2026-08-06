import Link from "next/link";

export const metadata = {
  title: "Offline · Nina & Alex in Japan",
};

// Served by the service worker when a page was never cached and there is no
// network. Everything linked from here is precached, so it always works.
export default function OfflinePage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-widest text-rose-500">
        No connection
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">
        This page isn&apos;t available offline
      </h1>
      <p className="text-lg text-zinc-500 dark:text-zinc-400">
        The itinerary is saved on your device, so the day pages and the
        preparation guide still open. Photos and the maps need a connection.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-600 transition-colors hover:border-rose-400 dark:border-rose-900/40 dark:bg-rose-950/20 dark:text-rose-300 dark:hover:border-rose-700"
        >
          All days
        </Link>
        <Link
          href="/preparation"
          className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
        >
          Trip Preparation
        </Link>
      </div>
    </div>
  );
}
