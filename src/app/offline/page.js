import Link from "next/link";

export const metadata = {
  title: "Offline · Nina & Alex in Japan",
};

// Served by the service worker when a page was never cached and there is no
// network. Everything linked from here is precached, so it always works.
export default function OfflinePage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-20">
      <p className="text-sm font-medium uppercase tracking-widest text-momiji">
        No connection
      </p>
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        This page isn&apos;t available offline
      </h1>
      <p className="text-lg text-ink/70">
        The itinerary is saved on your device, so the day pages and the
        preparation guide still open. Photos and the maps need a connection.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-full bg-momiji px-4 py-2 text-sm font-semibold text-on-momiji transition-transform active:scale-[0.98]"
        >
          All days
        </Link>
        <Link
          href="/preparation"
          className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-momiji"
        >
          Trip Preparation
        </Link>
      </div>
    </div>
  );
}
