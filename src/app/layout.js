import BackToTop from "@/components/BackToTop";
import ServiceWorkerRegistrar from "@/components/ServiceWorkerRegistrar";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import { LANG_STORAGE_KEY } from "@/lib/i18n";
import { shipporiMincho, zenKakuGothicNew } from "@/lib/fonts";
import "./globals.css";

export const metadata = {
  title: "Nina & Alex in Japan",
  description: "A 21-day trip through Japan, day by day.",
  appleWebApp: {
    title: "Japan Trip",
    statusBarStyle: "black",
  },
};

export const viewport = {
  // Matches --paper so the browser and PWA chrome blend into the page
  // instead of sitting on it as a coloured band.
  themeColor: "#121212",
};

// Runs while the HTML is still being parsed, before anything is painted: if
// Spanish was chosen on this phone, switch <html> over so the page never shows
// a flash of English. English is the default, so it only ever adds.
const LANG_SCRIPT = `(function(){try{if(localStorage.getItem(${JSON.stringify(
  LANG_STORAGE_KEY,
)})==="es"){var d=document.documentElement;d.setAttribute("data-lang","es");d.lang="es"}}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the script above may have changed `lang` and
    // added `data-lang` before React hydrates. Only this element's attributes.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${shipporiMincho.variable} ${zenKakuGothicNew.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_SCRIPT }} />
      </head>
      {/* Browser extensions (ColorZilla, Grammarly…) add their own attributes
          to <body> before React hydrates, which React reports as a mismatch.
          This silences that for this element's attributes only — it does not
          cascade to children. */}
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-paper font-sans text-ink"
      >
        {/* Just the nav: "All days" already links home. Sticky, so the day
            arrows are always at hand on a long day page. The extra top padding
            on phones keeps the links clear of the blur iOS Safari lays over
            the top edge of the page, where taps were landing badly. */}
        <header className="sticky top-0 z-40 border-b border-line bg-paper">
          <div className="mx-auto flex w-full max-w-5xl px-6 pb-3 pt-8 sm:pt-4">
            <SiteHeaderNav />
          </div>
        </header>
        <main className="flex flex-1 flex-col">{children}</main>
        <BackToTop />
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
