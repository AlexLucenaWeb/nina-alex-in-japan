import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nina & Alex in Japan",
  description: "A 21-day trip through Japan, day by day.",
  appleWebApp: {
    title: "Japan Trip",
    statusBarStyle: "default",
  },
};

export const viewport = {
  themeColor: "#A8321F",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-tight">
              Nina &amp; Alex in Japan
            </Link>
            <SiteHeaderNav />
          </div>
        </header>
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
