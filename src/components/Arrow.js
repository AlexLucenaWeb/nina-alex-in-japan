// A drawn arrow instead of the "→" glyph, which Zen Kaku Gothic renders long
// and hairline-thin next to the label. Sized in em so it tracks the text it
// sits beside, and stroked in currentColor so it inherits hover states.
export default function Arrow({ direction = "right", className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-[1.05em] w-[1.05em] ${
        direction === "left" ? "rotate-180" : ""
      } ${className}`}
    >
      <path d="M2.5 8h10" />
      <path d="M8.75 4.25 12.5 8l-3.75 3.75" />
    </svg>
  );
}
