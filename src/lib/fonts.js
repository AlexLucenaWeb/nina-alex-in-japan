import { Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";

export const shipporiMincho = Shippori_Mincho({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
  display: "swap",
});

export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku-gothic-new",
  display: "swap",
});
