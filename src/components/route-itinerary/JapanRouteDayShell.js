import { shipporiMincho, zenKakuGothicNew } from "@/lib/fonts";

export default function JapanRouteDayShell({ children }) {
  return (
    <div
      className={`${shipporiMincho.variable} ${zenKakuGothicNew.variable} bg-paper font-sans text-ink`}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-4 py-10 sm:px-6">
        {children}
      </div>
    </div>
  );
}
