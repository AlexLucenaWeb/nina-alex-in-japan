export default function PlaceholderPhoto({ label, className = "" }) {
  return (
    <div
      className={`flex aspect-video w-full items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-indigo-100 text-sm font-medium text-zinc-500 dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-400 ${className}`}
    >
      {label ?? "Photo coming soon"}
    </div>
  );
}
