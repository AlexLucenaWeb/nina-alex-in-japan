// Same gradient as StopPhoto's fallback so every missing photo looks alike.
export default function PlaceholderPhoto({ label, className = "" }) {
  return (
    <div
      className={`flex aspect-video w-full items-center justify-center rounded-xl bg-gradient-to-br from-pine/15 via-ochre/10 to-momiji/10 font-display text-sm tracking-wide text-ink/50 ${className}`}
    >
      {label ?? "Photo coming soon"}
    </div>
  );
}
