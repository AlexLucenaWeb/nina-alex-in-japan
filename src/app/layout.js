import Link from "next/link";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import { shipporiMincho, zenKakuGothicNew } from "@/lib/fonts";
import "./globals.css";

export const metadata = {
  title: "Nina & Alex in Japan",
  description: "A 21-day trip through Japan, day by day.",
  appleWebApp: {
    title: "Japan Trip",
    statusBarStyle: "default",
  },
};

export const viewport = {
  // Matches --paper in each theme so the browser and PWA chrome blend into
  // the page instead of sitting on it as a coloured band.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7e1d4" },
    { media: "(prefers-color-scheme: dark)", color: "#14110d" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${shipporiMincho.variable} ${zenKakuGothicNew.variable} h-full antialiased`}
    >
      {/* Browser extensions (ColorZilla, Grammarly…) add their own attributes
          to <body> before React hydrates, which React reports as a mismatch.
          This silences that for this element's attributes only — it does not
          cascade to children. */}
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-paper font-sans text-ink"
      >
        <header className="border-b border-line bg-paper">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="font-display text-sm font-semibold tracking-tight"
            >
              Nina &amp; Alex in Japan
            </Link>
            <SiteHeaderNav />
          </div>
        </header>
        <main className="flex flex-1 flex-col">{children}</main>
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
